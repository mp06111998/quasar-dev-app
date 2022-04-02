const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/InvestmentPlans.vue"),
      },
      {
        path: "/investment_plans",
        component: () => import("pages/InvestmentPlans.vue"),
      },
      {
        path: "/my_investments",
        component: () => import("pages/MyInvestments.vue"),
      },
      {
        path: "/calendar",
        component: () => import("pages/Calendar.vue"),
      },
      {
        path: "/greenpaper",
        component: () => import("pages/Greenpaper.vue"),
      },
      {
        path: "/support",
        component: () => import("pages/Support.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
