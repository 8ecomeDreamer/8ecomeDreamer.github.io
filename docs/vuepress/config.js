module.exports = {
  title: "前端自习室",
  author: "码外生活",
  date: "2023-10-05",
  description: "front_lounge",
  theme: "reco",
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "站点介绍", link: "/" },
      {
        text: "站长介绍",
        items: [
          { text: "Github", link: "https://github.com/mqyqingfeng" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/712139234359182/posts",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "编程学习记录",
        path: "/front_lounge/study_log",
        collapsable: false, // 不折叠
        children: [
          {
            title: "学习总结",
            path: "/front_lounge/study_log/study_summary.md",
          },
        ],
      },
      {
        title: "前端",
        path: "/front_lounge/frontEnd_study",
        collapsable: false, // 不折叠
        children: [
          { title: "前端首页", path: "/front_lounge/frontEnd_study/index" },
        ],
      },
      {
        title: "后端",
        path: "/front_lounge/backEnd_study",
        collapsable: false, // 不折叠
        children: [
          { title: "后端首页", path: "/front_lounge/backEnd_study/index" },
        ],
      },
    ],
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
};
