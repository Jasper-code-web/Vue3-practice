<template>
  <div class="todo-wrap">
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button @click="clear" v-if="active !== 0">清理</button>
    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>
    <transition name="model">
        <div class="info-wrap" v-if="showModel">
            <div class="info">哥，你啥也没输入</div>
        </div>
    </transition>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
let title = ref("");
let showModel = ref(false);

let todos = ref([
  {
    title: "学习",
    done: false,
  },
]);

function addTodo() {
  if(!title.value) {
      showModel.value = true
      setTimeout(() => {
          showModel.value = false
      }, 1500)
      return
  }
  todos.value.push({
    title: title.value,
    done: false,
  });
  title.value = "";
}

function clear() {
  todos.value.forEach((item) => {
    item.done = false;
  });
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
    return active.value === all.value;
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
.model-enter-from,
.model-leave-to{
    opacity: 0;
    transform: translateY(-60px);
}
.model-leave-active,
.model-enter-active{
    transition: all 0.3s ease;
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