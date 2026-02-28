<script setup>
import { useRoute } from 'vue-router'
import CursoCards from '@/components/Mini Mimo/home/cards trilha/CursosCards.vue'
import perfilHome from '@/components/Mini Mimo/home/cards trilha/PerfilHome.vue';
const route = useRoute()
</script>

<template>
  <main>
      <perfilHome/>
      <curso-cards v-if="route.path === '/trilhas'" />
      <router-view v-else />
  </main>
</template>

<style scoped>
main {
  background: var(--bg-primary);
  /* min-height: 100vh; */
  /* padding-top: 8.5rem; */
  transition: background-color 0.3s ease;
}
</style>
