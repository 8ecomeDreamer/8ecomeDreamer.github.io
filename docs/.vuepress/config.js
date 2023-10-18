module.exports = {
  // title description 方便 SEO
  title: "前端自习室",
  description: "属于coderWorld的知识体系库",
  base: "/gh-pages/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "关于码外生活",
        items: [
          { text: "Github", link: "xxx" },
          {
            text: "掘金",
            link: "xxx",
          },
        ],
      },
    ],
  },
  sidebar: [
    {
      title: "站点介绍",
      path: "/",
      collapsable: false, // 不折叠
      children: [
        // { title: "学前必读", path: "/" }
      ],
    },
    {
      title: "前端",
      path: "/noteBook/frontEnd",
      collapsable: false, // 不折叠
      children: [{ title: "demo", path: "/noteBook/frontEnd/demo" }],
    },
    {
      title: "后端",
      path: "/noteBook/backEnd",
      collapsable: false, // 不折叠
      children: [{ title: "demo", path: "/noteBook/backEnd/demo" }],
    },
  ],
};
