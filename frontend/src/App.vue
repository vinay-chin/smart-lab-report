<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 min-h-screen">
    <Navbar></Navbar>
    <RouterView />
  </div>
</template>

<style scoped></style>
