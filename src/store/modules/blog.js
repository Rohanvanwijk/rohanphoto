import jsonData from '../../data.json'

const state = {
    blogs: jsonData
};

const getters = {
    allBlogs: (state) => state.blogs,
    getBlogByTitle: (state) => (title) => {
        return state.blogs.find(blog => blog.title === title)
    }
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}