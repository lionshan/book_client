
import { createRouter, createWebHistory } from 'vue-router';
import Login from  "../pages/Login.vue"
import Home from "../pages/Home.vue";
import {getToken} from '../utils/storageService'
const routes = [
  { 
    path: '/',
    redirect: '/home',
    component: Home,
    meta: {

    }
  },
  { 
    path: '/login',
    component: Login,
    meta: {
      notValid: true
    }
  },
  { path: '/home', component: Home },
];

// 创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
// 全局前置守卫进行身份验证
router.beforeEach((to, from, next) => {
  // 这里可以添加验证逻辑，例如检查用户是否已经登录
  if (!to.meta.notValid && !getToken()) {
    // 如果用户未登录，则重定向到登录页面
    next({
      path: '/login',
      query: { redirect: to.fullPath } // 将目标路由作为重定向参数传递
    });
  } else {
    // 如果用户已登录或不需要验证，则正常跳转
    next();
  }
});
 
export default router;