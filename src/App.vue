<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <Header />

    <RouterView />

    <Footer />
  </div>
</template>

