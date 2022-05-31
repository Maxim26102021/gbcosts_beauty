<template>
  <form @submit.prevent :class='$style.main'>
    <div :class='$style.form'>
      <input type='text' :class='$style.form__input' v-model='formData.description' placeholder='Payment description'>

      <input type='text' :class='$style.form__input' v-model='formData.amount' placeholder='Payment amount'>

      <input type='date' :class='$style.form__input' v-model='formData.date' placeholder='Payment date'>
    </div>
    <ButtonComponent @my-event='$emit("my-event", formData)' :text='btnText'/>
  </form>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent';

export default {
  name: 'FormComponent',
  data () {
    return {
      formData: {
        description: '',
        amount: '',
        date: ''
      },
      btnText: 'ADD',
      event: 'send-data'
    }
  },
  components: {
    ButtonComponent
  },
  methods: {
    caller() {
      console.log(1)
    }
  }
};
</script>

<style lang='scss' scoped module>
.main {
  display: flex;
  flex-direction: column;
  margin: 0 auto 10px;

  &__action {
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
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  &__input {
    padding: 5px;
    border: 1px solid #ecedee;
    border-radius: 2px;
    -webkit-box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.07);
    &::placeholder {
      color: #cbcccb;
      font-size: 14px;
    }
    &:focus {
      outline: none;
    }
    &:nth-child(n) {
      margin-bottom: 4px;
    }
  }
}
</style>