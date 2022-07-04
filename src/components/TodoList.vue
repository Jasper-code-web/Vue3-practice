<template>
  <div class="todo-wrap">
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button @click="clear" v-if="active !== 0">清理</button>

    <!-- 清单别表 -->
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo($event, i)">
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
  </div>

  <transition name="modal">
    <div class="info" v-if="showModal">内容不能为空！</div>
  </transition>


  <span class="dustbin">
    🗑
  </span>
  <div class="animate-wrap">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="animate" v-show="animate.show">
        📋
      </div>
    </transition>
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

let showModal = ref(false)
//添加li
function addTodo() {
  if (!title.value) {
    showModal.value = true
    setTimeout(() => {
      showModal.value = false
    }, 1500)
    return
  }
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

//dustbin js动画
let animate = reactive({
  show: false,
  el: null
})
function beforeEnter(el) {
  let dom = animate.el
  let rect = dom.getBoundingClientRect()
  let x = rect.left
  let y = rect.top
  el.style.transform = `translate(-${x}px, ${y}px)`
}
function enter(el, done) {
  document.body.offsetHeight
  el.style.transform = `translate(-10px, 10px)`
  el.addEventListener('transitionend', done)
}
function afterEnter(el) {
  animate.show = false
  el.style.display = 'none'
}
function removeTodo(e, i) {
  animate.el = e.target
  animate.show = true
  todos.value.splice(i, 1)
}

</script>

<style>
*{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.todo-wrap {
  position: fixed;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  width: 500px;
}

.info {
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  height: 50px;
  text-align: center;
  line-height: 50px;
  padding: 0 10px;
  color: #fff;
  background: #d88986;
}

/* 弹框过度 */
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -50px);
}

.modal-enter-active,
.modal-leave-active {
  transition: all .3s ease;
}

/* li列表过度 */
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.remove-btn{
  display: inline-block;
}

/* dustbin */
.dustbin{
  display: inline-block;
  position: fixed;
  font-size: 30px;
  right: 20px;
  top: 20px;
}
.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 100;
  transition: all 0.5s linear;
}
</style>