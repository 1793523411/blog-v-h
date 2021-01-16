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
        text: "Guide",
        icon: "creative",
        link: "/guide/",
      },
      {
        text: "my",
        icon: "creative",
        link: "/my/",
      },
      {
        text: "Docs",
        link: "https://vuepress-theme.mrhope.site/",
        icon: "note",
      },
    ],

    sidebar: {
      "/": [
        "",
        "home",
        "slides",
        {
          title: "Guide",
          icon: "creative",
          prefix: "guide/",
          children: ["", "page", "markdown", "disable",],
        },
      ],
      "/my": [
        "",
        "home",
        "slides",
        {
          title: "Guide-my",
          icon: "creative",
          prefix: "my/",
          children: ["", "hello",],
        },
      ],
    },

    locales: {
      "/zh/": {
        nav: [
          { text: "博客主页", link: "/zh/", icon: "home" },
          { text: "项目主页", link: "/zh/home/", icon: "home" },
          {
            text: "如何使用",
            icon: "creative",
            link: "/zh/guide/",
          },
          {
            text: "主题文档",
            icon: "note",
            link: "https://vuepress-theme.mrhope.site/zh/",
          },
        ],
        sidebar: {
          "/zh/": [
            "",
            "home",
            "slides",
            {
              title: "如何使用",
              icon: "creative",
              prefix: "guide/",
              children: ["", "page", "markdown", "disable", "encrypt"],
            },
          ],
        },
      },
    },

    author: "杨国杰",

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://www.zhihu.com/people/die-dao-de-xiao-huang-gua",
        Gmail: "ygj1793523411@gmail.com",
        Twitter:"https://twitter.com/A4d7PZk1cyy3mEh",
        Github: "https://github.com/1793523411",
      },
    },

    comment: {
      type: "valine",
      appId: "msnseO76haIVIGvfJ10BKnpv-gzGzoHsz",
      appKey: "9QMulKhu7EDp1va0TYXR2PrI",
    },

    copyright: {
      status: "global",
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
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
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
