<script setup>
  import CursoCards from '/Users/keila/OneDrive/Área de Trabalho/Mateus/frontend vue/src/components/Mini Mimo/home/cards trilha/CursosCards.vue'
</script>

<template>
  <main>
    <curso-cards/>
    <section>
      <router-view />
    </section>
  </main>
</template>

<style scoped>
main {
  background: #dbe4ff;
  padding-top: 8.5rem;
}
</style>
