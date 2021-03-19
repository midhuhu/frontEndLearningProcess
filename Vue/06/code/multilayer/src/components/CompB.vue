<template>
    <div>
        CompB {{$attrs.title}}
        <!-- <CompC :title="title"></CompC> -->
        <CompC v-bind="$attrs"></CompC>

    </div>
</template>

<script>
import CompC from './CompC'
    export default {
        inheritAttrs:false,

        // props:["title"],
        components: {
            CompC,
        },
    }
</script>

<style scoped>

</style>