<template>
  <!-- <Login v-if="!token"/>
  <Home v-else/> -->
  <router-view></router-view>
</template>

<script>
import Login from  "./pages/Login.vue"
import Home from "./pages/Home.vue";
import {getToken} from './utils/storageService'
export default {
  name: "App",
  components: { Home, Login },
  data() {
    return {
      token: ''
    }
  },
  created() {
    // 先存到localStorge
    this.token = getToken()
  }
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
