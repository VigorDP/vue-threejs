<template>
  <div id="three-world"></div>
</template>

<script>
import Core from "./index";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    Core();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#three-world {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
