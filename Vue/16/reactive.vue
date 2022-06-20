<!-- https://sfc.vuejs.org/ -->

<script setup>
import { nextTick, reactive, shallowReactive } from 'vue'
const v1 = reactive({
    a: {
        b: "ue",
    }
})

const v2 = shallowReactive({
    a: {
        b: "ite"
    }
})

function changeV1() {
    v1.a.b = "vue"
    // v2.a.b = "vite"
    console.log(v1)
}
function changeV2() {
    // 同时修改会导致页面上v2的数值也发生改变
    // v1.a.b = "vue"
    // v2.a.b = "vite"

    // 使用nextTick修改v2的值
    // v1.a.b = "vue"
    // nextTick(() => {
    //     v2.a.b = "vite"
    // })

    v2.a.b = "vite"
    console.log(v2)
}
</script>

<template>

    <p>
        数据响应式变化: {{ v1 }}
        <button @click="changeV1">
            点击V1
        </button>
    </p>
    <p>
        数据浅层响应式变化: {{ v2 }}
        <button @click="changeV2">
            点击V2
        </button>
    </p>
</template>