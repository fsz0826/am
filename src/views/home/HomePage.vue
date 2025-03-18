<script setup lang = "ts">

// import LianXi1 from '@/lianxi/LianXi1.vue'
// import TsLianxi from '@/lianxi/TsLianxi.vue'
// import PropLianxi from '@/lianxi/PropLianxi.vue'
// import type { PersonInter } from '@/types'
import { reactive, ref } from 'vue'
import CountNum from '@/lianxi/CountNum.vue'
import LoveTalk from '@/lianxi/LoveTalk.vue'
// import HookLianXI from '@/lianxi/HookLianXI.vue'

/*const personList= reactive<PersonInter[]>([
  {
    id: '1',
    name: '张三',
    age: 18
  },
  {
    id: '2',
    name: '李四',
    age: 19
  },
  {
    id: '3',
    name: '王五',
    age: 20
  }
])*/
// console.log(personList)
/*import ShengMingZhouQi from '@/lianxi/ShengMingZhouQi.vue'
const show = ref(true)*/
</script>
<template>
<!--  <LianXi1/>-->
<!--  <TsLianxi/>-->
<!--  <PropLianxi :personList="personList"/>-->
<!--  <ShengMingZhouQi v-if="show"/>-->
<!--<HookLianXI/>-->
  <CountNum/>
  <LoveTalk/>
</template>

<style scoped lang = "scss">

</style>
