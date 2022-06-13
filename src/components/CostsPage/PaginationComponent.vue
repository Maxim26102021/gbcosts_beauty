<template>
  <div :class='$style.pagination'>
    <nav aria-label='Page navigation example'>
      <ul class='pagination'>
        <li class='page-item '>
          <a @click='doAction($event)' class='page-link previous control' href='#' aria-label='Previous'>
            <span class='control previous' aria-hidden='true'>&laquo;</span>
          </a>
        </li>
        <li @click='showPage(item)'
            v-for='item in pagesCount'
            :key='item'
            class='page-item'>
          <a class='page-link' href='#'>{{ item }}</a>
        </li>
        <li class='page-item'>
          <a @click='doAction($event)' class='page-link  next control' href='#' aria-label='Next'>
            <span class='control next' aria-hidden='true'>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PaginationComponent',
  data() {
    return {
      startNumber: 1,
      elOnPage: 5
    };
  },
  methods: {
    showPage(number) {
      if (number < 1 || number > (Math.ceil(this.getAllCosts.length / this.elOnPage))) return;

      this.startNumber = number;
      this.$store.commit('setCostsPage', number);
    },
    doAction(event) {
      if (!event.target.classList.contains('control')) return;

      if (event.target.classList.contains('previous')) {
        this.showPage(this.startNumber - 1);
        return;
      }
      if (event.target.classList.contains('next')) {
        this.showPage(this.startNumber + 1);
        return;
      }
    }
  },
  computed: {
    ...mapGetters([
      'getLength',
      'getAllCosts'
    ]),
    pagesCount: function() {
      return Math.ceil(this.getAllCosts.length / this.getLength);
    }
  },
  beforeUpdate() {
    this.showPage(this.startNumber);
  },
  mounted() {
    this.showPage(this.startNumber);
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

.current {
  color: red;
  font-size: 20px;
  border: 5px solid black
}
</style>