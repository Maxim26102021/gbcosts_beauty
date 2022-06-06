<template>
  <div class='test'>
    <div class='display'>
      <div v-for='(log, indx) in logs' :key='indx' class='log'>{{log}}</div>
    </div>
    <ButtonsComponent @click='sayHello' @mouseover='submitEvent' :text='"hello"'/>
  </div>
</template>

<script>
import ButtonsComponent from '@/components/TestComponent/ButtonsComponent';

export default {
  name: 'TestComponent',
  data() {
    return {
      logs: []
    }
  },
  components: {
    ButtonsComponent
  },
  methods: {
    sayHello() {
      console.log(1)
      let id = Date.now();
      this.logs.push(id)
    },
    submitEvent() {
      console.log(2)
    }

  }
};
</script>

<style lang='scss' scoped>
  .test {
    display: flex;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    background-color: #019281;
    margin: 0 auto;
    -webkit-box-shadow: 0px 4px 93px 54px rgba(1, 244, 126, 0.21);
    -moz-box-shadow: 0px 4px 93px 54px rgba(1, 244, 126, 0.21);
    box-shadow: 0px 4px 93px 54px rgba(1, 244, 126, 0.21);
  }
  .display {
    display: flex;
    flex-direction: column;
  }
</style>