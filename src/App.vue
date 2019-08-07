<template>
  <div id="root">
    <ThreeWorld />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import ThreeWorld from './components/three-world/ThreeWorld.vue'

export default {
  name: 'root',
  components: {
    ThreeWorld
  }
}
</script>

<style>
#root {
  margin: 0;
  padding: 0;
}
</style>
