<template>
  <div :class='$style.table'>
    <div :class='$style.table__header'>
      <div :class='$style.el'><b>#</b></div>
      <div :class='$style.el'><b>Date</b></div>
      <div :class='$style.el'><b>Category</b></div>
      <div :class='$style.el'><b>Value</b></div>
    </div>
    <div :class='$style.row' v-for='(item, i) in getCostsOnPage' :key='i'>
      <div :class='$style.row__element'>{{ item.id }}</div>
      <div :class='$style.row__element'>{{ item.date }}</div>
      <div :class='$style.row__element'>{{ item.description }}</div>
      <div :class='$style.row__element'>{{ item.amount }}</div>
      <div :class='$style.change'>
        <ChangeRowButton :item='item' />
      </div>
    </div>
  </div>
</template>

<script>
import ChangeRowButton from '@/components/CostsPage/ChangeRowButton';

export default {
  name: 'TableComponent',
  data() {
    return {
      chooseOptionField: false
    };
  },
  components: { ChangeRowButton },
  computed: {
    getCostsOnPage() {
      return this.$store.getters.getItems;
    }
  }
};
</script>

<style lang='scss' scoped module>
$rowHeight: 30px;
@mixin cell {
  width: 100px;
  display: flex;
  justify-content: flex-start;
}

.change {
  position: absolute;
  right: 0;
  width: 26px;
  height: 26px;
}

.table {
  width: 100%;
  margin: 0 auto 10px;

  &__header {
    display: flex;
    justify-content: space-between;
    height: $rowHeight;

    .el {
      @include cell;
    }
  }

  .row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
    justify-content: space-between;
    position: relative;
    height: $rowHeight;

    &__element {
      @include cell;
    }
  }
}
</style>