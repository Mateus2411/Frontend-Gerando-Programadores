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
      <div>
        <h1>Bem-vindos ao <span>Direcionamento de Estudo</span></h1>
        <p>
          Aqui cada um poderá se desenvolver individualmente no mundo da programação, testando seus
          conhecimentos e aprimorando raciocínio lógico e prático.
        </p>
        <router-link to="/cadastrar">Começar</router-link>
      </div>
      <div class="img"></div>
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
  padding-top: 8rem;
  flex: 1;
}

/* ---------- SEÇÃO HERO (S1) ---------- */
section.s1 {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 85vh;
  padding: 4rem 2rem;
  gap: 4rem;
  animation: fadeIn 0.6s ease;
}

section.s1>div {
  flex: 1;
  text-align: left;
  z-index: 1;
}

section.s1 h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #1a1a1a;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a73ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

section.s1 h1 span {
  color: #4a73ff;
  -webkit-text-fill-color: #4a73ff;
}

section.s1 p {
  margin-bottom: 2rem;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #555;
  max-width: 600px;
}

section.s1 a {
  background: linear-gradient(135deg, #4a73ff 0%, #3b5fe0 100%);
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(74, 115, 255, 0.3);
  border: 1px solid rgba(74, 115, 255, 0.2);
}

section.s1 a:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(74, 115, 255, 0.5);
  background: linear-gradient(135deg, #3b5fe0 0%, #2a4fd0 100%);
}

section.s1 .img {
  flex: 1;
  height: 60vh;
  min-height: 400px;
  background-image: url('https://media.istockphoto.com/id/1939609977/pt/foto/wooded-park.jpg?s=612x612&w=0&k=20&c=MgwZmKLzLovhZh-ekaP1iFIzJGiDfHUhrL7KZFpIlPs=');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

section.s1 .img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(74, 115, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%);
  border-radius: 20px;
}

/* ---------- ANIMAÇÕES ---------- */
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

/* ---------- RESPONSIVIDADE ---------- */
@media (max-width: 968px) {
  section.s1 {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
    padding: 2rem 1.5rem;
  }

  section.s1>div {
    text-align: center;
  }

  section.s1 h1 {
    font-size: 2.5rem;
  }

  section.s1 .img {
    width: 100%;
    height: 40vh;
    min-height: 300px;
  }
}

@media (max-width: 600px) {
  main {
    padding-top: 6rem;
  }

  section.s1 h1 {
    font-size: 2rem;
  }

  section.s1 p {
    font-size: 1.1rem;
  }
}
</style>
