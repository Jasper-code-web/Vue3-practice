<template>
    <div>
        关于
    </div>
    <button @click="loading">123</button>
    <Star :value="score" @update-rate="update" theme="yellow"></Star>
</template>

<script setup>
import { ref } from 'vue';
import useFavicon from '../utils/useFavicon';
import Star from '../components/Star.vue'

let {favicon} = useFavicon()

function loading() {
    favicon.value = '/avatar2.jpg'
}


let score = ref(2)
function update(num) {
    score.value = num
}
</script>

