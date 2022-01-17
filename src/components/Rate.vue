<template>
  <div class="rate-wrap">
    <div class="rate" @mouseout="mouseOut" :style="fontStyle">
      <span v-for="num in 5" :key="num" @click="changeRate(num)" @mouseover="mouseOver(num)">☆</span>
      <span class="hollow" :style="fontWidth">
        <span v-for="num in 5" :key="num" @click="changeRate(num)" @mouseover="mouseOver(num)">★</span>
      </span>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, defineProps } from "vue";

let props = defineProps({
    modelValue: Number,
    theme: {
        type: String,
        default: 'orange'
    }
})
let width = ref(props.modelValue)

let emits = defineEmits(['update:modelValue'])
function changeRate(num) {
  emits('update:modelValue', num)
}

function mouseOut() {
  width.value = props.modelValue
}
function mouseOver(i) {
  width.value = i
}


let fontWidth = computed(() => `width:${width.value * 40}px`)
let fontStyle = computed(() => `color:${themeObj[props.theme]}`)

const themeObj = {
  black: "#00",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
};
</script>
<style scoped>
.rate-wrap {
  font-size: 40px;
  cursor: pointer;
}
.rate{
  position: relative;
  display: inline-block;
}
span{
  display: inline-block;
  width: 40px;
  height: 40px;
}
.rate > span.hollow{
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  width: 0;
  overflow: hidden;
}

</style>
