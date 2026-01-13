<script setup>
import { useRoute } from 'vue-router'
import CursoCards from '@/components/Mini Mimo/home/cards trilha/CursosCards.vue'

const route = useRoute()
</script>

<template>
  <main>
    <curso-cards v-if="route.path === '/trilhas'" />
    <router-view v-else />
  </main>
</template>

<style scoped>
main {
  background: #001450;
  padding-top: 8.5rem;
}
</style>
