<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "common/footer/footer.vue"
export default {
  name: 'app',
  components:{
    Footer
  }
}
</script>

<style>

</style>
