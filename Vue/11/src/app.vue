<template>
    <div id="bind-attribute" class="demo">
        <span v-bind:title="message">
            放置鼠标一会看看
        </span>
    </div>
</template>

<script>
cconst AttributeBinding = {
  data() {
    return {
      message: '现在是' + new Date().toLocaleString()
    }
  }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')
</script>

<style lang="scss" scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>