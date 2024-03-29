<template>
  <Home />
</template>

<script>
import Home from "./pages/Home.vue";
export default {
  name: "App",
  components: { Home },
};
</script>

<style lang="scss">
body {
  margin: 0;
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: start;
    justify-content: center;
  }
}
</style>
