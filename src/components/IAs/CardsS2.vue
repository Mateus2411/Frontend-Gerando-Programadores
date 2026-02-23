<script setup>
// s2 cards

const cards = [
  {
    title: 'Evolução Contínua das IAs',
    description:
      'Uma IA evolui conforme recebe mais dados, identificando padrões e ajustando suas respostas. Com o tempo, ela fica mais precisa e confiável, entendendo melhor situações reais. Esse refinamento constante é o que diferencia uma IA comum de uma avançada.',
  },
  {
    title: 'Adaptação ao Usuário e ao Contexto',
    description:
      'IAs modernas aprendem com o estilo e o comportamento de cada pessoa. Elas moldam a linguagem, as sugestões e a forma de responder conforme o uso. Isso torna a experiência mais natural e personalizada a cada interação.',
  },
]
</script>
<template>
  <section class="s2">
    <div class="cards-container">
      <div v-for="card in cards" :key="card.title" class="card">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
section.s2 {
  margin: 1.2rem 0;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: clamp(55%, 60%, 100%);
}

@media (min-width: 300px) {
  .cards-container {
    max-width: 100%;
  }
}

.cards-container .card {
  background: var(--card-bg);
  padding: 1.2rem 1.4rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px var(--shadow-color);
  line-height: 1.45;
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
}

.cards-container .card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.cards-container .card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  transition: color 0.3s ease;
}
</style>
