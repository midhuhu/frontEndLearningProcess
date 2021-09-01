<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <div class='item'>
            <WordCloud/>
        </div>
    </div>
</template>

<script>
import WordCloud from './components/WordCloud.vue'

export default {
    name: 'App',
    components: {
        WordCloud
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.item{
    width: 500px;
    height: 450px;
    margin: auto;
    background: rgba(55,55,55,0.3);
    border-radius: 10px;
}
</style>
