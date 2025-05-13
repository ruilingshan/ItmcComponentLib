<template>
  <h1 class="row-title">对话框示例</h1>
  <div class="row">
    <Itmc-Button type="primary" @click="onClick">对话框一</Itmc-Button>
    <Itmc-Button type="primary" @click="visible2 = true"> 对话框二 </Itmc-Button>
    <Itmc-Button type="primary" @click="visible3 = true"> 对话框三 </Itmc-Button>
  </div>
  <Itmc-Dialog v-model:visible="visible" @close="onClose">这是一个基本的对话框</Itmc-Dialog>
  <Itmc-Dialog
    v-model:visible="visible2"
    title="这是一个自定义标题"
    width="30vw"
    top="40vh"
    @close="visible2 = false"
    >这是一个基本的对话框</Itmc-Dialog
  >
  <Itmc-Dialog v-model:visible="visible3" @close="visible3 = false">
    这是一个基本的对话框
    <template #footer>
      <Itmc-Button @click="visible3 = false">取消</Itmc-Button>
      <Itmc-Button type="primary" @click="visible3 = false">确定</Itmc-Button>
    </template>
  </Itmc-Dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)

const onClick = () => {
  visible.value = true
}

const onClose = () => {
  visible.value = false
}
</script>
<style scoped lang="scss"></style>
