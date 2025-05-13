<template>
  <button
    ref="_ref"
    class="itmc-button"
    :class="{
      [`itmc-button--${type}`]: type,
      [`itmc-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled || loading,
      'is-circle': circle,
    }"
    :disabled="disabled || loading"
  >
    <Itmc-Icon icon="spinner" spin v-if="loading"></Itmc-Icon>
    <Itmc-Icon :icon="icon" v-if="icon"></Itmc-Icon>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import props from './props'

defineOptions({
  name: 'Itmc-Button',
})
defineProps(props)

const _ref = ref()

defineExpose({ ref: _ref })
</script>
<style scoped lang="scss"></style>
