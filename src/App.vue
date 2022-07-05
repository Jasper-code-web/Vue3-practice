<script setup>
</script>

<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于页</router-link>
  </div>
  <router-view></router-view>
  <!-- 组件切换过度 -->
  <!-- <router-view v-solt="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
