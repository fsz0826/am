import {  reactive ,onMounted} from 'vue'
import axios from 'axios'
export default () => {
  const dogList = reactive(['https://images.dog.ceo/breeds/pembroke/n02113023_6869.jpg'])
  const getDog = async () => {
    try {
      const result = await axios.get('https://dog.ceo/api/breeds/image/random')
      dogList.push(result.data.message)
    }catch (error){
      console.log(error)
    }
  }
  onMounted(() => {
    getDog()
  })
  return {
    dogList,
    getDog
  }
}

