<template>
  <div>
    Parent

      <Child title="my name is Parent" tip = "111" ref="compA" @child="handleChild"></Child>
    <input type="text" ref="input" />
  </div>
</template>

<script>
import Child from "./Child";
export default {
  components: {
    Child,
  },

  mounted() {
    // Parent -> child
    // console.log(this.$children);
    // this.$children[0].title = "pass children set value";
    // console.log(this.$children[0]);
    // const child = this.$children[0];
    // console.log(child.getTitle());
    // console.log(this.$refs.compA.getTitle());
    this.$refs.input.focus();
  },
  methods: {
    handleChild(msg) {
      console.log(msg);
      this.$children[0].tip = "222";
    },
  },
};
</script>

<style scoped></style>
