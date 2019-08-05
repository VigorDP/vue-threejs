<template>
  <div id="app">
    <ThreeWorld />
    <router-view></router-view>
  </div>
</template>

<script>
import ThreeWorld from "./components/three-world/ThreeWorld.vue";

export default {
  name: "app",
  components: {
    ThreeWorld
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
