<template>
  <div>
    <header>
      <h2>My personal costs</h2>
    </header>
    <main>
      <ButtonComponent @my-event='showForm = !showForm' :text='getBT' />
      <TableComponent />
      <PaginationComponent v-if='getAC' />
      <FormComponent v-show='showForm' />
    </main>
  </div>
</template>

<script>
import ButtonComponent from '@/components/CostsPage/ButtonComponent';
import FormComponent from '@/components/CostsPage/FormComponent';
import TableComponent from '@/components/CostsPage/TableComponent';

const { DateTime } = require('luxon');

class Item {
  constructor(description, value) {
    this.description = description;
    this.amount = value;
    this.date = DateTime.now().toLocaleString();
  }
}


export default {
  name: 'CostsComponent',
  components: {
    ButtonComponent,
    FormComponent,
    TableComponent,
    PaginationComponent: () => import('@/components/CostsPage/PaginationComponent')
  },
  data() {
    return {
      showForm: false
    };
  },
  computed: {
    getBT() {
      return this.$store.getters['costs/getBtnText'];
    },
    getAC() {
      return this.$store.getters.getAllCosts.length;
    }
  },
  mounted() {
    if (!this.$route.params.category) return;

    let query,
      newItem;

    if (!this.$route.query.value) query = '';
    else query = this.$route.query.value;

    newItem = new Item(this.$route.params.category, query);

    this.$store.commit('form/setCost', newItem);
  }
};
</script>