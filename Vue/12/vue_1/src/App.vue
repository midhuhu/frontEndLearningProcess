<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <p>
      {{ msg }} <button class="button1" v-on:click="reverseMsg">反转msg</button>
    </p>
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <p v-if="seen">Counter:{{ counter }}</p>
    <button class="button1" v-on:click="hideAndShowMsg">
      {{ msgbutton }}
    </button>

    <p class="msg2">{{ msg2 }}</p>
    <input class="ip1" v-model="msg2" />

    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <button v-on:click="goHome">跳转</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      message: "现在是" + new Date().toLocaleString(),
      msg: "Welcome to Your Vue.js App!",
      msg2: "Welcome to Your Vue.js App!",
      counter: 0,
      seen: true,
      msgbutton: "隐藏counter",
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  methods: {
    reverseMsg() {
      this.msg = this.msg
        .split("")
        .reverse()
        .join("");
    },
    hideAndShowMsg() {
      this.seen = !this.seen;
      this.msgbutton = this.seen ? "隐藏counter" : "显示counter";
    },
    goHome() {
      this.$router.push({ path: "/home" });
    },
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
  font-size: 20px;
}
.button1 {
  border-radius: 4px;
  width: 150px;
  height: 50px;
  font-size: 15px;
}
.msg2 {
  font-size: 25px;
}
.ip1 {
  width: 500px;
  height: 50px;
  font-size: 20px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
