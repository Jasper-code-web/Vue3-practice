<template>
    <!-- <div class="box" :style="{width: width + 'px'}"></div> -->
    <!-- <button @click="change">click</button> -->
    <!-- <div class="box1"></div> -->
    <button @click="toggle">click</button>
    <transition name="fade">
        <h1 v-if="showTitle">Hellow Vue3</h1>
    </transition>
</template>
<script setup>
import { ref } from 'vue';

let showTitle = ref(true)
function toggle() {
    showTitle.value = !showTitle.value
}

// let width = ref(100)
// function change() {
//     width.value += 100
// }

</script>
<style>
/* .box{
    background-color: red;
    height: 100px;
    transition: width 1s linear;
} */
.box1 {
    width: 50px;
    height: 50px;
    position: relative;
    background-color: #d88986;
    animation: move 2s linear infinite;
}
@keyframes move{
    0% {left: 0px}
    50% {left: 200px;}
    100% {left: 0;}
}
</style>