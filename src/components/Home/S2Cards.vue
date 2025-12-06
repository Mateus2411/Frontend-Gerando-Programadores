<script setup>

defineProps({
  titulo: String,
  descricao: String,
})

let Objetivos =[
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
    <h2>
      Objetivos de aprendizagem:
    </h2>
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
  color: #1a1a1a;
  text-align: center;
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
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 18px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.08);
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
  background: linear-gradient(90deg, #4a73ff 0%, #3b5fe0 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  transform: translateY(-8px);
  border-color: #4a73ff;
  box-shadow: 0 12px 40px rgba(74, 115, 255, 0.2);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4a73ff 0%, #3b5fe0 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(74, 115, 255, 0.3);
}

.card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
}

.card p {
  color: #555;
  line-height: 1.7;
  font-size: 1rem;
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
