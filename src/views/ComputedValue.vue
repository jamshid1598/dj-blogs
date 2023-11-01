<template>
  <div>
    <h1>working with computed values</h1><hr>
    <input type="text" v-model="search"><br>
    <span v-if="search">search term - {{ search }}</span>
    <div v-for="name in matchingNames" v-bind:key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
    name: 'Computed',
    setup() {
        const search = ref('')
        const names = ref(['Jamshid', 'Afrosiyob', 'Abror', 'Nodir'])
        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })


        const stopWatch = watch(search, () => {
            console.log('watch function run')
        })

        const stopEffect = watchEffect(() => {
            console.log('watchEffect function run', search.value)
        })

        const handleClick = () => {
            stopWatch()
            stopEffect()
        }
        return {
            search, names, matchingNames,
            handleClick,
        }
    }
}
</script>

<style>

</style>