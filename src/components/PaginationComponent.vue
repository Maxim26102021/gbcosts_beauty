<template>
  <div :class='$style.pagination'>
    <nav aria-label='Page navigation example'>
      <ul class='pagination'>
        <li class='page-item '>
          <a @click='controlAction($event)' class='page-link previous control' href='#' aria-label='Previous'>
            <span class='control previous' aria-hidden='true'>&laquo;</span>
          </a>
        </li>
        <li @click='showPage(item)' v-for='item in pagesCount' :key='item' class='page-item'><a class='page-link'
                                                                                                href='#'>{{ item }}</a>
        </li>
        <li class='page-item'>
          <a @click='controlAction($event)' class='page-link  next control' href='#' aria-label='Next'>
            <span class='control next' aria-hidden='true'>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  data() {
    return {
     currentNumber: 1
    }
  },
  methods: {
    showPage(number) {
      if(number <  1) return;
      if(number > (Math.ceil(this.$store.state.allCosts.length / this.$store.state.count))) return;
      this.currentNumber = number;
      this.$store.commit('setCostsPage', number);
    },
    controlAction(event) {
      if (!event.target.classList.contains('control')) return;

      if (event.target.classList.contains('previous')) {
        this.showPage(this.currentNumber - 1)
        return
      }
      if (event.target.classList.contains('next')) {
        this.showPage(this.currentNumber + 1)
        return
      }
    }
  },
  computed: {
    pagesCount: function() {
      return Math.ceil(this.$store.getters.getAllCosts.length / this.pageLength);
    },
    pageItems: function() {
      return this.$store.getters.getItems;
    },
    pageLength: function() {
      return this.$store.getters.getLength;
    }
  },
  beforeUpdate() {
    this.showPage(this.currentNumber)
  },
  mounted() {
    this.showPage(this.currentNumber)
  }
};
</script>

<style lang='scss' module scoped>

.pagination {
  margin: 0 auto 10px;
  display: flex;
  justify-content: center;
  height: 38px;
}
</style>