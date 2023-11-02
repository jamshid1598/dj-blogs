<template>
  <div>
    <button @click="posts.pop()">remove post</button>
    <div v-for="post in posts" v-bind:key="post.id">
        <Post v-bind:post="post"/>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'
import { onMounted, onUnmounted, onUpdated } from 'vue'


export default {
    props: ['posts'],
    components: { Post },
    setup() {
        onMounted(() => {
            console.log("Component is mounted")
        })
        onUnmounted(() => console.log("Component is unmounted"))
        onUpdated(() => {
            console.log("Component is updated")
        })
        return {}
    }
}
</script>

<style>

</style>