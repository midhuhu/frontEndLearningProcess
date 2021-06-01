<template>
  <div class="home">
    <h1>----------This is Home page----------</h1>
    <br /><br />
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <br /><br />
    <p>
      {{ msg }} <button id="button" v-on:click="reverseMsg">反转msg</button>
    </p>

    <br /><br />
    <button id="button" v-on:click="goThree">跳转到Three页面</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      message: "现在是" + new Date().toLocaleString(),
      msg: "Welcome to Your Vue.js App!",
    };
  },

  methods: {
    reverseMsg() {
      this.msg = this.msg
        .split("")
        .reverse()
        .join("");
    },
    goThree() {
      let routeUrl = this.$router.resolve({
        path: "/three",
        // query: { id: 12 },
      });
      window.open(routeUrl.href, "_self");
    },
  },
};
</script>

<style>
#button {
  border-radius: 4px;
  width: 150px;
  height: 50px;
  font-size: 15px;
}
</style>
