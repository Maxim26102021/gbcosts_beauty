<template>
  <div class='header'>
    <router-link class='header__link' :to="{path: '/costs'}">Costs page</router-link>
    <router-link class='header__link' :to="{path: '/about'}">About page</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
};
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  flex-direction: column;

&__link {
   display: inline-block;
   width: 100px;
   text-decoration: none;
   color: black;
   position: relative;
   text-transform: uppercase;
   margin-bottom: 5px;

&:after {
   content: '';
   position: absolute;
   height: 2px;
   background-color: #019281;
   bottom: -2px;
   left: 50%;
   width: 0;

 }

&:hover {
   color: #000;
 }
}

&__link:hover:after {
   transition: 2s;
   left: 0;
   width: 100%;

 }
}
</style>