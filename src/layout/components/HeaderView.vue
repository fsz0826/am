<script setup lang = "ts">
import { ref, defineExpose } from 'vue'

const a = ref('1')
const b = ref(2)
defineExpose({ a, b })
</script>
<template>
  <div>header123{{ a + b }}</div>
</template>
<style scoped lang = "scss">
</style>
