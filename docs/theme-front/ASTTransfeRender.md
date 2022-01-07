---
title: AST语法树转render函数
date: 2020-12-6
tags:
 - 前端
 - Vue源码解析
categories:
 -  2021
---

# [Vue源码解析：AST语法树转render函数](https://segmentfault.com/a/1190000017544298)



> 通过对 Vue2.0 源码阅读，想写一写自己的理解，能力有限故从[尤大佬2016.4.11第一次提交](https://link.segmentfault.com/?enc=2KVAwhj0A6oNt5uUwkUjQw%3D%3D.PxDpfmOEeyAWO12fsMv1N6Z0yjAoUix26Pab60v6a4U73hGPxEHVZOLAPNPY%2BUROGdLWQyGBy8K6ZA46KxoLJAWtBWUIkhjmJ0ZdZ0QZe48%3D)开始读，准备陆续写：
>
> - [模版字符串转AST语法树](https://segmentfault.com/a/1190000017374492)
> - [AST语法树转render函数](https://segmentfault.com/a/1190000017544298)
> - [Vue双向绑定原理](https://segmentfault.com/a/1190000017969385)
> - [Vue虚拟dom比较原理](https://segmentfault.com/a/1190000018211084)
>
> 其中包含自己的理解和源码的分析，尽量通俗易懂！由于是2.0的最早提交，所以和最新版本有很多差异、bug，后续将陆续补充，敬请谅解！[包含中文注释的Vue源码](https://link.segmentfault.com/?enc=x0fMVFoOMpKYm9qJz8%2BXMw%3D%3D.0F5On8HaeQn43C%2B%2BkqBOlrpDNZaL%2B15pRGzc4eNM9Lm%2F0X8WfizPxVAGpp%2FeXQOe)已上传...

## 开始

今天要说的代码全在[codegen文件夹](https://link.segmentfault.com/?enc=l8Qik5ye41j7bkgG8xgEIg%3D%3D.ufzPNi7SE2rcx6maj9%2FSFkIRGk6FQk3ExhU7FIOPY8TKdt4Sue1pJ3oybWooN%2FuG2gAvnrBFJuzJtWU2%2Fm8SBNJzjC8ree8GCYlWh4dbFNHOdSd8fXg3vNAfO515VAfODK7KruQ%2BAfP1qgLVqApFvg%3D%3D)中，在说实现原理前，还是先看个简单的例子！

```handlebars
<div class="container">
    <span>{{msg}}</span>
    <button :class="{active: isActive}"  @click="handle">change msg</button>
</div>
```

上述类名为`container`的元素节点包含5个子节点（其中3个是换行文本节点），转化成的AST语法树：
![clipboard.png](https://segmentfault.com/img/bVblGOy?w=586&h=209)

AST语法树转的render函数长这样：

```dart
function _render() {
  with (this) { 
    return __h__(
      'div', 
      {staticClass: "container"}, 
      [
        " ",
        __h__('span', {}, [String((msg))]),
        " ",
        __h__('button', {class: {active: isActive},on:{"click":handle}}, ["change msg"]),
        " "
      ]
    )
  };
}
```

可以的看出，render函数做的事情很简单，就是把语法树每个节点的指令进行解析。

看下render函数，它是由[with函数](https://link.segmentfault.com/?enc=gYcc0Y9cLhgXulTmy7B7aQ%3D%3D.WwpBPUU%2Fi0aLpEDfc37GKcdUN%2FVpGHHXC1LTm70GyMn0y9iJYKQUJxh0vWqa%2Bv6Y5ldycn%2FEPMNjr65LaajZJg%3D%3D)包裹（为了改变作用域），要用的时候直接`_render.call(vm)`；另外就是`__h__`函数，这个后面会说到，这个函数用于元素节点的解析，接收3个参数：元素节点标签名，节点数据，子节点数据。这个函数最后返回的就是虚拟dom了，不过今天先不深究，先说如何生成这样的render函数，主要是`v-if`、`v-for`、`v-bind`、`v-on`等指令的解析。

## 源码解析

这边解析的是从AST树转换成render函数部分的源码，由于vue2.0第一次提交的源码这部分不全，故做了部分更新，代码全在[codegen文件夹](https://link.segmentfault.com/?enc=Vy7uMv%2FcunqE1IkCe5LCxg%3D%3D.4cMOIQJ7pxIVJ4bcyVxdB%2BDHahMaqLyxv4k6Bg7cNv9xwHgv1nxG%2FJlHubNxRybxGkXLyTchDSE2dhO9WDC9oWlVYy%2BW7fZA7b%2B7pHNlFWItaWBMQd%2BayokR0%2FP%2Fk8GuZL2iyZoIfKBwPsViMnsIBw%3D%3D)中。

## 入口

整个AST语法树转render函数的起点是`index.js`文件中的`generate()`函数：

```javascript
export function generate (ast) {
  const code = genElement(ast);
  return new Function (`with (this) { return ${code}}`);
}
```

明显看到，`generate()`函数传入参数为AST语法树，内部调用`genElement()`函数开始解析根节点（容器节点）。`genElement()`函数用于解析元素节点，它接收两个参数：`AST对象`和`节点标识`（v-for的key），最后返回形如`__h__('div', {}, [])`的字符串，看一下内部逻辑：

```javascript
function genElement (el, key) {
  let exp;
  if (exp = getAndRemoveAttr(el, 'v-for')) { // 解析v-for指令
    return genFor(el, exp);
  } else if (exp = getAndRemoveAttr(el, 'v-if')) { // 解析v-if指令
    return genIf(el, exp, key);
  } else if (el.tag === 'template') { // 解析子组件
    return genChildren(el);
  } else {
    return `__h__('${el.tag}', ${genData(el, key) }, ${genChildren(el)})`;
  }
}
```

`genElement()`函数内部依次调用`getAndRemoveAttr()`函数判断了`v-for`、`v-if`标签是否存在，若存在则删除并返回表达式；随后判断节点名为`template`就直接进入子节点解析；以上条件都不符合就返回`__h__`函数字符串，该字符串将使用到属性解析和子节点解析。

```javascript
function getAndRemoveAttr (el, attr) {
  let val;
  // 如果属性存在，则从AST对象的attrs和attrsMap移除
  if (val = el.attrsMap[attr]) {
    el.attrsMap[attr] = null;
    for (let i = 0, l = el.attrs.length; i < l; i++) {
      if (el.attrs[i].name === attr) {
        el.attrs.splice(i, 1);
        break;
      }
    }
  }
  return val;
}
```

## v-for 和 v-if 指令解析

让我们先看看`v-for`的编译：

```javascript
function genFor (el, exp) {
  const inMatch = exp.match(/([a-zA-Z_][\w]*)\s+(?:in|of)\s+(.*)/);
  if (!inMatch) {
    throw new Error('Invalid v-for expression: '+ exp);
  }
  const alias = inMatch[1].trim();
  exp = inMatch[2].trim();
  let key = getAndRemoveAttr(el, 'track-by'); // 后面用 :key 代替了 track-by

  if (!key) {
    key ='undefined';
  } else if (key !== '$index') {
    key = alias + '["' + key + '"]';
  }

  return `(${exp}) && (${exp}).map(function (${alias}, $index) {return ${genElement(el, key)}})`;
}
```

该函数先进行正则匹配，如`"item in items"`，将解析出别名（`item`）和表达式（`items`），再去看看当前节点是否含`:key`，如果有那就作为`genElement()`函数的参数解析子节点。举个🌰，对于模版`<div v-for="item in items" track-by="id"></div>`，将解析成：

```vim
`(items) && (items).map(function (item, $index) {return ${genElement(el, item["id"])}})`
```

你会发现`v-for`解析完，通过mao循环对该节点继续解析，但此时该节点已经没有的`v-for`和`:key`属性了。继续看看`v-if`的解析：

```javascript
function genIf (el, exp, key) {
  return `(${exp}) ? ${genElement(el, key)} : null`;
}
```

`v-if`的解析就很粗暴，直接通过条件运算符去决定继续解析该节点，还是直接返回 `null`。

## 属性解析

这里说的属性解析，包括了`v-bind`指令、`v-on`指令和`v-model`指令的解析，以及普通属性的解析。这些解析都在`genData()`函数中：

```javascript
function genData (el, key) {
  if (!el.attrs.length && !key) {
    return '{}';
  }
  let data = '{';
  let attrs = `attrs:{`;
  let props = `props:{`;
  let events = {};
  let hasAttrs = false;
  let hasProps = false;
  let hasEvents = false;

  ...

  if (hasAttrs) {
    data += attrs.slice(0, -1) + '},';
  }
  if (hasProps) {
    data += props.slice(0, -1) + '},';
  }
  if (hasEvents) {
    data += genEvents(events); // 事件解析
  }
  return data.replace(/,$/, '') + '}';
}
```

看一下`genData()`函数整体，先是判断有没有属性，然后定义了多个变量：`data`是输出结果；`attrs`用于存储节点属性；`props`用于存储节点某些特殊属性；`event`用于存储事件；`hasxxx`是当前节点是否含`xxx`的标识。随后会进行属性的遍历计算，最后通过对`hasxxx`的判断来对`data`进行拼接输出。重点是中间属性的遍历、各种指令/属性的处理，先看看特殊的`key`和`class`：

```javascript
if (key) {
  data += `key:${key},`;
}

const classBinding = getAndRemoveAttr(el, ':class') || getAndRemoveAttr(el, 'v-bind:class');
if (classBinding) {
  data += `class: ${classBinding},`;
}
const staticClass = getAndRemoveAttr(el, 'class');
if (staticClass) {
  data += `staticClass: "${staticClass}",`;
}
```

这边也是调用`getAndRemoveAttr()`获取class属性，并以动态和静态进行存储，比较简单。再来看看其他属性的处理：

```javascript
for (let i = 0, l = el.attrs.length; i < l; i++) {
  let attr = el.attrs[i];
  let name = attr.name;
  let value = attr.value;

  if (/^v-|^@|^:/.test(name)) { 
    const modifiers = parseModifiers(name);  // 事件修饰符（.stop/.prevent/.self）
    name = removeModifiers(name);

    if (/^:|^v-bind:/.test(name)) {  // v-bind
      name = name.replace(/^:|^v-bind:/, '');
      if (name === 'style') {
        data += `style: ${value},`;
      } else if (/^(value|selected|checked|muted)$/.test(name)) {
        hasProps = true;
        props += `"${name}": (${value}),`;
      } else {
        hasAttrs = true;
        attrs += `"${name}": (${value}),`;
      }
    } else if (/^@|^v-on:/.test(name)) { // v-on
      hasEvents = true;
      name = name.replace(/^@|^v-on:/, '');
      addHandler(events, name, value, modifiers);
    } else if (name === 'v-model') { // v-model
      hasProps = hasEvents = true;
      props += genModel(el, events, value) + ',';
    } 
  } else { 
    hasAttrs = true;
    attrs += `"${name}": (${JSON.stringify(attr.value)}),`;
  }
}
```

通过`for`循环对节点属性进行遍历，先用`/^v-|^@|^:/`正则判断当前属性是否为指令，若不是就直接添加到`attrs`中，若是就需要继续进行解析了。进入`if`后首先来到了[事件修饰符](https://link.segmentfault.com/?enc=oYWcxnpwEcGuO3iFyu4g3w%3D%3D.y%2FPwfQAvw1KwbIdg9AwHGp7dAva4knfs5oLIgTqAYP0rqU0heqfoYkpk3CmCMsYbTCWXE9LloRF2oksM9wujb3xxCK7u3Bj4UWTvBQLFyQcS9dcPxJMW6ahhU77KFjMj)的处理，主要用到了`parseModifiers()`、`removeModifiers()`两个函数，主要就是拿到事件修饰符并删除，如`v-on:click.prevent.self`，将返回`['prevent', 'self']`，简单看一下：

```javascript
function parseModifiers (name) {
  const match = name.match(/\.[^\.]+/g);
  if (match) {
    return match.map(m => m.slice(1));
  }
}

function removeModifiers (name) {
  return name.replace(/\.[^\.]+/g, '');
}
```

然后进入`v-bind`的处理，依次处理了`:style`、特殊属性、其他属性...这边特殊属性用正则`/^(value|selected|checked|muted)$/`去匹配，之所以特殊我的理解是：含有该属性的元素会在页面加载时给自身默认状态，如想默认选择复选框，给它加上`checked="checked"`就行了，但是后续不能用`setAttribute()`修改，而是通过`checkboxObject.checked=true|false`更改状态。

`v-bind`解析完了，进入`v-on`的解析，主要是用到了`addHandler()`函数，这部分在`event.js`中。

```javascript
function addHandler (events, name, value, modifiers) {
    const captureIndex = modifiers && modifiers.indexOf('capture');
    if (captureIndex > -1) {
        modifiers.splice(captureIndex, 1);
        name = '!' + name;
    }
    const newHandler = { value, modifiers };
    const handlers = events[name];
    if (isArray(handlers)) {
        handlers.push(newHandler);
    } else if (handlers) {
        events[name] = [handlers, newHandler];
    } else {
        events[name] = newHandler;
    }
}
```

该函数先对`capture`事件修饰符（事件捕获模式）进行了判断，若有就给`name`前加个`!`标识；然后就去`events`里面找是否已经有`name`事件了，找到一种情况追加进去，所以`events`可能长这样：`{click: change, mouseleave: [fn1, fn2]}`。

最后来说说`v-model`指令，实现原理就是`v-bind`和`v-on`的结合，例如你想对输入框进行双向绑定，你也可以写成

```xml
<input :value="val" @input="fn">

{
  data: {
     val: ''
  },
  methods: {
    fn (e) {
      this.val = e.target.value;
    }
  }
}
```

所以对双向绑定的处理，就是对不同的元素节点采用不同的事件绑定而已，如对于select标签用onchange监听，对文本输入框用oninput监听...这部分的代码全在`model.js`文件中，看一下`genModel()`函数吧：

```javascript
function genModel (el, events, value) {
  if (el.tag === 'select') {
    if (el.attrsMap.multiple != null) { // 同时选择多个选项
      return genMultiSelect(events, value, el)
    } else {
      return genSelect(events, value)
    }
  } else {
    switch (el.attrsMap.type) {
      case 'checkbox':
        return genCheckboxModel(events, value)
      case 'radio':
        return genRadioModel(events, value, el)
      default:
        return genDefaultModel(events, value)
    }
  }
}
```

依次找了select标签和input标签，这边还考虑到了[下拉标签的多选](https://link.segmentfault.com/?enc=fygjP4vSlg1Qz4HjDympjw%3D%3D.yF2V%2FUpZsRh4wsChGJc5xJCxiioGg%2BrFNfXwxatxh2eis0c9PKdTnkCVtjO3DL80fNRYm76EG0HWcYl45BKX3g%3D%3D)情况，然后找对应函数去解析，这边就拿文本框的处理函数`genDefaultModel()`来举例：

```javascript
function genDefaultModel (events, value) {
  addHandler(events, 'input', `${value}=$event.target.value`);
  return `value:(${value})`;
}
```

该函数先调用之前提到的`addHandler()`函数添加时间，再返回`value`属性追加到props中。其他下拉框、单选框等的处理函数也是类似...

最后还有对事件的处理，我们前面只是把事件都存储到`events`对象中，需要处理后添加到`data`返回值中，主要用到的函数是`genEvents()`：

```javascript
const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
const modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: 'if($event.target !== $event.currentTarget)return;'
}

function genEvents (events) {
    let res = 'on:{';
    for (let name in events) {
        res += `"${name}":${genHandler(events[name])},`;
    }
    return res.slice(0, -1) + '}';
}

function genHandler (handler) {
  if (!handler) {
    return `function(){}`;
  } else if (isArray(handler)) {
    // handler为数组则循环调用
    return `[${handler.map(genHandler).join(',')}]`;
  } else if (!handler.modifiers || !handler.modifiers.length) {
    
    return simplePathRE.test(handler.value)
      ? handler.value
      : `function($event){${handler.value}}`;
  } else {
    let code = 'function($event){';
    for (let i = 0; i < handler.modifiers.length; i++) {
      let modifier = handler.modifiers[i];
      code += modifierCode[modifier];
    }
    let handlerCode = simplePathRE.test(handler.value)
      ? handler.value + '()'
      : handler.value;
    return code + handlerCode + '}';
  }
}
```

`simplePathRE`正则用于看属性值是否是简单函数名，`fn`是简单函数名而`fn('x')`不是；`modifierCode`对象用于存储事件修饰符对应的js代码；`genEvents()`函数对`events`对象进行遍历，调用`genHandler()`函数逐个解析；`genHandler()`函数内部是对不同的参数进行不同的处理，做的比较好的是：

- 对是否是简单函数的处理，例如`@click="fn"`会返回`click: fn`，`@click="fn('11')"`会返回`click: function($event){fn('11')}`，这将大大便利了后续dom事件的绑定；
- 对是否含事件修饰符的处理，例如`@click.stop="fn"`，将返回`click: function($event){$event.stopPropagation();fn()}`。

到这里，所有属性都解析完毕了！返回的结果形如`{key: ...,class: ...,staticClass: ...,attrs: {...},props: {...},on: {...}}`。

## 子节点解析

子节点的解析主要是用到了`genChildren()`函数：

```javascript
function genChildren (el) {
  if (!el.children.length) {
    return 'undefined';
  }
  return '[' + el.children.map(node => {
    if (node.tag) {
      return genElement(node);
    } else {
      return genText(node);
    }
  }).join(',') + ']';
}
```

通过`map`方法对子节点数组进行循环，依次判断节点标签是否存在，再分别解析元素节点和文本节点，最后将结果拼接成数组形式的字符串。元素节点的解析函数`genElement()`上面说过了，接下来说说文本节点的解析函数`genText()`：

```javascript
function genText (text) {
  if (text === ' ') {
    return '" "';
  } else {
    const exp = parseText(text);
    if (exp) {
      return 'String(' + exp + ')';
    } else {
      return JSON.stringify(text);
    }
  }
}
```

判断一波是否有文本，有就继续调用`parseText()`函数：

```javascript
const tagRE = /\{\{((?:.|\\n)+?)\}\}/g;
export function parseText (text) {
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, value;
  while (match = tagRE.exec(text)) { // 循环解析 {{}}
    index = match.index;
    // 把 '{{' 之前的文本推入
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // 把{{}}中间数据取出推入
    value = match[1];
    tokens.push('(' + match[1].trim() + ')');
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+');
}
```

该函数通过循环调用`tagRE`正则匹配文本，依次匹配出 `{{}}`，并推入数组，最后将数组转为字符串。例如文本`hi,{{name}}!`，将返回`'hi,'+(name)+'!'`。

## 总结
