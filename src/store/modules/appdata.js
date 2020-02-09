const state = {
    showAboutMe: false
};

const getters = {
    aboutMe: (state) => state.showAboutMe
};

const actions = {};

const mutations = {
  toggle(state) {
    state.showAboutMe = !state.showAboutMe;
  }
};

export default {
    state,
    getters,
    actions,
    mutations
}
