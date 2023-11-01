<template>
  <h4>working with props</h4><hr>

  <div>
    <div v-for="post in posts" v-bind:key="post.id">
        <h4>{{ post.title }}</h4>
        <span>post id - {{ post.id }}</span>
        <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const posts = ref([
            {id: 1, title: 'hello world', body: 'lorem ipsum dolor sit amet'},
            {id: 2, title: 'test 0', body: 'lorem ipsum dolor sit amet'},
            {id: 3, title: 'test 1', body: 'lorem ipsum dolor sit amet'},
            {id: 4, title: 'test 2', body: 'lorem ipsum dolor sit amet'},
            {id: 5, title: 'test 4', body: 'lorem ipsum dolor sit amet'},
        ])
        return {
            posts
        }
    }
}
</script>

<style>

</style>