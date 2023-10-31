<template>
  <div class="home">
    <h4>home</h4>

    <p ref="p">Hi, this is {{ name }}, age {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="changeInfo">change info</button><br>
    <input type="text" v-model="name">
    <button @click="age++">increase age</button>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const name = ref('Jamshid Dovurov')
    const age = ref(25)

    const p = ref(null)

    const handleClick = () => {
      console.log('you clicked me')
      console.log(p)
      p.value.classList.add('test-class')
      p.value.textContent = "this is test text"
    }
    const changeInfo = () => {
      console.log("change user info")
      name.value = "Jasur Dovurov"
      age.value = 26
    }

    return { name, age, handleClick, changeInfo, p }
  }
}
</script>
