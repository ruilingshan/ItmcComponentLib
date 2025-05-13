<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <Itmc-Icon icon="user-secret" />
    <Itmc-Icon icon="bars" />
    <Itmc-Icon icon="shield-halved" />
    <Itmc-Icon icon="file" />
    <Itmc-Icon icon="filter" />
    <Itmc-Icon icon="gear" />
    <Itmc-Icon icon="barcode" />
    <Itmc-Icon icon="folder" />
    <Itmc-Icon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <Itmc-Icon icon="user-secret" size="2xs" />
    <Itmc-Icon icon="bars" size="xs" />
    <Itmc-Icon icon="shield-halved" size="sm" />
    <Itmc-Icon icon="file" size="lg" />
    <Itmc-Icon icon="filter" size="xl" />
    <Itmc-Icon icon="gear" size="2xl" />
    <Itmc-Icon icon="barcode" size="2x" />
    <Itmc-Icon icon="folder" size="3x" />
    <Itmc-Icon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <Itmc-Icon icon="user-secret" rotation="90" size="xl" />
    <Itmc-Icon icon="bars" rotation="270" size="xl" />
    <Itmc-Icon icon="shield-halved" rotation="180" size="xl" />
    <Itmc-Icon icon="file" flip="horizontal" size="xl" />
    <Itmc-Icon icon="filter" flip="vertical" size="xl" />
    <Itmc-Icon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <Itmc-Icon icon="user-secret" size="xl" beat />
    <Itmc-Icon icon="bars" size="xl" beat-fade />
    <Itmc-Icon icon="shield-halved" size="xl" bounce />
    <Itmc-Icon icon="file" size="xl" fade />
    <Itmc-Icon icon="filter" size="xl" flip />
    <Itmc-Icon icon="gear" size="xl" shake />
    <Itmc-Icon icon="barcode" size="xl" spin />
    <Itmc-Icon icon="folder" size="xl" spin spin-reverse />
    <Itmc-Icon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <Itmc-Icon icon="user-secret" size="xl" type="primary" />
    <Itmc-Icon icon="bars" size="xl" type="success" />
    <Itmc-Icon icon="shield-halved" size="xl" type="info" />
    <Itmc-Icon icon="file" size="xl" type="warning" />
    <Itmc-Icon icon="filter" size="xl" type="danger" />
    <Itmc-Icon icon="gear" size="xl" color="#e47412" />
    <Itmc-Icon icon="barcode" size="xl" color="#7ec102" />
    <Itmc-Icon icon="folder" size="xl" color="skyblue" />
    <Itmc-Icon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script setup></script>
<style scoped lang="scss"></style>
