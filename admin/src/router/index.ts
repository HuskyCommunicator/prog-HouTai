import { createRouter, createWebHashHistory } from 'vue-router'
import routeConfig from './config'
import { useUserStore } from '@/stores/userStore'
import { ElMessage } from 'element-plus'
import menu from '@/views/menu/menu.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/',
      name: 'menu',
      component: menu
      //is this import?
    },
    { path: '/:pathMatch(.*)*', component: () => import('@/views/404/404.vue') } // 404路由
  ]
})
const configRouter = () => {
  const userStore = useUserStore()
  const menuRoute = {
    path: '/',
    component: menu,
    children: []
  }
  // 遍历路由配置，检查权限，如果用户有权限访问，就添加到子路由中
  routeConfig.forEach((item) => {
    if (checkPermission(item)) {
      menuRoute.children.push(item)
    }
  })
  // 向主框架路由添加子路由
  router.addRoute(menuRoute)
  // 更改路由配置状态
  userStore.changeRouterConfig(true)
}
// 添加路由拦截器，在每次路由跳转前都会运行
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  // 检查用户是否已登录
  const isLogin = localStorage.getItem('token')
  // 检查路由是否已配置
  const isRouterConfigured = userStore.isRouterConfig
  // 如果用户正在尝试访问登录页面，或者用户已登录并且路由已配置，则无条件放行
  if (to.name === 'login' || (isLogin && isRouterConfigured)) {
    next()
  }
  // 如果用户已登录但路由未配置，则需要先配置路由
  else if (isLogin && !isRouterConfigured) {
    configRouter()
    next({ path: to.fullPath })
  }
  // 如果用户未登录，则重定向到登录页面
  else {
    ElMessage.error('未检测到用户信息 请登录')
    next({ path: '/login' })
  }
})
//权限判断
const checkPermission = (item: any) => {
  const userStore = useUserStore()
  return 1
}
export default router
