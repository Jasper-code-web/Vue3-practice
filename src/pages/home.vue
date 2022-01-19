<template>
    <div>这是首页</div>
    <todo-list></todo-list>
</template>
<script setup>
import TodoList from '../components/TodoList.vue';
import {useMouse} from '../utils/getMouse'
let {x, y} = useMouse();
console.log(x.value, y.value)
</script> 
