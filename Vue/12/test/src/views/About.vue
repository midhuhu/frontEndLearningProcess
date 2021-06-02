<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ButtonCounter />
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-on:enlarge-text="onEnlargeText"
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
      />
    </div>
  </div>
</template>

<script>
import ButtonCounter from "../components/ButtonCounter";
import BlogPost from "../components/BlogPost";
export default {
  name: "About",
  components: { ButtonCounter, BlogPost },
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue", content: "65498321052401351." },
        { id: 2, title: "Blogging with Vue", content: "asDFsadfgsd." },
        { id: 3, title: "Why Vue is so fun", content: "awfr465df4sdfwe86." },
      ],
      postFontSize: 1,
    };
  },
  methods: {
    onEnlargeText: function(enlargeAmount) {
      this.postFontSize += enlargeAmount;
    },
  },
};
</script>

<style></style>
