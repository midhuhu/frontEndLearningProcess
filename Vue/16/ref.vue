<!-- https://sfc.vuejs.org/ -->

<script setup>
import { reactive, computed, ref, shallowRef, onMounted, triggerRef, customRef } from 'vue'
// 定义一个常量
const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})
// computed ref
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

const v1 = ref(1)

// 只读
const p1 = computed(() => v1.value + 1)
// p1.value++ 报错：computed value is readonly

// 可写的ref属性
const p2 = computed({
    get: () => v1.value + 1,
    set: (val) => {
        v1.value = val - 1
    }
})
// 修改v1的值
p2.value = 3

// shadowRef  浅层
const v2 = shallowRef({ count: 1 })
onMounted(() => {
    v2.value.count = 15
    console.log(v2.value)
})

setTimeout(() => {
    // 强制触发更新一个浅层的ref
    triggerRef(v2)
}, 1000)

// customRef 防抖
function useDebouncedRef(value, delay = 500) {
    let timeout
    return customRef((track, trigger) => {
        return {
            get: () => {
                track()
                return value
            },
            set: ((newValue) => {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    value = newValue
                    trigger()
                }, 1000)
            })
        }
    })
}

const text = useDebouncedRef('hello', 1000)


</script>

<template>
    <p>
        是否存在: {{ publishedBooksMessage }}
    </p>
    <p>
        数据不会响应式变化: {{ v2.count }}
    </p>
    <p>
        创建一个防抖 ref，即只在最近一次 set 调用后的一段固定间隔后再调用
    </p>
    <h3>
        {{ text }} <input v-model="text" />
    </h3>
</template>