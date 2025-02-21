<script setup lang = "ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})

const iconName = computed(() => `#icon-${props.name}`)
const className = computed(() => `svg-icon ${props.name}`)
const styles = computed(() => ({
  color: props.color
}))
</script>
<template>
  <svg aria-hidden="true" :class="className" :style="styles">
    <use :xlink:href="iconName" />
  </svg>
</template>
<style scoped lang = "scss">
</style>
