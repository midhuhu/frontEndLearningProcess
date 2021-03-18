<template>
  <div>
    <h1>
      {{ title }}
      {{ tip }}
      <button @click="handleClick">子传父</button>
    </h1>
    child
  </div>
</template>

<script>
export default {
  props: ["title","tip"],

  methods: {
    getTitle() {
      return this.title;
    },
    handleClick() {
        this.$emit("child", "123");
      console.log(this.$parent);
    },
  },
};
</script>

<style scoped></style>
