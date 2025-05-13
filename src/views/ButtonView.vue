<template>
  <h1 class="row-title">普通按钮</h1>
  <div class="row">
    <Itmc-Button>默认按钮</Itmc-Button>
    <Itmc-Button type="primary">主要按钮</Itmc-Button>
    <Itmc-Button type="info">信息按钮</Itmc-Button>
    <Itmc-Button type="success">成功按钮</Itmc-Button>
    <Itmc-Button type="warning">警告按钮</Itmc-Button>
    <Itmc-Button type="danger">危险按钮</Itmc-Button>
  </div>
  <h1 class="row-title">朴素按钮</h1>
  <div class="row">
    <Itmc-Button plain>默认按钮</Itmc-Button>
    <Itmc-Button type="primary" plain>主要按钮</Itmc-Button>
    <Itmc-Button type="info" plain>信息按钮</Itmc-Button>
    <Itmc-Button type="success" plain>成功按钮</Itmc-Button>
    <Itmc-Button type="warning" plain>警告按钮</Itmc-Button>
    <Itmc-Button type="danger" plain>危险按钮</Itmc-Button>
  </div>
  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <Itmc-Button round>默认按钮</Itmc-Button>
    <Itmc-Button type="primary" round>主要按钮</Itmc-Button>
    <Itmc-Button type="info" round>信息按钮</Itmc-Button>
    <Itmc-Button type="success" round>成功按钮</Itmc-Button>
    <Itmc-Button type="warning" round>警告按钮</Itmc-Button>
    <Itmc-Button type="danger" round>危险按钮</Itmc-Button>
  </div>
  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <Itmc-Button disabled>默认按钮</Itmc-Button>
    <Itmc-Button type="primary" disabled>主要按钮</Itmc-Button>
    <Itmc-Button type="info" disabled>信息按钮</Itmc-Button>
    <Itmc-Button type="success" disabled>成功按钮</Itmc-Button>
    <Itmc-Button type="warning" disabled>警告按钮</Itmc-Button>
    <Itmc-Button type="danger" disabled>危险按钮</Itmc-Button>
  </div>
  <h1 class="row-title">等待状态</h1>
  <div class="row">
    <Itmc-Button loading>默认按钮</Itmc-Button>
    <Itmc-Button type="primary" loading>主要按钮</Itmc-Button>
    <Itmc-Button type="info" loading round>信息按钮</Itmc-Button>
    <Itmc-Button type="success" loading round>成功按钮</Itmc-Button>
    <Itmc-Button type="warning" loading round>警告按钮</Itmc-Button>
    <Itmc-Button type="danger" loading>危险按钮</Itmc-Button>
  </div>
  <h1 class="row-title">图标按钮</h1>
  <div class="row">
    <Itmc-Button icon="file">默认按钮</Itmc-Button>
    <Itmc-Button type="primary" icon="gear">主要按钮</Itmc-Button>
    <Itmc-Button type="info" icon="folder" round>信息按钮</Itmc-Button>
    <Itmc-Button type="success" icon="bug" round>成功按钮</Itmc-Button>
    <Itmc-Button type="warning" icon="code" round>警告按钮</Itmc-Button>
    <Itmc-Button type="danger" icon="cube">危险按钮</Itmc-Button>
  </div>
  <h1 class="row-title">不同尺寸的按钮</h1>
  <div class="row">
    <Itmc-Button icon="file" size="small">默认按钮</Itmc-Button>
    <Itmc-Button type="primary" icon="gear" size="small">主要按钮</Itmc-Button>
    <Itmc-Button type="info" icon="folder" plain>信息按钮</Itmc-Button>
    <Itmc-Button type="success" icon="bug" plain>成功按钮</Itmc-Button>
    <Itmc-Button type="warning" icon="code" plain size="large">警告按钮</Itmc-Button>
    <Itmc-Button type="danger" icon="cube" plain size="large">危险按钮</Itmc-Button>
  </div>
  <h1 class="row-title">圆形按钮</h1>
  <div class="row">
    <Itmc-Button circle>验</Itmc-Button>
    <Itmc-Button type="primary" icon="gear" circle></Itmc-Button>
    <Itmc-Button type="info" icon="folder" circle plain></Itmc-Button>
    <Itmc-Button type="success" icon="bug" circle plain></Itmc-Button>
    <Itmc-Button type="warning" icon="code" circle disabled></Itmc-Button>
    <Itmc-Button type="danger" icon="cube" circle disabled></Itmc-Button>
  </div>
  <h1 class="row-title">按钮事件</h1>
  <div class="row">
    <Itmc-Button type="primary" @click="clickHandler" ref="btnRef">主要按钮</Itmc-Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const btnRef = ref(null)

const clickHandler = () => {
  window.alert('按钮被点击了')
  console.log(btnRef.value.ref)
}
</script>
<style scoped lang="scss"></style>
