<template>
  <div class="todo-wrap">
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button @click="clear" v-if="active !== 0">清理</button>

    <!-- 清单别表 -->
    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    
    <!-- 全选区域 -->
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import userStorage from '../utils/userStorage'

let title = ref("");
let todos = ref([
  {
    title: "学习",
    done: false,
  },
]);

function addTodo() {
  todos.value.push({
    title: title.value,
    done: false,
  });
  userStorage('todos', todos.value)
  title.value = "";
}

function clear() {
  todos.value = todos.value.filter((todo) => !todo.done)
}

let active = computed(() => {
  return todos.value.filter((v) => {
    return v.done;
  }).length;
});
let all = computed(() => {
  return todos.value.length;
});
let allDone = computed({
  get: () => {
    return active.value === all.value && active.value !== 0;
  },
  set: (value) => {
    todos.value.forEach((todo) => {
      todo.done = value;
    });
  },
});
</script>

<style>
.todo-wrap{
    position: fixed;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
    width: 500px;
}

.flip-list-move{
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active{
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to{
  opacity: 0;
  transform: translateX(30px);
}

.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}

h1 {
  color: red;
}
</style>