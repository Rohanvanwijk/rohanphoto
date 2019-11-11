import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Blog from './components/Blog.vue'
import Blogs from './components/Blogs.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/blog/:item', 
    name: 'blog',
    component: Blog,
    props: true
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
