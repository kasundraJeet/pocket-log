import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: () => import('@/views/SignInView.vue'),
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: () => import('@/views/SignUpView.vue'),
    },
    {
      path: '/forget-password',
      name: 'forgetPassword',
      component: () => import('@/views/ForgetPasswordView.vue'),
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: () => import('@/views/ResetPassword.vue'),
    },
    {
      path: '/email',
      name: 'emailsend',
      component: () => import('@/views/EmailSendView.vue'),
    },
    {
      path: '/site-map',
      name: 'siteMap',
      component: () => import('@/views/SiteMapView.vue'),
    },
    {
      path: '/404',
      name: 'notFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      redirect: '404',
    },
  ],
})

export default router
