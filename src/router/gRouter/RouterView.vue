<template>
    <component :is="comp"></component>
</template>
<script setup>
import {useRouter} from './index'
import { computed } from 'vue';

const router = useRouter()

let comp = computed(() => {
    const route = router.routes.find((route) => route.path === router.current.value)
    console.log(route)
    return route ? route.component : null
})
</script>