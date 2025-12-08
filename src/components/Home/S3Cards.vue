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
/* ======================
   DESKTOP — IGUAL AO SEU
   ====================== */
section {
  max-width: 1200px;
  margin: 6rem auto;
  padding: 3rem 2rem;
  background: #fff;
  border: 1px solid #e0e0e0;
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

/* ======================
   RESPONSIVIDADE REAL
   ====================== */

/* Tablets grandes (reduz pouco, mantém o estilo) */
@media (max-width: 950px) {
  section {
    padding: 2.5rem 1.7rem;
    margin: 5rem auto;
  }

  section h2 {
    font-size: 2rem;
  }

  section ul {
    flex-direction: column;
    gap: 1.2rem;
  }
}

/* Tablets pequenos / celulares grandes */
@media (max-width: 700px) {
  section {
    padding: 2.2rem 1.5rem;
  }

  section h2 {
    font-size: 1.8rem;
  }

  section ul li p {
    font-size: 1rem;
    line-height: 1.7;
    max-width: 100%;
  }
}

/* Celular comum */
@media (max-width: 500px) {
  section {
    padding: 2rem 1.2rem;
    border-radius: 15px;
  }

  section h2 {
    font-size: 1.6rem;
  }

  section ul li p {
    font-size: 0.95rem;
  }
}

/* Celular pequeno */
@media (max-width: 380px) {
  section {
    padding: 1.7rem 1rem;
  }

  section h2 {
    font-size: 1.45rem;
  }

  section ul li p {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}
</style>
