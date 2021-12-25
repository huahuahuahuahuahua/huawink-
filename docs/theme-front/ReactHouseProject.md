---
title: react租房项目
date: 2020-10-5
tags:
 - 前端
 - 项目
categories:
 -  2021
---

# react租房项目:grinning:

## react好租客项目Day01

项目演示&项目搭建&antd-mobile的TabBar使用

### 目标

能够初始化项目
能够使用 antd-mobile 组件库
能够完成项目整体布局
能够理解嵌套路由
能够使用antd-mobile提供的TabBar组件
能够对TabBar进行定制
能够实现首页路由的处理
项目介绍
好客租房 - 移动 Web 端
项目介绍：本项目是一个在线租房项目，实现了类似链家等项目的功能，解决了用户租房的需求
核心业务：在线找房（地图、条件搜索）、用户登录、房源发布等

技术栈
React核心库：react、react-dom、react-router-dom
脚手架：create-react-app
数据请求：axios
UI组件库：antd-mobile
其他组件库：react-virtualized、formik+yup、react-spring等
百度地图API
项目准备

### 项目搭建（★★★）

本地接口部署
创建并导入数据：数据库名称hkzf(固定名称)
使用脚手架初始化项目
使用 npx create-react-app hkzf-mobile
进入到项目根目录 使用 npm start
项目目录结构（★★★）


调整项目结构

antd-mobile 组件库（★★★）
介绍与使用
打开 antd-mobile的文档
antd-mobile 是 Ant Design 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。
特性
UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
基于 React Native 的 iOS / Android / Web 多平台支持，组件丰富、能全面覆盖各类场景 (antd-mobile-rn)
提供 “组件按需加载” / “Web 页面高清显示” / “SVG Icon” 等优化方案，一体式开发
使用 TypeScript 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发
全面兼容 react / preact
适用场景
适合于中大型产品应用
适合于基于 react / preact / react-native 的多终端应用
适合不同 UI 风格的高度定制需求的应用
快速上手
创建一个项目

### 安装

npm install antd-mobile --save
使用

导入组件
导入样式

```react
// 导入组件
import { Button } from 'antd-mobile';
// 导入样式
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
ReactDOM.render(<Button>Start</Button>, mountNode);
```

### 配置路由

安装 yarn add react-router-dom
导入路由组件：Router / Route / Link
在pages文件夹中创建 Home/index.js 和 CityList/index.js 两个组件
使用Route组件配置首页和城市选择页面

外观和样式调整
修改页面标题，在index.html里面修改
基础样式调整，在index.css 中调整

项目整体布局
两种页面布局
有TabBar的页面： 首页、找房、资讯、我的
无TabBar的页面：城市选择等
TabBar 的菜单也可以实现路由切换，也就是路由内部切换路由（嵌套路由）

嵌套路由（★★★）
嵌套路由：路由内部包含路由
用Home组件表示父路由的内容
用News组件表示子路由的内容
使用步骤
在pages文件夹中创建News/index.js 组件
在Home组件中，添加一个Route作为子路由的出口
设置嵌套路由的path，格式以父路由path开头(父组件展示了，子组件才会展示)
修改pathname为 /home/news，News组件的内容就会展示在Home组件中了

实现TabBar（★★★）
拷贝TabBar组件结构
打开 antd-mobile 组件库中TabBar的组件文档
选择APP型选项卡菜单，点击 </>显示源码
拷贝核心代码到 Home 组件中（Home是父路由组件）
调整代码
修改TabBar组件样式
修改TabBar菜单项文字标题
TabBar的文字标题在TabBar.Item 的title属性中，所以我们修改对应四个title属性即可

```react
<TabBar.Item
    title="首页"
    ...

></TabBar.Item>
><TabBar.Item
>title="找房"
>...
>
></TabBar.Item>
><TabBar.Item
>title="咨询"
>...
>
></TabBar.Item>
><TabBar.Item
>title="我的"
>...
>
></TabBar.Item>
```



修改TabBar菜单文字标题颜色
TabBar菜单选中的文字颜色在 TabBar的 tintColor 属性中设置
未选中文字颜色用默认的即可，删除 TabBar中的 unselectedTintColor 属性
>```react
><TabBar
>tintColor="#21b97a"
>barTintColor="white"
>
>...
></TabBar>
>```
>
>使用字图图标，修改TabBar菜单的图标
>字体图标的 资源在课件的素材中，直接复制过来即可
>在 index.js里面引入字体图标的 css样式文件，这样我们只需要在组件中设置对应的类名即可,icon代表是默认图标，selectedIcon代表是选中的图标
>
>```react
>
><TabBar.Item
>{/*默认的图标*/}
>icon={
>  <i className="iconfont icon-ind"></i>
>}
>{/*选中图标*/}
>selectedIcon={<i className="iconfont icon-ind"></i>
>}
>...
>
></TabBar.Item>
><TabBar.Item
>icon={
>  <i className="iconfont icon-findHouse"></i>
>}
>selectedIcon={
>  <i className="iconfont icon-findHouse"></i>
>}
>...
>
></TabBar.Item>
><TabBar.Item
>icon={
>  <i className="iconfont icon-infom"></i>
>}
>selectedIcon={
>  <i className="iconfont icon-infom"></i>
>}
>...
>
></TabBar.Item>
><TabBar.Item
>icon={
>  <i className="iconfont icon-my"></i>
>}
>selectedIcon={<i className="iconfont icon-my"></i>}
>...
>
></TabBar.Item>
>修改TabBar菜单项的图标大小
>```
>
>
>

在当前组件对应文件夹中创建index.css文件，修改一下字体图标的大小，设置为20px（注意，在home.js中记得导入当前的样式）
调整TabBar的位置，固定在最底部

通过调试工具我们发现，底部的TabBar的类名叫 am-tab-bar-bar，所以我们只需要设置一下这个类名的属性即可
去掉TabBar的徽章

找到TabBar.Item里面对应的 badge 属性，删除即可
TabBar配合路由实现
根据TabBar组件文档设置不渲染内容（只保留菜单项，不显示内容）
给TabBar设置 noRenderContent 属性即可
<TabBar
    ...
    noRenderContent = "true"

给TabBar.Item 绑定点击事件，在点击事件逻辑里面利用编程式导航，进行路由的切换
利用 this.props.history,push() 来实现

>```react
> <TabBar.Item
>...
>onPress={() => {
>  this.setState({
>      selectedTab: 'blueTab',
>  });
>  {/* 切换路由 */}
>  this.props.history.push('/home/index')
>}}
>
></TabBar.Item>
><TabBar.Item
>...
>onPress={() => {
>  this.setState({
>      selectedTab: 'redTab',
>  });
>  this.props.history.push('/home/list')
>}}
>
></TabBar.Item>
><TabBar.Item
>...
>onPress={() => {
>  this.setState({
>      selectedTab: 'greenTab',
>  });
>  this.props.history.push('/home/news')
>}}
>
></TabBar.Item>
><TabBar.Item
>...
>onPress={() => {
>  this.setState({
>      selectedTab: 'yellowTab',
>  });
>  this.props.history.push('/home/profile')
>}}
>
></TabBar.Item>
>```
>
>创建TabBar组件菜单项对应的其他3个组件，并在Home组件中配置路由信息
>创建对应的组件，然后在 home.js中进行导入，最后配置一下路由
>{/* 配置路由信息 */}
>
>```react
><Route path="/home/index" component={Index}></Route>
><Route path="/home/list" component={HouseList}></Route>
><Route path="/home/news" component={News}></Route>
><Route path="/home/profile" component={Profile}></Route>
>```
>
>给菜单项添加selected属性，设置当前匹配的菜单项高亮

通过 this.props.location.pathname 就能拿到当前的路由的path
在TabBarItem里面设置 selected的属性，判断是否等于当前的pathname
在state中记录当前的pathname

```react
 state = {
     // 选中的菜单项,记录当前的pathname来匹配对应的tab
     //pathname 属性是一个可读可写的字符串，可设置或返回当前 URL 的路径部分。
     selectedTab: this.props.location.pathname,
 }
```

在每个TabBar.Item里面利用selected属性判断一下

```react
<TabBar.Item
     selected={this.state.selectedTab === '/home/index'}
     onPress={() => {
         this.setState({
             selectedTab: '/home/index',
         });
         this.props.history.push('/home/index')
     }}
     ...

 > </TabBar.Item>
 > <TabBar.Item
 >selected={this.state.selectedTab === '/home/list'}
 >onPress={() => {
 >   this.setState({
 >       selectedTab: '/home/list',
 >   });
 >   this.props.history.push('/home/list')
 >}}
 >...
 >
 > </TabBar.Item>
 > <TabBar.Item
 >selected={this.state.selectedTab === '/home/news'}
 >onPress={() => {
 >   this.setState({
 >       selectedTab: '/home/news',
 >   });
 >   this.props.history.push('/home/news')
 >}}
 >...
 >
 > </TabBar.Item>
 > <TabBar.Item
 >selected={this.state.selectedTab === '/home/profile'}
 >onPress={() => {
 >   this.setState({
 >       selectedTab: '/home/profile',
 >   });
 >   this.props.history.push('/home/profile')
 >}}
 >...
 >
 > </TabBar.Item>
```

### TabBar代码的重构

发现TabBar的Iitem里面的内容几乎是一致的，只是里面内容不同
所以我们可以封装一下
提供菜单数据

使用map来进行遍历
声明一下数据源

```react
const tabItems = [{
    title: '首页',
    icon: 'icon-ind',
    path: '/home/index'
},
{
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/list'
},
{
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
},
{
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
}]
```


封装一个函数来遍历渲染



```react
    renderTabBarItem() {
   return tabItems.map(item => {
        return (
            <TabBar.Item
                title={item.title}
                key={item.title}
                icon={
                    <i className={`iconfont ${item.icon}`}></i>
                }
                selectedIcon={<i className={`iconfont ${item.icon}`}></i>
                }
                selected={this.state.selectedTab === item.path}
                onPress={() => {
                    this.setState({
                        selectedTab: item.path,
                    });
                    this.props.history.push(item.path)
                }}
            >
            </TabBar.Item>
    )
})
```

在render方法中调用即可

```react
render() {
    return (<div>
        {/* 配置路由信息 */}
        <Route path="/home/index" component={Index}></Route>
        <Route path="/home/list" component={HouseList}></Route>
        <Route path="/home/news" component={News}></Route>
        <Route path="/home/profile" component={Profile}></Route>
        {/* 底部导航栏 */}
        <TabBar
            tintColor="#21b97a"
            barTintColor="white"
            noRenderContent="true"
        >
            {this.renderTabBarItem()}
        </TabBar>
    </div>)
}
```

### 首页实现（★★★）

首页的路由是需要去处理的
修改首页路由的配置： /home(去掉后面的index)；这里需要添加 exact属性
如果是默认路由需要跳转到 /home

{/* 配置默认路由 */}

```react
<Route path="/" exact render={() => <Redirect to="/home"></Redirect>}></Route>
```



## react好租客项目Day02

### 轮播图&导航栏&百度地图

首页模块
目标
能够使用Carousel组件完成轮播图功能
能够安装axios，并且使用axios进行网络请求
能够使用Flex组件完成TabBar功能
能够知道轮播图与TabBar出现的bug，并且解决
能够安装Sass，编写Sass代码
能够使用Grid组件完成租房小组功能
能够利用H5 API获取当前的定位信息
能够使用百度地图API展示地图页面，获取对应城市信息
轮播图（★★★）
组件使用的基本步骤
打开antd-mobile组件库的Carousel组件文档
选择基本，点击 (</>) 显示源码
拷贝核心代码到Index的组件中
分析并且调整代码，让其能够在项目中运行
轮播图的移植
拷贝示例代码中的内容

导入组件


```react
import { Carousel, WingBlank } from 'antd-mobile';
```

状态

```react
    state = {
        // 图片的名称
        data: ['1', '2', '3'],
        // 图片的高度
        imgHeight: 176,
    }

```

- 声明周期钩子函数，修改状态，设置数据

```react
componentDidMount() {
    // simulate img loading
    setTimeout(() => {
        this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
    }, 100);
}
```


结构

```react
<div className="index">
    <Carousel
        {/* 自动播放 */}
        autoplay={false}
        {/* 无限循环 */}
        infinite
        {/* 轮播图切换前的回调函数 */}
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        {/* 轮播图切换后的回调函数 */}
        afterChange={index => console.log('slide to', index)}
        {/* 自动切换的时间 */}
        autoplayInterval='2000'
    >    
        {/* 遍历状态里面的数据，创建对应的a标签和img图片标签 */}
        {this.state.data.map(val => (
            <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
                <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    {/* 图片加载完成的时候调用 */}
                    onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                    }}
                />
            </a>
        ))}
    </Carousel>
</div>

```

现在我们需要对轮播图进行定制

- 先优化相应的结构，删除不必要的代码

```react
<div className="index">
    <Carousel
        autoplay={true}
        infinite
        autoplayInterval='2000'
    >
        {this.state.data.map(val => (
            <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
                <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                />
            </a>
        ))}
    </Carousel>
</div>

```

### 获取轮播图的数据

- 安装 axios： yarn add axios
- 在Index组件中导入axios

```react
import axios from 'axios'
```


在state中添加轮播图数据：swipers

```react
state = {
    // 轮播图状态
    swipers: [],
}

```

- 新建一个方法 getSwipers 用来获取轮播图数据

```react
async getSwipers() {
    // 请求数据
    let {data: res} = await axios.get('http://localhost:8080/home/swiper')
    // 判断返回的状态是否是成功
    if(res.status!= 200){
        console.error(res.description)
        return
    }
    // 把获取到的值设置给state
    this.setState({
        swipers: res.body
    })
}
```

- 在componentDidMount钩子函数中调用这个方法

```react
componentDidMount() {
    // 调用请求轮播图的方法
   this.getSwipers()
}
```

- 使用获取到的数据渲染轮播图

```react
// 渲染轮播图的逻辑代码
renderSwipers(){
    return this.state.swipers.map(item => (
        <a
            key={item.id}
            href="http://www.itcast.cn"
            style={{ display: 'inline-block', width: '100%', height: 212 }}
        >
            <img
                src={`http://localhost:8080${item.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
            />
        </a>
    ))
}
render() {
    return (
        <div className="index">
            <Carousel
                autoplay={true}
                infinite
                autoplayInterval='2000'
            >
                {/* 调用渲染轮播图的方法 */}
                {this.renderSwipers()}
            </Carousel>
        </div>
    )
}

```

### 导航菜单（★★★）

- 利用了antd-moblie的Flex组件进行的布局
- 导入nav的图片


```react
import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'

```

- 编写页面页面


```react
<Flex className="nav">
    <Flex.Item>
        <img src={nav1} alt=""/>
        <h2>整租</h2>
    </Flex.Item>
    <Flex.Item>
        <img src={nav2} alt=""/>
        <h2>合租</h2>
    </Flex.Item>
    <Flex.Item>
        <img src={nav3} alt=""/>
        <h2>地图找房</h2>
    </Flex.Item>
    <Flex.Item>
        <img src={nav4} alt=""/>
        <h2>去出租</h2>
    </Flex.Item>
</Flex>

```

- 给Flex 组件添加了类名是为了去更改相应的样式


```react
.nav {
    padding: 10px 0;
}

.nav img {
    width: 48px;
}

.nav h2 {
    font-size: 13px;
    font-weight: 400;
}
/* 通过调试工具我们看到，后续被生成的这个父元素的类名叫am-flexbox-item */
.am-flexbox-item {
    text-align: center;
}

h2 {
    margin: 0;
    margin-top: 7px;
}

```

### 导航菜单的重构

- 把内容封装成数组


```react
// 导航菜单的数据
const navs = [{
    id: 0,
    img: nav1,
    title: '整租',
    path: '/home/list'
}, {
    id: 1,
    img: nav2,
    title: '合租',
    path: '/home/list'
}, {
    id: 2,
    img: nav3,
    title: '地图找房',
    path: '/home/map'
}, {
    id: 3,
    img: nav4,
    title: '去出租',
    path: '/home/list'
}]

```

- 创建对应的方法 renderNavs,在方法中遍历navs，一个一个设置数据，把最终的JSX返回


```react
// 渲染导航菜单的逻辑代码
renderNavs() {
    return navs.map(item => {
        return (
            <Flex.Item key={item.id} onClick={()=>{this.props.history.push(item.path)}}>
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
            </Flex.Item>
        )
    })
}

```

- 在render方法中调用这个函数


```react
{/* 导航栏 */}
<Flex className="nav">
    {this.renderNavs()}
</Flex>

```

### 轮播图的问题（★★★）

- 由于我们动态加载数据，导致了轮播图不能自动去进行轮播以及高度的塌陷
- 解决办法
  - 在state中添加轮播图数据是否加载完成的状态


```react
    state = {
        // 轮播图状态
        swipers: [],
        isSwiperLoaded: false
    }

```

- 在轮播图数据加载完成时候，修改这个状态为true


```react
    async getSwipers() {
        ...
        // 把获取到的值设置给state
        this.setState({
            swipers: res.body,
            isSwiperLoaded: true
        })

    }

```

- 只有在录播图数据加载完成的情况下，才渲染轮播图组件
- 给轮播图的外层包裹一个div，给这个div设置高度


```react
<div className="swiper">
    {/* 轮播图 */}
    {this.state.isSwiperLoaded ? (<Carousel
        autoplay={true}
        infinite
        autoplayInterval='2000'
    >
        {/* 调用渲染轮播图的方法 */}
        {this.renderSwipers()}
    </Carousel>) : ('')}
</div>

```

### TabBar的问题（★★★）

当我们通过首页菜单导航跳转到相应页面的时候，底部的TabBar没有进行高亮显示
原因： 我们实现该功能的时候，只考虑了点击以及第一次家的Home组件的情况下，但是，我们没有考虑不重新加载Home组件时路由的切换
解决：在路由发生切换的时候，再来处理TabBar的高亮显示
添加componentDidUpDate 钩子函数
在钩子函数中判断路由地址是否切换
在路由地址切换的时候，让TabBar对应高亮
在Home.js里面注册钩子函数


```react
    // 当Home组件的内容发生更新的时候调用

    componentDidUpdate(prevProps) {

        // 在这里就能判断路由是否进行了切换，路由的信息保存在props属性里面

        // 如果当前的路由信息不等于上一次的，那么就代表发生了路由切换

        if(prevProps.location.pathname !== this.props.location.pathname){

            this.setState({

                selectedTab: this.props.location.pathname

            })

        }
    }

```

### Sass的使用

打开脚手架文档，找到添加Sass样式
安装Sass： yarn add node-sass
创建后缀名为.scss 或者 .sass 的样式文件
在组件中导入Sass样式
租房小组（★★★）
业务介绍
需求：根据当前地理位置展示不同小组信息
需要后台接口根据用户找房数据，推荐用户最感兴趣的内容(正常的逻辑是我们先获取到用户当前定位的信息，把信息发送给后台，后台根据定位信息获取对应的内容)
前端只需要展示数据
数据获取
在state中添加租房小组数据：groups


```react
    state = {
        ...
        // 租房小组状态
        groups: []
    }

```

- 新建一个方法`getGroups`用来获取数据，并更新groups状态


```react
async getGroups() {
    let { data: res } = await axios.get('http://localhost:8080/home/groups', {
        params: {
            'area': 'AREA%7C88cff55c-aaa4-e2e0'
        }
    })
    // 判断返回的状态是否是成功
    if (res.status != 200) {
        console.error(res.description)
        return
    }
    // 把获取到的值设置给state
    this.setState({
        groups: res.body
    })
}

```

- 在`componentDidMount`钩子函数中调用该方法


```react
componentDidMount() {
    // 调用请求轮播图的方法
    this.getSwipers()
    this.getGroups()
}

```

- 使用获取到的数据渲染租房小组数据

  ### 页面结构样式

  实现标题的结构和样式

  - 打开Grid 宫格组件
  - 选择 基本 菜单，点击(`</>`) 显示源码
  - 拷贝核心代码到Index组件中
  - 分析调整代码

  布局结构


```react
 {/* 租房小组 */}
<div className="group">
    <h3 className="group-title">
        租房小组 <span className="more">更多</span>
    </h3>
    <Grid data={this.state.groups}
        {/* 列数 */}
        columnNum={2} 
        {/* 是否强制正方形 */}
        square={false}
        {/* 是否有边框 */}
        hasLine={false}
        {/* 自定义里面的布局 */}
        renderItem={item => this.renderGroups(item)} />
</div>

```

- 自定布局单独抽取成方法


```react
renderGroups(item) {
    return (
        <Flex className="group-item" justify="around">
            <div className="desc">
                <p className="title">{item.title}</p>
                <span className="info">{item.desc}</span>
            </div>
            <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
        </Flex>
    )
}

```

- 相应的样式属性


```css
.group {
    background-color: #f6f5f6;
    overflow: hidden;
    padding: 0 10px;
    .group-title {
        position: relative;
        margin: 15px 0px 15px 10px;
        font-size: 15px;
        .more {
            color: #787d82;
            position: absolute;
            right: 0;
            font-size: 14px;
            font-weight: normal;
        }
    }
    // 覆盖默认背景色
    .am-grid .am-flexbox {
        background-color: inherit;
        .am-flexbox-item .am-grid-item-content {
            padding: 0;
            padding-bottom: 10px;
        }
    }
    .group-item {
        height: 75px;
        .desc {
            .title {
                font-weight: bold;
                font-size: 13px;
                margin-bottom: 5px;
            }
            .info {
                font-size: 12px;
                color: #999;
            }
        }
        img {
            width: 55px;
        }
    }
    .am-flexbox-align-stretch {
        margin-bottom: 10px;
        .am-grid-item {
            background-color: #fff;
            &:first-child {
                margin-right: 10px;
            }
        }
    }
}

```

### 最新资讯

#### 数据获取&页面渲染

- 在state中添加租房小组数据：news


```react
    state = {
        ...
        // 最新资讯
        news: []
    }

```

- 创建一个函数 `getNews()`, 在这个函数中利用`axios`来请求服务器
- 获取到的数据判断返回的状态是否是200，如果不是，提示用户
- 如果状态是200，利用`this.setState()` 来更新页面
- 在`componentDidUpdate`钩子函数中调用 `getNews()`


```react
async getNews() {
    let { data: res } = await axios.get('http://localhost:8080/home/news?area=AREA%7C88cff55c-aaa4-e2e0')
    // 判断返回的状态是否是成功
    if (res.status != 200) {
        console.error(res.description)
        return
    }
    // 把获取到的值设置给state
    this.setState({
        news: res.body
    })
}

```

- 创建页面结构，渲染到页面
  - `WingBlank`组件 两翼留白 的效果
  - 渲染的逻辑代码比较多，抽取成一个方法，这样保证结构中的代码比较清晰


```react
 {/* 最新资讯 */}
<div className="news">
    <h3 className="group-title">最新资讯</h3>
    <WingBlank size="md">{this.renderNews()}</WingBlank>
</div>

renderNews() {
 return this.state.news.map(item => {
     return (
         <div className="news-item" key={item.id}>
             <div className="imgwrap">
                 <img
                     className="img"
                     src={`http://localhost:8080${item.imgSrc}`}
                     alt=""
                 />
             </div>
             <Flex className="content" direction="column" justify="between">
                 <h3 className="title">{item.title}</h3>
                 <Flex className="info" justify="between">
                     <span>{item.from}</span>
                     <span>{item.date}</span>
                 </Flex>
             </Flex>
         </div>
     )
 })

```

- 样式属性


```css
// 最新资讯：
.news {
  padding: 10px;
  background-color: #fff;
  overflow: hidden;

  .group-title {
    margin: 10px 0 5px 10px;
    font-size: 15px;
  }

  .news-item {
    height: 120px;
    padding: 15px 10px 15px 0;
    border-bottom: 1px solid #e5e5e5;
  }

  .news-item:last-child {
    border: 0;
  }

  .imgwrap {
    float: left;
    height: 90px;
    width: 120px;
  }

  .img {
    height: 90px;
    width: 120px;
  }

  .content {
    overflow: hidden;
    height: 100%;
    padding-left: 12px;
  }

  .title {
    margin-bottom: 15px;
    font-size: 14px;
  }

  .info {
    width: 100%;
    color: #9c9fa1;
    font-size: 12px;
  }

  .message-title {
    margin-bottom: 48px;
  }
}

```

#### 解决内容被`TabBar`压住的问题

我们在Home.js中找到 包裹 路由和底部导航栏的div盒子，给其添加 padding-bottom 属性即可

### 顶部导航功能（★★★）

- 实现结构和样式
- 添加城市选择、搜索、地图找房页面的路由跳转

相关结构


```react
 <Flex className='search-box'>
    {/* 左侧白色区域 */}
    <Flex className="search">
        {/* 位置 */}
        <div className="location" >
            <span className="name">长沙</span>
            <i className="iconfont icon-arrow" />
        </div>

        {/* 搜索表单 */}
        <div className="form">
            <i className="iconfont icon-seach" />
            <span className="text">请输入小区或地址</span>
        </div>
    </Flex>
    {/* 右侧地图图标 */}
    <i className="iconfont icon-map" />
</Flex>

```

相关样式


```react
// 顶部导航
.search-box {
    position: absolute;
    top: 25px;
    width: 100%;
    padding: 0 10px;
    // 左侧白色区域
    .search {
        flex: 1;
        height: 34px;
        margin: 0 10px;
        padding: 5px 5px 5px 8px;
        border-radius: 3px;
        background-color: #fff;
        // 位置
        .location {
            .icon-arrow {
                margin-left: 2px;
                font-size: 12px;
                color: #7f7f80;
            }
        }
        // 搜索表单
        .form {
            border-left: solid 1px #e5e5e5;
            margin-left: 12px;
            line-height: 16px;
            .icon-seach {
                vertical-align: middle;
                padding: 0 2px 0 12px;
                color: #9c9fa1;
                font-size: 15px;
            }
            .text {
                padding-left: 4px;
                font-size: 13px;
                color: #9c9fa1;
            }
        }
    }
    // 右侧地图图标
    .icon-map {
        font-size: 25px;
        color: #fff;
    }
}

```

H5中利用定理定位API
地理位置API 允许用户向 Web应用程序提供他们的位置，出于隐私考虑，报告地理位置前先会请求用户许可

地理位置的API是通过 navigator.geolocation 对象提供，通过getCurrentPosition方法获取

获取到的地理位置跟 GPS、IP地址、WIFI和蓝牙的MAC地址、GSM/CDMS的ID有关

比如：手机优先使用GPS定位，笔记本等最准确的是定位是WIFI

我们所获取到的是经纬度，其实对我们来说是没有用的，所以我们需要借助百度地图、高德地图等的开放接口，来帮我们把经纬度进行换算
![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-p7aG4c41-1575110971811)(images/location.png)]](https://img-blog.csdnimg.cn/20191130185230144.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

### 定位相关

#### 百度地图API（★★★）

- H5的地理位置API只能获取到对应经纬度信息
- 实际开发中，会使用百度地图/高德地图来完成地理位置的相关功能
- 租房项目中，通过百度地图API实现地理位置和地图找房功能
- 我们需要去参照[百度地图文档](http://lbsyun.baidu.com/)
- 注册百度开发者账号，申请对应的AK

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-vIF45pqR-1575110971813)(images/百度AK.png)]](https://img-blog.csdnimg.cn/20191130185218638.png)

#### 使用步骤

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-vaq46lOp-1575110971814)(images/使用步骤-01.png)]](https://img-blog.csdnimg.cn/20191130185209380.png)

- 在index.css中设置全局样式

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-eCQUfWob-1575110971816)(images/使用步骤-02.png)]](https://img-blog.csdnimg.cn/20191130185158224.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

- 创建Map组件，配置路由，在Map组件中，创建地图容器元素，并设置样式

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-hHX3TmL4-1575110971817)(images/使用步骤-03.png)]](https://img-blog.csdnimg.cn/20191130185150403.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

- 创建地图实例

  ![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-kyAG2ryT-1575110971825)(images/使用步骤-04.png)]](https://img-blog.csdnimg.cn/20191130185131749.png)

- 设置中心点坐标

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-UnGPI00L-1575110971827)(images/使用步骤-05.png)]](https://img-blog.csdnimg.cn/20191130185123835.png)

初始化地图，同时设置展示级别

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-SUIX9PKC-1575110971828)(images/使用步骤-06.png)]](https://img-blog.csdnimg.cn/20191130185112318.png)

#### 获取顶部导航城市信息

- 查看百度地图的定位文档
- 通过IP定位获取到当前城市名称
- 调用我们服务器的接口，换取项目中的城市信息

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-pVvIfKC5-1575110971831)(images/定位接口.png)]](https://img-blog.csdnimg.cn/20191130185057199.png)



## react好租客项目Day03

城市选择功能&react-virtualized组件使用

### 城市选择模块

目标
能够实现顶部导航栏
能够获取城市列表数据，热门城市数据，当前定位城市数据，并且对数据进行重新封装
知道什么是长列表，以及带来的缺陷
说出长列表性能优化的两种方式
能够使用 react-virtualized进行城市列表的渲染
能够渲染右侧索引列表
功能分析
切换城市，查看该城市下的房源信息
功能
顶部导航栏
城市列表展示
使用索引快速切换城市
点击城市名称切换城市

### 顶部导航栏（★★★）

打开antd-mobile 组件库的NavBar 导航栏组件 文档
从文档中拷贝组件示例代码到项目中，让其正确运行
修改导航栏样式和结构
示例

引入 组件库


```react
import {NavBar, Icon} from 'antd-mobile'
```


拷贝代码结构

<div>
    <NavBar
        // 模式 默认值是 dark
        mode="light"
        // 左侧小图片
        icon={<Icon type="left" />}
        // 左侧按钮的点击事件
        onLeftClick={() => console.log('onLeftClick')}
        // 右侧按按钮图标
        rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
        ]}
    >城市列表</NavBar>
</div>

修改结构代码

<div>
    <NavBar
        // 模式 默认值是 dark
        mode="light"
        // 左侧小图片
        icon={<i className='iconfont icon-back' />}
        // 左侧按钮的点击事件
        onLeftClick={() => this.props.history.go(-1)}
    >城市列表</NavBar>
</div>


设置相应的样式

```css


.citylist {
    .navbar {
        color: #333;
        background-color: #f6f5f6;
    }
    // navbar 标题颜色
    .am-navbar-title {
        color: #333;
    }
}
```



### 获取处理数据（★★★）

页面加载时候，根据接口获取到城市列表数据
分析当前数据格式以及该功能需要的数据格式
转换当前数据格式为所需要的数据格式‘

#### 获取数据

根据接口文档提供的url进行网络请求
获取到相应的数据信息

```react
// 当组件被挂载的时候调用
componentDidMount() {
   this.getCityList()
}
async getCityList() {
    let {data:res} = await axios.get('http://localhost:8080/area/city?level=1')
    console.log(res);
}
```

#### 处理数据格式

我们需要把服务器返回的数据进行格式化处理，我们可以通过首字母来进行城市的定位，所以我们需要把格式转换成以下格式

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-GhGLU7AO-1575111205711)(images/citylist.png)]](https://img-blog.csdnimg.cn/20191130185422270.png)

- 我们需要遍历 list数组

- 获取到每一个城市的首字母
- 判断我们定义的数组中是否有这个分类，如果有，那么直接push数据进来，如果没有，添加这个分类
- 当城市列表数据按照首字母分好类了之后，还需要实现热门城市数据和定位城市数据
- 获取热门城市数据，添加到cityList 列表数据中，将索引数据添加到 cityIndex 索引数据中
- 获取当前城市数据，添加到cityList 列表数据中，将索引数据添加到 cityIndex 索引数据中

封装一个函数，来处理这个数据



 * ```react
    /**
     * 格式化返回的数据
    @param {*} list 
    */
    function formatCityData(list) {
    // 键是首字母，值是一个数组：对应首字母的城市信息
    let cityList = {}
    list.forEach(item => {
        // 通过简写获取到第一个首字母
        let first = item.short.substr(0, 1)
        // 判断对象中是否有这个key 我们可以利用对象取值的第二种方式 中括号的方式
        if(cityList[first]){
            // 如果进入if 代表有这个值，我们只需要直接push进去
            cityList[first].push(item)
        }else{
            // 如果进入else 代表没有这个值，我们初始化这个属性，并且把当前数据设置进去
            cityList[first] = [item]
        }
    })
    // 接下来我们需要把 cityList里面所有的key取出来，放在数组中，充当城市列表右侧的首字母导航条
    let cityIndex = Object.keys(cityList).sort() 
    return {
        cityList,
        cityIndex
    }
    }
    ```


    在`getCityList()`方法中调用这个函数，来格式化数据

```react
async getCityList() {
    let { data: res } = await axios.get('http://localhost:8080/area/city?level=1')
    // 格式化返回的数据
    let { cityList, cityIndex } = formatCityData(res.body)
}
```


**获取热门数据**，并且添加到 `cityList`和`cityListIndex`中，注意，对象里面的属性是无序的，可以直接插入，但是数组是有序的，我们需要添加到前面

```react
// 获取热门城市数据
let {data: hotRes} = await axios.get('http://localhost:8080/area/hot')
// 将热门数据添加到 cityList
cityList['hot'] = hotRes.body
// 将热门数据添加到 cityIndex 
cityIndex.unshift('hot')
```


**获取当前城市信息**，我们将获取定位城市的代码封装到一个函数中，哪个页面需要获取定位城市，直接调用该方法即可

- 在utils目录中，创建一个文件，在这个文件中进行封装
- 创建并且导出获取定位城市的函数 getCurrentCity
- 判断localStorage中是否有定位信息
- 如果没有，我们通过获取定位信息来获取当前定位城市，获取完了需要存到本地存储中
- 如果有，直接使用就好



```react
import axios from 'axios'
export const getCurrentCity = () => {
    // 获取本地存储中是否有
    let localCity = JSON.parse(localStorage.getItem('localCity'))
    if (!localCity) {
        // 如果没有，就需要获取当前定位城市
        // 利用 promis 来解决异步数据的返回
        return new Promise((resolve, reject) => {
            try {
                // 获取当前城市信息
                var myCity = new window.BMap.LocalCity();
                myCity.get(async res => {
                    // 当获取到对应的城市信息了后，我们需要请求我们自己的服务器
                    const { data: infoRes } = await axios.get('http://localhost:8080/area/info', {
                        params: {
                            name: res.name
                        }
                    })
                    if (infoRes.status != 200) {
                        console.error(infoRes.description)
                        return
                    }
                    console.log(infoRes);
				// res.data.body
                // 保存在本地存储中
                localStorage.setItem('localCity', JSON.stringify(infoRes.body))
                    // 返回城市的数据
                resolve(infoRes.body)
            });
        } catch (error) {
            // 进入到catch代码块 说明调用失败了
            reject(error)
        }
    })

}
// 如果有，我们直接返回城市信息就好,返回一个成功的promis对象即可
return Promise.resolve(localCity)
}
```


- 将定位的城市信息添加到 `cityList`和`cityIndex`中

```react
// 获取当前城市定位信息
let curCity = await getCurrentCity()
// 将当前城市数据添加到 cityList
cityList['#'] = curCity
// 将当前城市数据添加到 cityIndex 
cityIndex.unshift('#')
```



### 长列表性能优化（★★）

#### 概述

在展示大型列表和表格数据的时候（城市列表、通讯录、微博等），会导致页面卡顿，滚动不流畅等性能问题，这样就会导致移动设备耗电加快，影响移动设备的电池寿命

产生性能问题的元素：大量DOM节点的重绘和重排

优化方案：

- 懒渲染

- 可视区域渲染

#### 懒渲染

懒加载，常见的长列表优化方案，常见于移动端
原理：每次只渲染一部分，等渲染的数据即将滚动完时，再渲染下面部分
优点：每次渲染一部分数据，速度快
缺点：数据量大时，页面中依然存在大量DOM节点，占用内存过多，降低浏览器渲染性能，导致页面卡顿
使用场景：数据量不大的情况下

#### 可视区渲染（React-virtualized）

原理： 只渲染页面可视区域的列表项，非可视区域的数据 完全不渲染(预加载前面几项和后面几项) ，在滚动列表时动态更新列表项

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-iJrns70T-1575111205714)(images/可视区渲染.png)]](https://img-blog.csdnimg.cn/20191130185458915.png)

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-Cz89Tea0-1575111205715)(images/预加载.png)]](https://img-blog.csdnimg.cn/20191130185505453.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)



使用场景： 一次性展示大量数据的情况

### react-virtualized（★★★）

#### 概述

在项目中的应用：实现城市选择列表页面的渲染
react-virtualized 是React组件，用来高效渲染大型列表和表格数据
GitHub地址： react-virtualized

#### 基本使用

- 安装： yarn add react-virtualized
- 在项目入口文件 index.js 中导入样式文件
- 打开 [文档](https://github.com/bvaughn/react-virtualized/blob/master/docs)， 点击List组件，进入List的文档中
- 拷贝示例代码到我们项目中，分析示例代码

```react
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'react-virtualized';

// 列表数据
const list = [
  'Brian Vaughn'
  // And so on...
];
// 渲染每一行的内容
function rowRenderer ({
  key,         // Unique key within array of rows
  index,       // 索引号
  isScrolling, // 当前项是否正在滚动中
  isVisible,   // 当前项在List中是可见的
  style        // 重点属性：一定要给每一个行数添加该样式
}) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}

// 渲染list列表
ReactDOM.render(
  <List
    // 组件的宽度
    width={300}
    // 组件的高度
    height={300}
    rowCount={list.length}
    // 每行的高度
    rowHeight={20}
    rowRenderer={rowRenderer}
  />,
  document.getElementById('example')
);
```

### 渲染城市列表（★★★）

#### 让List组件占满屏幕

- 利用 `AutoSizer` 组件来调整子元素的宽高
- 导入 `AutoSizer` 组件
- 通过 render-props 模式，获取到`AutoSizer` 组件暴露的 width 和 height 属性
- 设置List组件的 width 和 height 属性
- ![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-SD9ByzMO-1575111205718)(images/autosizer.png)]](https://img-blog.csdnimg.cn/20191130185532526.png)

- 设置城市选择页面根元素高度 100%，让List组件占满整个页面

```css
.citylist {
    height: 100%;
    padding-top: 45px;
    .navbar {
        margin-top: -45px;
        color: #333;
        background-color: #f6f5f6;
    }
    // navbar 标题颜色
    .am-navbar-title {
        color: #333;
    }
}
```



#### 渲染城市列表

- 将获取到的cityList和cityIndex添加为组建的状态数据

```react
    state = {
        cityList: null,
        cityIndex: []
    }
```

- 
  修改List组件的rowCount为cityIndex数组的长度



```react
{/* 城市列表 */}
<AutoSizer>
    {
        ({ width, height }) => {
            return <List
                // 组件的宽度
                width={width}
                // 组件的高度
                height={height}
                rowCount={this.state.cityIndex.length}
                // 每行的高度
                rowHeight={this.getRowHeight}
                rowRenderer={this.rowRenderer}
            />
        }
    }
</AutoSizer>
```


修改List组件的rowRender方法中渲染的结构和样式

```react
// 渲染每一行的内容
rowRenderer({
    key,         // Unique key within array of rows
    index,       // 索引号
    isScrolling, // 当前项是否正在滚动中
    isVisible,   // 当前项在List中是可见的
    style        // 重点属性：一定要给每一个行数添加该样式
}) {
    let letter = this.state.cityIndex[index]
    let citys = this.state.cityList[letter]
    return (

        <div
            key={key}
            style={style}
            className="city"
        >
            <div className="title">{this.formatCityIndex(letter)}</div>
            {citys.map(item => {
                return (
                    <div className="name" key={item.value}>{item.label}</div>
                )
            })}</div>

​    )
}
```

修改List的rowHeight为函数，动态计算每行的高度

```react
// 动态计算高度
getRowHeight = ({ index }) => {
    // 索引的高度 + 数量 * 每个城市的高度
    let { cityIndex, cityList } = this.state;
return cityList[cityIndex[index]].length * NAME_HEIGHT + TITLE_HEIGHT;
```
#### 渲染右侧索引列表

- 封装renderCityIndex方法，用来渲染城市索引列表
- 在方法中，获取到索引数组 cityIndex，遍历cityIndex，渲染索引列表
- 将索引hot替换成 热
- 在state中添加状态 activeIndex，用来指定当前高亮的索引
- 在遍历cityIndex时，添加当前字母索引是否是高亮


结构代码

```css
{/* 右侧索引列表 */}
<ul className="city-index">
    {
        this.renderCityIndex()
    }
</ul>

样式代码
.city-index {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 5px;
    z-index: 1;
    height: 90%;
    box-sizing: border-box;
    padding-top: 20px;
    text-align: center;
    list-style: none;
    .city-index-item {
        flex: 1;
    }
    .index-active {
        color: #fff;
        background-color: #21b97a;
        border-radius: 100%;
        display: inline-block;
        font-size: 12px;
        width: 15px;
        height: 15px;
        line-height: 15px;
    }
}
```


渲染右侧索引的函数

```react

}renderCityIndex() {
    return this.state.cityIndex.map((item,index) => {
        console.log(item,index);
return (
        <li className="city-index-item" key={item}>
            {/*判断一下，如果高亮状态的索引等于当前索引，那么就设置高亮样式*/}
            <span className={this.state.activeIndex == index? 'index-active' : ''}>{item == 'hot' ? '热' : item.toUpperCase()}</span>
        </li>
    )
})
}
```


## react好租客项目Day04

城市列表索引列相关功能&封装NavHeader&CSS IN JS

### 渲染城市列表

#### 目标

- 完成城市索引高亮效果
- 完成点击索引跳转到对应位置
- 能够实现切换城市功能（除了北京，上海，广州，深圳，其他成均无房源信息，需要提示用户）

#### 城市索引列表高亮

- 给list组件添加onRowsRendered配置项，用于获取当前列表渲染的行信息，在里面就会有相应信息
- 通过参数 startIndex 获取到 起始行对应的索引号
- 判断 startIndex 和 activeIndex 不同时候，更新状态 activeIndex为 startIndex


```react
<List
    ...
    onRowsRendered={this.rowRendered}
/>

/**
 * 获取滚动时候,相应的数据
 * @param {*} param0 
 */
rowRendered = ({ startIndex }) => {
    if (this.state.activeIndex !== startIndex) {
        this.setState({
            activeIndex: startIndex
        })
    }
}

```

#### 点击索引置顶该索引城市

`Object.keys` 返回一个所有元素为字符串的数组，其元素来自于从给定的`object`上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。

```js
// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']
```

- 给索引列表绑定点击事件

- 在点击事件中，通过index获取到当前项索引号

- 调用List组件的 scrollToRow方法，让List组件滚动到指定行

  - 在constructor中，调用React.createRef() 创建ref对象

  - 将创建好的ref对象，添加为List组件的ref属性
  - 通过ref的current属性，获取到组件实例，再调用组件的scrollToRow方法
  - 设置List组件的scrollToAlignment配置项值为start，保证点击行出现在页面顶部

- 对于点击索引无法正确定位的问题，调用List组件的 measureAllRows 方法，提前计算高度来解决
  


```react
// 核心代码
constructor() {
    ...
    this.listComponent = React.createRef()
}
async componentDidMount() {
    await this.getCityList()
    // 计算List组件高度
    this.listComponent.current.measureAllRows()
}
renderCityIndex() {
    return this.state.cityIndex.map((item, index) => {
        return (
            <li className="city-index-item" key={item} onClick={() => {
                // 拿到List组件的实例
                this.listComponent.current.scrollToRow(index)
            }}>
              ...
            </li>
        )
    })
}
render() {
    return (
        <div className="citylist">
            ...
            {/* 城市列表 */}
            <AutoSizer>
                {
                    ({ width, height }) => {
                        return <List
                            ref={this.listComponent}
                            ...
                        />
                    }
                }
            </AutoSizer>
            ...
        </div>
    )
}

```

#### 切换城市

- 给城市列表项绑定事件
- 判断当前城市是否有房源数据
- 如果有房源数据，则保持当前城市数据到本地缓存中，并返回上一页
- 如果没有房源数据，则提示用户：改城市暂无房源数据，不执行任何操作


```react
const HOST_CITY = ['北京', '上海', '广州', '深圳']
// 渲染每一行的内容
rowRenderer({
    key,         // Unique key within array of rows
    index,       // 索引号
    isScrolling, // 当前项是否正在滚动中
    isVisible,   // 当前项在List中是可见的
    style        // 重点属性：一定要给每一个行数添加该样式
}) {
    let letter = this.state.cityIndex[index]
    let citys = this.state.cityList[letter]
    return (
        <div
            key={key}
            style={style}
            className="city"
        >
            <div className="title">{this.formatCityIndex(letter)}</div>
            {citys.map(item => {
                return (
                    // 绑定点击事件，传递城市名称和value
                    <div className="name" key={item.value} onClick={() => this.changeCity(item.label, item.value)}>{item.label}</div>
                )
            })}</div>
    )
}
changeCity = (label, value) => {
    if (HOST_CITY.indexOf(label) > -1) {
        // 说明是有房源数据的城市
        localStorage.setItem('localCity', JSON.stringify({
            label,
            value
        }))
    } else {
        // 没有房源城市，提示用户
        Toast.info('当前城市没有房源', 1);
    }
}

```

### 好客租房移动Web（上）-总结

- 项目准备：部署本地接口，脚手架初始化项目，antd-mobile，路由等
- 项目整体布局：分析两种页面布局，使用嵌套路由实现带TabBar页面布局等
- 首页模块：租房小组结构布局，数据获取，H5地理定位和百度地图地理定位等
- 城市选择模块：数据结构处理，长列表性能优化，react-virtualized，索引列表等

### 好客租房移动Web（中）-目标

- 能够在百度地图中展示当前定位城市
- 能够使用地图标注完成房源信息绘制
- 能够展示城市所有区的房源数据
- 能够封装找房页面的条件筛选栏组件
- 能够使用 react-spring 组件实现动画效果
- 能够完成房屋详情页面的数据展示

### 地图找房模块

#### 目标

- 封装NavHeader组件
- 实现NavHeader组件中左侧按钮功能
- 能够解决NavHeader组件中获取不到路由信息的问题
- 对NavHeader的props进行校验

#### 功能分析

- 展示当前定位城市
- 展示该城市所有区的房源数据
- 展示某区下所有镇的房源数据
- 展示某镇下所有的校区的房源数据
- 展示某小区下的房源数据列表

### 顶部导航栏

#### 结构实现

- 封装NavHeader组件实现城市选择，地图找房页面的复用
- 在components目录中创建组件 NavHeader/index.js
- 在该组件中封装 antd-mobile 组件库中的 NavBar组件
- 在地图找房页面使用封装好的 NavHeader组件实现顶部导航栏功能
- 使用NavHeader组件，替换城市选择页面的NavBar组


```react
import React from 'react';
import {NavBar} from 'antd-mobile'

// components/NavHeader/index.js
export default class extends React.Component {
    render() {
        return (
            <NavBar
                    className="navbar"
                    // 模式 默认值是 dark
                    mode="light"
                    // 左侧小图片
                    icon={<i className='iconfont icon-back' />}
                    // 左侧按钮的点击事件
                    onLeftClick={() => this.props.history.go(-1)}
                // 标题内容不定的，所以我们通过外界来传入
                >{this.props.children}</NavBar>
        )
    }
}
// pages/Map/index.js
...
import NavHeader from '../../components/NavHeader'
export default class extends React.Component {
    ...
    render() {
        return (
            <div className="map">
                <NavHeader>
                    地图找房
                </NavHeader>
                <div id="container"></div>
            </div>
        )
    }
}

```

### 样式调整

- 在components下的NavHeader文件夹中创建 index.scss 文件
- 把之前城市列表写过的样式，复制到这个文件下

### 功能处理

注意：默认情况下，只有路由 Route 直接渲染的组件才能够获取到路由信息，如果需要在其他组件中获取到路由信息可以通过 withRouter 高阶组件来获取

- 从 react-router-dom 中导入 withRouter 高阶组件

- 使用 withRouter 高阶组件包装 NavHeader 组件

- 目的：包装后，就可以在组件中获取到当前路由信息
  从 props 中就能获取history对象
- 调用history对象的 go() 方法就能实现返回上一页功能了

- 由于头部的左侧按钮不一定是返回上一个页面的功能，所以我们需要把左侧点击逻辑处理需要通过父组件传递进来，如果说外界传递了，那么我们就直接使用外界的行为，如果没有传递，那么就用默认的行为
  


```react
import React from 'react';
import { NavBar } from 'antd-mobile'
import './index.scss'
import { withRouter } from 'react-router-dom'

class NavHeader extends React.Component {
    render() {
        let defaultHandler = () => {
            this.props.history.go(-1)
        }
        return (
            <NavBar
                className="navbar"
                // 模式 默认值是 dark
                mode="light"
                // 左侧小图片
                icon={<i className='iconfont icon-back' />}
                // 左侧按钮的点击事件
                onLeftClick={this.props.onLeftClick || defaultHandler}
            >{this.props.children}</NavBar>
        )
    }
}
// 通过withRouter 包装一层后，返回的还是一个组件，这个跟我们之前讲到的包装组件很类似
export default withRouter(NavHeader)

```

### 添加props校验

往往我们封装好了的组件可能会提供给别人去使用，然而别人在使用我们组件的时候不清楚需要传递怎样的props，所以我们可以通过添加props校验，来提示使用者，应该怎样正确的传递props

- 安装 yarn add prop-types
- 导入 PropTypes
- 给NavHeader组件的 children 和 onLeftClick添加props校验




```react
import PropTypes from 'prop-types'
NavHeader.propTypes = {
    children: PropTypes.string.isRequired,
    onLeftClick:PropTypes.func
}

```

#### 城市选择页面使用NavHeader组件

- 在CityList.js文件中，引入 NavHeader组件
- 把之前NavBar组件去掉，使用我们封装好的NavHeader组件就好

### 组件之间样式覆盖问题

#### 目标

- 能够利用CSS Modules解决组件之间样式覆盖的问题

#### 概念

- 问题：CityList组件的样式，会影响Map组件的样式
- 原因：在配置路由的时候，CityList组件与Map组件都会被导入到路由中，那么只要组件被导入，那么相关的样式也会被导入进来，如果两个组件的样式名称相同，那么就会影响另外一个组件的样式
- 小结：默认情况下，只要导入了组件，不管组件有没有显示在页面中，组件的样式就会生效
- 解决方式
  - 写不同的类名
  - CSS IN JS

#### CSS IN JS

CSS IN JS 是使用JavaScript 编写 CSS 的统称，用来解决CSS样式冲突，覆盖等问题；

CSS IN JS 的具体实现有50多种，比如：CSS Modules、styled-components等

推荐使用：CSS Modules（React脚手架已经集成进来了，可以直接使用）

### CSS Modules

#### 概念

- CSS Modules 通过对CSS类名重命名，保证每一个类名的唯一性，从而避免样式冲突问题
- 实现方式：webpack的css-loader 插件
- 命名采用：BEM（Block块、Element元素、Modifier三部分组成）命名规范。比如： .list_item_active
- 在React脚手架中演化成：文件名、类名、hash（随机）三部分，只需要指定类名即可

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-YOnp9OOs-1575111367700)(images/css-modules.png)]](https://img-blog.csdnimg.cn/20191130185701950.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

#### 使用

- 创建名为[name].module.css 的样式文件（React脚手架中的约定，与普通CSS区分开）

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-ir8rdO9w-1575111367701)(images/css-modules使用-01.png)]](https://img-blog.csdnimg.cn/20191130185720712.png)

- 组件中导入样式文件**（注意语法）**

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-7LVx5azQ-1575111367702)(images/css-modules使用-02.png)]](https://img-blog.csdnimg.cn/20191130185729660.png)

- 通过styles对象访问对象中的样式名来设置样式

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-BdfvL1jN-1575111367703)(images/css-modules使用-03.png)]](https://img-blog.csdnimg.cn/20191130185740722.png)

### 使用CSS Modules修改 NavHeader 样式

- 在NavHeader目录中创建 index.module.css 的样式文件

- 在样式文件中修改当前组件的样式
- 对于组件库中已经有的全局样式，需要使用：global() 来指定，例如：我们在修改NavBar里面文字颜色的时候，用到了一个类名叫： am-navbar-title 这个类名不是我们设置的，而是组件库中定义的，所以对于这一类，我们需要这样去设置:

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-BXNT8gOO-1575111367705)(images/css-modules使用-04.png)]](https://img-blog.csdnimg.cn/20191130185750755.png)

**或者：**

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-R3TcUJki-1575111367706)(images/css-modules使用-05.png)]](https://img-blog.csdnimg.cn/20191130185758202.png)

示例demo


```css
.navbar {
    color: #333;
    background-color: #f6f5f6;
}

.navbar :global(.am-navbar-title) {
    color: #333;
}

```

### 在Map组件中修改头部样式


```css
.map {
    height: 100%;
    padding-top: 45px;
}

.map :global(.am-navbar) {
    margin-top: -45px;
}

.container {
    height: 100%;
}

```

页面结构


```react
<div className={styles.map}>
    <NavHeader>
        地图找房
    </NavHeader>
    <div id='container' className={styles.container}></div>
</div>
```

## react好租客项目Day05

-根据定位展示对应城市&地图找房模块封装&loading美化

### 地图找房模块

#### 目标

- 完成根据定位展示当前城市
- 能够完成在地图上渲染出文本覆盖物
- 能够对文本覆盖物进行内容和样式修改
- 能够说出地图找房功能的业务逻辑
- 理解地图找房的封装流程，知道每一个方法的作用是什么？
- 能够参照老师代码敲出地图找房的封装代码
- 能够使用Toast的loading效果来对页面进行优化

#### 根据定位展示当前城市（★★★）

- 获取当前定位城市
- 使用 地址解析器 解析当前城市坐标
- 调用 centerAndZoom() 方法在地图中展示当前城市，并设置缩放级别为11
- 在地图中添加比例尺和平移缩放控件

#### 实现房源信息子地图中展示（★★★）

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-W4dXpdpn-1575111505661)(images/房源覆盖物.png)]](https://img-blog.csdnimg.cn/20191130185907235.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

这些房源信息其实就是用文本覆盖物来实现的，所以我们先查看百度开发文档，先创建文本覆盖物

#### 创建文本覆盖物

- 创建Label 示例对象
- 掉用setStyle() 方法设置样式
- 在map对象上调用 addOverlay() 方法，讲文本覆盖物添加到地图中

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-yhohHXEg-1575111505662)(images/创建文本覆盖物.png)]](https://img-blog.csdnimg.cn/20191130185922106.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

#### 绘制房源覆盖物

- 由于默认提供的本文覆盖物与我们效果不符合，所以我们需要进行重新的绘制
- 调用Label的 setContent方法，传入html结构，修改HTML的内容样式;注意：调用了setContent 那么里面文本的内容就失效了

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-zPLrUOjx-1575111505663)(images/绘制覆盖物.png)]](https://img-blog.csdnimg.cn/20191130185939481.png)

- 调用setStyle方法修改覆盖物样式

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-nxnvNVFc-1575111505666)(images/绘制覆盖物-02.png)]](https://img-blog.csdnimg.cn/20191130185951403.png)

- 给覆盖物添加点击事件

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-ErNU0fZo-1575111505669)(images/绘制覆盖物-03.png)]](https://img-blog.csdnimg.cn/2019113018595856.png)

- 覆盖的内容结构

```react
<div class="${styles.bubble}">
  <p class="${styles.name}">${name}</p>
  <p>${num}套</p>
</div>

```

- 覆盖物的样式

```react
const labelStyle = {
    cursor: 'pointer',
    border: '0px solid rgb(255,0,0)',
    padding: '0px',
    whiteSpace: 'nowrap',
    fontSize: '12px',
    color: 'rbg(255,255,255)',
    textAlign: 'center'
}
```

### 地图找房-业务逻辑分析（★★★）

- 获取房源数据，渲染覆盖物
- 点击覆盖物：
  - 放大地图
  - 获取数据，渲染下一级覆盖物
- 区、镇覆盖物的点击事件中，清除现有的覆盖物，获取下一级数据，创建新的覆盖物
- 小区：不清楚覆盖物，移动地图，展示该小区下的房源信息

#### 获取所有区的信息

- 发送请求获取房源数据
- 遍历数据，创建覆盖物，给每一个覆盖物添加唯一标识
- 给覆盖物添加点击事件
- 在单击事件中，获取到当前单击项的唯一标识
- 放大地图（级别为13），调用clearOverlays()方法清除当前覆盖物

```react
// 请求接口，获取房源数据
let res = await axios.get(`http://localhost:8080/area/map?id=${value}`)
// 遍历房源信息，创建对应的覆盖物
res.data.body.map(item => {
    // 给每一条数据添加覆盖物
    // 得到返回的经纬度信息
    let { coord: { longitude, latitude }, label: areaName, count, value } = item
    // 创建覆盖物
    let label = new window.BMap.Label('', {
        position: new window.BMap.Point(longitude, latitude),
        offset: new window.BMap.Size(-35, -35)
    })
    // 设置覆盖物内容
    label.setContent(`<div class="${styles.bubble}">
    <p class="${styles.name}">${areaName}</p>
    <p>${count}套</p>
  </div>`)
    // 设置样式
    label.setStyle(labelStyle)
    // 添加点击事件
    label.addEventListener('click', function () {
        // 当点击了覆盖物，要以当前点击的覆盖物为中心来放大地图
        map.centerAndZoom(this.K.position, 13);
        // 解决清除覆盖物的时候，百度地图js报错问题
        setTimeout(function () {
            map.clearOverlays()
        }, 0)
    })
    // 给label添加唯一标识
    label.id = value
    // 添加到地图上
    map.addOverlay(label)
})

```

封装流程（★★）

到目前为止，我们才完成地图找房的一环，也就是获取了区的房源信息，然后可以点击对应区的房源，清除地图上的覆盖物，而我们再实现镇的时候也是相同的逻辑，，实现小区的时候，逻辑流程也是相似的，所以我们可以对此进行一层封装，提高代码复用性

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-nQdgjbX6-1575111505670)(images/封装流程.png)]](https://img-blog.csdnimg.cn/20191130190023110.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

- renderOverlays() 作为入口
  - 接收区域id参数，获取该区域下的房源数据
  - 获覆盖物类型以及下级地图缩放级别
- createOverlays() 方法
  - 根据传入的类型，调用对应方法，创建覆盖物，到底是创建区镇的覆盖物还是小区覆盖物

- createCircle() 方法
  - 根据传入的数据创建覆盖物，绑定事件（放大地图，清除覆盖物，渲染下一级房源数据）
- createReact() 方法
  - 根据传入的数据创建覆盖物，绑定事件（移动地图，渲染房源列表）

#### renderOverlays 方法的封装

- 这个方法是整个封装的入口
- 在这个方法需要 接收区域id ，获取对应的房源数据

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-Nk5Bw0nT-1575111505673)(images/renderOverlays-01.png)]](https://img-blog.csdnimg.cn/20191130190048445.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

- 调用 getTypeAndZoom 方法获取地图缩放级别，覆盖物类别

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-juN8Ja7z-1575111505677)(images/renderOverlays-02.png)]](https://img-blog.csdnimg.cn/20191130190054781.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

示例demo

```react
/** 
* 根据id获取对应的房源信息
*/
async renderOverlays(id) {
    // 请求，拿到对应房源数据
    let res = await axios.get(`http://localhost:8080/area/map?id=${id}`)
    let data = res.data.body

    let {type,nextZoom} = this.getTypeAndZoom()

    // 遍历，调用createOverlays,创建覆盖物
    data.map(item => {
        this.createOverlays(item,type,nextZoom)
    })
}
/**
 * 获取对应要绘制的类型和缩放的比例
 */
getTypeAndZoom() {
    // 获取当前地图缩放级别
    let zoom = this.map.getZoom()
    let nextZoom, type;
    if (zoom >= 10 && zoom < 12) {
        nextZoom = 13;
        // circle 表示绘制圆形的覆盖物，区
        type = "circle"
    } else if (zoom >= 12 && zoom < 14) {
        nextZoom = 15
        // circle 表示绘制圆形的覆盖物，镇
        type = "circle"
    } else if (zoom >= 14 && zoom < 16) {
        // circle 表示绘制矩形的覆盖物，小区
        type = "rect"
    }
    return { nextZoom, type }
}

```

#### createOverlays 方法的封装

- 这个方法没有太多的逻辑，主要是逻辑判断，然后根据不同条件调用不同渲染的方法

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-s5OOOOrC-1575111505679)(images/createOverlays.png)]](https://img-blog.csdnimg.cn/20191130190126458.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

示例demo

```react
/**
 * 绘制覆盖物的方法，根据type来判断绘制的是圆形还是矩形
 */
createOverlays(item, type, nextZoom) {
    let { coord: { longitude, latitude }, label: areaName, count, value } = item
    let point = new window.BMap.Point(longitude, latitude)
    // 判断需要渲染的是哪种类型
    if (type === 'circle') {
        // 区 或者 镇
        this.createCircle(point, areaName, count, value, nextZoom)
    } else if (type === 'rect') {
        // 小区
        this.createRect(point, areaName, count, value)
    }
}

```

#### createCircle 方法的封装

- 复用之前的创建覆盖物的代码逻辑
- 在覆盖物的单击事件中，调用 renderOverlays(id)方法，重新渲染该区域的房屋数据

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-OBVIpaUv-1575111505681)(images/createCircle.png)]](https://img-blog.csdnimg.cn/20191130190144726.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

#### createRect 方法的封装

- 创建Label、设置 样式、设置html内容，绑定事件
- 在单击事件中，获取小区下的所有房源数据
- 展示房源列表
- 渲染获取到的房源列表

房源列表相关样式：

```css
/* 房源列表样式： */

.houseList {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 330px;
    transition: all 1s;
    transform: translate3d(0, 330px, 0);
    background: #fff;
}

.show {
    transform: translate3d(0, 0, 0);
}

.titleWrap {
    position: relative;
    width: 100%;
    background: #c0c0c2;
    border-top: 1px solid #c8c8c8;
}

.listTitle {
    display: inline-block;
    padding-left: 10px;
    line-height: 43px;
    font-size: 16px;
    color: #1e1e1e;
    vertical-align: middle;
}

.titleMore {
    float: right;
    padding-right: 15px;
    line-height: 43px;
    font-size: 13px;
    color: #1e1e1e;
    vertical-align: middle;
}

.titleMore:visited {
    text-decoration: none;
}


/* 房屋列表项样式 */

.houseItems {
    padding: 0 10px;
    overflow-y: auto;
    height: 100%;
    padding-bottom: 45px;
}

```

房屋列表样式

```css
/* 房屋列表项样式 */

.houseItems {
    padding: 0 10px;
    overflow-y: auto;
    height: 100%;
    padding-bottom: 45px;
}

.house {
    height: 120px;
    position: relative;
    box-sizing: border-box;
    justify-content: space-around;
    padding-top: 18px;
    border-bottom: 1px solid #e5e5e5;
}

.imgWrap {
    float: left;
    width: 106px;
    height: 80px;
}

.img {
    width: 106px;
    height: 80px;
}

.content {
    overflow: hidden;
    line-height: 22px;
    padding-left: 12px;
}

.title {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    font-size: 15px;
    color: #394043;
}

.desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    font-size: 12px;
    color: #afb2b3;
}

.price {
    font-size: 12px;
    color: #fa5741;
}

.priceNum {
    font-size: 16px;
    font-weight: bolder;
}

.tag {
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    padding: 4px 5px;
    margin-right: 5px;
    line-height: 12px;
}

.tag1 {
    color: #39becd;
    background: #e1f5f8;
}

.tag2 {
    color: #3fc28c;
    background: #e1f5ed;
}

.tag3 {
    color: #5aabfd;
    background: #e6f2ff;
}

```

示例demo

```react
// createRect逻辑代码

/**
 * 绘制矩形
 * @param {*} point 当前房源坐标
 * @param {*} areaName  名称
 * @param {*} count  数量
 * @param {*} value  id 
 */

createRect(point, areaName, count, value) {
    // 创建覆盖物
    let label = new window.BMap.Label('', {
        position: point,
        offset: new window.BMap.Size(-50, -28)
    })
    // 设置内容
    label.setContent(`
    <div class="${styles.rect}">
       <span class="${styles.housename}">${areaName}</span>
       <span class="${styles.housenum}">${count}套</span>
       <i class="${styles.arrow}"></i>
    </div>
    `)
    // 设置样式
    label.setStyle(labelStyle)
    label.id = value
    label.addEventListener('click', () => {
        this.getHouseList(value)
    })
    // 添加到地图中
    this.map.addOverlay(label)
}
async getHouseList(id) {
    let res = await axios.get('http://localhost:8080/houses?cityId=' + id)
    this.setState({
        housesList: res.data.body.list,
        isShowList: true
    })
}
//结构
{/* 房源列表 */}
{/* 添加 styles.show 展示房屋列表 */}
    <div
        className={[
            styles.houseList,
            this.state.isShowList ? styles.show : ''
        ].join(' ')}
    >
        <div className={styles.titleWrap}>
            <h1 className={styles.listTitle}>房屋列表</h1>
            <Link className={styles.titleMore} to="/home/list">
                更多房源</Link>
        </div>
        <div className={styles.houseItems}>
            {/* 房屋结构 */}
            {this.renderHousesList()}
        </div>
    </div>
</div>
// 渲染房屋列表的item方法
/**
 * 渲染房源列表
 */
renderHousesList() {
    return this.state.housesList.map(item => (
        <div className={styles.house}>
            <div className={styles.imgWrap}>
                <img className={styles.img} src={`http://localhost:8080${item.houseImg}`} alt="" />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.desc}>{item.desc}</div>
                <div>
                    {/* ['近地铁', '随时看房'] */}
                    {item.tags.map((tag, index) => {
                        const tagClass = 'tag' + (index + 1)
                        return (
                            <span
                                className={[styles.tag, styles[tagClass]].join(' ')}
                                key={tag}
                            >
                                {tag}
                            </span>
                        )
                    })}
                </div>
                <div className={styles.price}>
                    <span className={styles.priceNum}>{item.price}</span> 元/月
    </div>
            </div>
        </div>
    )
    )
}

```

- 使用地图的 panBy() 方法，移动地图到中间位置
- 垂直位移：(window.innerHeight（屏幕高度）-330（房源列表高度）/2） - target.clientY（目标覆盖层的位置）
- 水平位移：window.innerWidth（屏幕宽度）/2 - target.clientX
- 移动地图的时候（监听movestart事件），隐藏房源列表

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-kvH64xBb-1575111505684)(images/地图移动.png)]](https://img-blog.csdnimg.cn/20191130190225255.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

### 添加Loading效果（★★★）

- 利用Toast的loading方法来实现
- 在每次请求开始的时候开启loading Toast.loading(‘加载中。。。’, 0, null, false)
- 在请求结束后关闭loading Toast.hide()



## react好租客项目Day06

-axios封装&封装搜索导航栏组件&实现筛选功能

### [axios](https://so.csdn.net/so/search?from=pc_blog_highlight&q=axios)优化&环境变量

#### 目标

- 能够通过 axios.create() 方法来构建axios实例对象，并且配置baseURL
- 能够知道 .env.development 和 .env.production 两个文件的作用
- 能够配置开发环境变量
- 能够在代码中引入配置的环境变量的值

每一次我们请求接口的时候，每一次都需要写相同的baseUrl。例如：http://localhost:8080，这样太繁琐，所以我们可以对网络请求进行优化，接口域名、图片域名、分为开发环境和生产环境，直接写在代码中，项目发布时，很难替换

#### 配置统一的URL（★★）


```react
axios.defaults.baseURL = 'http://localhost:8080'
// 或者
const instance = axios.create({
    baseURL: 'http://localhost:8080'
})
```

#### 配置生产环境和开发环境（★★★）


```react
// 通过脚手架的环境变量来解决 开发环境
在开发环境变量文件 .env.development 中，配置 REACT_APP_URL= http://localhost:8080

// 通过脚手架的环境变量解决， 生成环境
在生产环境变量文件 .env.production 中，配置 REACT_APP_URL=线上接口地址

```

#### 使用环境变量（★★★）

在[react](https://so.csdn.net/so/search?from=pc_blog_highlight&q=react)官网中，有详细说明环境变量的配置

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-6ugvaX4h-1575111776952)(images/环境变量.png)]](https://img-blog.csdnimg.cn/20191130190313364.png)

在里面会发现对应的文件还有个 .local 后缀的文件，这个文件的优先级更高，以下就是你输入不同命令，执行文件的优先级

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-crEAa03x-1575111776953)(images/环境变量优先级.png)]](https://img-blog.csdnimg.cn/20191130190331568.png)

- 在项目根目录中创建文件 .env.development

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-RdcFacOY-1575111776954)(images/环境变量配置-01.jpg)]](https://img-blog.csdnimg.cn/20191130190345457.jpg)

- 在该文件中添加环境变量 REACT_APP_URL（注意：环境变量约定REACT_APP 开头）,设置 REACT_APP_URL=http://localhost:8080


```react
REACT_APP_URL =http://localhost:8080
```

- 重新启动脚手架，脚手架在运行的时候就会解析这个文件
- 在utils/url.js 中，创建 BASE_URL 变量，设置值为 process.env.REACT_APP_URL
- 导出BASE_URL


```react
// 配置baseURL
export const BASE_URL = process.env.REACT_APP_URL

```

- 在我们页面引入就能使用了


```react
import {BASE_URL} from '../../utils/url.js'

```

#### [axios](https://so.csdn.net/so/search?from=pc_blog_highlight&q=axios) 优化（★★★）

- 在utils/api.js 中，导入 axios和BASE_URL
- 调用 axios.create() 方法创建一个axios实例
- 给 create 方法，添加配置baseURL，值为 BASE_URL
- 导出API对象


```react
import axios from 'axios'
import { BASE_URL } from './url.js'

// 创建axios的配置文件，里面配置baseURL路径
const config = {
    baseURL: BASE_URL
}

// 根据create 方法来构建axios对象
const instance = axios.create(config)

export { instance }

```

- 导入API，代替之前直接利用axois请求的代码


```react
import {instance} from '../../utils/api.js'
```

### 列表找房功能

#### 目标

-  说出抽取搜索导航栏的好处
- 能够说出抽取搜索导航栏的思路，并且参照老师代码能够实现抽取功能
- 能够说出条件筛选功能的大致思路，Filter组件作用，FilterTitle组件作用，FilterPicker组件作用，FilterFooter组件作用
- 能够参照老师代码实现FilterTitle组件中的逻辑代码
- 能够参照老师代码实现FilterPicker组件的逻辑代码

#### 功能分析

- 搜索导航栏组件的封装
- 条件筛选栏组件封装
- 条件筛选栏吸顶功能
- 房屋列表

### 顶部搜索导航栏

#### 封装搜索导航栏组件（★★★）

- 在components 目录中创建组件 SearchHeader/index.js
- 把之前写过的结构拷贝到这个文件中
- 然后把跟首页相关的数据去掉，标题，城市名称
- 通过props来进行传递


```react
import { Flex } from 'antd-mobile';
import React from 'react'
import {withRouter} from 'react-router-dom'
import './index.scss'
import PropTypes from 'prop-types'

function SearchHeader({ history, cityName}) {
    return (
        <Flex className='search-box'>
            {/* 左侧白色区域 */}
            <Flex className="search">
                {/* 位置 */}
                <div className="location" onClick={() => history.push('/citylist')}>
                    <span className="name">{cityName}</span>
                    <i className="iconfont icon-arrow" />
                </div>

                {/* 搜索表单 */}
                <div className="form" onClick={() => history.push('/search')}>
                    <i className="iconfont icon-seach" />
                    <span className="text">请输入小区或地址</span>
                </div>
            </Flex>
            {/* 右侧地图图标 */}
            <i className="iconfont icon-map" onClick={() => history.push('/map')} />
        </Flex>
    )
}
// 设置校验
SearchHeader.propTypes = {
    cityName: PropTypes.string.isRequired
}
export default withRouter(SearchHeader)

```

#### 把搜索导航栏引入到HouseList中,调整相应样式


```react
import React from "react";
import SearchHeader from "../../components/SearchHeader";

let {label} = JSON.parse(localStorage.getItem('localCity'))

export default class HouseList extends React.Component {
 componentDidMount(){
     console.log('houseList')
 }
  render() {
    return (
      <div>
        <SearchHeader cityName={label}> </SearchHeader>
      </div>
    );
  }
}
```

在找房页面SearHeader组件基础上，调整结构

- 我们需要SearHeader组件样式，所以我们还需要传递className的属性进去，调整一下SearchHeader组件


```react
function SearchHeader({ history, cityName, className }) {
  return (
      // search-box 这个样式不能去掉，所以我们可以先通过数组的方式，添加多个类名，然后利用 join 方法转成字符串
    <Flex className={["search-box", className || ""].join(" ")}>
    ...
    </Flex>
    )
}

```

- 给SearchHeader组件传递className属性，来调整组件样式，让其适应找房页面效果，下面是HouseList的头布局


```react
<Flex className={style.header}>
  <i className='iconfont icon-back' onClick={() => this.props.history.go(-1)}></i>
  <SearchHeader cityName={label} className={style.searchHeader}> </SearchHeader>
</Flex>

```

- 创建 index.module.css,设置相应的样式，修改了一些组件中的全局样式，所以我们需要通过 :global来设置


```css
/* 覆盖 searchHeader的样式 */

.header {
    height: 45px;
    background-color: #f5f6f5;
    padding: 0 10px;
}


/* 控制左侧小箭头 */

.header :global(.icon-back) {
    font-size: 16px!important;
    color: #999;
}


/* 控制右侧的图标 */

.header :global(.icon-map) {
    color: #00ae66;
}


/* 控制search输入框 */

.header :global(.search) {
    height: 30px;
}

.searchHeader {
    position: relative;
    top: 0;
    padding: 0;
}

```

#### 条件筛选



![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-YOwKeIdg-1575111776956)(images/找房页面分析.png)]](https://img-blog.csdnimg.cn/20191130190417126.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

#### 结构分析

- 父组件：Filter
- 子组件：FilterTitle 标题菜单组件
- 子组件：FilterPicker 前三个菜单对应的内容组件
- 子组件：FilterMore 最后一个菜单对应的内容组件

#### 功能分析

- 点击FilterTitle组件菜单，展开该条件筛选对话框，被点击的标题高亮
- 点击取消按钮或空白区域，隐藏对话框，取消标题高亮
- 选择筛选条件后，点击确定按钮，隐藏对话框，当前标题高亮
- 打开对话框时，如果有选择的条件，那么默认显示已选择的条件
- 打开对话框已经隐藏对话框有动画效果
- 吸顶功能

### FilterTitle组件实现（★★★）

#### 思路

- 根据标题菜单数据，渲染标题列表
- 标题可以被点击
- 标题高亮

- 
  - 点击时高亮
  - 有筛选条件选中时
  - 标题高亮状态：提升至父组件Filter中，由父组件提供高亮状态，子组件通过props接受状态来实现高亮
  - 原则：单一数据源，也就是说，状态只应该有一个组件提供并且提供操作状态的方法，其他组件直接使用组件中状态和操作状态的方法即可

#### 步骤

- 通过props接受，高亮状态对象 titleSelectedStatus
- 遍历titleList数组，渲染标题列表
- 判断高亮对象中当前标题是否高亮，如果是，添加高亮类


```react
// FilterTitle
// 条件筛选栏标题数组：
const titleList = [
  { title: "区域", type: "area" },
  { title: "方式", type: "mode" },
  { title: "租金", type: "price" },
  { title: "筛选", type: "more" }
];

export default function FilterTitle({titleSelectedStatus}) {
  return (
    <Flex align="center" className={styles.root}>
      {/* 遍历标题数组 */}
      {titleList.map(item => {
        // 获取父组件传递过来的状态
        let isSelected = titleSelectedStatus[item.type];
        return (
          <Flex.Item key={item.type}>
            {/* 选中类名： selected */}{" "}
            <span
              className={[
                styles.dropdown,
                // 判断当前的标题是否是选中状态，如果是，设置选中的样式
                isSelected ? styles.selected : ""
              ].join(" ")}
            >
              <span>{item.title}</span> <i className="iconfont icon-arrow" />
            </span>
          </Flex.Item>
        );
      })}
    </Flex>
  );
}

// Filter
/**
 * 标题高亮状态
 */
const titleSelectedStatus = {
  area: false,
  mode: false,
  price: true,
  more: false
}
export default class Filter extends Component {
  state = {
    titleSelectedStatus
  };
  render() {
    let { titleSelectedStatus } = this.state;
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层 */}
        <div className={styles.content}>
          {/* 标题栏 */}{" "}
          <FilterTitle titleSelectedStatus={titleSelectedStatus} />
          ...
        </div>
      </div>
    );
  }
}

```

- 给标题项绑定单击事件，在事件中调用父组件传过来的方法 onClick
- 将当前标题type，通过onClick的参数，传递给父组件
- 父组件中接受到当前type，修改改标题的选中状态为true


```react
// Filter 
/**
 * 标题高亮状态
 */
const titleSelectedStatus = {
  area: false,
  mode: false,
  price: false,
  more: false
};

export default class Filter extends Component {
  ...
  // 父元素提供子元素调用的函数
  onTitleClick = type => {
    this.setState({
      titleSelectedStatus: {
        ...titleSelectedStatus,
        [type]: true
      }
    });
  };
  render() {
    let { titleSelectedStatus } = this.state;
    return (
      <div className={styles.root}>
        {" "}
        {/* 前三个菜单的遮罩层 */}
        <div className={styles.content}>
          {" "}
          {/* 标题栏 */}{" "}
          <FilterTitle
            ...
            onClick={this.onTitleClick}
          />
          ...
        </div>{" "}
      </div>
    );
  }
}

// FilterTitle
export default function FilterTitle({titleSelectedStatus,onClick}) {
  return (
    <Flex align="center" className={styles.root}>
      {/* 遍历标题数组 */}
      {titleList.map(item => {
        ...
        return (
          <Flex.Item key={item.type} onClick={() => onClick(item.type)}>
            {/* 选中类名： selected */}{" "}
            <span
              className={[
                styles.dropdown,
                // 判断当前的标题是否是选中状态，如果是，设置选中的样式
                isSelected ? styles.selected : ""
              ].join(" ")}
            >
              <span>{item.title}</span> <i className="iconfont icon-arrow" />
            </span>
          </Flex.Item>
        );
      })}
    </Flex>
  );
}

```

### FilterPicker 组件（★★★）

#### 思路分析

- 点击前三个标题展示该组件，点击取消的时候隐藏
- 使用PickerView组件来实现页面效果
- 获取到PickerView组件中，选中的筛选条件值
- 点击确定按钮，隐藏该组件，将获取到的筛选条件值传递给父组件
- 展示或隐藏对话框的状态：由父组件提供，通过props传递给子组件
- 筛选条件数据：由父组件提供（因为所有筛选条件是通过一个接口来获取的），通过props传递给子组件

#### 使用步骤

##### 定义openType，实现FilterPicker显示隐藏

- 在Filter组件中，提供组件展示或隐藏的状态：openType


```react
  state = {
    ...
    // 控制FilterPicker或 FilterMore组件的展示和隐藏
    openType: ""
  };
```

- 在render方法中判断 openType的值为 area/mode/price 时，就显示 FilterPicker组件，以及遮罩层


```react
{/* 前三个菜单的遮罩层 */} 
{ openType === "area" || openType === "mode" || openType === "price" ? (<div className={styles.mask}></div>) : ("")}
...
{/* 前三个菜单对应的内容： */}
{openType === "area" || openType === "mode" || openType === "price" ? (<FilterPicker />) : ("")}

```

- 在 onTitleClick方法中，修改状态 openType为当前 type，展示对话框


```react
// 父元素提供子元素调用的函数
onTitleClick = type => {
  this.setState({
    titleSelectedStatus: {
      ...titleSelectedStatus,
      [type]: true
    },
    openType: type
  });
};
```

- 在Filter组件中，提供onCancel方法（作为取消按钮和遮罩层的事件）


```react
// 取消,
onCancel = () => {
  // 隐藏对话框
  this.setState({
    openType:''
  })
};
```

- 在onCancel方法中，修改状态 openType为空，隐藏对话框
- 讲onCancel通过props传递给FilterPicker组件，在取消按钮的单击事件中调用该方法
- 在Filter组件中，提供onSave方法，作为确定按钮的事件处理


```react
// 在父组件 Filter中定义 确定和取消的函数
// 取消
onCancel = () => {
  // 隐藏对话框
  this.setState({
    openType: ""
  });
};
// 保存，隐藏对话框
onSave = () => {
  this.setState({
    openType: ""
  });
};
// 传递给FilterPicker
render(){
    return (
       ...
       <FilterTitle
		  titleSelectedStatus={titleSelectedStatus}
		  onClick={this.onTitleClick}
		/>
    )
}

// 在FilterPicker里面进行一次中转，最后这个按钮是在FilterFooter里面
render() {
  let { onCancel ,onSave} = this.props;
  return (
    <>
      {/* 选择器组件： */}
      <PickerView data={province} value={null} cols={3} />

      {/* 底部按钮 */}
      <FilterFooter onCancel={onCancel} onOk={onSave}/>
    </>
  );
}

// 在FilterFooter里面调用
function FilterFooter({
  cancelText = '取消',
  okText = '确定',
  onCancel,
  onOk,
  className
}) {
  return (
    <Flex className={[styles.root, className || ''].join(' ')}>
      {/* 取消按钮 */}
      <span
        className={[styles.btn, styles.cancel].join(' ')}
        onClick={onCancel}
      >
        {cancelText}
      </span>

      {/* 确定按钮 */}
      <span className={[styles.btn, styles.ok].join(' ')} onClick={onOk}>
        {okText}
      </span>
    </Flex>
  )
}

```

- 在方法中，根据openType的类型，从filtersData中获取需要的数据
- 讲数据通过props传递给FilterPicker组件


```react
// 渲染FilterPicker组件的方法
  renderFilterPicker() {
    const {
      openType,
      filtersData: { area, subway, rentType, price }
    } = this.state;
    if (openType !== "area" && openType !== "mode" && openType !== "price")
      return null;
    // 拼接数据
    let data = [];
    // pickerView显示的列数
    let cols = 3
    switch (openType) {
      case "area":
        // 区域数据
        data = [area, subway];
        break;
      case "mode":
        // 方式数据
        data = rentType;
        cols = 1
        break;
      case "price":
        // 租金数据
        data = price;
        cols =1
        break;
    }
    return (
      <FilterPicker onCancel={this.onCancel} onSave={this.onSave} data={data} cols={cols}/>
    );
  }

```

- FilterPicker组件接收到数据后，讲其作为PickerView组件的data


```react
export default class FilterPicker extends Component {
  render() {
    let { onCancel, onSave, data ,cols} = this.props;
    return (
      <>
        {/* 选择器组件： */}
        <PickerView data={data} value={null} cols={cols} />

        {/* 底部按钮 */}
        <FilterFooter onCancel={onCancel} onOk={onSave} />
      </>
    );
  }
}

```

## react好租客项目Day07

-条件筛选功能实现&FilterTitle组件功能实现&房屋列表数据获取

### 列表找房模块-条件筛选

#### 目标

- 能够设置FilterPicker组件为受控组件
- 能够获取选中值，并且设置默认选中值

#### 获取选中值（★★★）

- 在FilterPicker组件中，添加状态value（用于获取PickerView组件的选中值）


```react
  state = {
    value: null
  }
```

- 给PickerView组件添加配置项 onChange，通过参数获取到选中值，并更新状态 value


```react
<PickerView
  data={data}
  // 我们一旦监听了 onChange事件，同步了value值，那么这个组件成了受控组件，所以我们需要同步value的值
  value={this.state.value}
  cols={cols}
  onChange={val => {
    this.setState({ value: val });
  }}
/>
```

- 在确定按钮的事件处理程序中，讲 type 和 value 作为参数传递给父组件


```react
// Filter组件
 <FilterPicker ... type={openType}/>
 
// FilterPicker组件
{/* 底部按钮，这个type由外界进行的传递，所以我们需要通过props来进行接收 */}
<FilterFooter onCancel={onCancel} onOk={() => onSave(type,this.state.value)} />

```

#### 设置默认选中值

如果是之前选中了的，当我们再次显示FilterPicker的时候，应该展示默认选中项

- 在Filter组件中，提供选中值状态： **selectedValues**


```react
// 默认选中的状态
const selectedValues = {
  area: ["area", null],
  mode: ["null"],
  price: ["null"],
  more: []
};
...
  state = {
    ...
    // 筛选默认选中的状态值
    selectedValues
  };

```

- 通过openType获取到当前类型的选中值（defaultValue），通过props传递给FilterPicker组件


```react
const {
  ...,
  selectedValues
} = this.state;
// 默认选中值
let defaultValue = selectedValues[openType];
...
<FilterPicker
  ...
  defaultValue={defaultValue}
/>
```

- 在FilterPicker组件中，将当前defaultValue设置为状态value的默认值


```react
state = {
  value: this.props.defaultValue
}

```

- 在点击确定按钮后，在父组件中更新当前type对应的selectedValues状态值


```react
// 保存，隐藏对话框
onSave = (type, value) => {
  this.setState({
    openType: '',
    selectedValues: {
      ...this.state.selectedValues,
      [type]: value
    }
  });
};
```

#### 问题

- 在前面三个标签之间来回切换时候，默认选中值不会生效，当点击确定，重新打开FilterPicker组件时候，才会生效
- 分析：两种操作方式的区别在于有没有重新创建FilterPicker组件，重新创建的时候，会生效，不重新创建，不会生效
- 原因：不重新创建FilterPicker组件时，不会再次执行state初始化，也就拿不到最新的props
- 解决方式：给FilterPicker组件添加key值为openType，这样，在不同标题之间切换时候，key值都不相同，React内部会在key不同时候，重新创建该组件

### 列表找房模块-完善FilterTitle（★★★）

#### 目标

- 能够说出FilterTitle高亮显示的逻辑
- 参照老师代码实现FilterTitle的高亮显示

#### 思路

- 点击标题时，遍历标题高亮数据
- 如果是当前标题，直接设置为高亮
- 分别判断每个标题对应的筛选条件有没有选中值（判断每个筛选条件的选中值与默认值是否相同，相同表示没有选中值，不同，表示选中了值）
- - selectedVal 表示当前type的选中值
  - 如果type为area，此时，selectedVal.length !== 2 || selectedVal[0] !== ‘area’，就表示已经有选中值
  - 如果 type 为 mode，此时，selectedVal[0] !== ‘null’，就表示已经有选中值
  - 如果 type 为 price，此时，selectedVal[0] !== ‘null’，就表示有选中值
- 如果有，就让该标题保持高亮
- 如果没有，就让该标题取消高亮

#### 实现步骤

- 在标题点击事件 onTitleClick事件里面，获取到两个状态：标题选中状态对象和筛选条件的选中值对象


```react
 const { titleSelectedStatus, selectedValues } = this.state;
```

- 根据当前标题选中状态对象，获取到一个新的标题选中状态对象（newTitleSelectedStatus）


```react
// 创建新的标题选中状态对象
let newTitleSelectedStatus = { ...titleSelectedStatus };
```

- 使用Object.keys()，遍历标题选中状态对象


```react
Object.keys(titleSelectedStatus).forEach(key => {
     ...
});
```

- 先判断是否为当前标题，如果是，直接让该标题选中状态为true（高亮）


```react
Object.keys(titleSelectedStatus).forEach(key => {
 // key表示数组中每一项
 if (key === type) {
   // 当前标题
   newTitleSelectedStatus[type] = true;
   return;
 }
 ...
});
```

- 否则，分别判断每个标题的选中值是否与默认值相同
- 如果不同，则设置该标题的选中状态为true
- 如果相同，则设置该标题的选中状态为false


```react
Object.keys(titleSelectedStatus).forEach(key => {
    ...
	// 其他标题
	let selectedVal = selectedValues[key];
	if (
	  (key === "area" && selectedVal.length !== 2) ||
	  selectedVal[0] !== "area"
	) {
	  newTitleSelectedStatus[type] = true;
	} else if (key === "more" && selectedVal[0] !== "null") {
	  newTitleSelectedStatus[type] = true;
	} else if (key === "price" && selectedVal[0] !== "null") {
	  newTitleSelectedStatus[type] = true;
	} else if (key === "more") {
	  // 更多选择
	}else {
	  newTitleSelectedStatus[type] = false;
	}
});

```

- 更新状态 titleSelectedStatus的值为： newTitleSelectedStatus


```react
this.setState({
  titleSelectedStatus: newTitleSelectedStatus,
  openType: type
});

```

### 列表找房模块-FilterMore组件

#### 目标

- 能够渲染FilterMore组件
- 能够实现 清除按钮和确定按钮 的逻辑
- 能够实现 FilterMore的默认选中

#### 渲染组件数据（★★★）

- 封装renderFilterMore方法，渲染FilterMore组件
- 从filtersData中，获取数据（roomType，oriented，floor，characteristic），通过props传递给FilterMore组件

```react
renderFilterMore() {
  // 获取对应数据 roomType，oriented，floor，characteristic
  const {
    openType,
    filtersData: { roomType, oriented, floor, characteristic }
  } = this.state;
  // 把数据封装到一个对象中，方便传递
  const data = {
    roomType,
    oriented,
    floor,
    characteristic
  };
  if (openType !== "more") {
    return null;
  }
  // 传递给子组件
  return <FilterMore data={data}/>;
}

```

- FilterMore组件中，通过props获取到数据，分别将数据传递给renderFilters方法
- 正在renderFilters方法中，通过参数接收数据，遍历数据，渲染标签

```react
// 渲染标签
renderFilters(data) {
  // 高亮类名： styles.tagActive
  return data.map(item => {
    return (
      <span key={item.value} className={[styles.tag].join(" ")}>{item.label}</span>
    );
  });
}

render() {
  const {
    data: { roomType, oriented, floor, characteristic }
  } = this.props;
  return (
    <div className={styles.root}>
      ...
      <div className={styles.tags}>
        <dl className={styles.dl}>
          <dt className={styles.dt}> 户型 </dt>
          <dd className={styles.dd}> {this.renderFilters(roomType)} </dd>
          <dt className={styles.dt}> 朝向 </dt>
          <dd className={styles.dd}> {this.renderFilters(oriented)} </dd>
          <dt className={styles.dt}> 楼层 </dt>
          <dd className={styles.dd}> {this.renderFilters(floor)} </dd>
          <dt className={styles.dt}> 房屋亮点 </dt>
          <dd className={styles.dd}>
          ...
      </div>
      ...
    </div>
  );
}

```

#### 获取选中值并且高亮显示（★★★）

- 在state中添加状态 selectedValues

```react
  state = {
    selectedValues: []
  };

```

- 给标签绑定单击事件，通过参数获取到当前项的value

```react
<span
  key={item.value}
  className={[styles.tag, isSelected ? styles.tagActive : ""].join(" ")}
  onClick={() => this.onTagClick(item.value)}
>
  {item.label}
</span>

```

- 判断selectedValues中是否包含当前value值
- 如果不包含，就将当前项的value添加到selectedValues数组中
- 如果包含，就从selectedValues数组中移除（使用数组的splice方法，根据索引号删除）
- 在渲染标签时，判断selectedValues数组中，是否包含当前项的value，包含，就添加高亮类



```react
onTagClick(value) {
    const { selectedValues } = this.state;
    // 创建新数组，尽量不要直接操作原数组
    const newSelectedValues = [...selectedValues];
    if (selectedValues.indexOf(value) <= -1) {
      // 不包含当前的value
      newSelectedValues.push(value);
    } else {
      // 说明包含，就需要移除
      const index = newSelectedValues.findIndex(item => item === value);
      newSelectedValues.splice(index, 1);
    }
    this.setState({
      selectedValues: newSelectedValues
    });
}

```

#### 清除和确定按钮的逻辑处理（★★★）

- 设置FilterFooter组件的取消按钮文字为： 清除

```react
<FilterFooter
  className={styles.footer}
  cancelText="清除"
  onCancel={this.onCancel}
  onOk={this.onOk}
/>

```

- 点击取消按钮时，清空所有选中的项的值（selectedValues:[]）

```react
// 取消点击事件
onCancel = () => {
  this.setState({
    selectedValues: []
  });
};

```

- 点击确定按钮时，讲当前选中项的值和type，传递给Filter父组件
- 在Filter组件中的onSave方法中，接收传递过来的选中值，更新状态selectedValues

```react
// Filter 组件，传递type跟onSave
 <FilterMore data={data} type={openType} onSave={this.onSave} defaultValues={defaultValues}/>;
 
 
// 确定点击事件,通过props来获取type跟onSave方法
onOk = () => {
  const { type, onSave } = this.props;
  onSave(type, this.state.selectedValues);
};

```

#### 设置默认选中值（★★★）

- 在渲染FilterMore组件时，从selectedValues中，获取到当前选中值more
- 通过props讲选中值传递给FilterMore组件
- 给遮罩层绑定事件，在事件中，调用父组件的onCancel关闭FilterMore组件

```react
// Filter组件
renderFilterMore() {
  ...
  let defaultValues = selectedValues.more
  // 传递给子组件
  return <FilterMore data={data} type={openType} onSave={this.onSave} defaultValues={defaultValues} onCancel={this.onCancel}/>;
}

// FilterMore组件
 {/* 遮罩层 */} <div className={styles.mask} onClick={this.props.onCancel}/>

```

- 在FilterMore组件中，讲获取到的选中值，设置为子组件状态selectedValues的默认值

```react
state = {
  selectedValues: this.props.defaultValues
};

```

### 完善FilterTitle高亮功能（★★）

- 在Filter组件的onTitleClick方法中，添加type为more的判断条件
- 当选中值数组长度不为0的时候，表示FilterMore组件中有选中项，此时，设置选中状态高亮
- 点击确定按钮时，根据参数type和value，判断当前菜单是否高亮

```react
// 保存，隐藏对话框
  onSave = (type, value) => {
    const { titleSelectedStatus } = this.state;
    let newTitleSelectedStatus = { ...titleSelectedStatus };
    let selectedVal = value;
    if (
      type === "area" &&
      (selectedVal.length !== 2 || selectedVal[0] !== "area")
    ) {
      newTitleSelectedStatus[type] = true;
    } else if (type === "mode" && selectedVal[0] !== "null") {
      newTitleSelectedStatus[type] = true;
    } else if (type === "price" && selectedVal[0] !== "null") {
      newTitleSelectedStatus[type] = true;
    } else if (type === "more" && selectedVal.length !== 0) {
      // 更多选择
      newTitleSelectedStatus[type] = true;
    } else {
      newTitleSelectedStatus[type] = false;
    }
    this.setState({
      openType: "",
      titleSelectedStatus: newTitleSelectedStatus,
      selectedValues: {
        ...this.state.selectedValues,
        [type]: value
      }
    });
  };

```

- 在关闭对话框时（onCancel），根据type和当前type的选中值，判断当前菜单是否高亮

```react
// 取消
  onCancel = type => {
    const { titleSelectedStatus, selectedValues } = this.state;
    let newTitleSelectedStatus = { ...titleSelectedStatus };
    let selectedVal = selectedValues[type];
    if (
      type === "area" &&
      (selectedVal.length !== 2 || selectedVal[0] !== "area")
    ) {
      newTitleSelectedStatus[type] = true;
    } else if (type === "mode" && selectedVal[0] !== "null") {
      newTitleSelectedStatus[type] = true;
    } else if (type === "price" && selectedVal[0] !== "null") {
      newTitleSelectedStatus[type] = true;
    } else if (type === "more" && selectedVal.length !== 0) {
      // 更多选择
      newTitleSelectedStatus[type] = true;
    } else {
      newTitleSelectedStatus[type] = false;
    }
    // 隐藏对话框
    this.setState({
      openType: "",
      titleSelectedStatus: newTitleSelectedStatus
    });
  };

```

### 列表找房模块-获取房屋列表数据

#### 目标

- 能够封装筛选条件对象
- 能够获取到房屋列表数据
- 能够实现HouseItem组件在map页面和房屋列表页面的复用
- 能够渲染房屋列表数据在页面

#### 组装筛选条件（★★★）

- 在Filter组件的onSave方法中，根据最新selectedValues组装筛选的条件数据 filters，以下是数据格式

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-yVHirGTt-1575111902305)(images/数据格式.png)]](https://img-blog.csdnimg.cn/20191130190618880.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

- 获取区域数据的参数名：area 或 subway(选中值，数组的第一个元素)
- 获取区域数据值（以最后一个value为准）
- 获取方式和租金的值（选中值得第一个元素）
- 获取筛选（more）的值（讲选中值数组转换为以逗号分隔的字符串）

```react
// 组拼数据格式
let newSelectedValues = {
  ...selectedValues,
  [type]: value
};
const { area, mode, price, more } = newSelectedValues;

// 筛选条件数据
const filters = {};
// 区域
const areaKey = area[0];
let areaValue = "null";
if (area.length === 3) {
  areaValue = area[2] !== "null" ? area[2] : area[1];
}
filters[areaKey] = areaValue;
// 方式和租金
filters.mode = mode[0];
filters.price = price[0];
// more
filters.more = more.join(",");

```

#### 获取房屋数据（★★★）

- 将筛选条件数据filters传递给父组件HouseList

```react
 // 保存，隐藏对话框
  onSave = (type, value) => {
    ...

    this.props.onFilter(filters)
    ...
  };

```

- HouseList组件中，创建方法onFilter，通过参数接收filters数据，并存储到this中

```react
  // 提供给Filter组件调用的函数，接受参数 filters
  onFilter = filters => {
    this.filters = filters;
    this.searchHouseList();
  };

```

- 创建方法searchHouseList（用来获取房屋列表数据）
- 根据接口，获取当前定位城市id参数
- 将筛选条件数据与分页数据合并后，作为借口的参数，发送请求，获取房屋数据

```react
 // 获取房源列表的函数
  async searchHouseList() {
    // 获取城市信息
    let { value } = JSON.parse(localStorage.getItem("localCity"));
    // 请求数据
    let res = await instance.get("/houses", {
      cityId: value,
      ...this.filters,
      start: 1,
      end: 20
    });
  }

```

#### 进入页面时获取数据（★★）

- 在componentDidMount钩子函数中，调用searchHouseList，来获取房屋列表数据
- 给HouseList组件添加属性 filters，值为对象

```react
  // 初始化属性
  filters = {};

```

- 添加两个状态：list和count（存储房屋列表数据和总条数）

```react
  state = {
    list: [],
    count: 0
  };

```

- 将获取到的房屋数据，存储在state中

```react
 // 获取房源列表的函数
  async searchHouseList() {
    // 获取城市信息
    let { value } = JSON.parse(localStorage.getItem("localCity"));
    // 请求数据
    let res = await instance.get("/houses", {
      cityId: value,
      ...this.filters,
      start: 1,
      end: 20
    });
    let { list, count } = res.data.body;
    this.setState({
      list: list,
      count: count
    });
  }

```

#### 使用List组件渲染数据（★★★）

- 封装HouseItem组件，实现map和HouseListuemian中，房屋列表项的复用



```react
import React from 'react'

import PropTypes from 'prop-types'

import styles from './index.module.css'

function HouseItem({ src, title, desc, tags, price, onClick }) {
  return (
    <div className={styles.house} onClick={onClick}>
      <div className={styles.imgWrap}>
        <img className={styles.img} src={src} alt="" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.desc}>{desc}</div>
        <div>
          {/* ['近地铁', '随时看房'] */}
          {tags.map((tag, index) => {
            const tagClass = 'tag' + (index + 1)
            return (
              <span
                className={[styles.tag, styles[tagClass]].join(' ')}
                key={tag}
              >
                {tag}
              </span>
            )
          })}
        </div>
        <div className={styles.price}>
          <span className={styles.priceNum}>{price}</span> 元/月
        </div>
      </div>
    </div>
  )
}

HouseItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  tags: PropTypes.array.isRequired,
  price: PropTypes.number,
  onClick: PropTypes.func
}

export default HouseItem
```

- 使用HouseItem组件改造Map组件的房屋列表项

```react
renderHousesList() {
    return this.state.housesList.map(item => (
        <HouseItem
            key={item.houseCode}
            src={BASE_URL + item.houseImg}
            title={item.title}
            desc={item.desc}
            tags={item.tags}
            price={item.price}
        ></HouseItem>
    )
    )
}

```

- 使用react-virtualized的List组件渲染房屋列表（参考CityList组件的使用）

```react
// 渲染每一行的内容
renderHouseList = ({
  key, // Unique key within array of rows
  index, // 索引号
  style // 重点属性：一定要给每一个行数添加该样式
}) => {
  // 当前这一行的
  const { list } = this.state;
  const house = list[index];
  return (
    <HouseItem
      key={key}
      style={style}
      src={BASE_URL + house.houseImg}
      title={house.title}
      desc={house.desc}
      tags={house.tags}
      price={house.price}
    />
  );
};
render(){
    return (
      <div>
         ...
          {/* 房屋列表 */}
        <div className={styles.houseItems}>
          <List
            // 组件的宽度
            width={300}
            // 组件的高度
            height={300}
            rowCount={this.state.count} // List列表项总条目数
            // 每行的高度
            rowHeight={120} // 每一行高度
            rowRenderer={this.renderHouseList}
          />
        </div>
      </div>
    )
}
```



## react好租客项目Day08

-房屋列表滚动&加载更多&吸顶功能&bug定位&react-spring

### 列表找房模块-房屋列表

#### 目标

- 能够使用windowScroller组件解决整个页面无法滚动的问题
- 能够使用InfiniteLoader组件来实现加载更多逻辑

#### 使用`WindowScroller` 跟随页面滚动（★★★）

- **默认：**List组件只让组件自身出现滚动条，无法让整个页面滚动，也就无法实现标题吸顶功能
- **解决方式：**使用WindowScroller高阶组件，让List组件跟随页面滚动（为List组件提供状态，同时还需要设置List组件的autoHeight属性）
- 注意：WindowScroller高阶组件只能提供height，无法提供width
- **解决方式：**在WindowScroller组件中使用AutoSizer高阶组件来为List组件提供width

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-O3U36MH9-1575112006302)(images/WindowScroller.png)]](https://img-blog.csdnimg.cn/20191130190706140.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)



```react
<WindowScroller>
  {({ height, isScrolling, scrollTop }) => (
    <AutoSizer>
      {({ width }) => (
        <List
          autoHeight // 设置高度为 WindowScroller 最终渲染的列表高度
          // 组件的宽度
          width={width} // 视口宽度
          // 组件的高度
          height={height} // 视口高度
          rowCount={this.state.count} // List列表项总条目数
          // 每行的高度
          rowHeight={120} // 每一行高度
          rowRenderer={this.renderHouseList}
          isScrolling={isScrolling}
          scrollTop={scrollTop}
        />
      )}
    </AutoSizer>
  )}
</WindowScroller>

```

### `InfiniteLoader` 组件（★★★）

- 滚动房屋列表时候，动态加载更多房屋数据
- 使用`InfiniteLoader` 组件，来实现无限滚动列表，从而加载更多房屋数据
- 根据 `InfiniteLoader` 文档示例，在项目中使用组件

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-D8h33kDP-1575112006303)(images/InfiniteLoader.png)]](https://img-blog.csdnimg.cn/20191130190716211.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

```react
<InfiniteLoader
  isRowLoaded={this.isRowLoaded}
  loadMoreRows={this.loadMoreRows}
  rowCount={count}
>
  {({ onRowsRendered, registerChild }) => (
    <WindowScroller>
      {({ height, isScrolling, scrollTop }) => (
        <AutoSizer>
          {({ width }) => (
            <List
              onRowsRendered={onRowsRendered}
              ref={registerChild}
              autoHeight // 设置高度为 WindowScroller 最终渲染的列表高度
              // 组件的宽度
              width={width} // 视口宽度
              // 组件的高度
              height={height} // 视口高度
              rowCount={count} // List列表项总条目数
              // 每行的高度
              rowHeight={120} // 每一行高度
              rowRenderer={this.renderHouseList}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  )}
</InfiniteLoader>
 // 判断每一行数据是否加载完毕
  isRowLoaded = ({ index }) => {
    return !!this.state.list[index];
  };
  // 用来获取更多房屋列表数据
  // 注意，该方法的返回值是一个 Promise 对象，并且，这个对象应该在数据加载完成时，来调用 resolve让 Promise对象的状态变为已完成
  loadMoreRows = ({ startIndex, stopIndex }) => {
    return new Promise(resolve => {
       ...
    });
  };

```

### 加载更多房屋列表数据

- 在loadMoreRows方法中，根据起始索引和结束索引，发送请求，获取更多房屋数据
- 获取到最新的数据后，与当前list中的数据合并，再更新state，并调用Promise的resolve

```react
loadMoreRows = ({ startIndex, stopIndex }) => {
    return new Promise(resolve => {
      instance
        .get("/houses", {
          params: {
            cityId: value,
            ...this.filters,
            start: startIndex,
            end: stopIndex
          }
        })
        .then(res => {
          this.setState({
            list: [...this.state.list, ...res.data.body.list]
          });

          // 加载数据完成时，调用resolve即可
          resolve();
        });
    });
  };

```

- 在renderHouseList方法中，判断house是否存在
- 不存在的时候，就渲染一个loading元素
- 存在的时候，再渲染HouseItem组件

```react
// 渲染每一行的内容
  renderHouseList = ({
    key, // Unique key within array of rows
    index, // 索引号
    style // 重点属性：一定要给每一个行数添加该样式
  }) => {
    // 当前这一行的
    const { list } = this.state;
    const house = list[index];
    // 如果不存在，需要渲染loading元素占位
    if (!house) {
      return (
        <div key={key} style={style}>
          <p className={styles.loading}></p>
        </div>
      );
    }
    return (
      ...
    );
  };

```

### 列表找房模块-吸顶功能（★★★）

#### 目标

- 能够完成吸顶的功能
- 能够封装通用的Sticky组件

#### 实现思路

- 在页面滚动的时候，判断筛选栏上边是否还在可视区域内
- 如果在，不需要吸顶
- 如果不在，就吸顶
- 吸顶之后，元素脱标，房屋列表会突然往上调动筛选栏的高度，解决这个问题，我们用一个跟筛选栏相同的占位元素，在筛选栏脱标后，代替它撑起高度

#### 实现步骤

- 封装Sticky组件
- 在HouseList页面中，导入Sticky组件
- 使用Sticky组件包裹要实现吸顶功能的Filter组件

```react
<Sticky>
  <Filter onFilter={this.onFilter} />
</Sticky>

```

- 在Sticky组件中，创建两个ref对象（placeholder，content），分别指向占位元素和内容元素

```react
class Sticky extends Component {
  // 创建ref对象
  placeholder = createRef()
  content = createRef()
  ...
  render() {
   return (
     <div>
       {/* 占位元素 */}
       <div ref={this.placeholder} />
       {/* 内容元素 */}
       <div ref={this.content}>{this.props.children}</div>
     </div>
   )
}

```

- 在组件中，监听浏览器的scroll事件

```react
// 监听 scroll 事件
componentDidMount() {
  window.addEventListener('scroll', this.handleScroll)
}
componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll)
}

```

- 在scroll事件中，通过getBoundingClientRect()方法得到筛选栏占位元素当前位置
- 判断top是否小于0（是否在可视区内）
- 如果小于，就添加需要吸顶样式（fixed），同时设置占位元素高度
- 否则，就移除吸顶样式，同时让占位元素高度为0

```react
// scroll 事件的事件处理程序
handleScroll = () => {
  // 获取DOM对象
  const placeholderEl = this.placeholder.current
  const contentEl = this.content.current

  const { top } = placeholderEl.getBoundingClientRect()
  if (top < 0) {
    // 吸顶
    contentEl.classList.add(styles.fixed)
    placeholderEl.style.height = '40px'
  } else {
    // 取消吸顶
    contentEl.classList.remove(styles.fixed)
    placeholderEl.style.height = '0px'
  }
}

```

#### 通用性优化

- 现在Sticky组件中占位元素的高度是写死的，这样就不通用了，我们可以把这个高度通过参数来进行传递，组件内部通过props就可以来进行获取了

```react
// HouseList组件
<Sticky height={40}>
  <Filter onFilter={this.onFilter} />
</Sticky>

// Sticky 组件
  handleScroll = () => {
    const { height } = this.props;
    ...
    const { top } = placeholderEl.getBoundingClientRect();
    if (top < 0) {
      // 吸顶
      contentEl.classList.add(styles.fixed);
      placeholderEl.style.height = `${height}px`;
    } else {
      // 取消吸顶
      contentEl.classList.remove(styles.fixed);
      placeholderEl.style.height = "0px";
    }
  };

```

### 列表找房模块-优化（★★★）

#### 目标

- 学习在已有代码上寻找bug的思路（定位bug原因，思考解决办法）

#### 加载提示

- 实现加载房源数据时：加载中、加载完成的提示（需要解决：没有房源数据时，不弹提示框）
- 判断一下count是否为0，如果为0，就不加载提示信息
- 找不到房源数据时候的提示（需要解决：进入页面就展示该提示的问题）
- 判断一下是否是第一次进入，可以用一个变量来进行记录，然后只要进行了数据请求，就把这个标识更改

### 条件筛选栏优化

- 点击条件筛选栏，展示FilterPicker组件时，样式错乱问题（需要解决：样式问题）
- 把FilterPicker组件修改成绝对定位，脱标了，就不会挤下面的结构了
- 使用条件筛选查询数据时，页面没有回到顶部（需要解决：每次重新回到页面顶部）
- 在点击条件查询确定按钮的时候，利用window.scroll(0 ,0) 来回到页面顶部
- 点击条件筛选栏，展示对话框后，页面还会滚动（需要解决：展示对话框后页面不滚动）
- 展示对话框的时候，给body添加 overflow: hidden 的样式，这样页面就不能进行滚动，等到对话框消失的时候，取消body的 overflow: hidden 样式

### 切换城市显示房源优化

- 切换城市或，该页面无法展示当前定位城市名称和当前城市房源数据，刷新页面后才会生效（需要解决：切换城市后立即生效）
  - 在组件的 componentDidMount构造函数中，进行获取当前定位城市名称

### react-spring动画库（★★★）

#### 目标

- 知道react-spring组件库的优势
- 能够参照官方文档，使用react-spring进行简单的透明度变化的动画
- 能够实现遮罩层动画效果

#### 概述

- 场景：展示筛选对话框的时候，实现动画效果，增强用户体验
- react-spring是基于spring-physics（弹簧物理）的react动画库，动画效果更加流畅、自然

- 优势：
  - 几乎可以实现任意UI动画效果
  - 组件式使用方式（render-props模式），简单易用，符合react的声明式特性，性能高

- [github地址](https://github.com/react-spring/react-spring)
- [官方文档](https://www.react-spring.io/docs/props/spring)

#### 基本使用

- 安装： yarn add react-spring
- 打开Spring组件文档
- 导入Spring文档，使用Spring组件包裹要实现动画效果的遮罩层div
- 通过render-props模式，讲参数props设置为遮罩层div的style
- 给Spring组件添加from属性，指定：组件第一次渲染时的动画状态
- 给Spring组件添加to属性，指定：组件要更新的新动画状态
- props就是透明度有0~1中变化的值

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-lgEJpUau-1575112006305)(images/spring.png)]](https://img-blog.csdnimg.cn/20191130190743765.png)

#### 实现遮罩层动画

- 创建方法 renderMask来渲染遮罩层 div
- 修改渲染遮罩层的逻辑，保证Spring组件一直都被渲染（Spring组件被销毁了，就无法实现动画效果）
- 修改to属性的值，在遮罩层隐藏时为0，在遮罩层展示为1
- 在render-props的函数内部，判断props.opacity是否等于0
- 如果等于0，就返回null，解决遮罩层遮挡页面导致顶部点击事件失效
- 如果不等于0，渲染遮罩层div

```react
renderMask() {
    const { openType } = this.state

    const isHide = openType === 'more' || openType === ''

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: isHide ? 0 : 1 }}>
        {props => {
          // 说明遮罩层已经完成动画效果，隐藏了
          if (props.opacity === 0) {
            return null
          }

          return (
            <div
              style={props}
              className={styles.mask}
              onClick={() => this.onCancel(openType)}
            />
          )
        }}
      </Spring>
    )

```

## react好租客项目Day09

-房屋详情&路由配置&登录功能&formik表单校验

### 房屋详情模块-准备工作

#### 目标

- 看懂模板HouseDetail的结构
- 能够获取到数据，渲染到组件上
- 能够配置通用路由规则，并且获取路由参数

#### 模板说明

- 创建房屋详情页面HouseDetail
- 修改NavHeader组件（添加了className和rightContent两个props）
- 创建了HousePackage组件（房屋配套）
- 这些模板已经提供好，可以直接来使用

```react
// 添加 className 和 rightContent（导航栏右侧内容） 属性
function NavHeader({
  children,
  history,
  onLeftClick,
  className,
  rightContent
}) {
  // 默认点击行为
  const defaultHandler = () => history.go(-1)

  return (
    <NavBar
      className={[styles.navBar, className || ''].join(' ')}
      mode="light"
      icon={<i className="iconfont icon-back" />}
      onLeftClick={onLeftClick || defaultHandler}
      rightContent={rightContent}
    >
      {children}
    </NavBar>
  )
}

// 添加props校验
NavHeader.propTypes = {
  ...
  rightContent: PropTypes.array
}

// withRouter(NavHeader) 函数的返回值也是一个组件
export default withRouter(NavHeader)

```

#### 路由参数（★★★）

- 房源有多个，那么URL路径也就有多个，那么需要多少个路由规则来匹配呢？一个还是多个？
- 使用 一个 路由规则匹配不同的URL路径，同时I获取到URL中不同的内容，利用路由参数来解决
- 让一个路由规则，同时匹配多个符合该规则的URL路径
- 语法：/detail/:id ，其中:id 就是路由参数

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-h5ZduoEs-1575112083806)(images/路由参数.png)]](https://img-blog.csdnimg.cn/20191130190830117.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

- 获取路由参数： props.match.params

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-DHctc3v2-1575112083807)(images/获取路由参数.png)]](https://img-blog.csdnimg.cn/20191130190840914.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

#### 展示房屋详情（★★★）

- 在找房页面中，给每一个房源列表添加点击事件，在点击时跳转到房屋详情页面
- 在单击事件中，获取到当前房屋id
- 根据房屋详情的路由地址，调用history.push() 实现路由跳转

```react
<HouseItem
  key={key}
  onClick={() => this.props.history.push(`/detail/${house.houseCode}`)}
  // 注意：该组件中应该接收 style，然后给组件元素设置样式！！！
  style={style}
  src={BASE_URL + house.houseImg}
  title={house.title}
  desc={house.desc}
  tags={house.tags}
  price={house.price}
/>
```

- 封装getHouseDetail方法，在componentDidMount中调用该方法

```react
componentDidMount() {
    // 获取房屋数据
    this.getHouseDetail()
}
```

- 在方法中，通过路由参数获取到当前房屋id
- 使用API发送请求，获取房屋数据，保存到state中

```react
async getHouseDetail() {
  const { id } = this.props.match.params

  // 开启loading
  this.setState({
    isLoading: true
  })

  const res = await API.get(`/houses/${id}`)

  this.setState({
    houseInfo: res.data.body,
    isLoading: false
  })

  const { community, coord } = res.data.body

  // 渲染地图
  this.renderMap(community, coord)
}

```

使用房屋数据，渲染页面

- 解构出需要的数据

```react
const {
  isLoading,
  houseInfo: {
    community,
    title,
    price,
    roomType,
    size,
    floor,
    oriented,
    supporting,
    description
  }
} = this.state

```

渲染小区名称

```react
{/* 导航栏 */}
<NavHeader
  className={styles.navHeader}
  rightContent={[<i key="share" className="iconfont icon-share" />]}
>
  {community}
</NavHeader>

```

渲染轮播图

```react
// 渲染轮播图结构
renderSwipers() {
  const {
    houseInfo: { houseImg }
  } = this.state

  return houseImg.map(item => (
    <a key={item} href="http://itcast.cn">
      <img src={BASE_URL + item} alt="" />
    </a>
  ))
}

```

渲染标签

```react
// 渲染标签
renderTags() {
  const {
    houseInfo: { tags }
  } = this.state

  return tags.map((item, index) => {
    // 如果标签数量超过3个，后面的标签就都展示位第三个标签的样式
    let tagClass = ''
    if (index > 2) {
      tagClass = 'tag3'
    } else {
      tagClass = 'tag' + (index + 1)
    }

    return (
      <span key={item} className={[styles.tag, styles[tagClass]].join(' ')}>
        {item}
      </span>
    )
  })
}

```

渲染价格，房型，面积等



```react
<Flex className={styles.infoPrice}>
  <Flex.Item className={styles.infoPriceItem}>
    <div>
      {price}
      <span className={styles.month}>/月</span>
    </div>
    <div>租金</div>
  </Flex.Item>
  <Flex.Item className={styles.infoPriceItem}>
    <div>{roomType}</div>
    <div>房型</div>
  </Flex.Item>
  <Flex.Item className={styles.infoPriceItem}>
    <div>{size}平米</div>
    <div>面积</div>
  </Flex.Item>
</Flex>

```

渲染装修，楼层，朝向等

```react
<Flex className={styles.infoBasic} align="start">
   <Flex.Item>
     <div>
       <span className={styles.title}>装修：</span>
       精装
     </div>
     <div>
       <span className={styles.title}>楼层：</span>
       {floor}
     </div>
   </Flex.Item>
   <Flex.Item>
     <div>
       <span className={styles.title}>朝向：</span>
       {oriented.join('、')}
     </div>
     <div>
       <span className={styles.title}>类型：</span>普通住宅
     </div>
   </Flex.Item>
 </Flex>

```

渲染地图

```react
// 渲染地图
renderMap(community, coord) {
  const { latitude, longitude } = coord

  const map = new BMap.Map('map')
  const point = new BMap.Point(longitude, latitude)
  map.centerAndZoom(point, 17)

  const label = new BMap.Label('', {
    position: point,
    offset: new BMap.Size(0, -36)
  })

  label.setStyle(labelStyle)
  label.setContent(`
    <span>${community}</span>
    <div class="${styles.mapArrow}"></div>
  `)
  map.addOverlay(label)
}

```

渲染房屋配套

```react
 {/* 房屋配套 */}
 <div className={styles.about}>
   <div className={styles.houseTitle}>房屋配套</div>
   {/* 判断是否有数据 */}
   {supporting.length === 0 ? (
     <div className={styles.titleEmpty}>暂无数据</div>
   ) : (
     <HousePackage list={supporting} />
   )}
 </div>

```

渲染房屋概况

```react
<div className={styles.set}>
  <div className={styles.houseTitle}>房源概况</div>
  <div>
    <div className={styles.contact}>
      <div className={styles.user}>
        <img src={BASE_URL + '/img/avatar.png'} alt="头像" />
        <div className={styles.useInfo}>
          <div>王女士</div>
          <div className={styles.userAuth}>
            <i className="iconfont icon-auth" />
            已认证房主
          </div>
        </div>
      </div>
      <span className={styles.userMsg}>发消息</span>
    </div>

    <div className={styles.descText}>
      {description || '暂无房屋描述'}
    </div>
  </div>
</div>

```

渲染推荐，可以复用 HouseItem组件

```react
<div className={styles.recommend}>
  <div className={styles.houseTitle}>猜你喜欢</div>
  <div className={styles.items}>
    {recommendHouses.map(item => (
      <HouseItem {...item} key={item.id} />
    ))}
  </div>
</div>

```

### 好客租房移动Web（中）小结

- 地图找房模块：百度地图API，地图覆盖物，CSS Modules解决样式覆盖问题，脚手架环境变量，axios公共URL配置
- 列表找房模块：条件筛选组件封装（变化点），房源列表，react-virtualized（InfiniteLoader，WindowScroller），react-spring动画库
- 房屋详情模块：路由参数（/:id 和 props.match.params），展示房屋详情

### 登录模块（★★★）

#### 目标

- 能够看懂登录页面的模板结构(/Login/index.js)
- 能够把文本框和密码框设置为受控组件
- 能够给form表单绑定onSubmit事件，取消默认行为
- 能够获取用户名和密码请求服务器，保存token
- 能够说出token的作用

#### 功能分析

- 用户登录
- 我的页面
- 封装路由访问控制组件

#### 用户登录

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-F6Kke93L-1575112083810)(images/登录页面.jpg)]](https://img-blog.csdnimg.cn/2019113019091325.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

对应结构:

```react
<div className={styles.root}>
  {/* 顶部导航 */}
  <NavHeader className={styles.navHeader}>账号登录</NavHeader>
  <WhiteSpace size="xl" />

  {/* 登录表单 */}
  <WingBlank>
    <form>
      <div className={styles.formItem}>
        <input
          className={styles.input}
          name="username"
          placeholder="请输入账号"
        />
      </div>
      {/* 长度为5到8位，只能出现数字、字母、下划线 */}
      {/* <div className={styles.error}>账号为必填项</div> */}
      <div className={styles.formItem}>
        <input
          className={styles.input}
          name="password"
          type="password"
          placeholder="请输入密码"
        />
      </div>
      {/* 长度为5到12位，只能出现数字、字母、下划线 */}
      {/* <div className={styles.error}>账号为必填项</div> */}
      <div className={styles.formSubmit}>
        <button className={styles.submit} type="submit">
          登 录
        </button>
      </div>
    </form>
    <Flex className={styles.backHome}>
      <Flex.Item>
        <Link to="/registe">还没有账号，去注册~</Link>
      </Flex.Item>
    </Flex>
  </WingBlank>
</div>

```

功能实现：

- 添加状态：username和password

```react
  state = {
    username: '',
    password: ''
  }

```

- 使用受控组件方式获取表单元素值

```react
getUserName = e => {
  this.setState({
    username: e.target.value
  })
}

getPassword = e => {
  this.setState({
    password: e.target.value
  })
}
render() {
    const { username, password } = this.state

    return (
      <div className={styles.root}>
        ...

        {/* 登录表单 */}
        <WingBlank>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.formItem}>
              <input
                className={styles.input}
                value={username}
                onChange={this.getUserName}
                name="username"
                placeholder="请输入账号"
              />
            </div>
            {/* 长度为5到8位，只能出现数字、字母、下划线 */}
            {/* <div className={styles.error}>账号为必填项</div> */}
            <div className={styles.formItem}>
              <input
                className={styles.input}
                value={password}
                onChange={this.getPassword}
                name="password"
                type="password"
                placeholder="请输入密码"
              />
            </div>
            ...
      </div>
    )
  }
}

```

- 给form表单添加 onSubmit
- 创建方法 handleSubmit，实现表单提交

```react
// 表单提交事件的事件处理程序
handleSubmit = async e => {
  // 阻止表单提交时的默认行为
  e.preventDefault()
  ...
}

```

- 在方法中，通过username和password获取到账号和密码
- 使用API调用登录接口，将username和password作为参数
- 判断返回值status为200时候，表示登录成功
- 登录成功后，将token保存到本地存储中（hkzf_token）
- 返回登录前的页面

```react
// 表单提交事件的事件处理程序
handleSubmit = async e => {
  // 阻止表单提交时的默认行为
  e.preventDefault()

  // 获取账号和密码
  const { username, password } = this.state

  // console.log('表单提交了', username, password)
  // 发送请求
  const res = await API.post('/user/login', {
    username,
    password
  })

  console.log('登录结果：', res)
  const { status, body, description } = res.data

  if (status === 200) {
    // 登录成功
    localStorage.setItem('hkzf_token', body.token)
    this.props.history.go(-1)
  } else {
    // 登录失败
    Toast.info(description, 2, null, false)
  }
}

```

### 表单验证说明

- 表单提交前，需要先进性表单验证，验证通过后再提交表单
- 方式一：antd-mobile 组件库的方式（需要InputItem文本输入组件）
- 推荐：使用更通用的 formik，React中专门用来进行表单处理和表单校验的库

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-gGb3kQJK-1575112083814)(images/表单验证.png)]](https://img-blog.csdnimg.cn/20191130190934914.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

### formik

#### 目标

- 知道formik的作用
- 能够参照文档来实现简单的表单校验
- 能够给登录功能添加表单校验
- 能够使用formik中提供的组件：Form, Field, ErrorMessage，来对登录模块进行优化

#### 介绍

- Github地址：formik文档
- 场景：表单处理，表单验证
- 优势：轻松处理React中的复杂表单，包括：获取表单元素的值，表单验证和错误信息，处理表单提交，并且将这些内容放在一起统一处理，有利于代码阅读，重构，测试等
- 使用两种方式：1. 高阶组件（withFormik） 2. render-props（<Formik render={() => {}} />）

### formik来实现表单校验（★★★）

#### 重构

 

- 安装： yarn add formik
- 导入 withFormik，使用withFormit 高阶组件包裹Login组件
- 为withFormit提供配置对象： mapPropsToValues / handleSubmit
- 在Login组件中，通过props获取到values（表单元素值对象），handleSubmit，handleChange
- 使用values提供的值，设置为表单元素的value，使用handleChange设置为表单元素的onChange
- 使用handleSubmit设置为表单的onSubmit
- 在handleSubmit中，通过values获取到表单元素值
- 在handleSubmit中，完成登录逻辑

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-O7eld3iA-1575112083815)(images/formit组件使用.png)]](https://img-blog.csdnimg.cn/20191130190953938.png)

```react
// Login组件中
render() {
  // const { username, password } = this.state

  // 通过 props 获取高阶组件传递进来的属性
  const { values, handleSubmit, handleChange } = this.props

  return (
    <div className={styles.root}>
      {/* 顶部导航 */}
      <NavHeader className={styles.navHeader}>账号登录</NavHeader>
      <WhiteSpace size="xl" />

      {/* 登录表单 */}
      <WingBlank>
        <form onSubmit={handleSubmit}>
          <div className={styles.formItem}>
            <input
              className={styles.input}
              value={values.username}
              onChange={handleChange}
              name="username"
              placeholder="请输入账号"
            />
          </div>
          {/* 长度为5到8位，只能出现数字、字母、下划线 */}
          {/* <div className={styles.error}>账号为必填项</div> */}
          <div className={styles.formItem}>
            <input
              className={styles.input}
              value={values.password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="请输入密码"
            />
          </div>
          {/* 长度为5到12位，只能出现数字、字母、下划线 */}
          {/* <div className={styles.error}>账号为必填项</div> */}
          <div className={styles.formSubmit}>
            <button className={styles.submit} type="submit">
              登 录
            </button>
          </div>
        </form>
        <Flex className={styles.backHome}>
          <Flex.Item>
            <Link to="/registe">还没有账号，去注册~</Link>
          </Flex.Item>
        </Flex>
      </WingBlank>
    </div>
  )
}

// 使用 withFormik 高阶组件包装 Login 组件，为 Login 组件提供属性和方法
Login = withFormik({
  // 提供状态：
  mapPropsToValues: () => ({ username: '', password: '' }),
  // 表单的提交事件
  handleSubmit: async (values, { props }) => {
    // 获取账号和密码
    const { username, password } = values

    // 发送请求
    const res = await API.post('/user/login', {
      username,
      password
    })

    console.log('登录结果：', res)
    const { status, body, description } = res.data

    if (status === 200) {
      // 登录成功
      localStorage.setItem('hkzf_token', body.token)

      // 注意：无法在该方法中，通过 this 来获取到路由信息
      // 所以，需要通过 第二个对象参数中获取到 props 来使用 props
      props.history.go(-1)
    } else {
      // 登录失败
      Toast.info(description, 2, null, false)
    }
  }
})(Login)

```

#### 两种表单验证方式

两种方式

- 通过validate 配置手动校验

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-Cpdbd8f2-1575112083817)(images/validate.png)]](https://img-blog.csdnimg.cn/20191130191019928.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

通过 validationSchema 配置项配合Yup来校验



![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-nWKqpJwp-1575112083818)(images/validationSchema.png)]](https://img-blog.csdnimg.cn/20191130191033249.png)

- 推荐： validationSchema配合Yup的方式进行表单校验

#### 给登录功能添加表单验证

- 安装： yarn add yup （[Yup 文档](https://github.com/jquense/yup)），导入Yup

```react
// 导入Yup
import * as Yup from 'yup'

```

- 在 withFormik 中添加配置项 validationSchema，使用 Yup 添加表单校验规则

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-kv5wGwE4-1575112083819)(images/表单校验规则.png)]](https://img-blog.csdnimg.cn/20191130191050562.png)

- 在 Login 组件中，通过 props 获取到 errors（错误信息）和 touched（是否访问过，注意：需要给表单元素添加 handleBlur 处理失焦点事件才生效！）
- 在表单元素中通过这两个对象展示表单校验错误信

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-sDCiUDgD-1575112083821)(images/表单校验-错误.png)]](https://img-blog.csdnimg.cn/20191130191106724.png)

示例代码：

```react
// 使用 withFormik 高阶组件包装 Login 组件，为 Login 组件提供属性和方法
Login = withFormik({
  ...
  // 添加表单校验规则
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required('账号为必填项')
      .matches(REG_UNAME, '长度为5到8位，只能出现数字、字母、下划线'),
    password: Yup.string()
      .required('密码为必填项')
      .matches(REG_PWD, '长度为5到12位，只能出现数字、字母、下划线')
  }),
  ...
})(Login)

```

在结构中需要渲染错误信息：

```react
{/* 登录表单 */}
<WingBlank>
  <form onSubmit={handleSubmit}>
    ...  用户名的错误提示
    {errors.username && touched.username && (
      <div className={styles.error}>{errors.username}</div>
    )}
    ... 密码框的错误提示
    {errors.password && touched.password && (
      <div className={styles.error}>{errors.password}</div>
    )}
    ...
</WingBlank>

```

#### 简单处理

- 导入 Form组件，替换form元素，去掉onSubmit

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-BhWrDyQZ-1575112083822)(images/form组件.png)]](https://img-blog.csdnimg.cn/20191130191121473.png)

- 导入Field组件，替换input表单元素，去掉onChange，onBlur，value

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-KZpJpist-1575112083823)(images/field.png)]](https://img-blog.csdnimg.cn/20191130191141556.png)

- 导入 ErrorMessage 组件，替换原来的错误消息逻辑代码

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-5pOIR3IO-1575112083824)(images/ErrorMessage.png)]](https://img-blog.csdnimg.cn/20191130191151604.png)

- 去掉所有 props

示例代码：

```react
// 导入withFormik
import { withFormik, Form, Field, ErrorMessage } from 'formik'

<Form>
  {/* 账号 */}
  <div className={styles.formItem}>
    <Field
      className={styles.input}
      name="username"
      placeholder="请输入账号"
    />
  </div>
  <ErrorMessage
    className={styles.error}
    name="username"
    component="div"
  />
  {/* 密码 */}
  <div className={styles.formItem}>
    <Field
      className={styles.input}
      name="password"
      type="password"
      placeholder="请输入密码"
    />
  </div>
  <ErrorMessage
    className={styles.error}
    name="password"
    component="div"
  />
  <div className={styles.formSubmit}>
    <button className={styles.submit} type="submit">
      登 录
    </button>
  </div>
</Form>

```

## react好租客项目Day10

-检测是否登&退出&axios拦截器&鉴权路由&收藏模块

### 我的页面

#### 目标

- 我的页面能够实现判断用户登录状态来显示不同的效果
- 能够实现退出登录功能

#### 结构和样式

- 对应的结构样式可以直接拿过来用，我们最主要要实现里面的代码逻辑，文件在 pages/Profile/index

```react
render() {
    return (
      <div className={styles.root}>
        {/* 个人信息 */}
        <div className={styles.title}>
          <img
            className={styles.bg}
            src={BASE_URL + '/img/profile/bg.png'}
            alt="背景图"
          />
          <div className={styles.info}>
            <div className={styles.myIcon}>
              <img
                className={styles.avatar}
                src={avatar || DEFAULT_AVATAR}
                alt="icon"
              />
            </div>
            <div className={styles.user}>
              <div className={styles.name}>{nickname || '游客'}</div>
              {/* 登录后展示： */}
              {isLogin ? (
                <>
                  <div className={styles.auth}>
                    <span onClick={this.logout}>退出</span>
                  </div>
                  <div className={styles.edit}>
                    编辑个人资料
                    <span className={styles.arrow}>
                      <i className="iconfont icon-arrow" />
                    </span>
                  </div>
                </>
              ) : (
                <div className={styles.edit}>
                  <Button
                    type="primary"
                    size="small"
                    inline
                    onClick={() => history.push('/login')}
                  >
                    去登录
                  </Button>
                </div>
              )}
              {/* 未登录展示： */}
            </div>
          </div>
        </div>
        {/* 九宫格菜单 */}
        <Grid
          data={menus}
          // 列数
          columnNum={3}
          // 不需要分割线
          hasLine={false}
          // 渲染每一项
          renderItem={item =>
            item.to ? (
              <Link to={item.to}>
                <div className={styles.menuItem}>
                  <i className={`iconfont ${item.iconfont}`} />
                  <span>{item.name}</span>
                </div>
              </Link>
            ) : (
              <div className={styles.menuItem}>
                <i className={`iconfont ${item.iconfont}`} />
                <span>{item.name}</span>
              </div>
            )
          }
        />
        {/* 加入我们 */}
        <div className={styles.ad}>
          <img src={BASE_URL + '/img/profile/join.png'} alt="" />
        </div>
      </div>
    )
  }

```

#### 功能分析

- 判断是否登录（本地缓存中是否有token信息，直接调用isAuth() 方法即可，这里在utils/auth.js文件中已经封装好了）
- 如果登录了，就发送请求获取个人资料，并且在页面中展示个人资料
- 如果没有登录，则不获取个人资料，只在页面中展示未登录信息
- 在页面中展示登录或未登录信息，就要通过state变化来体现，因此，需要一个标示是否登录的状态

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-eoLDgk6k-1575112340073)(images/我的页面功能分析.png)]](https://img-blog.csdnimg.cn/20191130191538974.png)

### 判断用户是否登陆步骤（★★★）

- 在state中添加两个状态：isLogin（是否登录）和userInfo（用户信息）

```react
  state = {
    // 是否登录
    isLogin: isAuth(),
    // 用户信息
    userInfo: {
      avatar: '',
      nickname: ''
    }
  }

```

- 从utils中导入isAuth（登录状态）、getToken（获取token）

```react
import { BASE_URL, isAuth, getToken, API } from '../../utils'
```

- 创建方法getUserInfo，用户来获取个人资料

```react
async getUserInfo() {
    ...
}

```

- 在方法中，通过isLogin判断用户是否登录

```react
if (!this.state.isLogin) {
    // 未登录
    return
}

```

- 如果没有登录，则不发送请求，渲染未登录信息

```react
// 对用结构使用状态来判断显示登录还是未登录UI
 {/* 登录后展示： */}
{isLogin ? (
  <>
    <div className={styles.auth}>
      <span onClick={this.logout}>退出</span>
    </div>
    <div className={styles.edit}>
      编辑个人资料
      <span className={styles.arrow}>
        <i className="iconfont icon-arrow" />
      </span>
    </div>
  </>
) : (
  <div className={styles.edit}>
    <Button
      type="primary"
      size="small"
      inline
      onClick={() => history.push('/login')}
    >
      去登录
    </Button>
  </div>
)}

```

- 如果已登录，就根据接口发送请求，获取用户个人资料
- 渲染个人资料数据

```react
async getUserInfo() {
  if (!this.state.isLogin) {
    // 未登录
    return
  }

  // 发送请求，获取个人资料
  const res = await API.get('/user', {
    headers: {
      authorization: getToken()
    }
  })

  if (res.data.status === 200) {
    // 请求成功
    const { avatar, nickname } = res.data.body
    this.setState({
      userInfo: {
        avatar: BASE_URL + avatar,
        nickname
      }
    })
  }
}


// render方法中 
render(){
    const { history } = this.props

    const {
      isLogin,
      userInfo: { avatar, nickname }
    } = this.state
    return (
      <div className={styles.root}>
        {/* 个人信息 */}
        <div className={styles.title}>
          <img
            className={styles.bg}
            src={BASE_URL + '/img/profile/bg.png'}
            alt="背景图"
          />
          <div className={styles.info}>
            <div className={styles.myIcon}>
              <img
                className={styles.avatar}
                src={avatar || DEFAULT_AVATAR}
                alt="icon"
              />
            </div>
            <div className={styles.user}>
              <div className={styles.name}>{nickname || '游客'}</div>
              ...
}

```

### 退出功能（★★★）

- 点击退出按钮，弹出对话框，提示是否确定退出
- 给退出按钮绑定点击事件，创建方法logout作为事件处理函数
- 导入Modal对话框组件（弹出模态框）

```react
import {..., Modal } from 'antd-mobile'
```

- 在方法中，拷贝Modal组件文件高中确认对话框的示例代码

```react
const alert = Modal.alert
alert('Delete', 'Are you sure?', [
      { text: 'Cancel',onPress: () => console.log('cancel) },
      { text: 'Ok', onPress: () => console.log('ok')}
])
```

- 修改对话框的文字提示

```react
alert('提示', '是否确定退出?', [
      { text: '取消'},
      { text: '退出', onPress: () => console.log('ok')}
])

```

- 在退出按钮的事件处理程序中，先调用退出接口（让服务器端退出），再移除本地token（本地退出）
- 把登录状态isLogin设置为false
- 清空用户状态对象

```react
{
  text: '退出',
  onPress: async () => {
    // 调用退出接口
    await API.post('/user/logout', null, {
      headers: {
        authorization: getToken()
      }
    })

    // 移除本地token
    removeToken()

    // 处理状态
    this.setState({
      isLogin: false,
      userInfo: {
        avatar: '',
        nickname: ''
      }
    })
  }
}

```

### 登录访问控制

#### 目标

- 理解访问控制中的两种功能和两种页面
- 能够说出处理两种功能用什么方式来实现
- 能够写出 axios请求拦截器与响应拦截器，并且能够说出这两种拦截器分别在什么时候触发，有什么作用
- 能够说出处理两种页面用什么方式来实现
- 能够说出AuthRoute 鉴权路由组件实现思路
- 能够参照官网自己封装AuthRoute 鉴权路由组件
- 能够实现修改登录成功后的跳转

#### 概述

项目中的两种类型的功能和两种类型的页面：

两种功能：

- 登录后才能进行操作（比如：获取个人资料）
- 不需要登录就可以操作（比如：获取房屋列表）

两种页面：

- 需要登录才能访问（比如：发布房源页）
- 不需要登录即可访问（比如：首页）

对于需要登录才能操作的功能使用 **axios 拦截器** 进行处理（比如：统一添加请求头 authorization等）

对于需要登录才能访问的页面使用 **路由控制**

### 功能处理-使用axios拦截器统一处理token（★★★）

- 在api.js 中，添加请求拦截器 (API.interceptors.request.user())
- 获取到当前请求的接口路径（url）
- 判断接口路径，是否是以/user 开头，并且不是登录或注册接口（只给需要的接口添加请求头）
- 如果是，就添加请求头Authorization

```react
// 添加请求拦截器
API.interceptors.request.use(config => {
  const { url } = config
  // 判断请求url路径
  if (
    url.startsWith('/user') &&
    !url.startsWith('/user/login') &&
    !url.startsWith('/user/registered')
  ) {
    // 添加请求头
    config.headers.Authorization = getToken()
  }
  return config
})
```

- 添加响应拦截器 (API.interceptors.response.use())
- 判断返回值中的状态码
- 如果是400，标示token超时或异常，直接移除token

```react
// 添加响应拦截器
API.interceptors.response.use(response => {
  const { status } = response.data
  if (status === 400) {
    // 此时，说明 token 失效，直接移除 token 即可
    removeToken()
  }
  return response
})
```

### 页面处理-AuthRoute鉴权路由组件（★★★）

#### 实现原理

- 限制某个页面只能在登陆的情况下访问，但是在React路由中并没有直接提供该组件，需要手动封装，来实现登陆访问控制（类似与Vue路由的导航守卫）

- 参数 react-router-dom的鉴权文档

- AuthRoute 组件实际上就是对原来Route组件做了一次包装，来实现一些额外的功能


使用
![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-N6aFHAEw-1575112340075)(images/使用.png)]](https://img-blog.csdnimg.cn/20191130191612467.png)

- render方法：render props模式，指定该路由要渲染的组件内容
- Redirect组件：重定向组件，通过to属性，指定要跳转的路由信息

```react
// 官网封装的核心逻辑代码
// ...rest  把之前的组件中传递的属性原封不动传递过来
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      // render方法： render props模式，指定该路由要渲染的组件内容
      render={props =>
        // 判断是否登陆，如果登陆，跳转配置的component，如果没有登陆，利用 Redirect组件来进行重定向
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              // 把当前的页面路径保存起来，方便用户登录后能够跳回当前页面
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

```

### 封装AuthRoute鉴权路由组件

- 在components目录中创建AuthRoute/index.js 文件
- 创建组件AuthRoute并导出
- 在AuthRoute组件中返回Route组件（在Route基础上做了一层包装，用于实现自定义功能）
- 给Route组件，添加render方法，指定改组件要渲染的内容（类似与component属性）
- 在render方法中，调用isAuth() 判断是否登陆
- 如果登陆了，就渲染当前组件（通过参数component获取到要渲染的组件，需要重命名）
- 如果没有登陆，就重定向到登陆页面，并且指定登陆成功后腰跳转的页面路径
- 将AuthRoute组件接收到的props原样传递给Route组件（保证与Route组件使用方式相同）
- 使用AuthRoute组件配置路由规则，验证是否实现页面的登陆访问控制

```react
const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const isLogin = isAuth()

        if (isLogin) {
          // 已登录
          // 将 props 传递给组件，组件中才能获取到路由相关信息
          return <Component {...props} />
        } else {
          // 未登录
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location
                }
              }}
            />
          )
        }
      }}
    />
  )
}
export default AuthRoute

```

### 修改登录成功跳转

- 登陆成功后，判断是否需要跳转到用户想要访问的页面（判断props.location.state 是否有值）
- 如果不需要，则直接调用history.go(-1) 返回上一页
- 如果需要，就跳转到from.pathname 指定的页面（推荐使用replace方法模式，不是push）

```react
 // 表单的提交事件
  handleSubmit: async (values, { props }) => {
    ...
    if (status === 200) {
      // 登录成功
      localStorage.setItem('hkzf_token', body.token)

      /* 
        1 登录成功后，判断是否需要跳转到用户想要访问的页面（判断 props.location.state 是否有值）。
        2 如果不需要（没有值），则直接调用 history.go(-1) 返回上一页。
        3 如果需要，就跳转到 from.pathname 指定的页面（推荐使用 replace 方法模式，而不是 push）。
      */
      if (!props.location.state) {
        // 此时，表示是直接进入到了该页面，直接调用 go(-1) 即可
        props.history.go(-1)
      } else {
        // replace: [home, map]
        props.history.replace(props.location.state.from.pathname)
      }
    } else {
      // 登录失败
      Toast.info(description, 2, null, false)
    }
  }

```

### 我的收藏模块

#### 目标

- 能够实现检测房源是否收藏
- 能够实现收藏房源功能

#### 功能分析

- 收藏房源
- 功能：
  - 检查房源是否收藏
  - 收藏房源

#### 检查房源是否收藏（★★）

- 在state中添加状态，isFavorite（表示是否收藏），默认值是false

```react
state= {
    // 表示房源是否收藏
    isFavorite: false
}

```

- 创建方法 checkFavorite，在进入房源详情页面时调用该方法
- 先调用isAuth方法，来判断是否登陆
- 如果未登录，直接return，不再检查是否收藏
- 如果已登陆，从路由参数中，获取当前房屋id
- 使用API调用接口，查询该房源是否收藏
- 如果返回状态码为200，就更新isFavorite；否则，不做任何处理

```react
async checkFavorite() {
    const isLogin = isAuth()

    if (!isLogin) {
      // 没有登录
      return
    }

    // 已登录
    const { id } = this.props.match.params
    const res = await API.get(`/user/favorites/${id}`)

    const { status, body } = res.data
    if (status === 200) {
      // 表示请求已经成功，需要更新 isFavorite 的值
      this.setState({
        isFavorite: body.isFavorite
      })
    }
  }

```

- 在页面结构中，通过状态isFavorite修改收藏按钮的文字和图片内容

```react
{/* 底部收藏按钮 */}
<Flex className={styles.fixedBottom}>
  <Flex.Item>
    <img
      src={
        BASE_URL + (isFavorite ? '/img/star.png' : '/img/unstar.png')
      }
      className={styles.favoriteImg}
      alt="收藏"
    />
    <span className={styles.favorite}>
      {isFavorite ? '已收藏' : '收藏'}
    </span>
  </Flex.Item>
  <Flex.Item>在线咨询</Flex.Item>
  <Flex.Item>
    <a href="tel:400-618-4000" className={styles.telephone}>
      电话预约
    </a>
  </Flex.Item>
</Flex>

```

#### 收藏房源（★★★）

- 给收藏按钮绑定点击事件，创建方法handleFavorite作为事件处理程序

```react
handleFavorite = async () => {
    ...
}

```

- 调用isAuth方法，判断是否登陆
- 如果未登录，则使用Modal.alert 提示用户是否去登陆
- 如果点击取消，则不做任何操作
- 如果点击去登陆，就跳转到登陆页面，同时传递state(登陆后，再回到房源收藏页面)

```react
const isLogin = isAuth()
const { history, location, match } = this.props

if (!isLogin) {
  // 未登录
  return alert('提示', '登录后才能收藏房源，是否去登录?', [
    { text: '取消' },
    {
      text: '去登录',
      onPress: () => history.push('/login', { from: location })
    }
  ])
}

```

- 根据isFavorite判断，当前房源是否收藏
- 如果未收藏，就调用添加收藏接口，添加收藏
- 如果收藏了，就调用删除接口，删除收藏

```react
if (isFavorite) {
  // 已收藏，应该删除收藏
  const res = await API.delete(`/user/favorites/${id}`)
  // console.log(res)
  this.setState({
    isFavorite: false
  })

  if (res.data.status === 200) {
    // 提示用户取消收藏
    Toast.info('已取消收藏', 1, null, false)
  } else {
    // token 超时
    Toast.info('登录超时，请重新登录', 2, null, false)
  }
} else {
  // 未收藏，应该添加收藏
  const res = await API.post(`/user/favorites/${id}`)
  // console.log(res)
  if (res.data.status === 200) {
    // 提示用户收藏成功
    Toast.info('已收藏', 1, null, false)
    this.setState({
      isFavorite: true
    })
  } else {
    // token 超时
    Toast.info('登录超时，请重新登录', 2, null, false)
  }
}

```

- 完整逻辑代码

```react
handleFavorite = async () => {
    const isLogin = isAuth()
    const { history, location, match } = this.props

    if (!isLogin) {
      // 未登录
      return alert('提示', '登录后才能收藏房源，是否去登录?', [
        { text: '取消' },
        {
          text: '去登录',
          onPress: () => history.push('/login', { from: location })
        }
      ])
    }

    // 已登录
    const { isFavorite } = this.state
    const { id } = match.params

    if (isFavorite) {
      // 已收藏，应该删除收藏
      const res = await API.delete(`/user/favorites/${id}`)
      // console.log(res)
      this.setState({
        isFavorite: false
      })

      if (res.data.status === 200) {
        // 提示用户取消收藏
        Toast.info('已取消收藏', 1, null, false)
      } else {
        // token 超时
        Toast.info('登录超时，请重新登录', 2, null, false)
      }
    } else {
      // 未收藏，应该添加收藏
      const res = await API.post(`/user/favorites/${id}`)
      // console.log(res)
      if (res.data.status === 200) {
        // 提示用户收藏成功
        Toast.info('已收藏', 1, null, false)
        this.setState({
          isFavorite: true
        })
      } else {
        // token 超时
        Toast.info('登录超时，请重新登录', 2, null, false)
      }
    }
  }

```

## react好租客项目Day11

-发布房源模块(js输入框防抖&图片上传)&项目打包&项目优化(按需加载&路由代码分割)

- 如何解决JS 文本输入框防抖（用户输入过快导致请求服务器的压力过大）
- 能够完成搜索模块
- 能够获取发布房源的相关信息
- 能够知道图片上传的流程
- 能够完成图片上传功能
- 能够完成房源发布功能

### 前期准备工作

#### 功能

- 获取房源的小区信息，房源图片上传，房源发布等

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-d0yllDAe-1575112741215)(images/发布房源.png)]](https://img-blog.csdnimg.cn/20191130191921650.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

#### 模板改动说明

- 修改首页（Index）去出租链接为： /rent/add
- 修改公共组件NoHouse的children属性校验为： node（任何可以渲染的内容）

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-wTlhzzyO-1575112741216)(images/noHouse.jpg)]](https://img-blog.csdnimg.cn/2019113019194854.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

- 修改公共组件HousePackage，添加onSelect的默认值

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-MuCgqTDd-1575112741220)(images/onSelect.png)]](https://img-blog.csdnimg.cn/20191130192000867.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

- 添加utils/city.js，封装当前定位城市 localStorage的操作

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-oUpPCXcv-1575112741223)(images/city.png)]](https://img-blog.csdnimg.cn/20191130192015688.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

- 创建了三个页面组件：Rent（已发布房源列表）、Rent/Add（发布房源）、Rent/Search（关键词搜索校区信息）

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-GZfe1Qn6-1575112741227)(images/rent.png)]](https://img-blog.csdnimg.cn/20191130192033706.png)

- Rent 模板代码

```react
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { API, BASE_URL } from '../../utils'

import NavHeader from '../../components/NavHeader'
import HouseItem from '../../components/HouseItem'
import NoHouse from '../../components/NoHouse'

import styles from './index.module.css'

export default class Rent extends Component {
  state = {
    // 出租房屋列表
    list: []
  }

  // 获取已发布房源的列表数据
  async getHouseList() {
    const res = await API.get('/user/houses')

    const { status, body } = res.data
    if (status === 200) {
      this.setState({
        list: body
      })
    } else {
      const { history, location } = this.props
      history.replace('/login', {
        from: location
      })
    }
  }

  componentDidMount() {
    this.getHouseList()
  }

  renderHouseItem() {
    const { list } = this.state
    const { history } = this.props

    return list.map(item => {
      return (
        <HouseItem
          key={item.houseCode}
          onClick={() => history.push(`/detail/${item.houseCode}`)}
          src={BASE_URL + item.houseImg}
          title={item.title}
          desc={item.desc}
          tags={item.tags}
          price={item.price}
        />
      )
    })
  }

  renderRentList() {
    const { list } = this.state
    const hasHouses = list.length > 0

    if (!hasHouses) {
      return (
        <NoHouse>
          您还没有房源，
          <Link to="/rent/add" className={styles.link}>
            去发布房源
          </Link>
          吧~
        </NoHouse>
      )
    }

    return <div className={styles.houses}>{this.renderHouseItem()}</div>
  }

  render() {
    const { history } = this.props

    return (
      <div className={styles.root}>
        <NavHeader onLeftClick={() => history.go(-1)}>房屋管理</NavHeader>

        {this.renderRentList()}
      </div>
    )
  }
}

```

#### 三个路由规则配置

- 在App.js 中导入Rent已发布房源列表页面
- 在App.js 中导入AuthRoute组件
- 使用AuthRoute组件，配置路由规则
- 使用同样方式，配置Rent/Add 房源发布页面，Rent/Search 关键词搜索小区信息页面

```react
{/* 配置登录后，才能访问的页面 */}
<AuthRoute exact path="/rent" component={Rent} />
<AuthRoute path="/rent/add" component={RentAdd} />
<AuthRoute path="/rent/search" component={RentSearch} />

```

### 搜索模块（★★★）

#### 关键词搜索小区信息

- 获取SearchBar 搜索栏组件的值
- 在搜索栏的change事件中，判断当前值是否为空
- 如果为空，直接return，不做任何处理
- 如果不为空，就根据当前输入的值以及当前城市id，获取该关键词对应的小区信息
- **问题：**搜索栏中每输入一个值，就发一次请求，这样对服务器压力比较大，用户体验不好
- **解决方式：**使用定时器来进行延迟执行（关键词：JS文本框输入 防抖）

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-OtWoClFE-1575112741229)(images/输入框防抖.png)]](https://img-blog.csdnimg.cn/20191130192158194.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTU4MzcwOA==,size_16,color_FFFFFF,t_70)

#### 实现步骤

- 给SearchBar组件，添加onChange配置项，获取文本框的值

```react
<div className={styles.root}>
  {/* 搜索框 */}
  <SearchBar
    placeholder="请输入小区或地址"
    value={searchTxt}
    onChange={this.handleSearchTxt}
    showCancelButton={true}
    onCancel={() => history.go(-1)}
  />

  {/* 搜索提示列表 */}
  <ul className={styles.tips}>{this.renderTips()}</ul>
</div>

```

- 判断当前文本框的值是否为空
- 如果为空，清空列表，然后return，不再发送请求

```react
handleSearchTxt = value => {
    this.setState({ searchTxt: value })
    if (!value) {
      // 文本框的值为空
      return this.setState({
        tipsList: []
      })
    }
  }

```

- 如果不为空，使用API发送请求，获取小区数据
- 使用定时器来延迟搜索，提升性能

```react
handleSearchTxt = value => {
    this.setState({ searchTxt: value })

    if (!value) {
      // 文本框的值为空
      return this.setState({
        tipsList: []
      })
    }

    // 清除上一次的定时器
    clearTimeout(this.timerId)

    this.timerId = setTimeout(async () => {
      // 获取小区数据
      const res = await API.get('/area/community', {
        params: {
          name: value,
          id: this.cityId
        }
      })
      this.setState({
        tipsList: res.data.body
      })
    }, 500)
  }

```

### 获取房源数据分析（★★）

- InputItem、TextareaItem、Picker组件，都使用onChange配置项，来获取当前值
- 处理方式：封装一个事件处理函数 getValue 来统一获取三种组件的值
- 创建方法getValue作为三个组件的事件处理函数
- 该方法接受两个参数：1. name 当前状态名；2. value 当前输入值或者选中值
- 分别给 InputItem/TextareaItem/Picker 组件，添加onChange配置项
- 分别调用 getValue 并传递 name 和 value 两个参数（注意：Picker组件选中值为数组，而接口需要字符串，所以，取索引号为 0 的值即可）

示例代码：

```react
  /* 
    获取表单数据：
  */
  getValue = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  
  // 给相应组件添加 onChange 事件，传递 name 和value
  

```

### 获取房屋配置数据（★★）

- 给HousePackge 组件， 添加 onSelect 属性
- 在onSelect 处理方法中，通过参数获取到当前选中项的值
- 根据发布房源接口的参数说明，将获取到的数组类型的选中值，转化为字符串类型
- 调用setState 更新状态

```react
/* 
  获取房屋配置数据
*/
handleSupporting = selected => {
  this.setState({
    supporting: selected.join('|')
  })
}
  
...
<HousePackge select onSelect={this.handleSupporting} />

```

### 图片上传（★★★）

#### 分析

- 根据发布房源接口，最终需要的是房屋图片的路径
- 两个步骤： 1- 获取房屋图片； 2- 上传图片获取到图片的路径
- 如何获取房屋图片？ ImagePicker图片选择器组件，通过onChange配置项来获取
- 如何上传房屋图片？ 根据图片上传接口，将图片转化为FormData数据后再上传，由接口返回图片路径

```react
  handleHouseImg = (files, type, index) => {
    // files 图片文件的数组； type 操作类型：添加，移除（如果是移除，那么第三个参数代表就是移除的图片的索引）
    console.log(files, type, index)
    this.setState({
      tempSlides: files
    })
  }
  ...
   <ImagePicker
     files={tempSlides}
     onChange={this.handleHouseImg}
     multiple={true}
     className={styles.imgpicker}
   />

```

#### 上传房屋图片

图片已经可以通过 ImagePicker 的 onChange 事件来获取到了，接下来就需要把图片进行上传，然后获取到服务器返回的成功上传图片的路径

- 给提交按钮，绑定点击事件
- 在事件处理函数中，判断是否有房屋图片
- 如果没有，不做任何处理
- 如果有，就创建FormData的示例对象（form）
- 遍历tempSlides数组，分别将每一个图片图片对象，添加到form中（键为：file，根据接口文档获取）
- 调用图片上传接口，传递form参数，并设置请求头 Content-Type 为 multipart/form-data
- 通过接口返回值获取到图片路径

```react
// 上传图片
addHouse = async() => {
    const { tempSlides } = this.state
    let houseImg = ''

    if (tempSlides.length > 0) {
        // 已经有上传的图片了
        const form = new FormData()
        tempSlides.forEach(item => form.append('file', item.file))

        const res = await API.post('/houses/image', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        // console.log(res)
        houseImg = res.data.body.join('|')
    }
}
...
<Flex.Item className={styles.confirm} onClick={this.addHouse}>
  提交
</Flex.Item>

```

#### 发布房源

到现在，我们已经可以获取到发布房源的所有信息了，接下来就需要把数据传递给服务器

- 在 addHouse 方法中， 从state 里面获取到所有的房屋数据
- 使用API 调用发布房源接口，传递所有房屋数据
- 根据接口返回值中的状态码，判断是否发布成功
- 如果状态码是200，标示发布成功，就提示：发布成功，并跳转到已发布的房源页面
- 否则，就提示：服务器偷懒了，请稍后再试

```react
addHouse = async () => {
  const {
    tempSlides,
    title,
    description,
    oriented,
    supporting,
    price,
    roomType,
    size,
    floor,
    community
  } = this.state
  let houseImg = ''

  // 上传房屋图片：
  if (tempSlides.length > 0) {
    // 已经有上传的图片了
    const form = new FormData()
    tempSlides.forEach(item => form.append('file', item.file))

    const res = await API.post('/houses/image', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    houseImg = res.data.body.join('|')
  }

  // 发布房源
  const res = await API.post('/user/houses', {
    title,
    description,
    oriented,
    supporting,
    price,
    roomType,
    size,
    floor,
    community: community.id,
    houseImg
  })

  if (res.data.status === 200) {
    // 发布成功
    Toast.info('发布成功', 1, null, false)
    this.props.history.push('/rent')
  } else {
    Toast.info('服务器偷懒了，请稍后再试~', 2, null, false)
  }
}

```

### 项目打包

#### 目标

- 能够配置生产环境的环境变量
- 能够完成简易的打包
- 知道react中如果要配置webpack的两种方式
- 知道 antd-mobile 按需加载的好处
- 知道路由代码分割的好处
- 能够参照笔记来进行 按需加载配置和代码分割配置，然后打包
- 能够知道如何解决react中跨域问题

#### 简易打包（★★★）

- 打开 create-react-app 脚手架的 [打包文档说明](https://facebook.github.io/create-react-app/docs/deployment)
- 在根目录创建 .env.production 文件，配置生产环境的接口基础路径

- 在项目根目录中，打开终端
- 输入命令： yarn build，进行项目打包，生成build文件夹（打包好的项目内容）
- 将build目录中的文件内容，部署到都服务器中即可
- 也可以通过终端中的提示，使用 serve-s build 来本地查看（需要全局安装工具包 serve）
- **如果出现以下提示，就代表打包成功，在根目录中就会生成一个build文件夹**

#### 脚手架的配置说明（★★★）

create-react-app 中隐藏了 webpack的配置，隐藏在react-scripts包中

两种方式来修改

- 运行命令 npm run eject 释放 webpack配置（注意：不可逆）

- 如果您对构建工具和配置选择不满意，您可以eject随时进行。此命令将从项目中删除单个构建依赖项。

- 相反，它会将所有配置文件和传递依赖项（Webpack，Babel，ESLint等）作为依赖项复制到项目中package.json。从技术上讲，依赖关系和开发依赖关系之间的区别对于生成静态包的前端应用程序来说是非常随意的。此外，它曾经导致某些托管平台出现问题，这些托管平台没有安装开发依赖项（因此无法在服务器上构建项目或在部署之前对其进行测试）。您可以根据需要自由重新排列依赖项package.json。

- 除了eject仍然可以使用所有命令，但它们将指向复制的脚本，以便您可以调整它们。在这一点上，你是独立的。

- 你不必使用eject。策划的功能集适用于中小型部署，您不应觉得有义务使用此功能。但是，我们知道如果您准备好它时无法自定义此工具将无用

- 通过第三方包重写 webpack配置（比如：react-app-rewired 等）

#### antd-mobile 按需加载（★★★）

- 打开 antd-mobile 在create-react-app中的使用文档
- 安装 yarn add react-app-rewired customize-cra（用于脚手架重写配置）
- 修改package.json 中的 scripts

- 在项目根目录创建文件： config-overrides.js(用于覆盖脚手架默认配置)
- 安装 yarn add babel-plugin-import 插件（用于按需加载组件代码和样式）
- 修改 config-overrides.js 文件，配置按需加载功能

```react
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
);

```

重启项目（yarn start）

移除index.js 中导入的 antd-mobile样式文件

将index.css 移动到App后面，让index.css 中的页面背景生效

打完包后，你会发现，两次打包的体积会有变化，这样达到了一个代码体积优化的层面

#### 基于路由代码分割（★★★）

- 目的：将代码按照路由进行分割，只在访问该路由的时候才加载该组件内容，提高首屏加载速度
- 如何实现？ React.lazy() 方法 + import() 方法、Suspense组件（React Code-Splitting文档）
- React.lazy() 作用： 处理动态导入的组件，让其像普通组件一样使用
- import(‘组件路径’)，作用：告诉webpack，这是一个代码分割点，进行代码分割
- Suspense组件：用来在动态组件加载完成之前，显示一些loading内容，需要包裹动态组件内容

#### 其他性能优化（★★）

- React.js 优化性能[文档](https://reactjs.org/docs/docs/optimizing-performance.html)
- react-virtualized只加载用到的组件 [文档](https://github.com/bvaughn/react-virtualized#getting-started)
- 脚手架配置 解决跨域问题
  - 安装 http-proxy-middleware

```react
$ npm install http-proxy-middleware --save
$ # or
$ yarn add http-proxy-middleware

```

创建`src/setupProxy.js`并放置以下内容

```react
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:5000/' }));
};

```

- **注意：**无需在任何位置导入此文件。它在启动开发服务器时自动注册，此文件仅支持Node的JavaScript语法。请务必仅使用支持的语言功能（即不支持Flow，ES模块等）。将路径传递给代理功能允许您在路径上使用通配和/或模式匹配，这比快速路由匹配更灵活

### 好客租房移动Web（下）-总结

- 登录模块：使用Fomik组件实现了表单处理和表单校验、封装鉴权路由AuthRoute和axios拦截器实现登录访问控制
- 我的收藏模块：添加、取消收藏
- 发布房源模块：小区关键词搜索、图片上传、发布房源信息
- 项目打包和优化：antd-mobile组件库按需加载，基于路由的代码分割实现组件的按需加载，提高了首屏加载速度
