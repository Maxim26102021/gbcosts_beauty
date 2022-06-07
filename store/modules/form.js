export default {
  namespaced: true,
  mutations: {
    setCost(state, cost) {
      cost.id = this.state.allCosts.length + 1
      this.state.allCosts.push(cost)
    }
  },
}