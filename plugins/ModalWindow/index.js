export default {
  install(Vue) {
    if(this.installed) {
      return
    }
    this.installed = true

    Vue.prototype.$modal = {
      eventBus: new Vue(),

      show(name, settings) {
        this.eventBus.$emit('shown', {name, settings})
        console.log('shown')
      },

      hide() {
        this.eventBus.$emit('hide')
        console.log('hiden')
      }
    }
  }
}