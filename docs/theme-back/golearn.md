---
title: go语言学习
date: 2021-12-11
tags:
 - 后端
 - go
categories:
 -  2021
---

# go:grinning:

一招完美解决vscode安装go插件失败问题

###### vscode 安装go插件

前置

用vscode新建一个go文件

使用go mod 代理来安装

前置

从https://studygolang.com/dl下载go1.14.6.windows-amd64.msi安装即可，安装路径选择默认，安装完成后会自动帮你配置环境变量不用自己配置了

打开cmd，查看是否安装完成

 

这样就代表已经成功安装了

用vscode新建一个go文件

 

 

vscode会提示你安装go插件

点击install all

这时候会安装失败

Installing github.com/mdempsky/gocode FAILED

Installing github.com/uudashr/gopkgs/v2/cmd/gopkgs FAILED

Installing github.com/ramya-rao-a/go-outline FAILED

Installing github.com/acroca/go-symbols FAILED

Installing golang.org/x/tools/cmd/guru FAILED

Installing golang.org/x/tools/cmd/gorename FAILED

Installing github.com/cweill/gotests/… FAILED

Installing github.com/fatih/gomodifytags FAILED

Installing github.com/josharian/impl FAILED

Installing github.com/davidrjenni/reftools/cmd/fillstruct FAILED

Installing github.com/haya14busa/goplay/cmd/goplay FAILED

Installing github.com/godoctor/godoctor FAILED

Installing github.com/go-delve/delve/cmd/dlv FAILED

Installing github.com/stamblerre/gocode FAILED

Installing github.com/rogpeppe/godef FAILED

Installing github.com/sqs/goreturns FAILED

Installing golang.org/x/lint/golint FAILED

原因你懂的

 

使用go mod 代理来安装

https://goproxy.io是一个国内的代理

执行

 

go env -w GO111MODULE=on

go env -w GOPROXY=https://goproxy.io,direct

1

2

关闭vscode重新打开，再次点击install all

 

 

成功安装

 

开启go mod 代理后也可以手动安装

 

go get -u -v github.com/mdempsky/gocode

go get -u -v github.com/uudashr/gopkgs/v2/cmd/gopkgs

go get -u -v github.com/ramya-rao-a/go-outline

go get -u -v github.com/acroca/go-symbols

go get -u -v golang.org/x/tools/cmd/guru

go get -u -v golang.org/x/tools/cmd/gorename

go get -u -v github.com/cweill/gotests/...

go get -u -v github.com/fatih/gomodifytags

go get -u -v github.com/josharian/impl

go get -u -v github.com/davidrjenni/reftools/cmd/fillstruct

go get -u -v github.com/haya14busa/goplay/cmd/goplay

go get -u -v github.com/godoctor/godoctor

go get -u -v github.com/go-delve/delve/cmd/dlv

go get -u -v github.com/stamblerre/gocode

go get -u -v github.com/rogpeppe/godef

go get -u -v github.com/sqs/goreturns

go get -u -v golang.org/x/lint/golint

 

 

 

###### 第一个项目

package main

 

import "fmt"

 

func main() {

  fmt.Println("hello,world")

}

 

 

go run .\hello.go

 

 

 

可执行go build .\hello.go

![img](file:///C:/Users/10177/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

Go build报错

go: creating new go.mod: module hello.go

go: to add module requirements and sums:

​    go mod tidy

 

go mod init .\hello.go

###### 初始化项目即可

.\hello.go.exe运行文件

​		



```go
# 下划线连接
student_name

# 小驼峰法式 (推荐方式)
studentName

# 大驼峰法式
StudentName

* var const ：     变量和常量的声明
* var varName type  或者 varName : = value
* package and import: 导入
* func：   用于定义函数和方法
* return ：用于从函数返回
* defer someCode ：在函数退出之前执行
* go :      用于并行
* select    用于选择不同类型的通讯
* interface 用于定义接口
* struct    用于定义抽象数据类型
* break、case、continue、for、fallthrough、else、if、switch、goto、default 流程控制
* chan  用于channel通讯
* type  用于声明自定义类型
* map   用于声明map类型数据
* range 用于读取slice、map、channel数据

# 单一声明: 变量声明以关键字var开头，变量类型放在变量的后面，行尾无需分号。
var name string
var age int
var isOk bool

# 批量声明: 每声明一个变量就需要写var关键字会比较繁琐，go语言中还支持批量变量声明。
var (
  a string
  b int
  c bool
  d float32
)
```

```go
//打印
func main() {
	name = "立"
	age = 16
	isOk = true
	fmt.Println("hello,world")
	fmt.Printf("name:%s", name)
	fmt.Println(age)
	fmt.Println(isOk)
}
//result
hello,world
name:立16
true
```



````go
//简短声明定义，只能在函数中使用
s1 := "wanghaibi"
````

###### 匿名变量用一个下划线(_)表示 

并且匿名变量不占用命名空间，不会分配内存，所以匿名变量之间不存在重复声明。 (在Lua等编程语言里，匿名变量也被叫做哑元变量。) 

`  func foo() (int, string) {
  return 10, "Q1mi"
}
func main() {
  x, _ := foo()
  _, y := foo()`



###### 常量

````go
// 单一声明: 声明了pi和e这两个常量之后，在整个程序运行期间它们的值都不能再发生变化了。
const pi = 3.1415
const e = 2.7182

// 批量声明
const (
  pi = 3.1415
  e = 2.7182
)
````



ota - 常量计数器
描述: iota是go语言的常量计数器，只能在常量的表达式中使用。

Tips : iota在const关键字出现时将被重置为0, const中每新增一行常量声明将使iota计数一次 (iota可理解为const语句块中的行索引)。

应用场景: 使用iota能简化定义，在定义枚举时很有用。

下面示例中几个常见的iota示例:

1.使用_跳过某些值

````go
const (
  n1 = iota //0
  n2        //1
  _
  n4        //3
)
2.iota声明中间插队

const (
  n1 = iota //0
  n2 = 100  //100
  n3 = iota //2
  n4        //3
)
const n5 = iota //0
3.多个iota定义在一行

const (
  a, b = iota + 1, iota + 2 //1,2
  c, d                      //2,3
  e, f                      //3,4
) 
````

输出

````go
2 3 3 4
1024 1048576 1073741824 1099511627776 1125899906842624
````



###### 特殊整型

![img](https://i0.hdslb.com/bfs/article/41174379a6968c2226a0fc60f0b19d2ce045dd0d.png@806w_260h_progressive.webp)

###### 整型

![img](https://i0.hdslb.com/bfs/article/4a251c64e46b578d48f7bbd228aaa7cda333967e.png@938w_554h_progressive.webp)

###### 浮点数和布尔类型

```go
var floatnumber float64 = 1024.00
  fmt.Printf("数据类型: %T , floatnumber: %.1f\n", floatnumber, floatnumber)
  fmt.Printf("%f,%.2f\n", math.Pi, math.Pi) // 保留小数点后两位
  fmt.Printf("float32的浮点数的最大范围 :%d ~ %f\n", 0, math.MaxFloat32)
  fmt.Printf("float64的浮点数的最大范围 :%d ~ %f\n", 0, math.MaxFloat64) 
```
````go
//布尔类型
fmt.Println("# 4.布尔型示例:")
var flag bool = true
fmt.Printf("数据类型: %T ,任意类型输出: %v", flag, flag)  // 数据类型: bool ,任意类型输出: true 
````



###### 字符串

````go
	s4 := `
  这是一个
        多行字符串案例！
  This is mutlilineString Example！
  Let's Go   // 特点：原样输出
  `
/*  这是一个        多行字符串案例！

  This is mutlilineString Example！ 

 Let's Go  
 */

	fmt.Println(s4)

	// 转义演示  // 特点：原样输出
	//   'c:\weiyigeek\go\hello' 
	s5 := "'c:\\weiyigeek\\go\\hello'"
	//c:\weiyigeek\go\hello
	s6 := `c:\weiyigeek\go\hello`
````





| \\\  | 代表一个反斜线字符''\' | 092  |
| ---- | :--------------------- | ---- |



![img](https://i0.hdslb.com/bfs/article/478fe9a354e7c36e7cf403019faed805097c970f.png@651w_483h_progressive.webp)



###### byte和rune类型

uint8类型，或者叫 byte 型，代表了ASCII码的一个字符（1B） 

rune类型，代表一个 UTF-8字符, 并且一个rune字符由一个或多个byte组成（3B~4B）。

````go
	s2 := "白萝卜"
	s3 := []rune(s2)
	s3[0] = '红'
	fmt.Println(string(s3))
	fmt.Println(string(s2))
	fmt.Printf("%T %T \n", s3, s2)	

红萝卜
白萝卜
[]int32 string 

````

// math.Sqrt() 接收的参数是float64类型

###### if else

`func ifDemo2() {
  score := 88 // 注意变量作用域的影响
  if score := 65; score >= 90 {
    fmt.Println("A", score)
  } else if score > 75 {
    fmt.Println("B", score)
  } else {
    fmt.Println("C", score) // 输出结果
  }
  fmt.Println("score : ", score)
} `

###### for

`s1 := "Hello,Go 输出的是中文"
for i, v := range s1 {
  fmt.Printf("Index : %d ,Value : %s , Number : %v \n", i, string(v), v)
} `





###### switch

`func switchDemo1() {
  finger := 3
  switch finger {
  case 1:
    fmt.Println("大拇指")
  case 2:
    fmt.Println("食指")
  case 3:
    fmt.Println("中指")
  case 4:
    fmt.Println("无名指")
  case 5:
    fmt.Println("小拇指")
  default:
    fmt.Println("无效的输入！")
  }
} 

`func testSwitch3() {
  switch n := 7; n {
  case 1, 3, 5, 7, 9:
    fmt.Println("奇数")
  case 2, 4, 6, 8:
    fmt.Println("偶数")
  default:
    fmt.Println(n)
  }
}` 



###### goto

`func gotoDemo2() {
  for i := 0; i < 10; i++ {
    for j := 0; j < 10; j++ {
      if j == 2 {
        // 设置退出标签
        goto breakTag
      }
      fmt.Printf("%v-%v\n", i, j)
    }
  }
  return
  // 标签
  breakTag:
    fmt.Println("正结束for循环")
    fmt.Println("已结束for循环")
} `

###### 数组

```go
3.方法三(非常值得学习)

我们还可以使用指定索引值的方式来初始化数组，例如:

func main() {
	a := [...]int{1: 1, 3: 5}
  b := [...]int{1:100,9:200}      // [0 100 0 0 0 0 0 0 200 ]
	fmt.Println(a)                  // [0 1 0 5]
	fmt.Printf("type of a:%T\n", a) // type of a:[4]int
}
```

###### 数组遍历

````go
3.数组的遍历
遍历数组a有以下两种方法：

func main() {
	var a = [...]string{"北京", "上海", "深圳"}
	// 方法1：for循环遍历
	for i := 0; i < len(a); i++ {
		fmt.Println(a[i])
	}

	// 方法2：for range遍历
	for index, value := range a {
		fmt.Println(index, value)
	}
}
````

###### 多维数组

````go
func main() {
	a := [3][2]string{
		{"北京", "上海"},
		{"广州", "深圳"},
		{"成都", "重庆"},
	}
	fmt.Println(a) //[[北京 上海] [广州 深圳] [成都 重庆]]
	fmt.Println(a[2][1]) //支持索引取值:重庆
}

	var d = [...]float32{1.0, 2.0}
	e := [...]bool{true, false, false}
	// 方式3.使用指定索引值的方式来初始化数组
	var f = [...]int{1: 1, 3: 8} // 只有 下标为1的其值为1，下标为3的其值为8，初开之外都为0
	g := [...]string{"Weiyi", "Geek"}
````

	// 方式2 （推荐方式）
	for i, v1 := range s2 {
		for j, v2 := range v1 {
			fmt.Printf("s2[%d][%d] = %v ", i, j, v2)
		}
	}



######  Go语言基础之切片

描述: 本文主要介绍Go语言中切片（slice）及它的基本使用。

Q: 为什么要引入切片这个特性?
描述: 因为数组的长度是固定的并且数组长度属于类型的一部分，所以数组有很多的局限性

```go
func main() {
	var s1 []int
	var s2 []string
	fmt.Println(s1, s2)
	s1 = []int{1, 2, 3}
	s2 = []string{"沙河", "张江"}
	fmt.Println(s1, s2)
	fmt.Println(s1 == nil)
	fmt.Println(s2 == nil)
	fmt.Printf("len1 %d,cap(s1):%d\n", len(s1), cap(s1))
	fmt.Printf("len2 %d,cap(s2):%d\n", len(s2), cap(s2))

	a1 := [...]int{1, 2, 3, 4, 5, 6}
	s3 := a1[0:4]
	fmt.Println(s3)
	s4 := a1[1:4]
	fmt.Println(s4)
}
//输出
[] []
[1 2 3] [沙河 张江]
false
false
len1 3,cap(s1):3
len2 2,cap(s2):2
[1 2 3 4]
[2 3 4]
```



###### make

```go
//长度为5，默认为0，容量为10
s1 := make([]int, 5, 10)
	fmt.Printf("s1=%v  cap(s1)=%d", s1, cap(s1))
//output
s1=[0 0 0 0 0]  cap(s1)=10


```

###### append

```go
	s1 := make([]int, 5, 10)
	s2 := []int{2, 3, 5}
	s1 = append(s1, 1, 23)
	s1 = append(s1, s2...)
	fmt.Println(s1)

//output
[0 0 0 0 0 1 23 2 3 5]
```

###### copy

```go
	// copy()复制切片
	a := []int{1, 2, 3, 4, 5}
	c := make([]int, 5, 5)
	copy(c, a)     //使用copy()函数将切片a中的元素复制到切片c
	fmt.Println(a) //[1 2 3 4 5]
	fmt.Println(c) //[1 2 3 4 5]
	c[0] = 1000
	fmt.Println(a) //[1 2 3 4 5]
	fmt.Println(c) //[1000 2 3 4 5]
```



切片删除元素

```go
	s1 := make([]int, 5, 10)
	s2 := []int{2, 3, 5}
	s1 = append(s1, 1, 23)
	s1 = append(s1, s2...)
	fmt.Println(s1)
	s3 := append(s1[:1], s1[2:]...)
	fmt.Println(s3)
	fmt.Println(s1)

[0 0 0 0 0 1 23 2 3 5]
[0 0 0 0 1 23 2 3 5]
[0 0 0 0 1 23 2 3 5 5]

```



###### nil

```go
布尔类型的零值（初始值）为 false
数值类型的零值为 0
字符串类型的零值为空字符串""
而指针、切片、映射、通道、函数和接口的零值则是 nil
```



总结:new 函数与 make函数的区别

二者都是用来做内存分配的。

make只用于slice、map以及channel的初始化，返回的还是这三个引用类型本身；

new用于类型的内存分配，并且内存对应的值为类型零值，返回的是指向类型的指针。



###### map

```go
	var m1 map[string]int
	m1 = make(map[string]int)
	m1["理想"] = 9000
	fmt.Println(m1)

map[理想:9000]
```

###### 判断字符

```go
	s1 := "hello汉字"
	var count int
	for _, c := range s1 {
		if unicode.Is(unicode.Han, c) {
			count++
		}
	}
	fmt.Println(count)

//output 
2
```

###### defer

```go
	fmt.Println("start")

	defer deferDemo()
	fmt.Println("end")

defer 把函数推进栈，然后再延后执行

```

###### 递归



###### 1.类型定义

描述: 在Go语言中有一些基本的数据类型，如string、int{}整型、float{}浮点型、boolean布尔等数据类型， Go语言中可以使用type关键字来定义自定义类型(实际上定义了一个全新的类型)。

Tips : 我们可以基于内置的基本类型定义，也可以通过struct定义。

示例演示:

//将MyInt定义为int类型
`type MyInt int`

// TypeAlias只是Type的别名，本质上TypeAlias与Type是同一个类型
`type TypeAlias = Type`
我们之前见过的rune和byte就是类型别名，他们的定义如下：

`type byte = uint8`
`type rune = int32`





###### 结构体

描述: 语言内置的基础数据类型是用来描述一个值的，而结构体是用来描述一组值的。比如一个人有名字、年龄和居住城市等，本质上是一种聚合型的数据类型。

```go
// 方式(0)
var v struct{}

// 方式(1)
type person struct {
	name string
	city string
	age  int8
}

// 方式(2): 同样类型的字段也可以写在一行
type person1 struct {
	name, city string
	age   int8
}
```

```go
//结构体实例化
type demo struct {
  username string
  city string
}

// 1.方式1.利用`.`进行调用指定属性
var m1 demo
demo.username = "WeiyiGeek"

// 2.方式2.使用键值对初始化
m2 := demo {username: "WeiyiGeek",city:"重庆",}
m2 := &demo {username: "WeiyiGeek",city:"重庆",} // ==> new(demo) 此种方式会在结构体指针里面实践。

// 3.方式3.使用值的列表初始化
m3 := demo {
  "WeiyiGeek",
  "重庆"
}
m3 := &demo {
  "WeiyiGeek",
  "重庆"
}

```

###### 结构体指针

```go
	// 方式1.结构体利用new实例化在内存中申请一块空间
	var p1 = new(Person)
	(*p1).name = "WeiyiGeek" // 取得地址存放的值并将其进行覆盖
	p1.age = 20              // Go语言的语法糖自动根据指针找到对应地址的值并将其值覆盖。
	fmt.Printf("Type of p1 : %T, Struct 实例化结果: %#v\n", p1, p1)

	// 方式2.采用取地址&符号进行实例化结构体(效果与new差不多)
	p2 := &Person{}
	(*p2).name = "Golang" // 取得地址存放的值并将其进行覆盖
	p2.age = 12           // Go语言的语法糖自动根据指针找到对应地址的值并将其值覆盖。
	p2.sex = true
	fmt.Printf("Type of p2 : %T, Struct 实例化结果: %#v\n", p2, p2)

	// 5.使用键值对初始化(也可以对结构体指针进行键值对初始化)
	// 当某些字段没有初始值的时候，该字段可以不写。此时没有指定初始值的字段的值就是该字段类型的零值。
	p3 := &Person{
		name: "北京",
	}
	fmt.Printf("p3 Value = %#v \n", p3)

	// 6.使用值的列表初始化
	// 初始化结构体的时候可以简写，也就是初始化的时候不写键，直接写值：
	p4 := &Person{
		"WeiyiGeek",
		20,
		false,
		[]string{},
	}
	fmt.Printf("p4 Value = %#v \n", p4)
```

###### 值接受者

```go
//  使用值接收者：SetAge2 设置p的年龄
func (p Person) SetAge2(newAge int8) {
	p.age = newAge
}
func main() {
	p1 := NewPerson("WeiyiGeek", 25)
	p1.Dream()
	fmt.Println(p1.age) // 25
	p1.SetAge2(30) // (*p1).SetAge2(30)
	fmt.Println(p1.age) // 25
}
```

###### 指针类型的接收者

描述: 指针类型的接收者由一个结构体的指针组成，由于指针的特性，调用方法时修改接收者指针的任意成员变量，在方法结束后，修改都是有效的。此种方式就十分接近于其他语言中面向对象中的this或者self达到的效果。

例如：我们为 Person 添加一个SetAge方法，来修改实例变量的年龄。

// 使用指针接收者 : SetAge 设置p的年龄: 传入的 Person 实例化后的变量的地址 p ，并通过p.属性进行更改其内容存储的内容。

```go
func (p *Person) SetAge(newAge int8) {
	p.age = newAge
}
//调用
func main() {
	p1 := NewPerson("WeiyiGeek", 25)
	fmt.Println(p1.age) // 25
	p1.SetAge(30)
	fmt.Println(p1.age) // 30
}
```

###### 结构体匿名字段

```go
type Anonymous struct {
	string
	int
}
func demo4() {
	a1 := Anonymous{"WeiyiGeek", 18}
	fmt.Printf("Struct: %#v ，字段1: %v , 字段2: %v \n", a1, a1.string, a1.int)
}
```

###### 结构体的“继承”

```go
// 父
type Animal struct{ name string }

func (a *Animal) voice(v string) {
	fmt.Printf("我是动物，我叫 %v, 我会叫 %s,", a.name, v)
}

// 子
type Dog struct {
	eat string
	*Animal
}

func (d *Dog) love() {
	fmt.Printf("狗狗喜欢吃的食物是 %v.\n", d.eat)
}

type Cat struct {
	eat string
	*Animal
}

func (c *Cat) love() {
	fmt.Printf("猫猫喜欢吃的食物是 %v.\n", c.eat)

}
```

###### 接口的定义

例如:面的代码中定义了猫和狗，然后它们都会叫，你会发现main函数中明显有重复的代码，如果我们后续再加上猪、青蛙等动物的话，我们的代码还会一直重复下去。那我们能不能把它们当成“能叫的动物”来处理呢？

描述**: Go语言提倡面向接口编程,每个接口由数个方法组成，**接口的定义格式如下：

type 接口类型名 interface{
    方法名1( 参数列表1 ) 返回值列表1
    方法名2( 参数列表2 ) 返回值列表2
    …
}

```go
type speaker interface {
	speak()
}
type cat struct {
}

func (c cat) speak() {
	fmt.Println("喵喵喵~")
}
func da(x speaker) {
	x.speak()
}
func main() {
	var c cat
	da(c)
}
```

###### 一个类型实现多个接口

```go
// Sayer 接口
type Sayer interface { say() }
// Mover 接口
type Mover interface { move() }
// dog既可以实现Sayer接口，也可以实现Mover接口。
type dog struct {	name string }
// 实现Sayer接口
func (d dog) say() { fmt.Printf("%s会叫 汪汪汪\n", d.name) }
// 实现Mover接口
func (d dog) move() { fmt.Printf("%s会动 \n", d.name) }

func main() {
  var a = dog{name: "旺财"}
	var x Sayer = a // 将dog类型赋予给Sayer接口类型的变量x，此时它可以调用say方法
	var y Mover = a // 将dog类型赋予给Mover接口类型的变量y，此时它可以调用move方法
	x.say() // 旺财会叫 汪汪汪
	y.move() // 旺财会动
}

```

###### 接口嵌套

```go
// Sayer 接口
type Sayer interface {say()}
// Mover 接口
type Mover interface {move()}
// 接口嵌套
type animal interface {
	Sayer
	Mover
} 
```



###### 空接口

空接口的定义
描述: 空接口是指没有定义任何方法的接口,因此任何类型都实现了空接口, 该类型的变量可以存储任意类型的变量。他会在我们以后GO编程中常常出现。

```go
	// (2) 空接口作为map的值
	var m1 map[string]interface{}     // 类似于Java中的 Map<String,Object> m1
	m1 = make(map[string]interface{}) // 为Map申请一块内存空间
	// 可以存储任意类型的值
	m1["name"] = "WeiyiGeek"
	m1["age"] = 20
	m1["sex"] = true
	m1["hobby"] = [...]string{"Computer", "NetSecurity", "Go语言编程学习"} 作者：WeiyiGeek https://www.bilibili.com/read/cv13039977/?from=readlist 出处：bilibili
```

###### 空接口

空接口的定义
描述: 空接口是指没有定义任何方法的接口,因此任何类型都实现了空接口, 该类型的变量可以存储任意类型的变量。他会在我们以后GO编程中常常出现。

例如:

```go
// interface 是关键字，并不是类型。
// 方式1.但一般不会采用此种方式
var empty interface{}

// 方式2.我们可以直接忽略接口名称(空接口类型)
interface{}

###### 
```



###### 接口之类型断言 

var w io.Writer
w = nil
w = os.Stdout
w = new(bytes.Buffer)

x：表示类型为interface{}的变量



T：表示断言x可能是的类型。

该语法返回两个参数，第一个参数是x转化为T类型后的变量，第二个值是一个布尔值，若为true则表示断言成功，为false则表示断言失败。

接口总结:
描述: 关于需要注意的是只有当有两个或两个以上的具体类型必须以相同的方式进行处理时才需要定义接口,不要为了接口而写接口，那样只会增加不必要的抽象，导致不必要的运行时损耗。



###### 类型断言

```go
// 示例1.采用if进行判断断言
func assert(x interface{}) {
	v, ok := x.(string) // v 接受是string类型
	if ok {
		fmt.Printf("assert successful : %v, typeof %T\n", v, v)
	} else {
		fmt.Printf("assert failed 非 string 类型! : %v, typeof %T\n", x, x)
	}
}
func demo1() {
	var x interface{}
	x = "WeiyiGeek"
	assert(x) // assert successful : WeiyiGeek, typeof string
	x = 1024
	assert(x) // assert failed 非 string 类型! : 1024, typeof int
}

// 示例2.如果要断言多次就需要写多个if判断，这个时候我们可以使用switch语句来实现：
func justifyType(x interface{}) {
	switch v := x.(type) {
	case string:
		fmt.Printf("x is a string，value is %v\n", v)
	case int:
		fmt.Printf("x is a int is %v\n", v)
	case bool:
		fmt.Printf("x is a bool is %v\n", v)
	default:
		fmt.Println("unsupport type！")
	}
}
func demo2() {
	var x interface{}
	x = "i'm string"
	justifyType(x)
	x = 225
	justifyType(x)
	x = true
	justifyType(x)
}

func main() {
	demo1()
	fmt.Println()
	demo2()
} 
```

###### 包

```go
package 包名

// graphical.go
package area
```

1. 一个文件夹下面直接包含的文件只能归属一个package，同样一个package的文件不能在多个文件夹下。

2. 包名可以不和文件夹的名字一样,但可以与.go文件名称一致，包名不能包含 - 符号并且严格按照变量命名的规则进行。

3. 在导入包时应该从包的GOPATH/src后的路径开始写起其以/作为分隔符。

4. 包名为main的包为应用程序的入口包，这种包编译后会得到一个可执行文件，而编译不包含main包的源代码则不会得到可执行文件。

###### 包的导入

描述: 要在代码中引用其他包的内容，需要使用import关键字导入使用的包。具体语法如下:

```go
import "包的路径"

示例演示

// 单行导入的格式如下:
import "包1"
import "包2"

// 多行导入的格式如下:
import (
  "包1"
  "包2"
)

// 实际案例
import (
  "fmt"       // golang 内置包
  "math/rand" // golang 内置包
  "github.com/mattn/go-sqlite3" // golang 项目的工程组织规范
) 
```

**包名是从$GOPATH/src/后开始计算的，使用/进行路径分隔。**



###### 反射

反射是指在程序运行期对程序本身进行访问和修改的能力。

```go
type person struct {
	Name string `json:"name"`
	Age  int    `ison:"age"`
}

func main() {
	str := `{"name":"周琳","age":"9000"}`
	var p person
	json.Unmarshal([]byte(str), &p)
	fmt.Println(p.Name, p.Age)
}

```

在Go语言中，**使用reflect.TypeOf()函数可以获得任意值的类型对象** 

###### Goroutine routine 程序

```go
启动单个Goroutine
描述：启动goroutine的方式非常简单，只需要在调用的函数（普通函数和匿名函数）前面加上一个go关键字，即可。

func hello() {
	fmt.Println("Hello Goroutine!")
}
func main() {
  go	hello()               // 在调用hello函数前面加上关键字go，即启动一个goroutine去执行hello这个函数。
	fmt.Println("main goroutine done!")
 	time.Sleep(time.Second) // 如果不加此延时，则执行结果只打印了main goroutine done!，并不会打印Hello Goroutine!
} 
```

###### 常规方式以及匿名函数方式并发调度  

```go
// 方式1，常规函数方式
func hello(count int) {
	fmt.Printf("欢迎你第 %d 次\n", count)
}
func demo1() {
	for i := 0; i < 5; i++ {
		go hello(i) // 开启一个单独的goroutine去执行hello函数(任务)
	}
}

// 方式2.匿名函数方式
func demo2() {
	for i := 0; i < 5; i++ {
		go func(count int) {
			fmt.Printf("第 %d 次欢迎你\n", count)
		}(i)
	}
}

// 程序启动之后会创建一个主Goroutine去执行。
func main() {
	fmt.Println("[*] main start")
	demo1()
	demo2()
	time.Sleep(time.Second)  // 最暴力简单的延时函数
	fmt.Println("[-] main end")
}
```



| 方法名                          | 功能                                    |
| ------------------------------- | --------------------------------------- |
| (wg * WaitGroup) Add(delta int) | 等待组的计数器 +1                       |
| (wg * WaitGroup) Done()         | 等待组的计数器 -1                       |
| (wg * WaitGroup) Wait()         | 当等待组计数器不等于 0 时阻塞直到变 0。 |

###### 使用sync.WaitGroup对线下等待并发线程执行完毕 

```go

func a() {
	defer wg.Done()
	for i := 0; i < 10; i++ {
		fmt.Printf("a:%d\n", i)
	}

}
func b() {
	defer wg.Done()等待组的计数器 -1
	for i := 0; i < 10; i++ {
		fmt.Printf("b:%d\n", i)
	}

}
func main() {
	runtime.GOMAXPROCS(2)
	fmt.Println(runtime.NumCPU()) //12核cpu
	wg.Add(2)等待组的计数器 +1
	go a()
	go b()
	wg.Wait()当等待组计数器不等于 0 时阻塞直到变 0。
}

```

###### Goroutine 调度模型 

`GMP`

M:N:把m个goroutine分配给n个操作系统线程去执行
