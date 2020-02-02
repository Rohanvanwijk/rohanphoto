import Vue from 'vue'
import Vuex from 'vuex'
import Blogs from './modules/blog'
import AppData from './modules/appdata.js'


// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        Blogs,
        AppData,
    }
});
