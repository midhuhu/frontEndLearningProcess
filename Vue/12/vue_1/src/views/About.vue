<template>
  <div class="about">
    <h1>----------This is about page----------</h1>
    <br /><br />
    <div>
      <p id="text">{{ msg2 }}</p>
      <input id="input" v-model="msg2" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg2: "Welcome to Your Vue.js App!",
    };
  },
};
</script>

<style>
#input {
  width: 500px;
  height: 50px;
  font-size: 20px;
}
#text {
  font-size: 20px;
}
</style>
