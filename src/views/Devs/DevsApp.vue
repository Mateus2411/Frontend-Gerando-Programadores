<script setup>
var estado = true
</script>

<template>
  <section v-if="estado">
    <h1>Ainda não hà nada aqui mas logo logo estará completo</h1>
  </section>
  <section v-else></section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 2rem;
}
</style>
