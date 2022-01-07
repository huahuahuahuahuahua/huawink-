---
title: vue商城项目
date: 2021-09-05
tags:
 - 前端
 - 项目
categories: 
 - 2021
---

# vue商城项目:grinning:



## Vue项目supermall仿蘑菇街详解

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
