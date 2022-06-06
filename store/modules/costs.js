 export default {
   namespaced: true,
  state() {
    return {
      btnText: 'ADD NEW COST',
    }
  },
   getters: {
     getBtnText: state => state.btnText
   }
 }