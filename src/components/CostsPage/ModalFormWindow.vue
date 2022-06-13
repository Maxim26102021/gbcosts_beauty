<template>
  <div :class='$style.form'>
    <p><input type='text'>hello</p>
    <p><input type='text'>hello</p>
    <p><input type='text'>hello</p>
  </div>
</template>

<script>
export default {
  name: 'ModalFormWindow'

};
</script>

<style lang='scss' module scoped>
.form {
  background-color: rgb(92%, 97%, 90%, 1);;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 6;
  top: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>