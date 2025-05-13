<template>
  <i class="itmc-icon" :class="{ [`itmc-icon--${type}`]: type }">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup>
import { omit } from 'lodash'
import propObj from './props'
import { computed } from 'vue'
defineOptions({
  name: 'Itmc-Icon',
})
const props = defineProps(propObj)

const filteredProps = computed(() => omit(props, ['type']))
</script>
<style scoped lang="scss"></style>
