<template>
  <div class="three">
    <h1>----------This is Three page----------</h1>
    <br /><br />
    <ol id="inlist">
      <li v-for="todo in todos" v-bind:key="todo" id="li">
        {{ todo.text }}
      </li>
    </ol>
    <br /><br />

    <p v-if="seen">Counter:{{ counter }}</p>
    <button id="button" v-on:click="hideAndShowMsg">
      {{ msgbutton }}
    </button>
    <br /><br />
    <button id="button" v-on:click="goBack">返回上一个页面</button>
  </div>
</template>

<script>
export default {
  name: "Three",
  components: {},
  data() {
    return {
      counter: 0,
      seen: true,
      msgbutton: "隐藏counter",
      todos: [
        { text: "11111111" },
        { text: "222222222" },
        { text: "3333333333" },
        { text: "44444444444" },
        { text: "555555555555" },
      ],
    };
  },
  created() {
    console.log("created counter is " + this.counter);
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
    console.log("mounted counter is " + this.counter);
  },
  updated() {
    console.log("updated counter is " + this.counter);
  },
  unmounted() {
    console.log("unmount counter is " + this.counter);
  },
  methods: {
    hideAndShowMsg() {
      this.seen = !this.seen;
      this.msgbutton = this.seen ? "隐藏counter" : "显示counter";
    },
    goBack() {
      this.$router.go(-1); //返回上一层
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
#inlist {
  border: 10px;
  width: 100px;
  margin: 0px auto;
}
#li {
  text-align: left;
}
</style>
