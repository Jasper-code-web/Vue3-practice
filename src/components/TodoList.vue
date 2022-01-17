<template>
    <div>
        <input type="text" v-model="title" @keydown.enter = "addTodo" />
        <button @click="clear" v-if="active !== 0">清理</button>
        <ul v-if="todos.length">
            <li v-for="(todo, index) in todos" :key="index">
                <input type="checkbox" v-model="todo.done">
                <span :class="{done: todo.done}">{{todo.title}}</span>
            </li>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选<input type="checkbox" v-model="allDone">
            <span>{{active}}/{{all}}</span>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
let title = ref('');
let todos = ref([{
    title: '学习',
    done: false
}])

function addTodo() {
    todos.value.push({
        title: title.value,
        done: false
    })
    title.value = ""
    console.log(active.value, all.value)
}

function clear() {
    todos.value.forEach((item) => {
        item.done = false
    })
}

let active = computed(() => {
    return todos.value.filter((v) => {
        return v.done
    }).length
})
let all = computed(() => {
    return todos.value.length
})
let allDone = computed({
    get: () => {
        return active.value === all.value
    },
    set: (value) => {
        todos.value.forEach((todo) => {
            todo.done = value
        });
    }
})

</script>

<style>
h1{
    color: red;
}
</style>