module.exports = {
  // title description 方便 SEO
  title: "前端自习室",
  description: "属于coderWorld的知识体系库",
  base: "/",
  lastUpdated: "Last Updated", // string | boolean
  themeConfig: {
    nav: [
      { text: "技术笔记", link: "/noteBook/" },
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
      "/noteBook/": [
        {
          title: "站点介绍",
          path: "/noteBook/",
          collapsable: true, // 不折叠
          children: [],
        },
        {
          title: "设计",
          path: "/noteBook/design/",
          collapsable: false, // 不折叠
          sidebarDepth: 5,
          children: [],
        },
        {
          title: "前端",
          path: "/noteBook/frontEnd/",
          collapsable: false, // 不折叠
          // children: [{ title: "前端", path: "/noteBook/frontEnd/index.md" }],
        },
        {
          title: "后端",
          path: "/noteBook/backEnd/",
          collapsable: false, // 不折叠
          // 多级嵌套看这里的目录结构
          children: [
            {
              title: "java",
              path: "/noteBook/backEnd/java/",
              children: [
                { title: "api速记", path: "/noteBook/backEnd/java/api/" },
              ],
            },
          ],
        },
        {
          title: "sql",
          path: "/noteBook/sql/",
          collapsable: false, // 不折叠
          // children: [{ title: "sql", path: "/noteBook/sql/index.md" }],
        },
        {
          title: "git",
          path: "/noteBook/git/",
          collapsable: false, // 不折叠
          // children: [{ title: "git", path: "/noteBook/git/index.md" }],
        },
        {
          title: "算法",
          path: "/noteBook/algrithum/",
          collapsable: false, // 不折叠
          // children: [{ title: "算法", path: "/noteBook/algrithum/index.md" }],
        },
        {
          title: "运维",
          path: "/noteBook/operate/",
          collapsable: false, // 不折叠
          // children: [{ title: "运维", path: "/noteBook/operate/index.md" }],
        },
        {
          title: "源码阅读",
          path: "/noteBook/code_reading/",
          collapsable: false, // 不折叠
          children: [
            // { title: "源码阅读", path: "/noteBook/code_reading/index.md" },
          ],
        },
        {
          title: "工作经验",
          path: "/noteBook/experience/",
          collapsable: false, // 不折叠
          children: [
            // {
            //   title: "登录",
            //   path: "/noteBook/experience/login.md",
            // },
          ],
        },
        {
          title: "优秀资源",
          path: "/noteBook/resources/",
          collapsable: false, // 不折叠
          children: [
            // { title: "优秀资源", path: "/noteBook/resources/index.md" },
          ],
        },
        {
          title: "其他",
          path: "/noteBook/others/",
          collapsable: false, // 不折叠
          // children: [{ title: "其他", path: "/noteBook/others/index.md" }],
        },
      ],
      "/withoutCode/": [
        {
          title: "生活不止代码",
          path: "/withoutCode/",
          collapsable: true, // 不折叠
        },
      ],
      "/": [""],
    },
  },
};
