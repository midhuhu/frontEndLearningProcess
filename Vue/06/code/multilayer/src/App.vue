<template>
  <div id="app">
    Parent
    <!-- <CompA></CompA> -->
    <Button disabled></Button>
  </div>
</template>

<script>
// import CompA from './components/CompA'
// import CompB from './components/CompB'
// import CompC from './components/CompC'
import Button from './components/Button.vue'


export default {
  name: 'App',
  components: {
    // CompA,
    Button,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
