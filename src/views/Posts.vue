<template>
    <h4>working with props</h4><hr>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="posts.length" class="posts">
        <PostList v-bind:posts="posts"/>
    </div>
    <div v-else class="loading">Loading ...</div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPostData from '../exposables/getPostData'


export default {
    name: 'Posts',
    components: { PostList, },

    setup() {
        
        const { posts, error, load_data } = getPostData()

        load_data()

        return { posts, error }
    }
}
</script>

<style>

</style>
