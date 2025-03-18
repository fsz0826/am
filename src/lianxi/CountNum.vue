<script setup lang = "ts">
import { ref } from 'vue'

const count = ref(0)
const parameter = ref(0)

function add() {
  count.value+= parameter.value
}

function minus() {
  count.value-= parameter.value
}

function multiply() {

  count.value *= parameter.value
}

function divide() {
  if (parameter.value == 0) {
    alert('被除数不能为0')
    return
  }
  count.value /= parameter.value
}
</script>
<template>
  <div class = "container">
    <div class = "count">当前数字为 {{ count }}</div>
    <select class="selectCont" v-model.number = "parameter">
      <option value = "0">0</option>
      <option value = "1">1</option>
      <option value = "2">2</option>
    </select>
    <button @click = "add">+</button>
    <button @click = "minus">-</button>
    <button @click = "multiply">×</button>
    <button @click = "divide">÷</button>
  </div>
</template>
<style scoped lang = "scss">
.container {
  background: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;

  .count {
    font-size: 20px;
    font-weight: bold;
  }
  .selectCont {
    border: none;
    outline: none;
  }

  button {
    margin: 10px;
    width: 30px
  }
}
</style>
