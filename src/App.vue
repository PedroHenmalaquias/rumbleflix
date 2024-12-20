<script setup>
import headerVue from '@/components/HeaderComp.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <headerVue />
  <main>
    <router-view />
  </main>
</template>

<style scoped>
</style>
