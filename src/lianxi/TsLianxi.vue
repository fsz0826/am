<script setup lang = "ts">
import type { PersonInter } from '@/types'
import { ref } from 'vue'
const person= ref<PersonInter>({
  id: '1',
  name: '张三',
  age: 18
})
const personList = ref<PersonInter[]>([
  {
    id: '1',
    name: '张三',
    age: 18
  },
  {
    id: '2',
    name: '李四',
    age: 19
  }
])
console.log('ts')
</script>
<template>
  <div>{{ person.name }}</div>
</template>
<style scoped lang = "scss">
</style>
