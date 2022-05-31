<template>
  <div id='app'>
    <h2>My personal costs</h2>
    <ButtonComponent @my-event='showForm = !showForm' :text='btnText' />
    <TableComponent :dataArr='formData' />
    <PaginationComponent v-if='formData.length' :costsData='formData' />
    <FormComponent v-show='showForm' @my-event='handleData' />
  </div>
</template>

<script>

import TableComponent from '@/components/TableComponent';
import FormComponent from '@/components/FormComponent';
import PaginationComponent from '@/components/PaginationComponent';
import ButtonComponent from '@/components/ButtonComponent';

export default {
  name: 'App',
  components: {
    ButtonComponent,
    FormComponent,
    TableComponent,
    PaginationComponent
  },
  data() {
    return {
      formData: [],
      btnText: 'ADD NEW COST',
      showForm: false
    };
  },
  methods: {
    handleData({ ...data }) {
/*      let bottomPoint = 4;*/
      data.order = this.formData.length + 1;
      this.formData.push(data);
    }
  }

};
</script>

<style lang='scss'>
@import "../node_modules/bootstrap/scss/bootstrap";
@import '../node_modules/normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Neonderthaw&family=Roboto:wght@100;300&display=swap');
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
@import 'assets/pagination.css';

@media (max-width: 1140px) {
  #app {
    width: 50%;
  }
}

@media (max-width: 730px) {
  #app {
    width: 80%;
  }
}

@media (max-width: 339px) {
  #app {
    width: 100%;
  }
}

@media (min-width: 1141px) {
  #app {
    width: 50%;
  }
}

* {
  font-family: 'Roboto';
}

#app {
  height: 100vh;
  margin: 0 auto;
}
#app:nth-child(n) {
  margin-bottom: 10px;
}
</style>
