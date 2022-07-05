<template>
    <div :style="fontStyle">
        <div class="rate" @mouseout="mouseOut">
            <span v-for="num of 5" :key="num" @mousemove="mouseIn(num)">☆</span>
            <span class="hollow" :style="fontWidth">
                <span v-for="num of 5" :key="num" @click="changeScore(num)" @mousemove="mouseIn(num)">★</span>
            </span>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'

let props = defineProps({
    modelValue: Number,
    theme: {
        type: String,
        default: 'orange'
    }
})

const themeObj = {
    black: "#00",
    white: "#fff",
    red: "#f5222d",
    orange: "#fa541c",
    yellow: "#fadb14",
    green: "#73d13d",
    blue: "#40a9ff",
};

let fontStyle = computed(() => {
    return { color: `${themeObj[props.theme]}`, fontSize: '40px', fontFamily: 'Segoe UI' }
})

let width = ref(props.modalValue)
let fontWidth = computed(() => `width: ${width.value}em;`)

function mouseOut() {
    width.value = props.modelValue
}

function mouseIn(num) {
    width.value = num
}

let emits = defineEmits(['update:modelValue'])
function changeScore(num) {
    emits('update:modelValue' ,num)
}

</script>
<style scoped>
.rate{
    position: relative;
    display: inline-block;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.rate > span.hollow{
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}

</style>
