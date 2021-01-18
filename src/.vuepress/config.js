const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "跌倒的小黄瓜",
  description: "跌倒的小黄瓜的个人博客",

  base: "/",

  dest: "./dist",

  // remove this if you are not using Vue and React in "markdownEnhance: code demo"
  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  plugins: [["photo-swipe"]],

  locales: {
    "/zh/": {
      title: "Theme Demo",
      description: "vuepress-theme-hope 的 demo",
    },
  },

  themeConfig: {
    logo: "https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/logo.png",
    hostname: "",

    nav: [
      { text: "Blog Home", link: "/", icon: "home" },
      { text: "Project Home", link: "/home/", icon: "home" },

      {
        text: "essay",
        icon: "creative",
        link: "/essay/",
      },
      {
        text: "Summary",
        icon: "creative",
        link: "/summary/",
      },
      // {
      //   text: "Docs",
      //   link: "https://vuepress-theme.mrhope.site/",
      //   icon: "note",
      // },
    ],

    sidebar: {
      "/summary": [
        {
          title: "2021",
          icon: "creative",
          prefix: "summary/",
          children: ["2021-1"],
        },
      ],
      "/essay": [
        "slides",
        "home",
        {
          title: "essay",
          icon: "creative",
          prefix: "essay/",
          children: ["", "slides","hello",],
        },
      ],
      "/guide": [
        "slides",
        "home",
        {
          title: "essay",
          icon: "creative",
          prefix: "essay/",
          children: ["", "hello",],
        },
      ]
    },

    locales: {
      "/zh/": {
        nav: [
          { text: "博客主页", link: "/zh/", icon: "home" },
          { text: "项目主页", link: "/zh/home/", icon: "home" },
          {
            text: "随笔",
            icon: "creative",
            link: "/essay/",
          },
          {
            text: "如何使用",
            icon: "creative",
            link: "/zh/summary/",
          },
          // {
          //   text: "主题文档",
          //   icon: "note",
          //   link: "https://vuepress-theme.mrhope.site/zh/",
          // },
        ],
        sidebar: {
          "/zh/summary": [
            "",
            "home",
            "slides",
            {
              title: "总结",
              icon: "creative",
              prefix: "summary/",
              children: ["", "page", "markdown", "disable",],
            },
          ],
          "/zh/essay": [
            "slides",
            "home",
            {
              title: "随笔",
              icon: "creative",
              prefix: "essay/",
              children: ["", "hello",],
            },
          ],
          "/zh/guide": [
            "slides",
            "home",
            {
              title: "essay",
              icon: "creative",
              prefix: "guide/",
              children: ["", "hello",],
            },
          ],
          "/zh/hidden":[
            "",
            "home",
            "slides",
            {
              title: "隐藏",
              icon: "creative",
              prefix: "hidden/",
              children: ["", "page", "markdown", "disable","home","slides"],
            },
          ]
        },
      },
    },

    author: "跌倒的小黄瓜",

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://www.zhihu.com/people/die-dao-de-xiao-huang-gua",
        Gmail: "ygj1793523411@gmail.com",
        Twitter: "https://twitter.com/A4d7PZk1cyy3mEh",
        Github: "https://github.com/1793523411",
      },
    },

    comment: {
      type: "valine",
      appId: "sfdjeGHD74b73vlumn8I9Q5q-gzGzoHsz",
      appKey: "Nged9v2AmlrqBcNmHTBSLoIW",
    },
    addThis: "ra-6003b1ac6f49407e",
    copyright: {
      status: "global",
      minLength:50
    },

    footer: {
      display: true,
      content: "默认页脚",
    },

    mdEnhance: {
      // please only enable the features you need
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Summary",
            short_name: "Summary",
            url: "/summary/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    repo: "https://github.com/1793523411/blog-v-h",
    repoLabel: "Github",
  },
});
