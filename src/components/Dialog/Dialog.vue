<template>
  <transition name="dialog-fade">
    <div v-show="visible" class="itmc-dialog_wrapper">
      <div class="itmc-dialog" :style="{ width, marginTop: top }">
        <div class="itmc-dialog_header">
          <slot name="title">
            <span class="itmc-dialog_title">{{ title }}</span>
          </slot>
          <button class="itmc-dialog_headerbtn" @click="clickHandle">
            <Itmc-Icon icon="xmark"></Itmc-Icon>
          </button>
        </div>
        <div class="itmc-dialog_body">
          <slot></slot>
        </div>
        <div class="itmc-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import props from './props'

defineOptions({
  name: 'Itmc-Dialog',
})

defineProps(props)

const emit = defineEmits(['close'])

const clickHandle = () => {
  emit('close')
}
</script>
<style scoped lang="scss"></style>
