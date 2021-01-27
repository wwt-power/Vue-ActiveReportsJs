import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './routers/index.js'
// 引入element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 使用element UI
Vue.use(ElementUI,{ size: 'small', zIndex: 2000 })
// axios
import axios from 'axios'
Vue.prototype.$axios = axios
//引入公共样式
import '../src/static/css/index.css'
import '../src/static/css/global.css'




Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
