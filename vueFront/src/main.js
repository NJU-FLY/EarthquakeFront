import Vue from 'vue'
import App from './App'
import ContentList from './components/ContentList'
import ContentDetail from './components/ContentDetail'


import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

//2.0新特性
const routes = [{
  path: '/contentList',
  component: ContentList
},{
	path:'/contentDetail',
	component:ContentDetail,
},
{
  path: '*',
  redirect: '/contentList'
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