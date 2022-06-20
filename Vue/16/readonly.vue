<!-- https://sfc.vuejs.org/ -->

<script setup>
import { readonly, shallowReadonly } from 'vue'

const copy = readonly({ count: 1 })
// copy.count++ // 报错: Set operation on key "count" failed: target is readonly.

const shallowCopy = shallowReadonly({
    nums: {
        count: 2
    }
})
shallowCopy.nums.count++
</script>

<template>
    <p>{{ copy }}</p>
    <p>{{ shallowCopy }}</p>
</template>

<style>
</style>
