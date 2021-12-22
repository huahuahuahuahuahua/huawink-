---
title:vue商城项目
date:2021-09-05
tags:
 - 前端
 - 项目
categories:
 -  2021
---



# vue商城项目:grinning:

## ...省略

## 五、前端模块化

### (一)、为什么需要模块化？

#### 1.JavaScript原始功能

- 在网页开发的早期，js制作作为一种脚本语言，做一些简单的表单验证或动画实现等，那个时候代码还是很少的。

  - 那个时候的代码是怎么写的呢？直接将代码写在<script>标签中即可 
- 随着ajax异步请求的出现，慢慢形成了前后端的分离
  - 客户端需要完成的事情越来越多，代码量也是与日俱增。
  - 为了应对代码量的剧增，我们通常会将代码组织在多个js文件中，进行维护。
  - 但是这种维护方式，依然不能避免一些灾难性的问题。
- 比如全局变量同名问题：看右边的例子
- 另外，这种代码的编写方式对js文件的依赖顺序几乎是强制性的
  - 但是当js文件过多，比如有几十个的时候，弄清楚它们的顺序是一件比较同时的事情。
  - 而且即使你弄清楚顺序了，也不能避免上面出现的这种尴尬问题的发生。

![img](https://img-blog.csdnimg.cn/20210720174331187.png)

![img](https://img-blog.csdnimg.cn/20210720174337476.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 小明后来发现代码不能正常运行，去检查自己的变量，发现确实true
- 最后杯具发生了，小明加班到2点还是没有找到问题出在哪里(所以，某些加班真的是无意义的)

### 2.匿名函数的解决方案

- 我们可以使用匿名函数来解决方面的重名问题
  - 在aaa.js文件中，我们使用匿名函数

![img](https://img-blog.csdnimg.cn/20210720174512211.png)

- 但是如果我们希望在main.js文件中，用到flag，应该如何处理呢？
  - 显然，另外一个文件中不容易使用，因为flag是一个局部变量。 

### 3.使用模块作为出口

- 我们可以使用将需要暴露到外面的变量，使用一个模块作为出口，什么意思呢？
- 来看下对应的代码：

![img](https://img-blog.csdnimg.cn/2021072017464122.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 我们做了什么事情呢？
  - 非常简单，在匿名函数内部，定义一个对象。
  - 给对象添加各种需要暴露到外面的属性和方法(不需要暴露的直接定义即可)。
  - 最后将这个对象返回，并且在外面使用了一个MoudleA接受。
- 接下来，我们在man.js中怎么使用呢？
  - 我们只需要使用属于自己模块的属性和方法即可
- 这就是模块最基础的封装，事实上模块的封装还有很多高级的话题：
  - 但是我们这里就是要认识一下为什么需要模块，以及模块的原始雏形。
  - 幸运的是，前端模块化开发已经有了很多既有的规范，以及对应的实现方案。
- 常见的模块化规范：
  - CommonJS、AMD、CMD，也有ES6的Modules

### (二)、（了解）CommonJS

- 模块化有两个核心：导出和导入
- CommonJS的导出：

![img](https://img-blog.csdnimg.cn/20210720175046818.png)

- CommonJS的导入

 ![img](https://img-blog.csdnimg.cn/20210720175121523.png)

### (三)、（掌握）ES6的export指令

#### 1.export基本使用

- export指令用于导出变量，比如下面的代码：

![img](https://img-blog.csdnimg.cn/20210720212242467.png)

- 上面的代码还有另外一种写法：

![img](https://img-blog.csdnimg.cn/20210720212302731.png)

#### 2.导出函数或类

- 上面我们主要是输出变量，也可以输出函数或者输出类
  - 上面的代码也可以写成这种形式：

![img](https://img-blog.csdnimg.cn/20210720212348362.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210720212355191.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

#### 3.export default

- 某些情况下，一个模块中包含某个的功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名
  - 这个时候就可以使用export default 

![img](https://img-blog.csdnimg.cn/20210720212524759.png)

- 我们来到main.js中，这样使用就可以了
  - 这里的myFunc是我自己命名的，你可以根据需要命名它对应的名字 

![img](https://img-blog.csdnimg.cn/20210720212613552.png)

- 另外，

  需要注意：

  - **export default在同一个模块中，不允许同时存在多个**。

### (四)、ES6的import指令

#### import使用

- 我们使用export指令导出了模块对外提供的接口，下面我们就可以通过import命令来加载对应的这个模块了
- 首先，我们需要在HTML代码中引入两个js文件，并且类型需要设置为module

![img](https://img-blog.csdnimg.cn/20210720212823379.png)

- 我们使用export指令导出了模块对外提供的接口，下面我们就可以通过import命令来加载对应的这个模块了
- 首先，我们需要在HTML代码中引入两个js文件，并且类型需要设置为module

![img](https://img-blog.csdnimg.cn/20210720212823379.png)

 ![img](https://img-blog.csdnimg.cn/20210720212931384.png)



-  ES6模块化导入导出代码
   - aaa.js

```js
var name = '小明'
var age = 18
var flag = true
 
function sum(num1, num2) {
  return num1 + num2
}
 
if (flag) {
  console.log(sum(20, 30));
}
 
// 1.导出方式一:
export {
  flag, sum
}
 
// 2.导出方式二:
export var num1 = 1000;
export var height = 1.88
 
 
// 3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}
 
export class Person {
  run() {
    console.log('在奔跑');
  }
}
// 某些情况下，一个模块中包含某个的功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名
// 5.export default 
// const address = '北京市'
// export {
//   address
// }
 
// export const address = '北京市'
// const address = '北京市'
//
// export default address
 
// export default在同一个模块中，不允许同时存在多个
export default function (argument) {
  console.log(argument);
}
```

- bbb.js

```js
import {sum} from './aaa.js'
 
var name = '小红'
var flag = false
 
console.log(sum(100, 200));
 
```

- index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<!-- 引入js文件，并且类型需要设置为module
 -->
<script src="aaa.js" type="module"></script>
<script src="bbb.js" type="module"></script>
<script src="mmm.js" type="module"></script>
</body>
</html>
```

- mmm.js

```js
// 1.导入的{}中定义的变量
import {flag, sum} from "./aaa.js";
 
if (flag) {
  console.log('小明是天才, 哈哈哈');
  console.log(sum(20, 30));
}
 
// 2.直接导入export定义的变量
import {num1, height} from "./aaa.js";
 
console.log(num1);
console.log(height);
 
// 3.导入 export的function/class
import {mul, Person} from "./aaa.js";
 
console.log(mul(30, 50));
 
const p = new Person();
p.run()
 
 
// 4.导入 export default中的内容 可以根据需要命名它对应的名字
 
import addr from "./aaa.js";
 
addr('你好啊');
 
 
// 5.统一全部导入 
// import {flag, num, num1, height, Person, mul, sum} from "./aaa.js";
 
// 通过*可以导入模块中所有的export变量
// 但是通常情况下我们需要给*起一个别名，方便后续的使用
 
import * as aaa from './aaa.js'
 
console.log(aaa.flag);
console.log(aaa.height);
 
```

## 六、[Webpack](https://so.csdn.net/so/search?from=pc_blog_highlight&q=Webpack)详解

### (一)、内容概述

> - 认识webpack
> - webpack的安装
> - webpack的起步
> - webpack的配置
> - loader的使用
> - webpack中配置Vue
> - plugin的使用
> - 搭建本地服务器

### (二)、（理解）认识Webpack

#### 1.什么是Webpack？

- 什么是webpack？
  - 这个webpack还真不是一两句话可以说清楚的。

- 我们先看看官方的解释：
  - At its core, webpack is a static module bundler for modern JavaScript applications.
  - 从本质上来讲，webpack是一个现代的JavaScript应用的静态模块打包工具。

- 但是它是什么呢？用概念解释概念，还是不清晰。
  - 我们从两个点来解释上面这句话：模块 和 打包

![img](https://img-blog.csdnimg.cn/2021072115260751.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- #### 2.前端模块化

  ##### 前端模块化：

  - 在前面学习中，我已经用了大量的篇幅解释了为什么前端需要模块化。

  - 而且我也提到了目前使用前端模块化的一些方案：AMD、CMD、CommonJS、ES6。

  - 在ES6之前，我们要想进行模块化开发，就必须借助于其他的工具，让我们可以进行模块化开发。

  - 并且在通过模块化开发完成了项目后，还需要处理模块间的各种依赖，并且将其进行整合打包。

  - 而webpack其中一个核心就是让我们可能进行模块化开发，并且会帮助我们处理模块间的依赖关系。

  - 而且不仅仅是JavaScript文件，我们的CSS、图片、json文件等等在webpack中都可以被当做模块来使用（在后续我们会看到）。

  - 这就是webpack中模块化的概念。 

- 打包如何理解呢？

- 理解了webpack可以帮助我们进行模块化，并且处理模块间的各种复杂关系后，打包的概念就非常好理解了。
  就是将webpack中的各种资源模块进行打包合并成一个或多个包(Bundle)。

- 并且在打包的过程中，还可以对资源进行处理，比如压缩图片，将scss转成css，将ES6语法转成ES5语法，将TypeScript转成JavaScript等等操作。

- 但是打包的操作似乎grunt/gulp也可以帮助我们完成，它们有什么不同呢？

  #### 3.和grunt/gulp的对比

   grunt/gulp的核心是Task

  - 我们可以配置一系列的task，并且定义task要处理的事务（例如ES6、ts转化，图片压缩，scss转成css）

  - 之后让grunt/gulp来依次执行这些task，而且让整个流程自动化。

  - 所以grunt/gulp也被称为前端自动化任务管理工具。

- 我们来看一个gulp的task

  - 下面的task就是将src下面的所有js文件转成ES5的语法。

  - 并且最终输出到dist文件夹中。

![img](https://img-blog.csdnimg.cn/20210721152930207.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 什么时候用grunt/gulp呢？
  - 如果你的工程模块依赖非常简单，甚至是没有用到模块化的概念。
  - 只需要进行简单的合并、压缩，就使用grunt/gulp即可。
  - 但是如果整个项目使用了模块化管理，而且相互依赖非常强，我们就可以使用更加强大的webpack了。 

- 所以，grunt/gulp和webpack有什么不同呢？
  - grunt/gulp更加强调的是前端流程的自动化，模块化不是它的核心。
  - webpack更加强调模块化开发管理，而文件压缩合并、预处理等功能，是他附带的功能。

### (二)、（理解）Webpack的安装

#### webpack安装 

- 安装webpack首先需要安装Node.js，Node.js自带了软件包管理工具npm

![img](https://img-blog.csdnimg.cn/20210721155045240.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 查看自己的node版本：

```js
node -v
```

 全局安装webpack(这里我先指定版本号3.6.0，因为vue cli2依赖该版本)

```
npm install webpack@3.6.0 -g
```

局部安装webpack（后续才需要）
        --save-dev是开发时依赖，项目打包后不需要继续使用的。 

cd 对应目录

```
npm install webpack@3.6.0 --save-dev
```

- 为什么全局安装后，还需要局部安装呢？
  - 在终端直接执行webpack命令，使用的全局安装的webpack
  - 当在package.json中定义了scripts时，其中包含了webpack命令，那么使用的是局部webpack

### (三)、（掌握）[Webpack](https://so.csdn.net/so/search?from=pc_blog_highlight&q=Webpack)起步

#### 1.准备工作

- 我们创建如下文件和文件夹：

![img](https://img-blog.csdnimg.cn/20210721153703802.png)

文件和文件夹解析：

- dist文件夹：用于存放之后打包的文件
- src文件夹：用于存放我们写的源文件
  - main.js：项目的入口文件。具体内容查看下面详情。
  - mathUtils.js：定义了一些数学工具函数，可以在其他地方引用，并且使用。具体内容查看下面的详情。
- index.html：浏览器打开展示的首页html
- package.json：通过npm init生成的，npm包管理的文件（暂时没有用上，后面才会用上）
- mathUtils.js文件中的代码：

![img](https://img-blog.csdnimg.cn/20210721153747977.png)

![img](https://img-blog.csdnimg.cn/20210721153747977.png)

#### 2.js文件的打包

- 现在的js文件中使用了模块化的方式进行开发，他们可以直接使用吗？
  - 不可以。 因为如果直接在index.html引入这两个js文件，浏览器并不识别其中的模块化代码。
  - 另外，在真实项目中当有许多这样的js文件时，我们一个个引用非常麻烦，并且后期非常不方便对它们进行管理。 

- 我们应该怎么做呢？使用webpack工具，对多个js文件进行打包。
  - 我们知道，webpack就是一个模块化的打包工具，所以它支持我们代码中写模块化，可以对模块化的代码进行处理。（如何处理的，待会儿在原理中，我会讲解）
  - 另外，如果在处理完所有模块之间的关系后，将多个js打包到一个js文件中，引入时就变得非常方便了。 

- OK，如何打包呢？使用webpack的指令即可

```
webpack src/main.js dist/bundle.js
```

![img](https://img-blog.csdnimg.cn/20210721154507154.png)

#### 3.使用打包后3的文件

- 打包后会在dist文件下，生成一个bundle.js文件
  - 文件内容有些复杂，这里暂时先不看，后续再进行分析。
  - bundle.js文件，是webpack处理了项目直接文件依赖后生成的一个js文件，我们只需要将这个js文件在index.html中引入即可

![img](https://img-blog.csdnimg.cn/20210721154611830.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210721154617420.png)

### (四)、（掌握）webpack配置

#### 1.入口和出口

- 我们考虑一下，如果每次使用webpack的命令都需要写上入口和出口作为参数，就非常麻烦，有没有一种方法可以将这两个参数写到配置中，在运行时，直接读取呢？
- 当然可以，就是创建一个**webpack.config.js**文件

![img](https://img-blog.csdnimg.cn/20210721174900664.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 因为output的路径得是绝对路径，需要安装path包

  - 依赖到node的包，建议先**npm init**初始化一下,会出现下面信息，填package name后一路回车就行，然后会生成**package.json**文件

  ![img](https://img-blog.csdnimg.cn/20210721175921999.png)

- 在终端输入 **webpack** 就能直接打包了 ，但是在开发中一般不会用webpack，一般映射为npm run build

#### 2.局部安装webpack

- 目前，我们使用的webpack是全局的webpack，如果我们想使用局部来打包呢？

- - 因为一个项目往往依赖特定的webpack版本，全局的版本可能很这个项目的webpack版本不一致，导出打包出现问题。
  - 所以通常一个项目，都有自己局部的webpack。

- 第一步，项目中需要安装自己局部的webpack

  - 这里我们让局部安装webpack3.6.0

  - Vue CLI3中已经升级到webpack4，但是它将配置文件隐藏了起来，所以查看起来不是很方便。

```sql
npm install webpack@3.6.0 --save-dev
```

- 第二步，通过node_modules/.bin/webpack启动webpack打包

```python
node_modules/.bin/webpack
```

![img](https://img-blog.csdnimg.cn/20210721181811596.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

####  3.package.json中定义启动

- 但是，每次执行都敲这么一长串有没有觉得不方便呢？
  - OK，我们可以在package.json的scripts中定义自己的执行脚本。

![img](https://img-blog.csdnimg.cn/20210721182025767.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

package.json中的scripts的脚本在执行时，会按照一定的顺序寻找命令对应的位置。

- 首先，会寻找本地的node_modules/.bin路径中对应的命令。

- 如果没有找到，会去全局的环境变量中寻找。

- 如何执行我们的build指令呢？

- ```coffeescript
  npm run build
  ```

### (五)、（掌握）css文件处理---css-loader的使用

#### 1.什么是loader？

- loader是webpack中一个非常核心的概念。

- webpack用来做什么呢？

  - 在我们之前的实例中，我们主要是用webpack来处理我们写的js代码，并且webpack会自动处理js之间相关的依赖。

  - 但是，在开发中我们不仅仅有基本的js代码处理，我们也需要加载css、图片，也包括一些高级的将ES6转成ES5代码，将TypeScript转成ES5代码，将scss、less转成css，将.jsx、.vue文件转成js文件等等。

  - 对于webpack本身的能力来说，对于这些转化是不支持的。

  - 那怎么办呢？给webpack扩展对应的loader就可以啦。 

- loader使用过程：
  - 步骤一：通过npm安装需要使用的loader
  - 步骤二：在webpack.config.js中的modules关键字下进行配置

- 大部分loader我们都可以在webpack的官网中找到，并且学习对应的用法。

#### 2.css文件处理 - 准备工作

- 项目开发过程中，我们必然需要添加很多的样式，而样式我们往往写到一个单独的文件中。
  - 在src目录中，创建一个css文件，其中创建一个normal.css文件。
  - 我们也可以重新组织文件的目录结构，将零散的js文件放在一个js文件夹中。 

![img](https://img-blog.csdnimg.cn/20210721182804642.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- normal.css中的代码非常简单，就是将body设置为red

![img](https://img-blog.csdnimg.cn/20210721182828476.png)

- 但是，这个时候normal.css中的样式会生效吗？
  - 当然不会，因为我们压根就没有引用它。
  - webpack也不可能找到它，因为我们只有一个入口，webpack会从入口开始查找其他依赖的文件。 
- 在入口文件中引用：

![img](https://img-blog.csdnimg.cn/20210721182910839.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

####  3.css文件处理 – 打包报错信息

- 重新打包，会出现如下错误：

![img](https://img-blog.csdnimg.cn/20210721183630793.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 这个错误告诉我们：加载normal.css文件必须有对应的loader 

#### 4.css文件处理 – css-loader

- 在webpack的官方中，我们可以找到如下关于样式的loader使用方法： 

![img](https://img-blog.csdnimg.cn/20210721183805891.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

```javascript
npm install css-loader --save-dev
// 视频所用版本
npm install css-loader@2.0.2 --save-dev
```

-  按照官方配置webpack.config.js文件
   - 注意：配置中有一个style-loader，我们并不知道它是什么，所以可以暂时不进行配置。

 

```js
const path = require('path')
 
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时, 是从右向左
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```

- 重新打包项目：

![img](https://img-blog.csdnimg.cn/20210721183853207.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

但是，运行index.html，你会发现样式并没有生效。

- 原因是css-loader只负责加载css文件，但是并不负责将css具体样式嵌入到文档中。
- 这个时候，我们还需要一个**style-loader**帮助我们处理。

#### 5.css文件处理 – style-loader

- 我们来安装style-loader

```js
 npm install --save-dev style-loader
   
 // 视频所用版本
 npm install style-loader@0.23.1 --save-dev
```

- 注意：style-loader需要放在css-loader的前面。
- 疑惑：不对吧？按照我们的逻辑，在处理css文件过程中，应该是css-loader先加载css文件，再由style-loader来进行进一步的处理，为什么会将style-loader放在前面呢？
- 答案：这次因为webpack在读取使用的loader的过程中，是按照从右向左的顺序读取的。
- 目前，webpack.config.js的配置如下：

![img](https://img-blog.csdnimg.cn/20210721185621933.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  如果安装失败可能是loader版本过高，指定一下版本就行了
-  style-loader和css-loader作用是不同的。
   - `css-loader`: 加载.css文件
   - `style-loader`:使用`<style>`将css-loader内部样式注入到我们的HTML页面

### (六)、less文件处理 

#### 1.less文件处理 – 准备工作

- 如果我们希望在项目中使用less、scss、stylus来写样式，webpack是否可以帮助我们处理呢？
  - 我们这里以less为例，其他也是一样的。
- 我们还是先创建一个less文件，依然放在css文件夹中

![img](https://img-blog.csdnimg.cn/20210721190837311.png)

![img](https://img-blog.csdnimg.cn/20210721190845686.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210721190856955.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

#### 2.less文件处理 – less-loader

- 继续在官方中查找，我们会找到less-loader相关的使用说明
  - 首先，还是需要安装对应的loader
  - 注意：我们这里还安装了less，因为webpack会使用less对less文件进行编译 

```js
npm install --save-dev less-loader less
 
// 视频所用版本
npm install --save-dev less-loader@4.1.0 less@3.9.0
```

- 其次，修改对应的配置文件
  - 添加一个rules选项，用于处理.less文件

![img](https://img-blog.csdnimg.cn/20210721191255266.png)

- webpack.config.js的配置如下：

```javascript
const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader", // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader", // compiles Less to CSS
                }]
            },
        ]
    }
}
```

### (七)、（掌握）图片文件处理

#### 1.图片文件处理 – 资源准备阶段

- 首先，我们在项目中加入两张图片：
  - 一张较小的图片test01.jpg(小于8kb)，一张较大的图片test02.jpeg(大于8kb)
  - 待会儿我们会针对这两张图片进行不同的处理

- 我们先考虑在css样式中引用图片的情况，所以我更改了normal.css中的样式：

![img](https://img-blog.csdnimg.cn/20210721192821420.png)

- 如果我们现在直接打包，会出现如下问题

 ![img](https://img-blog.csdnimg.cn/20210721192851862.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

#### 2.图片文件处理 – url-loader

- 图片处理，我们使用url-loader来处理，依然先安装url-loader

```js
npm install --save-dev url-loader
 
// 视频所用版本
npm install --save-dev url-loader@1.1.2
```

- 修改webpack.config.js配置文件：

```js
  {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
       
          },
        }]
      }
```

- 再次打包，运行index.html，就会发现我们的背景图片选出了出来。
  - 而仔细观察，你会发现背景图是通过base64显示出来的
  - OK，这也是limit属性的作用，当图片小于8kb时，对图片进行base64编码

![img](https://img-blog.csdnimg.cn/20210721193222636.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

####  3.图片文件处理 – file-loader

- 那么问题来了，如果大于8kb呢？我们将background的图片改成test02.jpg
  - 这次因为大于8kb的图片，会通过file-loader进行处理，但是我们的项目中并没有file-loader

![img](https://img-blog.csdnimg.cn/20210722141748169.png)

- 所以，我们需要安装file-loader

```javascript
npm install --save-dev file-loader
 
// 视频所用版本
npm install --save-dev file-loader@3.0.1
```

-  再次打包，就会发现dist文件夹下多了一个图片文件

![img](https://img-blog.csdnimg.cn/20210722142007286.png)

#### 4.图片文件处理 – 修改文件名称

- 我们发现webpack自动帮助我们生成一个非常长的名字

  - 这是一个32位hash值，目的是防止名字重复

  - 但是，真实开发中，我们可能对打包的图片名字有一定的要求

  - 比如，将所有的图片放在一个文件夹中，跟上图片原来的名称，同时也要防止重复 

- 所以，我们可以在options中添加上如下选项：

  - img：文件要打包到的文件夹

  - name：获取图片原来的名字，放在该位置

  - hash:8：为了防止图片名称冲突，依然使用hash，但是我们只保留8位

  - ext：使用图片原来的扩展名 

![img](https://img-blog.csdnimg.cn/20210722142134283.png)

- 但是，我们发现图片并没有显示出来，这是因为图片使用的路径不正确
  - 默认情况下，webpack会将生成的路径直接返回给使用者
  - 但是，我们整个程序是打包在dist文件夹下的，所以这里我们需要在路径下再添加一个dist/ 

![img](https://img-blog.csdnimg.cn/20210722142205244.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### (八)、（掌握）babel的使用（ES6转ES5）

#### ES6语法处理

- 如果你仔细阅读webpack打包的js文件，发现写的ES6语法并没有转成ES5，那么就意味着可能一些对ES6还不支持的浏览器没有办法很好的运行我们的代码。
- 在前面我们说过，如果希望将ES6的语法转成ES5，那么就需要使用babel。
  - 而在webpack中，我们直接使用babel对应的loader就可以了。

```js
npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
```

- 配置webpack.config.js文件

![img](https://img-blog.csdnimg.cn/2021072214245179.png)

- 重新打包，查看bundle.js文件，发现其中的内容变成了ES5的语法 

### (九)、（掌握）webpack配置[vue](https://so.csdn.net/so/search?from=pc_blog_highlight&q=vue)

#### 1.引入vue.js

- 后续项目中，我们会使用Vuejs进行开发，而且会以特殊的文件来组织vue的组件。
  - 所以，下面我们来学习一下如何在我们的webpack环境中集成Vuejs

- 后续项目中，我们会使用Vuejs进行开发，而且会以特殊的文件来组织vue的组件。
  - 所以，下面我们来学习一下如何在我们的webpack环境中集成Vuejs

```
npm install vue --save
```

- 那么，接下来就可以按照我们之前学习的方式来使用Vue了

![img](https://img-blog.csdnimg.cn/20210722142709203.png)![img](https://img-blog.csdnimg.cn/20210722142723510.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

#### 2.打包项目 – 错误信息

- 修改完成后，重新打包，运行程序：

- - 打包过程没有任何错误(因为只是多打包了一个vue的js文件而已)
  - 但是运行程序，没有出现想要的效果，而且浏览器中有报错

![img](https://img-blog.csdnimg.cn/2021072214470265.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  这个错误说的是我们使用的是runtime-only版本的Vue，什么意思呢？
   - 这里我只说解决方案：**Vue不同版本构建**，后续我具体讲解runtime-only和runtime-compiler的区别。

-  所以我们修改webpack.config.js的配置，添加如下内容即可

![img](https://img-blog.csdnimg.cn/20210722153055339.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

```js
 resolve: {
    extensions: ['.js', '.css', '.vue'],
    // 可以省略扩展名， 比如引入vue文件'./vue/App.vue' 可以写成'./vue/App'
    // alias: 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }

```

####  3.（掌握）el和template区别（一）

- 正常运行之后，我们来考虑另外一个问题：
  - 如果我们希望将data中的数据显示在界面中，就必须是修改index.html
  - 如果我们后面自定义了组件，也必须修改index.html来使用组件
  - 但是html模板在之后的开发中，我并不希望手动的来频繁修改，是否可以做到呢？

- 定义template属性：
  - 在前面的Vue实例中，我们定义了el属性，用于和index.html中的#app进行绑定，让Vue实例之后可以管理它其中的内容
  - 这里，我们可以将div元素中的{{message}}内容删掉，只保留一个基本的id为div的元素
  - 但是如果我依然希望在其中显示{{message}}的内容，应该怎么处理呢？
  - 我们可以再定义一个template属性，代码如下： 

![img](https://img-blog.csdnimg.cn/20210722151142392.png)

#### 4.（掌握）el和template区别（二）

- 重新打包，运行程序，显示一样的结果和HTML代码结构

那么，el和template模板的关系是什么呢？

- 在我们之前的学习中，我们知道el用于指定Vue要管理的DOM，可以帮助解析其中的指令、事件监听等等。

- 而如果Vue实例中同时指定了template，那么template模板的内容会替换掉挂载的对应el的模板。 

- 这样做有什么好处呢？
  - 这样做之后我们就不需要在以后的开发中再次操作index.html，只需要在template中写入对应的标签即可

- 但是，书写template模块非常麻烦怎么办呢？
  - 没有关系，稍后我们会将template模板中的内容进行抽离。
  - 会分成三部分书写：**template、script、style**，结构变得非常清晰。

`index.html`代码 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
 
<div id="app">
</div>
 
<script src="./dist/bundle.js"></script>
</body>
</html>
```

 main.js代码：

```javascript
// vue抽取方案1.0
// 把原来index.html里 <div id="app"></div>里面的内容抽取到vue实例的template里面
import Vue from 'vue'
const app = new Vue({
    el: '#app',
    template: `
    <div>
        <h2>{{message}}</h2>
        <button @click='btnClick></button>
    </div>
    `,
    data: {
        message: 'yyy'
    },
    methods: {
        btnClick(){
            
        }
    },
})
```

#### 5.Vue组件化开发引入

- 在学习组件化开发的时候，我说过以后的Vue开发过程中，我们都会采用组件化开发的思想。

- - 那么，在当前项目中，如果我也想采用组件化的形式进行开发，应该怎么做呢？
- 查看下面的代码： 
  - 当然，我们也可以将下面的代码抽取到一个js文件中，并且导出。 

![img](https://img-blog.csdnimg.cn/20210722152359735.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 代码步骤如下： 

​     ○ main.js代码：

```js
// vue抽取方案2.0
// 把template,data,method全部抽取到一个组件里面
import Vue from 'vue'
const App = {
    template: `
    <div>
        <h2>{{message}}</h2>
        <button @click='btnClick></button>
    </div>
    `,
    data() {
        return {
            message: 'yangyanyan'
        }
    },
 
    methods: {
        btnClick() {
 
        }
    },
}
const app = new Vue({
    el: '#app',
    // 在这里用一下App组件就行了 这里不需要根div  之前是这样写的<div id="app"><App/></div>
    template: `<App/>`,
    components: {
        App
    },
 
})
```

 把App组件对象抽取到另外一个文件app.js并导出，app.js代码如下：

```javascript
export default {
    template: `
    <div>
        <h2>{{message}}</h2>
        <button @click='btnClick></button>
    </div>
    `,
    data() {
        return {
            message: 'yangyanyan'
        }
    },
 
    methods: {
        btnClick() {
 
        }
    },
}
```

○ 再在main.js里面引用一下,现在main.js代码如下：

```js
import Vue from 'vue'
import App from './vue/app'
const app = new Vue({
    el: '#app',
    // 在这里用一下App组件就行了 这里不需要根div  之前是这样写的<div id="app"><App/></div>
    template: `<App/>`,
    components: {
        App
    },
 
})
```

但是这样写模版与数据没有分离，下面就用.vue封装 

#### 6. Vue的终极使用方案-- .vue文件封装处理

-  但是一个组件以一个js对象的形式进行组织和使用的时候是非常不方便的
   - 一方面编写template模块非常的麻烦
   - 另外一方面如果有样式的话，我们写在哪里比较合适呢？

-  现在，我们以一种全新的方式来组织一个vue的组件 

![img](https://img-blog.csdnimg.cn/20210722152619904.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 但是，这个时候这个文件可以被正确的加载吗？
  - 必然不可以，这种特殊的文件以及特殊的格式，必须有人帮助我们处理。
  - 谁来处理呢？**vue-loader（加载）**以及**vue-template-compiler（编译）**。 

- 安装vue-loader和vue-template-compiler 

```
npm install vue-loader vue-template-compiler --save-dev
```

-  修改webpack.config.js的配置文件：

![img](https://img-blog.csdnimg.cn/20210722152912754.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

```
	{
        test: /\.vue$/,
        use: ['vue-loader']
   }
```

- 可能还会报错，应该是loader版本原因，在package.json里面修改一下版本号

![img](https://img-blog.csdnimg.cn/20210722161221168.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### (十)、（掌握）plugin的使用

#### 1.认识plugin 

- plugin是什么？
  - plugin是插件的意思，通常是用于对某个现有的架构进行扩展。
  - webpack中的插件，就是对webpack现有功能的各种扩展，比如打包优化，文件压缩等等。 

- loader和plugin区别
  - loader主要用于转换某些类型的模块，它是一个转换器。
  - plugin是插件，它是对webpack本身的扩展，是一个扩展器。 

- plugin的使用过程：
  - 步骤一：通过npm安装需要使用的plugins(某些webpack已经内置的插件不需要安装)
  - 步骤二：在webpack.config.js中的plugins中配置插件。

- 下面，我们就来看看可以通过哪些插件对现有的webpack打包过程进行扩容，让我们的webpack变得更加好用。 

####  2.添加版权的Plugin

- 我们先来使用一个最简单的插件，为打包的文件添加版权声明
  - 该插件名字叫BannerPlugin，属于webpack自带的插件。

- 按照下面的方式来修改webpack.config.js的文件：

![img](https://img-blog.csdnimg.cn/20210722162612963.png)

- 重新打包程序：查看bundle.js文件的头部，看到如下信息 

![img](https://img-blog.csdnimg.cn/20210722162639625.png)

####  3.打包html的plugin

- 目前，我们的index.html文件是存放在项目的根目录下的。

  - 我们知道，在真实发布项目时，发布的是dist文件夹中的内容，但是dist文件夹中如果没有index.html文件，那么打包的js等文件也就没有意义了。

  - 所以，我们需要将index.html文件打包到dist文件夹中，这个时候就可以使用**HtmlWebpackPlugin**插件

- HtmlWebpackPlugin插件可以为我们做这些事情：
  - 自动生成一个index.html文件(可以指定模板来生成)
  - 将打包的js文件，自动通过script标签插入到body中

- 安装HtmlWebpackPlugin插件 

```css
npm install html-webpack-plugin --save-dev
```

-  使用插件，修改webpack.config.js文件中plugins部分的内容如下：
   - 这里的template表示根据什么模板来生成index.html
   - 另外，我们需要删除之前在output中添加的publicPath属性 否则插入的script标签中的src可能会有问题

![img](https://img-blog.csdnimg.cn/20210722163245689.png)

####  4.js压缩的Plugin

- 在项目发布之前，我们必然需要对js等文件进行压缩处理
  - 这里，我们就对打包的js文件进行压缩
  - 我们使用一个第三方的插件uglifyjs-webpack-plugin，并且版本号指定1.1.1，和CLI2保持一致

```javascript
npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
```

- 修改webpack.config.js文件，使用插件：

![img](https://img-blog.csdnimg.cn/20210722163409480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  查看打包后的bunlde.js文件，是已经被压缩过了。

#### 5.（掌握）[webpack](https://so.csdn.net/so/search?from=pc_blog_highlight&q=webpack)配置文件的分离

- webpack根据开发和生成环境一般可以将配置文件拆分，拆分dev和prod两种环境
- 我们在根目录下创建build文件夹，并创建三个配置文件，分别是：

```lua
|- /build
    |- base.config.js  公共配置
    |- dev.config.js   开发配置
    |- prod.config.js  生产配置
```

- 在scripts里修改相应的命令

```javascript
"build": "webpack --config ./build/prod.config.js",
    
"dev": "webpack-dev-server --open --config ./build/dev.config.js"
```

- 使用

  ```
  webpack-merge
  ```

  ,用以合并通用配置文件与开发环境配置文件

  - webpack-merge做了两件事：它允许连接数组并合并对象，而不是覆盖组合。

  - 安装

    - ```javascript
      npm install webpack-merge --save-dev
      ```

- 各文件代码如下

base.config.js

```js
 
// base.config.js 公共配置文件
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
 
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时, 是从右向左
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
              // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        // exclude: 排除
        // include: 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // alias: 别名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归aaa所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
 
```

 dev.conifg.js

```js
// 开发环境下的配置文件
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
 
module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})
```

prod.config.js

```js
// 生产环境下的配置文件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
 
module.exports = webpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
})
```

### (十一) 、本地服务器

#### 搭建本地服务器

- webpack提供了一个可选的本地开发服务器，这个本地服务器基于node.js搭建，内部使用express框架，可以实现我们想要的让浏览器自动刷新显示我们修改后的结果。
- 不过它是一个单独的模块，在webpack中使用之前需要先安装它

```javascript
npm install --save-dev webpack-dev-server@2.9.1
```

-   devserver也是作为webpack中的一个选项，选项本身可以设置如下属性：
-   - contentBase：为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
    - port：端口号
    - inline：页面实时刷新
    - historyApiFallback：在SPA页面中，依赖HTML5的history模式

-   webpack.config.js文件配置修改如下： 

 ![img](https://img-blog.csdnimg.cn/20210722163739537.png)

-  我们可以再配置另外一个scripts： --open参数表示直接打开浏览器

![img](https://img-blog.csdnimg.cn/20210722163753349.png)







# Vue项目supermall仿蘑菇街详解

## 前言

本文章是对coderwhy [vue](https://so.csdn.net/so/search?from=pc_blog_highlight&q=vue)项目仿蘑菇街做的一个步骤详解，此文章包含个人详解及主要步骤，由于代码较多较杂，就不放这了，代码大部分就用截图了

------

## 一、安装及创建

> **安装node,vue-cli，创建一个vue-cli3的项目**
>
> **(我自己用的是Cli-4）**	

##  二、项目开发

### 1.目录结构

按下图创建好文件夹

![img](https://img-blog.csdnimg.cn/20210805104426284.png)


![img](https://img-blog.csdnimg.cn/20210805105611220.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

###  2.设置CSS初始化和全局样式

-  normalize.css （自行去github下载）

-  base.css

![img](https://img-blog.csdnimg.cn/20210805105733679.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

在App.vue引用base.css

![img](https://img-blog.csdnimg.cn/2021080510520444.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 3.vue.config和editorconfig

- 新建vue.config.js

```js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
 
```

### 报错及解决方法

按照上述配置成功后，**应特别注意使用**，若还是**报错**：`These dependencies were not found:`

则应该**重启项目**，**再次运行之后就能成功**。

-  editorconfig 对代码风格进行统一，直接复制，如果你是项目组长的话，最好是有这个文件

![img](https://img-blog.csdnimg.cn/20210805141119492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 4.TabBar引入和项目模块划分

####  1） tabbar

- 把day7的 tabbar 文件夹复制到项目的compontents->  common 文件夹
-  把day7的 mainTabBar 文件夹复制到项目的compontents-> content 文件夹

 ![img](https://img-blog.csdnimg.cn/20210805110726537.png)

-  改一下MainTabBar里面的路径

![img](https://img-blog.csdnimg.cn/20210805111758841.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210805114116862.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  在App.vue使用MainTabBar组件

![img](https://img-blog.csdnimg.cn/20210805114206344.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

###  2）项目模块划分：tabbar -> 路由映射关系

- 复制day7的tabbar下，views文件夹里面的东西到项目的views文件夹下

![img](https://img-blog.csdnimg.cn/20210805114616706.png)![img](https://img-blog.csdnimg.cn/20210805114708547.png)

-  安装vue-router，复制 day7的router->index.js文件夹到项目里，在App.vue里面使用router-view

 ![img](https://img-blog.csdnimg.cn/20210805114801343.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

目前项目效果

![img](https://img-blog.csdnimg.cn/20210805114851292.png)

### 5.小图标的修改以及路径问题

![img](https://img-blog.csdnimg.cn/20210805141844670.png)

- 把favicon.ico图标替换掉

![img](https://img-blog.csdnimg.cn/20210805141948763.png)

![img](https://img-blog.csdnimg.cn/20210805141932605.png)

 ![img](https://img-blog.csdnimg.cn/20210805142354894.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

## 三、首页开发

### 1.首页导航栏的封装与使用

![img](https://img-blog.csdnimg.cn/20210805143838703.png)

-  新建文件夹文件

![img](https://img-blog.csdnimg.cn/20210805145741196.png)

```vue
// NavBar.vue
 
<template>
  <div class="nav-bar">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="center">
          <slot name="center"></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>
 
<script>
export default {
    name:'NavBar',
 
}
</script>
 
<style>
    .nav-bar{
        display: flex;
        height: 44px;
        background-color:red;
    }
    .left,.right{
        width: 60px;
    }
    .center{
        flex: 1;
        background-color: blue;
    }
</style>
```

```vue
// Home.vue
 
<template>
  <div id="home">
    <NavBar></NavBar>
  </div>
</template>
 
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
 
<style scoped>
</style>
```

效果

![img](https://img-blog.csdnimg.cn/20210805150006875.png)

-  修改一下样式

![img](https://img-blog.csdnimg.cn/20210805150552840.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210805150617256.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210805150628420.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

------



2.请求首页的多个数据

-  复制day9的request.js文件到项目的network文件夹，删掉其中不必要的东西

![img](https://img-blog.csdnimg.cn/20210805151138239.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  安装axios

![img](https://img-blog.csdnimg.cn/20210805151255284.png)

-  network文件夹下新建home.js文件，用来封装首页的所有网络请求

 ![img](https://img-blog.csdnimg.cn/20210805160146635.png)

- 在首页App.vue使用 

 ![img](https://img-blog.csdnimg.cn/20210805160241555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210805160319588.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

###  2.轮播图的展示

- 从Day9的预习代码复制components->common->swiper文件夹 

![img](https://img-blog.csdnimg.cn/20210805160718442.png)

-  引用

![img](https://img-blog.csdnimg.cn/20210805163151572.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210805163103560.png)

-  这样写Swiper又是一坨在Home.vue，把它封装一下，在home文件夹下新建文件夹childComps，再创建文件HomeSwiper.vue

```vue
// HommSwiper.vue
 
<template>
    <Swiper>
      <SwiperItem v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </SwiperItem>
    </Swiper>
</template>
 
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  }
};
</script>
 
<style>
</style>
```

![img](https://img-blog.csdnimg.cn/20210805165205561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210805165316336.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210805165316336.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

```vue
<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>
 
<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
 
<style>
    .recommend{
        display: flex;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>
```

 ![img](https://img-blog.csdnimg.cn/20210805171501548.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

目前首页效果

![img](https://img-blog.csdnimg.cn/2021080517152142.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 4.FeatureView的封装 

- childComps下新建文件FeatureView.vue文件 

![img](https://img-blog.csdnimg.cn/20210805173607410.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210805173707701.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210805173925241.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 添加以下样式，使home-nav固定 

 ![img](https://img-blog.csdnimg.cn/20210805174804466.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210805174821729.png)



------

### 5.TabControl的封装

-  content新建文件TabControl，因为首页的tabcontrol与分类的只是文字不同，所以这里不用插槽，直接用props传值

 ![img](https://img-blog.csdnimg.cn/20210805214721655.png)![img](https://img-blog.csdnimg.cn/20210805214741117.png)

 ![img](https://img-blog.csdnimg.cn/2021080521491696.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210805215255713.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210805215220707.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210805215312114.png)

-  修改一下样式



 ![img](https://img-blog.csdnimg.cn/20210805220117886.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210805220128316.png)

- 目前效果 

 ![img](https://img-blog.csdnimg.cn/20210805220138388.png)

- 
   实现点击添加样式功能

 ![img](https://img-blog.csdnimg.cn/20210805220746988.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)



- 实现tabControl吸顶（停留效果）

![img](https://img-blog.csdnimg.cn/20210805222236678.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210805222254470.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210805222308284.png)

### 6.保存商品的数据结构设计

 goods: (流行/新款/精选)

```vue
goods: {
  'pop': {page: 5, list: [150]},
  'news': {page: 2, list: [60]},
  'sell': {page: 1, list: [30]}
}
```

### 7.首页数据的请求和保存

- 默认请求三个的第一页数据，其他的等点击对应选项且下拉时再加载

 ![img](https://img-blog.csdnimg.cn/20210806135938272.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- goods里面的news要改为new 

![img](https://img-blog.csdnimg.cn/20210806140007616.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  此时created里面的代码有点多，一般created里面只做调用，把这些函数封装到methods里面

![img](https://img-blog.csdnimg.cn/20210806141158443.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  这样写的话，getHomeGoods也能动态传类型

![img](https://img-blog.csdnimg.cn/20210806141413342.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- page的1不能写死，不然每次调用都是请求第一页的数据，应该是goods里面的page+1 

![img](https://img-blog.csdnimg.cn/20210806141904867.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  保存商品数据

![img](https://img-blog.csdnimg.cn/2021080615353674.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210806153602881.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

8.首页商品数据的展示

-  content文件夹新建goods文件夹，新建GoodsList.vue和GoodsListItem.vue
-  用props把对应type的goods传给GoodsList.vue
- 用props把对应的goods里面的每一个商品item传给GoodsListItem.vue

 ![img](https://img-blog.csdnimg.cn/20210806150141737.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210806150207471.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210806150221779.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210806150242732.png)

- 把数据全部展示出来

 ![img](https://img-blog.csdnimg.cn/20210806152248764.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210806152258519.png)

- 添加一下样式，直接从Day9预习代码里面复制goodsListItem.vue的css代码，目前效果如下

![img](https://img-blog.csdnimg.cn/20210806152528122.png)

- 让商品一行两个均等分显示 

![img](https://img-blog.csdnimg.cn/20210806152813635.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210806152836924.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)



![img](https://img-blog.csdnimg.cn/20210806152801105.png)

-  小bug：tabControl被覆盖了，加个z-index就行

![img](https://img-blog.csdnimg.cn/20210806152924933.png)![img](https://img-blog.csdnimg.cn/20210806153038367.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 9.TabControl切换商品 

-  之前点击是在tabControl，要把index传到home里面

 ![img](https://img-blog.csdnimg.cn/20210806155940636.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210806160120637.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210806160214137.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 效果

 ![img](https://img-blog.csdnimg.cn/20210806160235111.png)![img](https://img-blog.csdnimg.cn/20210806160248108.png)

- 封装一下 

 ![img](https://img-blog.csdnimg.cn/2021080819051412.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 10.Better-Scroll的安装和使用 

-  之前用的都是浏览器原生的滚动，不够顺滑，使用better-scroll做滚动
-  安装

![img](https://img-blog.csdnimg.cn/20210806161906992.png)

- 在Category.vue组件做better-scroll的使用演示
- 实现局部滚动 
  - 浏览器原生方法，会比较卡顿
    - ![img](https://img-blog.csdnimg.cn/20210806163154464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- - - ![img](https://img-blog.csdnimg.cn/20210806163228829.png)
  - better-scroll，丝滑，有回弹效果

   ![img](https://img-blog.csdnimg.cn/20210806170528792.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

  

  ![img](https://img-blog.csdnimg.cn/20210806165210628.png)

  

- html里面基本使用 

![img](https://img-blog.csdnimg.cn/20210806171121944.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 11.BScroll的封装和使用 

- better-scroll的使用要求 

![img](https://img-blog.csdnimg.cn/img_convert/7398c245173257e7ced7c396f0e93575.webp?x-oss-process=image/format,png)

- 滚动条的区域就在wrapper，而我们的内容content则要大于等于滚动区域wrapper的高度，二者均需要指定高度
- 安装better-scroll,common新建文件夹scroll，新建文件Scroll.vue

![img](https://img-blog.csdnimg.cn/20210807151129466.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210807151526541.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210807151602928.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

ref如果是绑定在**组件**中的, 那么通过**this.$refs.refname**获取到的是一个组件对象.

ref如果是绑定在普通的**元素**中, 那么通过**this.$refs.refname**获取到的是一个元素对象.

-  效果，在300px的范围内实现了局部滚动

![img](https://img-blog.csdnimg.cn/20210807151801659.png)

- 确定中间的高度 

![img](https://img-blog.csdnimg.cn/20210807153849985.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  方案1

![img](https://img-blog.csdnimg.cn/20210807154630915.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 方案2 

![img](https://img-blog.csdnimg.cn/20210807154713752.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210807154744259.png)

### 12.Backtop组件的封装和使用 

-  文件夹content下新建backTop文件夹，文件BackTop.vue

![img](https://img-blog.csdnimg.cn/20210807160056825.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 12.Backtop组件的封装和使用 

-  文件夹content下新建backTop文件夹，文件BackTop.vue

![img](https://img-blog.csdnimg.cn/20210807160056825.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

13.BackTop的显示和隐藏 

 ![img](https://img-blog.csdnimg.cn/20210807170734291.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/202108071708160.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/2021080717092376.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

------

###  14.完成上拉加载更多

 ![img](https://img-blog.csdnimg.cn/20210807174704522.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210807174719595.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210807174814372.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210807174902745.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 小bug，下拉之后滚动不了 ，这个后面再一起解决

![img](https://img-blog.csdnimg.cn/2021080717540674.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 15.滚动区域的Bug分析和解决

-  把上面关于上拉加载更多的代码删掉

![img](https://img-blog.csdnimg.cn/20210807193314509.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  分析

![img](https://img-blog.csdnimg.cn/20210807193805638.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210808143828358.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 事件总线解决滑动bug 

> -  [Vue中的事件总线：$bus](https://www.cnblogs.com/a973692898/p/12896105.html)
> - [vue 事件总线EventBus的概念、使用以及注意点](https://zhuanlan.zhihu.com/p/166215893)

![img](https://img-blog.csdnimg.cn/20210808151340393.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210808151410620.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210808151430820.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 16.refresh函数找不到的bug处理 

- created()有可能拿不到refs，最好判断scroll存不存在 

![img](https://img-blog.csdnimg.cn/20210808153742995.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210808153807482.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210808154127352.png)

### 17.刷新频繁的防抖函数处理 

> - [浅谈 JS 防抖和节流](https://segmentfault.com/a/1190000018428170)
> - [前端节流、防抖](https://blog.csdn.net/wen_binobject/article/details/82425291)
> - [前端性能优化——防抖（debounce）](https://blog.csdn.net/weixin_43371610/article/details/100100120?utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-1.control)

![img](https://img-blog.csdnimg.cn/20210808162032317.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 18.上拉加载更多的完成

直接看第14那里 

------

### 19.tabControl的offsetTop获取分析 

![img](https://img-blog.csdnimg.cn/20210808184457712.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210808184511119.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 20.tabControl的吸顶效果完成 

#### 获取到tabControl的offsetTop

![img](https://img-blog.csdnimg.cn/20210808190625937.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210808190828427.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210808190910190.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210808191030503.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

###  监听滚动, 动态的改变tabControl的样式

![img](https://img-blog.csdnimg.cn/20210808192626901.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  用动态绑定class会有bug,tabControl会消失

![img](https://img-blog.csdnimg.cn/2021080914462674.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210809144649840.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210809144705644.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 直接复制tabControl 

![img](https://img-blog.csdnimg.cn/20210809150007739.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 ![img](https://img-blog.csdnimg.cn/20210809150042489.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 停留效果完成，但是还有其他bug ，两个选项卡没有同步

 ![img](https://img-blog.csdnimg.cn/20210809150229740.png)![img](https://img-blog.csdnimg.cn/20210809150241784.png)

-  改一下ref，做一下区分，在tabClick修改对应的currentIndex

 ![img](https://img-blog.csdnimg.cn/20210809150813970.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210809150830748.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210809150908573.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

-  吸顶效果完成

 ![img](https://img-blog.csdnimg.cn/20210809151011470.png)![img](https://img-blog.csdnimg.cn/20210809151021748.png)

### 21.Home离开时记录状态和位置 

#### 让Home不要随意销毁掉 

- 每次离开home，都会被销毁 

 ![img](https://img-blog.csdnimg.cn/20210809152013304.png)![img](https://img-blog.csdnimg.cn/20210809151944931.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)



-  加keep-alive，home没有被销毁了，但是滚动位置还是改变了，是better-scroll的原因，但最新版似乎没有这个问题

 ![img](https://img-blog.csdnimg.cn/20210809152215113.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 让Home中的内容保持原来的位置

- 离开时, 保存一个位置信息saveY.
- 进来时, 将位置设置为原来保存的位置saveY信息即可.
  - 注意: 最好回来时, 进行一次refresh() 

![img](https://img-blog.csdnimg.cn/20210809155722516.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210809155736592.png)

### 22.跳转到详情页并携带id 

- 新建文件，配置路由关系，监听GoodsListItem点击事件 

![img](https://img-blog.csdnimg.cn/20210809162800309.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210809162819713.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210809162830856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

------

- 首页基本完成了



vue项目仿蘑菇街步骤详解

## 四、详情页的开发

### 一、详情页-导航栏的封装

- 导航稍微有点复杂，不要在直接`Deatil.vue`里面做
- `detail`文件夹下新建文件夹`childComps`，里面新建文件`DetailNavBar.vue`
  - `Detail.vue`

- - ![在这里插入图片描述](https://img-blog.csdnimg.cn/c15e5a1b0c9e4e14bb95357c7593d464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/a9de28e5ac674dedbf1aa93251bf19df.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/18a53208a3584c2d8c978e45f90d0d3e.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  - `Detail.vue`
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/427f3089c3df44988416bb0bf7474109.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
- 效果
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/3f902e976c2e4ab8adfc5d236d50bba4.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)



### 二、数据请求以及轮播图展示

#### 1.数据请求

- `network` 文件夹新建文件`detail.js`
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/6cafbe7fcc2d47b1af789559746315c0.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)



![在这里插入图片描述](https://img-blog.csdnimg.cn/cf410c3904624568b51ca6f4fc0b15a1.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

#### 2.轮播图展示

- `DetailSwiper.vue`

```vue
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>


```

- bug：每一个详情的数据没有更新，因为keep-alive缓存了
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/64603eff46a34747a65bf1b2ed8181a5.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 三、商品基本信息的展示

#### **数据整合**，使用类Class

![在这里插入图片描述](https://img-blog.csdnimg.cn/914ff2c43a3c442d89dcc9f3e7f62d38.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/788952bcac8c4251b9c6b77124335c93.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/8f7ead9d9b2347fc800a27a0bac9533a.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- `detail.js`
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/91393c712e684326bba1368e292d084c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
- `Detail.vue`
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/b52ad9bda09f4860b94077c6a60bbb61.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 目前goods里的数据如下
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/fad4e544523c4783b054750482c3b537.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

#### 商品基本信息展示

![在这里插入图片描述](https://img-blog.csdnimg.cn/531b1dce7d1642529c1140162284160a.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 新建`DetailBaseInfo.vue`,内容如下

```vue
<template>
  <!-- 有数据展示，无数据就不展示 Object.keys().length判断对象是不是空的  -->
  <div v-if="Object.keys(goods).length != 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <!-- services在info-other已经展示过了，所以这里 -1 循环的是一个数字 -->
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>


<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}

.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>


```

### 四、店铺信息的解析和展示

![在这里插入图片描述](https://img-blog.csdnimg.cn/f08c78d40c1b41a8b6e8ad215db9923d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
`DetailShopInfo.vue`直接复制源码，目前效果如下
![在这里插入图片描述](https://img-blog.csdnimg.cn/60e937e999d94b36a744ae318c0eea6b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 五、加入滚动效果的scroll

#### 详情页不显示tabBar

![在这里插入图片描述](https://img-blog.csdnimg.cn/000f2ae85a984992ab758dd78e5a4f18.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b1b19eada78b44179a3d00c95527ddcb.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/c67f608d094c48a087a2f2f5beab2257.png)

#### 加入scroll

![在这里插入图片描述](https://img-blog.csdnimg.cn/87311e60b56b41dab76bab586b375408.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)



### 六、商品详情数据展示

直接复制源码的`DetaiLGoodsInfo.vue`，并修改相关代码

### 七、商品参数的展示

直接复制源码的`DetaiLParamInfo.vue`，并修改相关代码

### 八、商品评论信息的展示

直接复制源码的`DetaiLCommentInfo.vue`，并修改相关代码

![在这里插入图片描述](https://img-blog.csdnimg.cn/b1c1e9cf45164a17a5d1270261ce4747.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/15671ab3de5d47808d263a72d868dace.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/107f2b7e0b5b4204a1e5187e19bc3579.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 九、商品推荐数据的展示

- `detail.js`封装请求推荐数据函数
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/689cf31078ea4e2cb2f9c94a626a0de4.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
- `Detail.vue`请求推荐数据
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/2d4696300c9d41de9ce05570a463c9b4.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 使用之前封装的`GoodsList.vue`，传recommends给它，由于与首页的商品数据结构有些不同，这里需要在`GoodsListItem.vue`用`computed`做一个判断
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/d84f2eb32d684b97a4fa80c61e090c35.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/fdadc1dca865404d936fe2e7cbae04e4.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

 `DetailGoodsInfo.vue` 需要改一下，不然不占位会有bug，会覆盖住上面的图片
![在这里插入图片描述](https://img-blog.csdnimg.cn/f3255b884dec47ecab7ecb9fdd377e28.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 十、首页和详情页监听全局事件和mixin的使用

#### 首页和详情页监听全局事件

 推荐商品是使用之前封装的`GoodsLIst.vue`，里面对图片加载进行监听，并通知到首页进行刷新，但是我们这里是在详情页，却对首页刷新，不应该这样。应该做一个区分，怎么区分监听首页还是详情页？

- 方式一：路由

- ![在这里插入图片描述](https://img-blog.csdnimg.cn/cde95ae464a3441faab42cdd08f2bf3b.png)
- 方式二：离开时取消事件监听
  - `Home.vue`
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/f67e8e6382dd447cb8bd785f7c2da559.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/3e76c2e22cef41ee866668f635003456.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  - `Detail.vue`也做一层封装
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/9e808ddfb56d49048b19a30b1205ed3b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- 我们会发现,`mounted`里面的代码是一样的，所以用mixin对它进行一下封装

#### mixin(混入)的使用

[vue官网中的mixin混入](https://cn.vuejs.org/v2/guide/mixins.html)

- `common`文件夹新建`mixin.js`，把`mounted`重复代码和`data`里面的`itemImgListener: null`,剪切进去

- ![在这里插入图片描述](https://img-blog.csdnimg.cn/deabdf17c0ab42a5a1f4c949572f3858.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
- 在`Home.vue`和`Detail.vue`里面导入使用
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/3d57023a80c64ac38fe76bc6fdb8b160.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/6f5c07facc2a49e1a3577669e7748613.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/84482c2514064bbb8601bc8dbf14b103.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 十一、点击标题滚动到对应内容

- 在`created`里面这样写不行
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/f1f19632241a434aad9662b877f31fd6.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
- 需要在图片加载完后，再获取`offsetTop`,避免获取频繁，使用防抖`debounce`
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/feaa758b88c94514978e1c4303094909.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/6a07dca446bf4339bd85b150123713a6.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/9111d7c9665c4b28a91716288e8e4c87.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/1845c910ca134ca0aab0869c217d3fa7.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/9c9889619eec4421ac9dab1259a3ba1a.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 十二、滚动内容显示对应标题

- 普通做法
  - 优点: 不需要引入其他的内容, 通过逻辑解决
  - 缺点: 判断条件过长, 并且不容易理解
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/b5e2eba07a694cc896dff2bdbd2c070e.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/5cc12b449dca420fbcc207d57e9653ba.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/72a9906e3ed84c4fa0df60315110d6ea.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 十三、对复杂判断条件分析与优化

- hack做法

  - 条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.

  - 优点: 简洁明了, 便于理解

  - 缺点: 需要引入一个较大的int数字

- - ![在这里插入图片描述](https://img-blog.csdnimg.cn/d2d04e5ab68c484eb6d3ccd256cc9e8a.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/48438349d9cc49d48587a3eed762b683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 十四、底部工具栏的封装

- 直接复制`DetailBottomBar.vue`并引入

### 十五、BackTop的混入封装

- 视频将BackTop做了混入封装，但是个人觉得太乱太麻烦，就不抽取了，直接复制过去

### 十六、将商品加入购物车中

![在这里插入图片描述](https://img-blog.csdnimg.cn/cf4f34621102456aae227e8f8c796a95.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 十七、将商品添加到store

![在这里插入图片描述](https://img-blog.csdnimg.cn/57a7f6783af54789a0c40cecbe9eb1af.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/7df7f970fe254421a47887ea3eb62fbe.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 十八、[Vue](https://so.csdn.net/so/search?from=pc_blog_highlight&q=Vue)x中代码重构

- `mutations`每个方法尽可能完成的事件比较单一一点，但是我们这里的`addCart`做了两件事：数量加一和新添加商品，这种有逻辑判断的放actions里面比较好

- - `Detail.vue`
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/af2f0647bff149e191c7eea7c6925e59.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  - `index.js`
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/8abc15395eb64cb2905df4a8dace9a45.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/ca03a520809c4c9695f202c205954ce0.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
- 视频中还对`store`做了模块抽取，我这里就不抽取了



## 五、购物车开发

### 一、导航栏实现-[Vue](https://so.csdn.net/so/search?from=pc_blog_highlight&q=Vue)x知识点

#### navbar

![在这里插入图片描述](https://img-blog.csdnimg.cn/655cd19af52649819610d95140d80933.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- `cartLength`可以直接在`computed`里面写，如果引用的地方多的话就可以写在`getter`里面
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/50322251ecb44dd7819d3fe8cae7b25b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
- 普通引用`getter`与使用`computed`代码量差不多，这里使用`mapGetters`辅助函数直接混入

- `cartLength`可以直接在`computed`里面写，如果引用的地方多的话就可以写在`getter`里面
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/50322251ecb44dd7819d3fe8cae7b25b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
- 普通引用`getter`与使用`computed`代码量差不多，这里使用`mapGetters`辅助函数直接混入

### 二、购物车商品列表展示

- `CartList`引入`scroll`
- 复制粘帖源码`CartListItem.vue`,
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/a7d0b043dbb94a9482fe125fc503b08b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/8d0d75af7ba0458fadd12bcdf7d8169e.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

重点：`CheckBotton.vue`
-![在这里插入图片描述](https://img-blog.csdnimg.cn/892172a8164c4ca286dacb71998cd2dd.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9105466d65334de284d883904f564ae0.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/fb44d8fc4a304d56af6ca30f234cb502.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 三、item选中与不选中的切换

- 记录选中状态不能在属性里面，一定是在对象模型`cartList[商品1,商品2]`里面记录
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/77279c647cf044128faf0a861a90c9f6.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/ab7625b35f3e42cca4255cbd9e0434ce.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/6f988a9aacbf487280c8a389903c8daa.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/a292cbbb0230408f9e01a8613f6c8fc9.png)

> - **关于修改props的值，却能修改state的问题**
>   ![在这里插入图片描述](https://img-blog.csdnimg.cn/8b7d783e3e2b420e93022b0aa3b386a6.png)

### 四、底部工具的封装和使用

```vue
<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton class="check-button"></CheckButton>
      <span>全选</span>
    </div>
    <div class="price">合计 : {{ totalPrice }}</div>
    <div class="calculate">去计算 ( {{ checkLength }} )</div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";

import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 90px;
  color: #fff;
  background-color: red;
  text-align: center;
}
</style>


```

### 五、全选按钮的状态显示

![在这里插入图片描述](https://img-blog.csdnimg.cn/b01d88e1cd8f449290113009c80067b5.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/5cb860a700734891acfbd19e760eb1f4.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 六、全选按钮的点击效果

![在这里插入图片描述](https://img-blog.csdnimg.cn/ac166310194b4d74b13121c545e2155e.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e801ab8a916045eb9641085528e66abd.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 七、Vuex-actions返回Promise-mapActions

- 弹出Toast不是直接在addCart后面添加代码，而是要进行回调
- `actions`返回`Promise`普通写法
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/1c48c815e2c74fecaec10d93c12e16e0.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/47019591b1a34ebc82362907fe76abb4.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
- 使用`mapActions`映射
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/863abec52921419c87bc62a407df4037.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/ececb4651cc54e37a0555880530e6ca3.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 八、Toast封装-普通方式封装

![在这里插入图片描述](https://img-blog.csdnimg.cn/31fd5694034e4e27884077915cc831ce.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/70dfbabe05e64520a487979deccaece6.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e839112a7fa14b4abd51a4a351f22786.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/4a1cd822b4254896af6984a557a3830d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/a34ae65fd5e543a8a2d09741be6c1a35.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- `CartBottomBar.vue`如果也需要使用`Toast`，会比较麻烦

### 九、Toast封装-插件方式

- `Toast.vue`

```vue
<template>
  <div class="toast">
    <div v-show="isShow">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message='默认文字', duration=2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;

  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);

  z-index: 999;
}
</style>

```

toast文件夹新建`index.js`
![在这里插入图片描述](https://img-blog.csdnimg.cn/016719cf256841fd9855bd05d6e68754.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b7982038f04e483e86589e6d61a84b95.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

- `Toast`封装完成，直接使用，不需要引入
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/622dc16006284a9786956346c9fabb3c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/79e6a8a3bcbd4768913709823fd8a416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/ec2402250d994514b0a8cc6d0c11ba64.png)

### 十、fastclick-解决移动端300ms延迟

- 安装
  `npm install fastclick --save`
- 导入，使用
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/aa8104eb4cdb4229b01cacdb81b23db7.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 十一、图片懒加载-vue-lazyload框架

- 安装
  `npm install vue-lazyload --save`
- 导入使用
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/af471b74c58f421a82b4aacd4746d2b7.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/1318cd000f5044e09e0b4c370103f4f2.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)
- 使用占位图片
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/bad699dd34fb426db89fb1f6de1ee624.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMDczODEx,size_16,color_FFFFFF,t_70)

### 十二、px2vw - css单位转化插件

- 安装
  `npm install postcss-px-to-viewport --save-dev`
- 配置`postcss.config.js`，如果没有这个文件，自行创建

```vue
module.exports = {
  plugins: {
    autoprefixer: {},
	  "postcss-px-to-viewport": {
		  viewportWidth: 375,  // 视窗的宽度，对应的是我们设计稿的宽度.
		  viewportHeight: 667, // 视窗的高度，对应的是我们设计稿的高度.(也可以不配置)
		  unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
		  viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
		  selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 指定不需要转换的类,后面再讲.
		  minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位.
		  mediaQuery: false, // 允许在媒体查询中转换`px`
		  exclude:[/TabBar/] // 必须是正则，匹配文件的

	  },
  }
}


```

![在这里插入图片描述](https://img-blog.csdnimg.cn/ec2402250d994514b0a8cc6d0c11ba64.png)
