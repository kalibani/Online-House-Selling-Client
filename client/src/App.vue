<template>
  <div id="app">
    <header>
      <span><appNavbar/></span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import appNavbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    appNavbar
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*background-image: url('https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1956083/1160/772/m1/fpnw/wm0/house-selling-logo-01-.jpg?1480326728&s=e8cfcb7f3ee93b2d40e586b263480048');*/
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 25px;
}
</style>
