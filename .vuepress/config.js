const moment = require("moment");
module.exports = {
  "title": "huawink",
  "description": "一个博客项目",
	"base":"/huawink/",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {

    "nav": [
	    {
      text: "留言板",
      icon: "reco-suggestion",
      link: "/messageboard", // messageboard 只是自行新建的文件名，可自行命名，建议使用小写字母
    },
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "笔记",
        "icon": "reco-message",
        "items": [
          {
            "text": "前端",
            "link": "/docs/theme-front/"
          },
		  {
            "text": "后端",
            "link": "/docs/theme-back/"
          },
		  		  {
            "text": "面试",
            "link": "/docs/face-test/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/huahuahuahuahuahua",
            "icon": "reco-github"
          }
        ]
      },

  ],
    "sidebar": {
      
	  "/docs/theme-back/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
	  
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/LOGO.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "huawink",
    "authorAvatar": "/6e264f2185b6afa0c275d4637d8eabb1.jpg",
    "record": "xxxx",
    "startYear": "2017",
	"subSidebar": 'auto'
  },
  "markdown": {
    "lineNumbers": true
  },
    plugins: [
	[
	"cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
	],
	//PWA插件
	['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],

    // 自动生成侧边栏的插件
    [
      "vuepress-plugin-auto-sidebar",
      {
        collapse: {
          open: true,
        },
      },
    ],



    // 文章最后更新时间转换
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
        },
      },
    ],
    [
      "dynamic-title",
      {
        // Icon 建议根据自身需求选择
        showIcon: "/favicon.ico",
        showText: "",
        hideIcon: "/failure.ico",
        hideText: "(●—●)不要走啊，再看看！",
        recoverTime: 2000,
      },
    ],
    // 复制代码功能
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!",
        },
      },
    ],
    // 音乐播放器
    [
      "meting",
      {
        meting: {
          // 网易
          server: "netease",
          // 读取歌单列表
          type: "playlist",
          mid: "780217056",
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: "#f9bcdd",
          // 播放顺序为随机
          order: "random",
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
          lrcType: 0,
        },
        mobile: {
          // 手机端去掉cover图
          cover: false,
        },
      },
    ],
    // 看板娘
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        clean: true,
      },
    ],
    // 中文转换为音译链接插件
    [
      "permalink-pinyin",
      {
        lowercase: true,
        separator: "-",
      },
    ],
  ],
}

