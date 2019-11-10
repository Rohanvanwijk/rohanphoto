import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Blog from './components/Blog.vue'
import Blogs from './components/Blogs.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/blogs', component: Blogs
  },
  {
    path: '/blog', component: Blog
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
