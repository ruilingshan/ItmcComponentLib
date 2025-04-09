<template>
  <i class="itmc-icon">
    <font-awesome-icon v-bind="props" />
  </i>
</template>

<script setup>
import propObj from './props'
defineOptions({
  name: 'Itmc-Icon',
})
const props = defineProps(propObj)
</script>
<style scoped lang="scss"></style>
