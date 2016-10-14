import Vue from 'vue'
import App from './App'
import ContentList from './components/ContentList'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'
import infinite from './components/infinite'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

//2.0新特性
const routes = [{
  path: '/home',
  component: Home
},{
	path:'/time-entries',
	component:TimeEntries,
	children:[{
		path:'log-time',
		component:LogTime
	}]
},
{
	path:'/infinite',
	component:infinite
},
{
  path: '*',
  redirect: '/home'
}]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
//new Vue({
//el: '#app',
//render: h => h(App)
//})
new Vue({
  router,
  // ES6新语法，箭头函数
  render: h => h(App)
}).$mount('#app')