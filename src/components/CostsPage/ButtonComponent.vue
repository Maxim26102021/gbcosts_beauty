<template>
  <button @click='$emit("my-event")' :class='$style.action'>{{ text }}</button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: {
      type: String,
      default:() => ('none')
    }
  }
};
</script>

<style lang='scss' module scoped>
.action {
  margin-bottom: 10px;
  position: relative;
  padding: 5px;
  width: 50%;
  align-self: end;
  background-color: #019281;
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;

  &:after {
    content: '+';
    position: absolute;
    right: 10px;
  }
}
</style>