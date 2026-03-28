<script setup>
defineProps({
  titulo: String,
  descricao: String,
})

let Objetivos = [
  {
    id: 1,
    titulo: 'Aprender',
    descricao:
      'Aqui nos iniciaremos com o basico da programação, ficando na aprendizagem e desenvolvimento para que no futuro n precise voltar',
  },
  {
    id: 2,
    titulo: 'Praticar',
    descricao:
      'Muitas das coisas requerem pratica, e programação nao e diferente te forçando a praticar',
  },
  {
    id: 3,
    titulo: 'Desenvolver',
    descricao:
      'Desenvolver projetos, definitivamente você ja deve ter pensado em fazer algo grande mas quando olhou mais de perto percebeu que nao tem como (por agora)',
  },
  {
    id: 4,
    titulo: 'Testar',
    descricao:
      'Testar seus conhecimentos, nada melhor do que testar o que aprendeu para ver se realmente entendeu e esta apto a seguir em frente',
  },
]
</script>
<template>
  <section>
    <h2>Objetivos de aprendizagem:</h2>
    <div class="cards-conteiner">
      <div v-for="card in Objetivos" :key="card.id" class="card">
        <div class="card-icon">{{ card.id }}</div>
        <h3>{{ card.titulo }}</h3>
        <p>{{ card.descricao }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-align: center;
  transition: color 0.3s ease;
}

.cards-conteiner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

@media (max-width: 1315px) {
  .cards-conteiner {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card {
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 18px;
  border: 1px solid var(--card-border);
  box-shadow: 0 8px 35px var(--shadow-color);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.6s ease;
  animation-fill-mode: both;
}

.card:nth-child(1) {
  animation-delay: 0.1s;
}

.card:nth-child(2) {
  animation-delay: 0.2s;
}

.card:nth-child(3) {
  animation-delay: 0.3s;
}

.card:nth-child(4) {
  animation-delay: 0.4s;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-hover) 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-primary);
  box-shadow: 0 10px 28px rgba(29, 155, 240, 0.12);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-hover) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 14px rgba(29, 155, 240, 0.22);
}

.card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.card p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  transition: color 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .cards-conteiner {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card {
    padding: 2rem;
  }
}
</style>
