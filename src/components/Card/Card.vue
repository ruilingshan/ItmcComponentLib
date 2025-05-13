<template>
  <div class="itmc-card" :style="width ? { width: width + 'px' } : {}">
    <div class="itmc-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="itmc-card-summary">
      {{ summary }}
    </div>
    <div v-else class="itmc-card-summary">
      <slot />
    </div>
    <div class="itmc-card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import props from './props'

defineOptions({
  name: 'Itmc-Card',
})
defineProps(props)
</script>
<style scoped lang="scss"></style>
