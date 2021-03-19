<template>
    <div>
        CompC {{$attrs.title}}
    <div>
        <!-- {{foo}} -->
    </div>
    </div>
</template>

<script>
    export default {
        // props:["title"],
        // inject:['foo',"CompA"],

        mounted () {
            // console.log(this.CompA)
            // const pT = this.CompA.getTitle()
            // console.log(pT)
        }
    }
</script>

<style scoped>

</style>  