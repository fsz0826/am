<script setup lang = "ts">
import useDog from "@/hooks/useDog";
import useSum from '@/hooks/useSum'
const { sum, changeSum } = useSum()
const { dogList, getDog } = useDog()
</script>
<template>
  <div class = "wrapper">
    <div>当前值为{{ sum }}</div>
    <button @click = "changeSum">点击加一</button>
    <hr>
    <div class = "imgWrapper">
      <img v-for = "(item,index) in dogList" :src = "item" :key = "index" alt = "">
    </div>
    <button class = "dogBtn" @click = "getDog">再来一只小狗</button>
  </div>
</template>
<style scoped lang = "scss">
.wrapper {
  background: skyblue;
  font-size: 32px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 10px #000;
  border-radius: 10px;

  button {
    margin: 10px;
    font-size: 24px;
  }

  .imgWrapper {
    height: 100px;
    padding: 10px;
    img {
      height: 100%;
      margin: 10px;
    }
  }
  .dogBtn {
    margin-top: 20px;
    font-size: 24px;
  }
}
</style>
