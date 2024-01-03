 <script setup>
 import { RouterLink,RouterView } from 'vue-router';
 import Navbar from './layout/Navbar.vue'
 import Footer from './components/Footer.vue'

</script>

<template>
  <Navbar/>
  <RouterView></RouterView>
  <Footer></Footer>
  

</template>