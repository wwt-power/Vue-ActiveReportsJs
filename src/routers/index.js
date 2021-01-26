import Vue from 'vue'
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// userList
import userList from '../views/userList/content.vue'
// 设计
import designer from '../views/designer/designer.vue'
// 打印测试
import printTest from '../views/printTest/printTest.vue'

const router = new VueRouter({
	//项目地址
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: '打印列表测试',
			component: userList,
			meta: {
				requireAuth: false
			}
		},
		{
			path: '/designer',
			name: '设计',
			component: designer,
			meta: {
				requireAuth: false
			}
		},
		{
			path: '/printTest',
			name: '打印测试',
			component: printTest,
			meta: {
				requireAuth: false
			}
		}
	]
})

export default router;
