<template>
  <div id="app">
    <Header />
    <!-- <DataComponent /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Dashboard from './components/Dashboard.vue'
// import DataComponent from './components/DataComponent.vue'

export default {
  name: 'App',
  components: {
    Header,
    // Dashboard,
    // DataComponent
  },
  mounted() {
    this.$intro().start()
  }
}
</script>

<style>
/* Add your styles here */
</style>
./components/DataComponent.vue