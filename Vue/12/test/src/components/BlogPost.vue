<template>
  <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <div v-html="post.content"></div>
    <div v-once>
      <button v-on:click="$emit('enlarge-text', 0.5)">
        Enlarge text
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: ["post"],
};
</script>

<style></style>
