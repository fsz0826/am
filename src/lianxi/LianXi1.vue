<script setup lang = "ts">
import { computed, reactive, ref, watch } from 'vue'

const name = ref('张三')
function changeName() {
  name.value = '李四'
}
const age = ref('18')
const tel = ref('123456789')
const car = reactive({ brand: 'benz', price: '100000' })
function changeCar() {
  Object.assign(car, { color: 'white' })
  console.log(car)
}
const games = reactive([{ id: 1, name: '王者荣耀' }, { id: 2, name: 'LOL' }])

function showTel() {
  alert(tel.value)
}

const firstName = ref('')
const lastName = ref('')
const fullName = computed(() => {
  return firstName.value + '-' + lastName.value
})

const sum = ref(0)
function changeSum() {
  sum.value++
}
watch(sum, (newValue, oldValue) => {
  console.log('newValue: ', newValue)
  console.log('oldValue: ', oldValue)
})
</script>
<template>
  <div class = "wrapper">
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <div>车辆：{{ car.brand }}</div>
    <div>车辆价格：{{ car.price }}</div>
    <div>喜欢玩的游戏：</div>
    <ul>
      <li v-for = "game in games" :key = "game.id">{{ game.name }}</li>
    </ul>
    <button @click = changeName()>更改姓名</button>
    <button @click = showTel()>显示电话</button>
    <button @click = changeCar()>更换汽车</button>
    <div>
      <div>
        <label> 姓：<input type = "text" v-model = "firstName"></label>
        <label> 名：<input type = "text" v-model = "lastName"></label>
      </div>
      <div>全名：{{ fullName}}</div>
    </div>
    <div>
      <p>sum：{{sum}}</p>
      <button @click = changeSum>点我sum+1</button>
    </div>
  </div>
</template>
<style scoped lang = "scss">
.wrapper {
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: #333 0.5px 0.5px 5px;
  background: skyblue;

  button {
    margin: 0 5px;
  }
}
</style>
