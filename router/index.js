import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Main',
    path: '/',
    component: () => import('../src/views/MainPage')
  },
  {
    name: 'Test',
    path: '/test',
    component: () => import('../src/views/TestComponent')
  },
  {
    path: '/add/payment/:category',
    redirect: {name: 'Costs'}
  },
  {
    name: 'Costs',
    path: '/costs',
    component: () => import('@/views/CostsComponent')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../src/views/AboutComponent')
  },
  {
    name: 'NotFound',
    path: '/404',
    component: () => import('../src/views/NotFound')
  },
  {
    path: '*',
    redirect: {name: 'NotFound'}
  }
];



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router