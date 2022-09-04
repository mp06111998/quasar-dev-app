const routes = [
  {
    path: "/user",
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
        path: "/green_paper",
        component: () => import("pages/Greenpaper.vue"),
      },
      {
        path: "/support",
        component: () => import("pages/Support.vue"),
      },
    ],
  },

  {
    path: "",
    component: () => import("layouts/HomeMainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Home.vue"),
      },
      {
        path: "/terms_and_conditions",
        component: () => import("pages/TermsAndConditions.vue"),
      },
      {
        path: "/privacy_policy",
        component: () => import("pages/PrivacyPolicy.vue"),
      },
      {
        path: "/impressum",
        component: () => import("pages/Impressum.vue"),
      },
      {
        path: "/greenpaper",
        component: () => import("pages/Green.vue"),
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

  {
    path: "/our_roots",
    component: () => import("layouts/HomeMainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Roots.vue"),
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
