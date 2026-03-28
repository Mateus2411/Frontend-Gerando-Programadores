<script setup>
// Cards dos Objetivos
import CardsObjetivos from '@/components/Home/S2Cards.vue'

// Card Funciona
import CardFunciona from '@/components/Home/S3Cards.vue'

// Cads do que vai aprender
import CardsAprender from '@/components/Home/S4Cards.vue'

// Card Final
import CardFinal from '@/components/Home/S5Cards.vue'
</script>
<template>
  <main>
    <section class="s1">
      <div class="hero-content">
        <h1>Bem-vindos ao Estudo Direcionado De Programação</h1>

        <p>
          Aqui cada um poderá se desenvolver individualmente no mundo da programação, testando seus
          conhecimentos e aprimorando raciocínio lógico e prático.
        </p>

        <router-link class="btn-start" to="/cadastrar"> Começar </router-link>
      </div>
    </section>

    <cards-objetivos />
    <card-funciona />
    <cards-aprender />
    <card-final />
  </main>
</template>
<style scoped>
main {
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

/* ---------------- HERO ---------------- */

.s1 {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  position: relative;
  overflow: hidden;
  padding: 2rem;

  background-image:
    radial-gradient(ellipse 75% 55% at 20% 25%, rgba(29, 155, 240, 0.07) 0%, transparent 55%),
    radial-gradient(ellipse 60% 50% at 85% 75%, rgba(29, 155, 240, 0.05) 0%, transparent 50%);
  background-color: var(--bg-primary);
}

.s1::after {
  content: '';
  position: absolute;
  top: 10%;
  right: 5%;
  width: 140px;
  height: 140px;
  background: radial-gradient(circle at 40% 40%, var(--accent-primary) 0%, transparent 62%);
  opacity: 0.05;
  pointer-events: none;
}

.hero-content {
  position: relative;
  max-width: 520px;
  text-align: left;
  padding: 1.5rem;
  z-index: 1;
}

.hero-content h1 {
  font-family: var(--font-title);
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.2rem;
  color: var(--accent-primary);
  letter-spacing: -0.02em;
  animation: fadeInUp 0.6s ease 0s forwards;
}

.hero-content p {
  font-family: var(--font-body);
  font-size: clamp(1.15rem, 1.5vw, 1.4rem);
  line-height: 1.65;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  animation: fadeInUp 0.6s ease 0.15s forwards;
}

.btn-start {
  display: inline-block;
  padding: 0.85rem 2rem;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  background: var(--accent-primary);
  border: 1px solid transparent;
  transition:
    background 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.2s ease;
  box-shadow: 0 4px 14px rgba(29, 155, 240, 0.22);
  animation: fadeInUp 0.6s ease 0.3s forwards;
}

.btn-start:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(29, 155, 240, 0.28);
}

.btn-start:active {
  transform: translateY(0);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1080px) {
  .s1 {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    min-height: 100vh;
    padding: 3rem 1.5rem;
  }

  .hero-content {
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
  }

  .s1::after {
    display: none;
  }
}

@media (max-width: 768px) {
  .s1 {
    padding: 2rem 1.25rem;
    margin-bottom: 2rem;
  }

  .hero-content h1 {
    font-size: clamp(1.9rem, 5vw, 2.6rem);
  }

  .hero-content p {
    font-size: clamp(1.05rem, 3.5vw, 1.25rem);
  }

  .btn-start {
    padding: 0.8rem 1.75rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .s1 {
    padding: 1.5rem 1rem;
  }

  .hero-content h1 {
    font-size: 1.85rem;
    line-height: 1.25;
  }

  .hero-content p {
    font-size: 1.05rem;
    line-height: 1.6;
  }
}

@media (min-width: 1400px) {
  .hero-content {
    max-width: 560px;
  }

  .hero-content h1 {
    font-size: 3.4rem;
  }

  .hero-content p {
    font-size: 1.45rem;
  }
}
</style>
