<template>
  <div :class='$style.pagination'>
    <nav aria-label='Page navigation example'>
      <ul class='pagination'>
        <li class='page-item'>
          <a class='page-link' href='#' aria-label='Previous'>
            <span aria-hidden='true'>&laquo;</span>
          </a>
        </li>
        <li class='page-item'><a class='page-link' href='#'>1</a></li>
        <li class='page-item'>
          <a class='page-link' href='#' aria-label='Next'>
            <span aria-hidden='true'>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    costsData: {
      type: Array
    }
  },
  data() {
    return {
      count: 5,
    }
  },
  computed: {
    pageCount: function () {
      console.log(this.costsData.length)
      return Math.ceil(this.costsData.length / this.count)
    }
  },
  watch: {
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