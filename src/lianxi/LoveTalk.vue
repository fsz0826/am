<script setup lang = "ts">
import { reactive } from 'vue'
import axios from 'axios'

interface WordsInter {
  id: number,
  content: string
}

axios({
  url: 'https://api.uomg.com/api/rand.qinghua?format=json',
  headers: {
    // 'Access-Control-Allow-Origin': '*'
  }
}
).then((res) => {
  console.log(res.data)
})
const list = reactive<WordsInter[]>([])
const wordsArr: WordsInter[] = [{
  id: 1,
  content: '你太美了'
}, {
  id: 2,
  content: '你真美'
}, {
  id: 3,
  content: 'you beautiful'
}, {
  id: 4,
  content: 'good'
}, {
  id: 5,
  content: 'very good'
}, {
  id: 6,
  content: 'so good'
}]

function getRandomUniqueItems(arr: WordsInter[], count: number): WordsInter[] {
  if (count > arr.length) {
    throw new Error('Count cannot be greater than the array length')
  }

  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, count)
}

const randomWords = getRandomUniqueItems(wordsArr, 3)
list.push(...randomWords)

function getWords() {
  list.splice(0, list.length)
  const randomWords = getRandomUniqueItems(wordsArr, 3)
  list.push(...randomWords)
}
</script>
<template>
  <div class = "container">
    <button @click = "getWords">获取吐味情话</button>
    <ul>
      <li v-for = "item in list" :key = "item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>
<style scoped lang = "scss">
.container {
  background: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
}
</style>
