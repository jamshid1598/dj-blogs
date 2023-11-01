<template>
  <nav>
    <router-link v-bind:to="{ name: 'computed' }">computed</router-link> |
    <router-link v-bind:to="{ name: 'props' }">props</router-link>
  </nav>
  <router-view/>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
