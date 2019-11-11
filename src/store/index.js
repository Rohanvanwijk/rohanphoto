import Vue from 'vue'
import Vuex from 'vuex'
import Blogs from './modules/blog'


// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        Blogs
    }
});