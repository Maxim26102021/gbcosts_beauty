<template>
  <div>
    <button v-on="$listeners" class='btn'>Touch</button>
  </div>
</template>

<script>

export default {
  inheritAttrs: false,
  name: 'ButtonsComponent',
  mounted() {
    console.log(this.$attrs)
  }
};
</script>

<style lang='scss' scoped>

</style>