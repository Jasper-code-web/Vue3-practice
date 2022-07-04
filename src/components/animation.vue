<template>
    <!-- <div class="box" :style="{width: width+'px'}"></div>
    <button @click="change">button</button> -->

    <!-- <button @click="toggle">click</button>
    <transition name="fade">
        <h1 v-if="showTitle">Title</h1>
    </transition> -->
</template>
<script setup>
import {ref} from 'vue'
//矩形长度变化动画
// let width = ref(100)
// function change() {
//     width.value += 100
// }

let showTitle = ref(true)
function toggle() {
    showTitle.value = !showTitle.value
}
</script>
<style>
.box{
    background: #d88986;
    height: 100px;
    width: 100px;
    /* transition解决动画过渡不流畅问题：一个阶段性的过渡效果，与手动操作相结合（如click） */
    /* transition: width 1s linear; */

    /* 使用animation + @keyframes解决动画过渡不流畅问题：可以自动循环，形成动画 */
    /* animation: change 3s linear infinite; */
}

/* @keyframes change{
    0% {width: 100px;}
    50% {width: 400px;}
    100% {width: 100px;}
} */

/* vue3处理过渡 */
/* 不透明度变化效果 */
/* .fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
} */
</style>