<template>
    <div>
        <Rate :modelValue="score" @update:modelValue="score = $event" theme="blue"></Rate>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Rate from '../components/Rate.vue'

let score = ref(2)

</script>

<style>

</style>