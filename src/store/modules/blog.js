import jsonData from '../../data.json';
import featureData from '../../featureData.json';

const state = {
    blogs: jsonData,
    featureData: featureData
};

const getters = {
    allBlogs: (state) => state.blogs,
    getBlogByTitle: (state) => (title) => {
        return state.blogs.find(blog => blog.title === title)
    },
    feature: (state) => state.featureData
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}