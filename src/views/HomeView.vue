<template>
  <div class="home">
    <h4>home</h4>

    <p ref="p">Hi, this is {{ name }}, age {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="changeInfo">change info</button><br>
    <input type="text" v-model="name">
    <button @click="age++">increase age</button>
    <hr>
    <p>REF blogs goes here</p>
    <div>
      <ul v-for="blog in blogs" v-bind:key="blog.id">
        <li>
          <h4>{{ blog.title }}</h4>
          <span>{{ blog.views }}</span>
          <p>{{ blog.description }}</p>
          <button @click="changeBlog(e, blog.id)">change blog title</button>
          <button @click="blog.views++">increase view count</button>
        </li>
      </ul>
    </div>
    <hr>
    <p>REACTIVE blogs goes here</p>
    <div>
      <ul v-for="blog in rBlogs" v-bind:key="blog.id">
        <li>
          <h4>{{ blog.title }}</h4>
          <span>{{ blog.views }}</span>
          <p>{{ blog.description }}</p>
          <button @click="changeRBlog(e, blog.id)">change blog title</button>
          <button @click="blog.views++">increase view count</button>
        </li>
      </ul>
    </div>
    <hr>
    <p>(COMPUTED) author</p>
    <h4>{{ author }}</h4>
    <input type="text" v-model="author">
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    // working with computed values

    const author = computed(() => {
      return "Jamshid"
    })

    // working with ref values

    const p = ref(null)
    const name = ref('Jamshid Dovurov')
    const age = ref(25)
    const blogs = ref([
      {
        "id": 0,
        "title": "Lorem ipsum dolor sit amet, consect",
        "description": "Lorem ipsum dolor sit amet, consect",
        "views": 0
      },
      {
        "id": 1,
        "title": "Lorem ipsum dolor sit amet, consect",
        "description": "Lorem ipsum dolor sit amet, consect",
        "views": 0
      }
    ])

    const handleClick = () => {
      p.value.classList.add('test-class')
      p.value.textContent = "this is test text"
    }
    const changeInfo = () => {
      name.value = "Jasur Dovurov"
      age.value = 26
    }
    const changeBlog = (e, id) => {
      blogs.value[id].title = "title changed"
    }
    // end of ref


    // working with reactive values

    const rBlogs = reactive([
      {
        "id": 0,
        "title": "Lorem ipsum dolor sit amet, consect",
        "description": "Lorem ipsum dolor sit amet, consect",
        "views": 0
      },
      {
        "id": 1,
        "title": "Lorem ipsum dolor sit amet, consect",
        "description": "Lorem ipsum dolor sit amet, consect",
        "views": 0
      }
    ])

    const changeRBlog = (e, id) => {
      rBlogs[id].title = "title changed"
    }
    // end of reactive



    return {
      // ref values
      p,
      age,
      name,
      blogs,
      
      // methods
      handleClick,
      changeInfo,
      changeBlog,

      // reactive value
      rBlogs,
      
      // methods
      changeRBlog,

      // computed values
      author,
    }
  }
}
</script>
