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
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem 1.5rem 2rem;
  position: relative;
  overflow: hidden;

  background-image: url('https://media.istockphoto.com/id/1939609977/pt/foto/wooded-park.jpg?s=612x612&w=0&k=20&c=MgwZmKLzLovhZh-ekaP1iFIzJGiDfHUhrL7KZFpIlPs=');
  background-size: cover;
  background-position: center;
  margin-bottom: 5rem;
}

.s1::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.627);
  backdrop-filter: blur(1px);
}

.hero-content {
  position: relative;
  max-width: 760px;
  text-align: center;
  color: #fff;
  padding: 1rem;
  animation: fadeIn 0.6s ease;
}

.s1 h1 {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.2rem;
  color: #5a7bff;

  max-width: 100%;
  white-space: normal;
}

.s1 p {
  font-size: clamp(1.3rem, 1.6vw, 1.5rem);
  line-height: 1.7;
  color: #eaeaea;
  margin-bottom: 2rem;
}

/* ---------------- BOTÃO ---------------- */

.btn-start {
  display: inline-block;
  background: linear-gradient(135deg, #4a73ff, #3557de);
  padding: 0.9rem 2.2rem;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  font-size: clamp(1rem, 1.2vw, 1.15rem);
  transition: 0.3s ease;
  box-shadow: 0 6px 18px rgba(74, 115, 255, 0.35);
}

.btn-start:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(74, 115, 255, 0.5);
}

/* ------------- ANIMAÇÃO ------------- */
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

/* ------------- MOBILE ------------- */

/* ---------- TABLET ---------- */
@media (max-width: 1080px) {
  .s1 {
    min-height: 97vh;
    padding: 3rem 0rem;
  }

  .hero-content {
    max-width: 680px;
  }

  .s1 h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-right: 2rem;
  }

  .s1 p {
    margin-right: 2rem;
    font-size: 1.2rem;
  }
}

/* ---------- MOBILE ---------- */
@media (max-width: 768px) {
  .s1 {
    min-height: 99vh;
    padding: 0 1.5rem;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-content {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  .btn-start {
    padding: 0.85rem 1.8rem;
    font-size: 1rem;
  }
  .hero-content h1 {
    margin-inline: 12vw;
  }
  .hero-content p {
    margin-inline: 12vw;
  }
}

/* ---------- MOBILE PEQUENO ---------- */
@media (max-width: 480px) {
  .s1 {
    min-height: 99vh;
    padding: 0 1rem;
  }

  .s1 h1 {
    font-size: 2rem;
    line-height: 1.25;
  }

  .s1 p {
    font-size: 1.05rem;
    line-height: 1.6;
  }

  .btn-start {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
}

/* ---------- TELAS GRANDES ---------- */
@media (min-width: 1400px) {
  .hero-content {
    max-width: 900px;
  }

  .s1 h1 {
    font-size: 3.8rem;
  }

  .s1 p {
    font-size: 1.6rem;
  }
}
</style>
