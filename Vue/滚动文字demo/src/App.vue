<template>
<!--  <div id="app">-->
<!--    <ul class="flex">-->
<!--      <ScrollNum-->
<!--        v-for="(number, idx) of numArr"-->
<!--        :key="idx"-->
<!--        :i="number"-->
<!--        :delay="idx + 2.5"-->
<!--        as="li"-->
<!--        class="num"-->
<!--      />-->
<!--    </ul>-->
      <index-map />
<!--  </div>-->
</template>

<script>
// import ScrollNum from "./components/ScrollNum";
import IndexMap from "./components/indexMap";

export default {
  name: "App",
  components: {
      IndexMap,
    // ScrollNum,
  },
  data: () => ({ num: 123456789 }),
  computed: {
    numArr() {
      const str = String(this.num);
      let arr = [];

      for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i]));
      }

      return arr;
    },
  },
  mounted() {
    setInterval(() => this.num++, 10000);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
  display: flex;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.num {
  --width: 40px;
  margin-right: 6px;
  border: 1px solid black;
  border-radius: 8px;
}
</style>
