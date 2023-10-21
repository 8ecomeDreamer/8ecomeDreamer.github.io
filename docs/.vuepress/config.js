module.exports = {
  // title description 方便 SEO
  title: "前端自习室",
  description: "属于coderWorld的知识体系库",
  base: "/",
  lastUpdated: "Last Updated", // string | boolean
  // base: "./",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      // { text: "技术笔记", link: "/" },
      { text: "生活不止代码", link: "/withoutCode/" },
      {
        text: "关于码外生活",
        items: [
          { text: "Github", link: "https://github.com/8ecomeDreamer" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/2331413035352680",
          },
        ],
      },
    ],
    sidebar: {
      "/withoutCode/": [
        {
          title: "生活不止代码",
          path: "/withoutCode/",
          collapsable: true, // 不折叠
        },
      ],
      "/": [
        {
          title: "站点介绍",
          path: "/",
          collapsable: true, // 不折叠
          children: [],
        },
        {
          title: "设计",
          path: "/design/",
          collapsable: false, // 不折叠
          sidebarDepth: 5,
          children: [],
        },
        {
          title: "前端",
          path: "/frontEnd/",
          collapsable: false, // 不折叠
          // children: [{ title: "前端", path: "/frontEnd/index.md" }],
        },
        {
          title: "后端",
          path: "/backEnd/",
          collapsable: false, // 不折叠
          // 多级嵌套看这里的目录结构
          children: [
            {
              title: "java",
              path: "/backEnd/java/",
              children: [{ title: "api速记", path: "/backEnd/java/api/" }],
            },
          ],
        },
        {
          title: "sql",
          path: "/sql/",
          collapsable: false, // 不折叠
          // children: [{ title: "sql", path: "/sql/index.md" }],
        },
        {
          title: "git",
          path: "/git/",
          collapsable: false, // 不折叠
          // children: [{ title: "git", path: "/git/holes/" }],
        },
        {
          title: "算法",
          path: "/algrithum/",
          collapsable: false, // 不折叠
          // children: [{ title: "算法", path: "/algrithum/index.md" }],
        },
        {
          title: "运维",
          path: "/operate/",
          collapsable: false, // 不折叠
          // children: [{ title: "运维", path: "/operate/index.md" }],
        },
        {
          title: "源码阅读",
          path: "/code_reading/",
          collapsable: false, // 不折叠
          children: [
            // { title: "源码阅读", path: "/code_reading/index.md" },
          ],
        },
        {
          title: "工作经验",
          path: "/experience/",
          collapsable: false, // 不折叠
          children: [
            // {
            //   title: "通用登录",
            //   path: "/experience/common_login/",
            // },
          ],
        },
        {
          title: "优秀资源",
          path: "/resources/",
          collapsable: false, // 不折叠
          children: [
            // { title: "优秀资源", path: "/resources/index.md" },
          ],
        },
        {
          title: "其他",
          path: "/others/",
          collapsable: false, // 不折叠
          // children: [{ title: "其他", path: "/others/index.md" }],
        },
      ],
    },
  },
};
