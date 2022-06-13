export default {
  install(Vue) {
    if (this.installed) return;
    this.installed = true;

    Vue.prototype.$change = {
      eventBus: new Vue(),

      openFormModal(item) {
        this.eventBus.$emit('open-new-form', item);
      },
      closeFormModal() {
        this.eventBus.$emit('close-form-modal');
      },
      changeData() {
      },
      deleteData() {
      }
    };
  }
};
