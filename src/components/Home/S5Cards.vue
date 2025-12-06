<script setup>
const arquiteturaInfo = {
  titulo: "Arquitetura, Boas Práticas e Mindset",

  texto: `Esta plataforma é construída sobre uma stack moderna (Vue.js, JavaScript, CSS/SASS),
  adotando padrões de código de alta manutenibilidade, escalabilidade e segurança de dados.
  O código é limpo, documentado e aderente ao SOLID. Implementamos criptografia robusta para
  os dados transacionais. Nossa missão é desenvolver <strong>engenheiros de software</strong> com
  rigor técnico.`,

  mantra: "Lembre-se, o usuário nós respeitamos mas somos inimigos."
}

</script>

<template>
  <section>
    <h2>{{ arquiteturaInfo.titulo }}</h2>

    <p v-html="arquiteturaInfo.texto"></p>

    <blockquote class="developer-mantra">
      {{ arquiteturaInfo.mantra }}
    </blockquote>
  </section>
</template>

<style scoped>
/* ---------- SEÇÃO ARQUITETURA ---------- */
section {
  max-width: 1200px;
  margin: 6rem auto;
  padding: 3rem 2rem;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.6s ease;
}

section h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  text-align: center;
}

section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 2rem;
}

section p strong {
  font-weight: 700;
  color: #4a73ff;
}

section .developer-mantra {
  background: linear-gradient(135deg, rgba(74, 115, 255, 0.08) 0%, rgba(248, 249, 250, 0.5) 100%);
  border-left: 4px solid #4a73ff;
  padding: 2rem;
  margin: 2rem auto 0;
  border-radius: 12px;
  font-size: 1.2rem;
  font-style: italic;
  color: #1a1a1a;
  max-width: 700px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(74, 115, 255, 0.1);
}
</style>
