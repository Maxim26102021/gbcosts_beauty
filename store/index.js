import Vue from "vue";
import Vuex from "vuex";

import data from "./data";
import form from "./modules/form";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 5,
    allCosts: [],
    pageItems: [],
    test: [],
  },
  getters: {
    getAllCosts: (state) => state.allCosts,
    getItems: (state) => state.pageItems,
    getLength: (state) => state.count,
  },
  mutations: {
    setData(state, { page1, page2 }) {
      let newArr = [...page1, ...page2];
      for (let i = 0; i < newArr.length; i++) {
        newArr[i].id = i + 1;
      }
      this.state.allCosts.push(...newArr);
    },
    setCostsPage(state, number) {
      state.pageItems = "";

      let newArr = state.allCosts.slice(
        (number - 1) * state.count,
        state.count * number
      );
      state.pageItems = newArr;
    },
    setClearData(state) {
      state.allCosts = [];
    },
  },
  actions: {
    fetchData({ commit }) {
      commit("setData", data);
    },
  },
  modules: {
    form,
  },
});

