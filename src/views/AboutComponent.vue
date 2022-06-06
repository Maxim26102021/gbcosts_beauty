<template>
  <div class='about'>
    <h2>AboutComponent</h2>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  created() {
    console.log(this)
  }
};
</script>

<style scoped>
.about {
  width: 100%;
  height: 100vh;
  padding: 10px;
}
h2 {
  text-align: center;
  text-transform: uppercase;
}

</style>