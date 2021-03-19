<template>
    <div>
        CompA
        <CompB title="my name is CompA" v-bind="$attrs"></CompB>
    </div>
</template>

<script>
import CompB from './CompB'
    export default {
        // inheritAttrs:false,
        components: {
            CompB,
        },
        methods: {
            
            getTitle() {
                return "lalalala"
            }
        },
        provide(){
            return{

                foo:"your name is bulabula",
                CompA:this
            };

        },

    }
</script>

<style scoped>

</style>