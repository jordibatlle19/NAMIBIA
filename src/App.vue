<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar msg="Ropa de Mujer" />

  <RouterView/>

  <Footer />
</template>

<style scoped>

</style>
