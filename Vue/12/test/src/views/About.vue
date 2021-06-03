<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button-counter />
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
        v-on:enlarge-text="onEnlargeText"
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
      />
    </div>
    <!-- vue3不支持这种写法↓ -->
    <custom-input v-model="searchText" />
    <br />
    <input v-model="searchText" /><br />
    <input
      v-bind:value="searchText"
      v-on:input="searchText = $event.target.value"
    /><br />
    <span>input:{{ searchText }}</span>
  </div>
</template>

<script>
import CustomInput from "../components/CustomInput.vue";
import BlogPost from "../components/BlogPost.vue";
import ButtonCounter from "../components/ButtonCounter.vue";
export default {
  name: "About",
  components: { ButtonCounter, CustomInput, BlogPost },
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue", content: "65498321052401351." },
        { id: 2, title: "Blogging with Vue", content: "asDFsadfgsd." },
        { id: 3, title: "Why Vue is so fun", content: "awfr465df4sdfwe86." },
      ],
      postFontSize: 1,
      searchText: "11",
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
