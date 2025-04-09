<template>
  <h1 class="title">ITMC 组件展示</h1>
  <nav class="nav">
    <router-link to="/">icon</router-link>
    <router-link to="/button">button</router-link>
    <router-link to="/card">card</router-link>
    <router-link to="/collapse">collapse</router-link>
    <router-link to="/dialog">dialog</router-link>
    <router-link to="/dropdown">dropdown</router-link>
    <router-link to="/pager">pager</router-link>
    <router-link to="/tooltip">tooltip</router-link>
  </nav>
  <div class="displayArea"><router-view></router-view></div>
</template>

<script setup></script>
<style scoped lang="scss">
h1.title {
  text-align: center;
  font-weight: 200;
}
.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}
.displayArea {
  margin-top: 2em;
}
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>
