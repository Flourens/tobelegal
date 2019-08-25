import Vue from 'vue';
import Vuex from 'vuex';
import userAgent from "./modules/userAgent";
import content from './localization';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content,
  },

  modules: {
    userAgent
  },

  mutations: {

  },
  actions: {

  }
})
