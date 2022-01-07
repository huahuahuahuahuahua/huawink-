---
title: Composition API
date: 2020-12-15
tags:
 - 前端
 - vue
categories:
 -  2021
---



# Composition API

## 前言

大家应该知道如果用 `Vue3` 的 `Composition API` 定义一个响应式变量通常有两种形式，一种是用`ref`，另一种是`reactive`：

```html
<script setup>
import { ref, reactive } from 'vue'

const isLoading = ref(true)

const user = reactive({
  name: '令狐冲',
  age: 22,
  gender: '男'
})
</script>
复制代码
```

一般来说定义一个基本数据类型会用`ref`，而引用类型则会采用`reactive`，那么问题来了，`ref`虽然定义了一个基本数据类型，但实际上它却是一个引用类型，取值和赋值时必须要带上`.value`属性：

```html
<script setup>
import { ref } from 'vue'

const isLoading = ref(true)

if (isLoading.value) {
  isLoading.value = false
}
</script>
复制代码
```

这就有点不太符合直觉了，很有可能一不小心就被写成了这样：

```html
<script setup>
import { ref } from 'vue'

let isLoading = ref(true)

if (isLoading) {
  isLoading = false
}
</script>
复制代码
```

这要是有`TS`和`ESLint`的加持还好，要是没有的话可就不好找错误了，也不会产生什么有用的报错信息，而且每次都要带上这个`.value`实在是不好看，而且写起来也麻烦呀！

`reactive`的弊端是不能解构，解构就会失去响应性：

```html
<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: '令狐冲',
  age: 22,
  gender: '男'
})

// 这种写法通常达不到预期的效果
let { age } = user
age = 18
</script>
复制代码
```

可能有人会说，不是有`toRefs`吗？用了`toRefs`，就又会回到那个`.value`的问题上了：

```html
<script setup>
import { reactive, toRefs } from 'vue'

const user = reactive({
  name: '令狐冲',
  age: 22,
  gender: '男'
})

let { age } = toRefs(user)
age.value = 18
</script>
复制代码
```

> 其实我个人觉得还好啦，因为已经写习惯了，再加上一直用TS有提示和自动补全，所以感觉没什么问题。

但知乎上类似于[《为什么 vue3 删不掉 ref() 这样冗余的函数，但 svelte 可以？》](https://link.juejin.cn?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F492260571%2Fanswer%2F2169614031)这种问题深深的刺痛了大佬的内心，大佬自己的强迫症也犯了，毕竟他当年创造`Vue`的最成功要素之一就是`方便`。而如今这种冗余的写法却与`方便`毫不搭边儿，所以尤大无论如何也必须要解决这个问题，不能让人背后嚼耳根子说`Vue`写起来还没`Svelte`方便是不是？于是乎大佬先后创建了三次不同的语法糖，它们分别是：

- [《[译\]尤雨溪: Ref语法糖提案》](https://juejin.cn/post/6894606141087875080)
- [《Vue第二波ref语法提案来袭 这次会进入到标准吗？》](https://juejin.cn/post/6997186627781001229)
- [本文 (第二波语法糖的修改版)](#)

我们先来简单的看一下，这三次语法糖的写法：

## 第一波语法糖

第一波主要是模仿了`Svelte`的写法，我们先来看看`Svelte`的中文官网给出来的一段例子：

```html
<script>
export let title;

// 这将在“title”的prop属性更改时更新“document.title”
$: document.title = title;

$: {
  console.log(`multiple statements can be combined`);
  console.log(`the current title is ${title}`);
}
</script>
复制代码
```

这个`$:`是一种叫做`label`的语法，这种语法并不是`Svelte`自创的语法，而是一种长期在被废弃的边缘上疯狂试探的合法语法，只不过这种语法原本并不是这么用的，人家是用在嵌套循环上的：

```js
let num = 0

outermost:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue outermost
        } else {
            console.log(i, j, 88)
        }
        num++
    }
}

console.log(num) //95
复制代码
```

看不懂没关系啊，也没必要去弄懂这种语法，因为它不够直观，用处也不是很大，所以几乎没什么人用它！我在编辑器写这段代码的时候 `ESLint` 都直报错：

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/545d32f683cd438f86a5c4c1e0bf9369~tplv-k3u1fbpfcp-watermark.awebp?)

> 翻译：`Label`语法源于`GOTO`语句，使用它将会令代码变得难以理解、难以维护。`—ESLint`

不过既然没什么人在用，同时它还是`JS`的合法语法，那用它来告诉编译器这里是声明了一个`ref`变量岂不是很完美？于是乎尤大也搞了个和`Svelte`类似的语法：

```html
<script setup>
ref: isLoading = true

if (isLoading) {
  isLoading = false
}
</script>
复制代码
```

那么大家为何会如此反对呢？就是因为`label`语法压根儿就不是这么用的，人家原本是为了和`break`、`continue`配合使用的，虽然在别的地方用也不算是语法错误，但你这么做明显是修改了`JS`原本的语意！虽然尤大表示很不服啊：为什么`Svelte`用这玩意你们都没说啥，我一用这玩意你们就开喷？！

> 个人感觉是因为`Svelte`从一开始就说自己是一个编译器，没有沉重的历史包袱，而`Vue`却恰恰相反。而且`Svelte`本身也不是什么主流框架，属于给那帮爱折腾的人玩的。但`Vue`不一样，已经有多少人要靠着`Vue`吃饭呢，并不是所有人都那么爱折腾的。

于是在万般无奈之下，尤大只好放弃了这个提案，但这件事在尤大心里始终还是挥之不去、如鲠在喉，于是乎他吸取了第一波语法糖的教学，卷头重来又起草了一份新提案：

## 第二波语法糖

```html
<script setup>
let loading = $ref(true)

if (loading) {
  loading = false
}
</script>
复制代码
```

可以看到我们并没有引入`$ref`这个变量，这个变量是从哪来的的呢？是只要在`<script>`标签里写了`setup`这个属性就会自动注入的一个全局变量（*需要先开启实验性语法开关*）

尤大心想：你们不是嫌我之前用了不规范的语法么？那我这回这么写应该没问题了吧！想想之前我们定义一个`ref`变量，首先需要先把`ref`引进来然后才能用：

```js
import { ref } from 'vue'

const loading = ref(true)
复制代码
```

而新语法不用引，直接就能用，类似于全局变量的感觉。除了`$ref`这个特殊的全局变量呢，这次提案还有：`$computed`、`$fromRefs`和`$raw`这几个玩意。我们一个个来看，先看`$computed`：

```html
<!-- 以前 -->
<script setup>
import { ref, computed } from 'vue'

const num = ref(1)
const num_10 = computed(() => num.value * 10)
</script>

<!-- 现在 -->
<script setup>
let num = $ref(1)
const num_10 = $computed(() => num * 10)
</script>
复制代码
```

`$fromRefs`又是个啥呢？这玩意在之前没有啊！只听说过`toRefs`：

```html
<script setup>
import { fromRefs } from 'vue' // 这个API并不存在
import { toRefs } from 'vue' // 这个API倒是有 也就是只有 to 没有 from
</script>
复制代码
```

其实这个`$fromRefs`正是为了配合`toRefs`而产生的，比方说我们在别的地方写了一个`useXxx`：

```js
import { reactive } from 'vue'

const state = reactive({
    x: 0,
    y: 0
})

export default = (x = 0, y = 0) => {
    state.x = x
    state.y = y
    
    return toRefs(state)
}
复制代码
```

于是我们在使用的时候就：

```html
<script setup>
import { useXxx } form '../useXxx.js'

const { x, y } = useXxx(100, 200)

console.log(x.value, y.value)
</script>
复制代码
```

这岂不是又要出现尤大最不想看到的`.value`属性了吗？所以`$fromRefs`就是为了解决这个问题而生的：

```html
<script setup>
import { useXxx } form '../useXxx.js'

const { x, y } = $fromRefs(useXxx(100, 200))

console.log(x, y)
</script>
复制代码
```

最后一个 API 就是`$raw`了，raw 不是原始的意思嘛！那么看名字也能猜到，就是我们用`$ref`所创建出来的其实是一个响应式`对象`，而不是一个基本数据类型，但语法糖会让我们在使用的过程中像是在用基本数据类型那样可以改来改去，但有时我们想看看这个`对象`长什么样，那么我们就需要用到`$raw`了：

```html
<script setup>
const loading = $ref(true)

console.log(loading) // 其实打印的不是 loading 这个对象 而是它里面的值 相当于 loading.value
console.log($raw(loading)) // 这回打印的就是 loading 这个对象了
</script>
复制代码
```

## 改进版

这一版语法糖没过多久就又被改进了，改进版主要是把全局变量改为只有`$`和`$$`这俩变量了，假如我们不用语法糖时是这么写：

```html
<script setup>
import { ref } from 'vue'

const loading = ref(true)

console.log(loading.value)
</script>
复制代码
```

用语法糖以后就变成了这样：

```html
<script setup>
import { ref } from 'vue'

const loading = $(ref(true))

console.log(loading)
</script>
复制代码
```

如果我们想还原 `loading` 这个变量，我们就需要用到`$$`了：

```html
<script setup>
import { ref } from 'vue'

let loading = $(ref(true))

console.log($$(loading))
</script>
复制代码
```

或者也可以写成这样：

```html
<script setup>
import { ref } from 'vue'

const loadingRef = ref(true)
let loading = $(loadingRef)

console.log(loadingRef === $$(loading))
</script>
复制代码
```

## 第三波语法糖

第三波语法糖主要是在第二波语法的基础上又进行了改进，除了许多人觉得要写成`$(ref())`的话实在是太那什么了…

另一方面则是实现了`props`的语法糖，新的语法主要是为每个能够创建带有`.value`变量的方法都有一个`$`前缀的等价物，比如：

- `ref`
- `computed`
- `shallowRef`
- `customRef`
- `toRef`

与此同时保留了改进版中的`$`变量与`$$`变量，用于对`props`的解构：

```html
<script setup>
const { isLoading } = $(defineProps({ isLoading: Boolean }))
</script>
复制代码
```

要知道在以前我们是不能对`props`进行解构的，而现在还可以利用`ES6`的解构默认值写法来为`props`设置默认值：

```html
<!-- 以前 -->
<script setup>
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true
  }
}))

console.log(props.isLoading)
</script>

<!-- 现在 -->
<script setup>
const { isLoading = true } = $(defineProps({ isLoading: Boolean }))

console.log(isLoading)
</script>
复制代码
```

## 三波语法糖提案地址

- 第一波：[github.com/vuejs/rfcs/…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Frfcs%2Fpull%2F228)
- 第二波：[github.com/vuejs/rfcs/…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Frfcs%2Fdiscussions%2F369)
- 第三波：[github.com/vuejs/rfcs/…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Frfcs%2Fdiscussions%2F413)

这个框架明明是中国人用的最多，但可笑的是居然是一群外国人在商量`Vue`的下一步计划，看到这里肯定有人会说：中国人都忙着`996`呢，哪有空去探讨那些东西…

那就看你是觉得：这些乱七八糟的语法糖对你来说无所谓，出什么语法我学什么就是了，我就是一只`沉默的羔羊`。

还是说：你只是在这篇文章的下面留个言说自己喜欢这些新语法或者讨厌这些新语法，懒得去`GitHub`说英文。

链接已经给大家贴上来了，就看大家是一副凑热闹的态度，还是点进去链接勇敢的表达出自己的声音了。当然，如果去`GitHub`我们还是要说英文的，虽说用中文的话尤大也可以看得懂，但评论区不全是中国人，`Vue`还是有相当一批外国粉丝的。而且也不全是美国人，那些不是英国人美国人的开发者，他们如果也只图自己痛快而说自己国家的母语的话，想必我们就没有办法进行沟通了，同时这也会进一步拉近国人在海外的形象：别人都用英文，就你们中国人用自己的语言，不遵守规则。

那可能有人英文水平真的很差，我们可以这样嘛：找到百度翻译，输入中文后翻译成英文，然后再把英文复制过去。虽然这样做翻译的可能不完全准确，但最起码能达到勉强看懂的地步。同时还有一个技巧就是把翻译成英文的句子再翻译回中文，看看有哪些地方的语意发生了明显的变化，我们再针对那个地方重新自己写一遍。

如果你喜欢这个语法，那就去多点几个赞多夸几句，这样的话想必它很快就会被纳入到`Vue`的标准语法里面去。

如果你不喜欢，那么就赶快去多喷几句，这样的话这个语法很有可能就会像第一波语法糖提案那样被放弃掉了。

如果你觉得无所谓，爱什么样什么样，去`GitHub`一趟多麻烦啊，直接在这篇文章下发表评论多方便。那么也欢迎你在评论区下留言。


作者：手撕红黑树
链接：https://juejin.cn/post/7044077808259170312
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。