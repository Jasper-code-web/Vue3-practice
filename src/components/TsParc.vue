<template></template>
<script setup lang="ts">
import { ref, computed, reactive } from 'vue';

interface learn{
    name: string,
    price: number
}

let name = ref<string>('Vue3')

const course = computed<learn>(() => {
    return {name: 'Vue3', price: 20}
})

const course1 = reactive<learn>({name: 'Vue3', price: 10})

const props = defineProps<{title: string, value?:number}>()
const emit = defineEmits<{(e: 'update', value: number): void}>()

</script>