(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{596:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"commonjs模块与es6模块的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs模块与es6模块的区别"}},[s._v("#")]),s._v(" CommonJS模块与ES6模块的区别")]),s._v(" "),a("p",[s._v("到目前为止，已经实习了3个月的时间了。最近在面试，在面试题里面有题目涉及到模块循环加载的知识。趁着这个机会，将CommonJS模块与ES6模块之间一些重要的的区别做个总结。语法上有什么区别就不具体说了，主要谈谈引用的区别。")]),s._v(" "),a("p",[s._v("转载请注明出处："),a("a",{attrs:{href:"http://www.cnblogs.com/unclekeith/p/7679503.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CommonJS模块与es6模块的区别"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[s._v("#")]),s._v(" CommonJS")]),s._v(" "),a("ol",[a("li",[s._v("对于基本数据类型，属于复制。即会被模块缓存。同时，在另一个模块可以对该模块输出的变量重新赋值。")]),s._v(" "),a("li",[s._v("对于复杂数据类型，属于浅拷贝。由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时会影响另一个模块。")]),s._v(" "),a("li",[s._v("当使用require命令加载某个模块时，就会运行整个模块的代码。")]),s._v(" "),a("li",[s._v("当使用require命令加载同一个模块时，不会再执行该模块，而是取到缓存之中的值。也就是说，CommonJS模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。")]),s._v(" "),a("li",[s._v('循环加载时，属于加载时执行。即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。')])]),s._v(" "),a("h3",{attrs:{id:"es6模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6模块"}},[s._v("#")]),s._v(" ES6模块")]),s._v(" "),a("ol",[a("li",[s._v("ES6模块中的值属于【动态只读引用】。")]),s._v(" "),a("li",[s._v("对于只读来说，即不允许修改引入变量的值，import的变量是只读的，不论是基本数据类型还是复杂数据类型。当模块遇到import命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。")]),s._v(" "),a("li",[s._v("对于动态来说，原始值发生变化，import加载的值也会发生变化。不论是基本数据类型还是复杂数据类型。")]),s._v(" "),a("li",[s._v("循环加载时，ES6模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行。")])]),s._v(" "),a("p",[s._v("上面说了一些重要区别。现在举一些例子来说明每一点吧")]),s._v(" "),a("h3",{attrs:{id:"commonjs-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-2"}},[s._v("#")]),s._v(" CommonJS")]),s._v(" "),a("ol",[a("li",[s._v("对于基本数据类型，属于复制。即会被模块缓存。同时，在另一个模块可以对该模块输出的变量重新赋值。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// b.js\nlet count = 1\nlet plusCount = () => {\n  count++\n}\nsetTimeout(() => {\n  console.log('b.js-1', count)\n}, 1000)\nmodule.exports = {\n  count,\n  plusCount\n}\n\n// a.js\nlet mod = require('./b.js')\nconsole.log('a.js-1', mod.count)\nmod.plusCount()\nconsole.log('a.js-2', mod.count)\nsetTimeout(() => {\n    mod.count = 3\n    console.log('a.js-3', mod.count)\n}, 2000)\n\nnode a.js\na.js-1 1\na.js-2 1\nb.js-1 2  // 1秒后\na.js-3 3  // 2秒后\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("以上代码可以看出，b模块export的count变量，是一个复制行为。在plusCount方法调用之后，a模块中的count不受影响。同时，可以在b模块中更改a模块中的值。如果希望能够同步代码，可以export出去一个getter。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 其他代码相同\nmodule.exports = {\n  get count () {\n    return count\n  },\n  plusCount\n}\n\nnode a.js\na.js-1 1\na.js-2 1\nb.js-1 2  // 1秒后\na.js-3 2  // 2秒后， 由于没有定义setter，因此无法对值进行设置。所以还是返回2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ol",[a("li",[s._v("对于复杂数据类型，属于浅拷贝。由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时会影响另一个模块。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// b.js\nlet obj = {\n  count: 1\n}\nlet plusCount = () => {\n  obj.count++\n}\nsetTimeout(() => {\n  console.log('b.js-1', obj.count)\n}, 1000)\nsetTimeout(() => {\n  console.log('b.js-2', obj.count)\n}, 3000)\nmodule.exports = {\n  obj,\n  plusCount\n}\n\n// a.js\nvar mod = require('./b.js')\nconsole.log('a.js-1', mod.obj.count)\nmod.plusCount()\nconsole.log('a.js-2', mod.obj.count)\nsetTimeout(() => {\n  mod.obj.count = 3\n  console.log('a.js-3', mod.obj.count)\n}, 2000)\n\nnode a.js\na.js-1 1\na.js-2 2\nb.js-1 2\na.js-3 3\nb.js-2 3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("p",[s._v("以上代码可以看出，对于对象来说属于浅拷贝。当执行a模块时，首先打印obj.count的值为1，然后通过plusCount方法，再次打印时为2。接着在a模块修改count的值为3，此时在b模块的值也为3。")]),s._v(" "),a("p",[s._v("3.当使用require命令加载某个模块时，就会运行整个模块的代码。")]),s._v(" "),a("p",[s._v("4.当使用require命令加载同一个模块时，不会再执行该模块，而是取到缓存之中的值。也就是说，CommonJS模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。")]),s._v(" "),a("p",[s._v('5.循环加载时，属于加载时执行。即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("3, 4, 5可以使用同一个例子说明\n\n// b.js\nexports.done = false\nlet a = require('./a.js')\nconsole.log('b.js-1', a.done)\nexports.done = true\nconsole.log('b.js-2', '执行完毕')\n\n// a.js\nexports.done = false\nlet b = require('./b.js')\nconsole.log('a.js-1', b.done)\nexports.done = true\nconsole.log('a.js-2', '执行完毕')\n\n// c.js\nlet a = require('./a.js')\nlet b = require('./b.js')\n\nconsole.log('c.js-1', '执行完毕', a.done, b.done)\n\nnode c.js\nb.js-1 false\nb.js-2 执行完毕\na.js-1 true\na.js-2 执行完毕\nc.js-1 执行完毕 true true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("仔细说明一下整个过程。")]),s._v(" "),a("ol",[a("li",[s._v("在Node.js中执行c模块。此时遇到require关键字，执行a.js中所有代码。")]),s._v(" "),a("li",[s._v("在a模块中exports之后，通过require引入了b模块，执行b模块的代码。")]),s._v(" "),a("li",[s._v("在b模块中exports之后，又require引入了a模块，此时执行a模块的代码。")]),s._v(" "),a("li",[s._v("a模块只执行exports.done = false这条语句。")]),s._v(" "),a("li",[s._v("回到b模块，打印b.js-1, exports, b.js-2。b模块执行完毕。")]),s._v(" "),a("li",[s._v("回到a模块，接着打印a.js-1, exports, b.js-2。a模块执行完毕")]),s._v(" "),a("li",[s._v("回到c模块，接着执行require，需要引入b模块。由于在a模块中已经引入过了，所以直接就可以输出值了。")]),s._v(" "),a("li",[s._v("结束。")])]),s._v(" "),a("p",[s._v("从以上结果和分析过程可以看出，当遇到require命令时，会执行对应的模块代码。当循环引用时，有可能只输出某模块代码的一部分。当引用同一个模块时，不会再次加载，而是获取缓存。")]),s._v(" "),a("h3",{attrs:{id:"es6模块-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6模块-2"}},[s._v("#")]),s._v(" ES6模块")]),s._v(" "),a("ol",[a("li",[s._v("es6模块中的值属于【动态只读引用】。只说明一下复杂数据类型。")]),s._v(" "),a("li",[s._v("对于只读来说，即不允许修改引入变量的值，import的变量是只读的，不论是基本数据类型还是复杂数据类型。当模块遇到import命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。")]),s._v(" "),a("li",[s._v("对于动态来说，原始值发生变化，import加载的值也会发生变化。不论是基本数据类型还是复杂数据类型。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// b.js\nexport let counter = {\n  count: 1\n}\nsetTimeout(() => {\n  console.log('b.js-1', counter.count)\n}, 1000)\n\n// a.js\nimport { counter } from './b.js'\ncounter = {}\nconsole.log('a.js-1', counter)\n\n// Syntax Error: \"counter\" is read-only\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("虽然不能将counter重新赋值一个新的对象，但是可以给对象添加属性和方法。此时不会报错。这种行为类型与关键字const的用法。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// a.js\nimport { counter } from './b.js'\ncounter.count++\nconsole.log(counter)\n\n// 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",[a("li",[s._v("循环加载时，ES6模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// b.js\nimport {foo} from './a.js';\nexport function bar() {\n  console.log('bar');\n  if (Math.random() > 0.5) {\n    foo();\n  }\n}\n\n// a.js\nimport {bar} from './b.js';\nexport function foo() {\n  console.log('foo');\n  bar();\n  console.log('执行完毕');\n}\nfoo();\n\nbabel-node a.js\nfoo\nbar\n执行完毕\n\n// 执行结果也有可能是\nfoo\nbar\nfoo\nbar\n执行完毕\n执行完毕\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("由于在两个模块之间都存在引用。因此能够正常执行。")]),s._v(" "),a("p",[s._v("以上以上。对ES6 module和CommonJSmodule有不了解的同学可以参考一下以下的文章哈")])])}),[],!1,null,null,null);n.default=t.exports}}]);