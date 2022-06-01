<template>
  <div :class='$style.table'>
    <div :class='$style.table__header'>
      <div :class='$style.el'>#</div>
      <div :class='$style.el'>Date</div>
      <div :class='$style.el'>Category</div>
      <div :class='$style.el'>Value</div>
    </div>
    <div :class='$style.row'
         v-for='(item, i) in getCostsOnPage'
         :key='i'>
      <div :class='$style.row__element'>{{ item.id }}</div>
      <div :class='$style.row__element'>{{ item.date }}</div>
      <div :class='$style.row__element'>{{ item.description }}</div>
      <div :class='$style.row__element'>{{ item.amount }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  computed: {
    getCostsOnPage() {
      return this.$store.getters.getItems
    }
  },
};
</script>

<style lang='scss' scoped module>
@mixin cell {
  width: 100px;
  display: flex;
  justify-content: flex-start;
}
@media (max-width: 339px) {

}
.table {
  width: 100%;
  margin: 0 auto 10px;

  &__header {
    display: flex;
    justify-content: space-between;
    .el {
      @include cell;
    }
  }

  .row {
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    justify-content: space-between;
    &__element {
      @include cell;
    }
  }
}
</style>