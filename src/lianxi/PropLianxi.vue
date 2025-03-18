<script setup lang = "ts">
import type { PersonInter } from '@/types'
import type { PropType } from 'vue'
defineProps({
  personList: {
    type: Array as PropType<PersonInter[]>,
    default: () => []
  }
})
/*defineProps<{
  personList?: PersonInter[]
}>()*/

// console.log(123)
</script>
<template>
  <ul>
    <li v-for="item in personList" :key="item.id">{{item.name}}</li>
  </ul>
</template>
<style scoped lang = "scss">
</style>
