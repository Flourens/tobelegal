import Vue from 'vue';
import Vuex from 'vuex';
import userAgent from "./modules/userAgent";
import content from './localization';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content,
    activeSection: 0,
    activeLanguage: 'ru'
  },

  modules: {
    userAgent
  },

  mutations: {
    SET_ACTIVE_SECTION: (state, payload) => {
      state.activeSection = payload;
    },
  },
  actions: {

  }
})
