<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <custom-input v-model="searchText"></custom-input>
    <br />
    <span>input:{{ searchText }}</span>
  </div>
</template>

<script>
import CustomInput from "./components/CustomInput.vue";

export default {
  name: "App",
  components: {
    CustomInput,
  },
  data() {
    return {
      searchText: "",
    };
  },
};
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
