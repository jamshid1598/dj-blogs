<template>
  <div class="post-detail">
    <h4>{{ post.title }}</h4>
    <span>post id - {{ post.id }}</span>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['post'],

    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + '...'
        })
        return { snippet }
    }
}
</script>

<style>

</style>