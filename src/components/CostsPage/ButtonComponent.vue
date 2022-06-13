<template>
  <button @click='$emit("my-event")' :class='$style.action'>{{ text }}</button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: {
      type: String,
      default: () => ('none')
    }
  }
};
</script>

<style lang='scss' module scoped>
.action {
  margin-bottom: 10px;
  position: relative;
  width: 50%;
  align-self: end;
  background-color: #019281;
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  padding: 5px 17px 5px 5px;

  &:after {
    content: '+';
    position: absolute;
    right: 10px;
  }
}
</style>