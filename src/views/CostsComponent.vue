<template>
  <div :class='$style.costs'>
    <header>
      <h2>My personal costs</h2>
    </header>
    <main>
      <ButtonComponent
        @my-event='showForm = !showForm'
        :text="'ADD NEW COST'"
      />
      <TableComponent />
      <PaginationComponent v-if='getAC' />
      <FormComponent :options='form' v-show='showForm' />
      <FormComponent :options='modal' v-if='modalSection' />
      <FormModalComponent :item='currenItemInModalWindow' v-if='modalSection' />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ButtonComponent from '@/components/CostsPage/ButtonComponent';
import FormComponent from '@/components/CostsPage/FormComponent';
import TableComponent from '@/components/CostsPage/TableComponent';

const { DateTime } = require('luxon');

export default {
  name: 'CostsComponent',
  components: {
    ButtonComponent,
    FormComponent,
    TableComponent,
    FormModalComponent: () =>
      import('@/components/CostsPage/FormModalComponent'),
    PaginationComponent: () =>
      import('@/components/CostsPage/PaginationComponent')
  },
  data() {
    return {
      showForm: false,
      newItem: {},
      modalSection: false,
      currenItemInModalWindow: {}
    };
  },
  computed: {
    ...mapGetters(['getAllCosts']),
    getAC() {
      return this.getAllCosts.length;
    }
  },
  methods: {
    openFormModal(item) {
      this.modalSection = true;
      this.currenItemInModalWindow = item;
    },
    closeFormModal() {
      this.modalSection = false;
    }
  },
  mounted() {
    if (!this.$route.params.category) return;
    let query;
    if (!this.$route.query.value) query = '';
    else query = this.$route.query.value;

    this.newItem = {
      description: this.$route.params.category,
      amount: query,
      date: DateTime.now().toLocaleString()
    };

    this.$store.commit('form/setCost', this.newItem);
  },
  created() {
    this.$change.eventBus.$on('open-new-form', (item) => this.openFormModal(item));
    this.$change.eventBus.$on('close-form-modal', this.closeFormModal);
  },
  beforeDestroy() {
    this.$change.eventBus.$off('open-new-form');
    this.$change.eventBus.$off('close-form-modal');
  }
};
</script>

<style lang='scss' scoped module>
.costs {
  position: relative;
}
</style>