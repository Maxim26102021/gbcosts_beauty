
export default {
  namespaced: true,
  state () {
    return {
      btnText: 'ADD',
    }
  },
  mutations: {
    setCost(state, cost) {
      console.log(cost)
      cost.id = this.state.allCosts.length + 1
      this.state.allCosts.push(cost)
    }
  },
  getters: {
    getBtnText: state => state.btnText,
  }
}