<script setup lang = "ts">
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, onUpdated, ref } from 'vue'

const sum = ref(0)
function changeSum() {
  sum.value++
}
onBeforeMount(()=>{
  console.log('onBeforeMount')
})
onMounted(()=>{
  console.log('onMounted')
})
onUpdated(()=>{
  console.log('onUpdated')
})
onBeforeUnmount(()=>{
  console.log('onBeforeDestroyed')
})
onUnmounted(()=>{
  console.log('onDestroyed')
})
</script>
<template>
  <div>{{ sum }}</div>
  <button @click="changeSum">sum+1</button>
</template>
<style scoped lang = "scss">
</style>
