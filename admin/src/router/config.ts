import userList from '@/views/subPage/userMan/userList.vue'
import msgList from '@/views/subPage/msgMan/msgList.vue'
import pdtList from '@/views/subPage/pdtMan/pdtList.vue'
import home from '@/views/subPage/home/home.vue'
import set from '@/views/subPage/systemSet/set.vue'
// 定义一个函数来创建路由对象，以减少重复代码
const createRoute = (path: string, component: any, requireAdmin = false) => ({
  path,
  component,
  requireAdmin
})
const routes: Array<{ path: string; component?: any; requireAdmin?: boolean; redirect?: string }> =
  [
    { path: '/menu', redirect: '/home' },
    createRoute('/home', home),
    createRoute('/userList', userList, true),
    createRoute('/msgList', msgList),
    createRoute('/pdtList', pdtList),
    createRoute('/set', set)
  ]
export default routes
