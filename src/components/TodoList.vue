<template>
  <div class="todo-wrap">
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button @click="clear" v-if="active !== 0">清理</button>

    <!-- 清单别表 -->
    <ul v-if="todos.length">
      <transition-group name="flip-list" tap="ul">
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo($event, index)">
            ❌
          </span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    
    <!-- 全选区域 -->
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>

    <!-- 空状态弹窗 -->
    <transition name="model">
        <div class="info-wrap" v-if="showModel">
            <div class="info">哥，你啥也没输入</div>
        </div>
    </transition>

    <!-- 垃圾桶 -->
    <template>
      <span class="dustbin">🗑</span>
      <div class="animate-wrap">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="animate" v-show="animate.show">
             📋
          </div>
        </transition>
      </div>
    </template>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";

// 垃圾桶
let animate = reactive({
  show: false,
  el: null
})

function beforeEnter(el) {
  let dom = animate.el
  let rect = dom.getBoundingClientRect()
  let x = window.innerWidth - rect.left - 60
  let y = rect.to - 10
  el.style.transform = `translate(-${x}px, ${y}px)`
}
function enter(el, done) {
  document.body.offsetHeight
  el.style.transform = `translate(0, 0)`
  el.addEventListener('transitionend', done)
}
function afterEnter(el) {
  animate.el = e.target
  animate.show = true
  todos.splice(i, 1)
}




let title = ref("");
let showModel = ref(false);
let todos = ref([
  {
    title: "学习",
    done: false,
  },
]);

function removeTodo(e, i) {
  animate.el = e.target 
  animate.show = true
  todos.value.splice(i, 1)
}

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