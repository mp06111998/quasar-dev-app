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

  {
    path: "/home",
    component: () => import("layouts/HomeMainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Home.vue"),
      },
    ],
  },

  {
    path: "/sign_in",
    component: () => import("layouts/HomeMainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/SignIn.vue"),
      },
    ],
  },

  {
    path: "/sign_up",
    component: () => import("layouts/HomeMainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/SignUp.vue"),
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
