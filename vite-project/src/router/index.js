import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: async () => await import('../pages/DashboardPage.vue'),
    },
    {
      path: '/about',
      component: async () => await import('../pages/AboutPage.vue'),
    },
    {
      path: '/signin',
      component: async () => await import('../pages/SignInPage.vue'),
    },
  ],
  history: createWebHistory(),
});

export { router };
