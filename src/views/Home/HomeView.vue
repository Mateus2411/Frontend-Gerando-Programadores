<script setup>
// Cards dos Objetivos
import CardsObjetivos from '@/components/Home/S2Cards.vue'

// Card Funciona
import CardFunciona from '@/components/Home/S3Cards.vue'

// Cads do que vai aprender
import CardsAprender from "@/components/Home/S4Cards.vue"

// Card Final
import CardFinal from '@/components/Home/S5Cards.vue'

</script>
<template>
  <main>
    <section class="s1">
      <div class="hero-content">
        <h1>
          Bem-vindos ao Estudo Direcionado De Programação
        </h1>

        <p>
          Aqui cada um poderá se desenvolver individualmente no mundo da programação, testando seus
          conhecimentos e aprimorando raciocínio lógico e prático.
        </p>

        <router-link class="btn-start" to="/cadastrar">
          Começar
        </router-link>
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
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  color: #2d2d2d;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

/* ---------------- HERO ---------------- */

.s1 {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem 3.1rem 2rem;

  position: relative;
  overflow: hidden;

  background-image: url("https://media.istockphoto.com/id/1939609977/pt/foto/wooded-park.jpg?s=612x612&w=0&k=20&c=MgwZmKLzLovhZh-ekaP1iFIzJGiDfHUhrL7KZFpIlPs=");
  background-size: cover;
  background-position: center;
  margin-bottom: 3rem;
}

.s1::before {
  content: "";
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
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.2rem;
  color: #5A7BFF;
}

.s1 p {
  font-size: clamp(1.3rem, 1.6vw, 1.50rem);
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

@media (max-width: 768px) {
  .s1 {
    height: auto;
    padding: 6rem 1.5rem 4rem 1.5rem;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
    margin-right: 2.5rem;
  }

  .btn-start {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
}
</style>
