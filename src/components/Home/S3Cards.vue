<script setup>
const comoFunciona = {
  titulo: "Como Funciona",
  paragrafos: [
    {
      id: 1,
      texto:
        "O processo é dividido em três etapas claras: <strong>Cadastre-se</strong> para ter seu acesso, <strong>Explore os Módulos</strong> com conteúdo de programação e, o mais importante, <strong>Faça Nossos Desafios</strong> práticos."
    },
    {
      id: 2,
      texto:
        "Você terá acesso a exemplos de código, ambientes de teste e inteligência artificial para praticar. A cada exercício, você vê seu resultado na hora, permitindo que você aprenda e evolua a cada linha de código que escrever."
    }
  ]
}
</script>

<template>
  <section>
    <h2>{{ comoFunciona.titulo }}</h2>
    <ul>
      <li v-for="p in comoFunciona.paragrafos" :key="p.id">
        <p v-html="p.texto"></p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  max-width: 1200px;
  margin: 6rem auto;
  padding: 3rem 2rem;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 8px 35px rgba(0,0,0,0.08);
  animation: fadeIn 0.6s ease;
}

section h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  text-align: center;
}

section ul {
  display: flex;
}

section ul li p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  text-align: start !important;
  max-width: 900px;
  margin: 0 auto;
}

:deep(p strong) {
  font-weight: 700;
  color: #4a73ff;
}

</style>
