<script setup>
import IAsCards from '@/components/IAs/CardsS2.vue'
import IAsEducaCard from '@/components/IAs/S3A.vue'
import IAsS4 from '@/components/IAs/IasCadsS4.vue'
</script>

<template>
  <main>
    <section class="s1">
      <div>
        <h1>Inteligências Artificiais</h1>
        <p>
          A inteligência artificial se tornou uma das tecnologias mais influentes da atualidade,
          auxiliando desde tarefas simples até processos complexos. Esta página apresenta de forma
          clara e objetiva como as IAs funcionam e por que elas são tão úteis no cotidiano. Ela
          existe justamente para servir como referência rápida, facilitando o entendimento e
          mostrando como aplicar essas ferramentas de maneira prática.
        </p>
      </div>
    </section>
    <section class="s2">
      <div class="s2-intro">
        <h2>O que diferencia uma IA das outras?</h2>
      </div>
      <IAsCards />
    </section>
    <IAsEducaCard />
    <IAsS4 />
  </main>
</template>
<style>
main {
  background: var(--bg-primary);
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ========================================
   HERO SECTION
   ======================================== */
section.s1 {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;

  background-image:
    radial-gradient(ellipse 70% 55% at 15% 85%, rgba(29, 155, 240, 0.06) 0%, transparent 55%),
    radial-gradient(ellipse 55% 45% at 88% 18%, rgba(29, 155, 240, 0.04) 0%, transparent 50%);
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

section.s1 > div {
  position: relative;
  max-width: 700px;
  text-align: center;
  z-index: 2;
}

section.s1 h1 {
  font-family: var(--font-title);
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--accent-primary);
  animation: fadeInUp 0.8s ease 0.2s forwards;
  opacity: 0;
  letter-spacing: -0.02em;
}

section.s1 p {
  font-family: var(--font-body);
  margin-bottom: 2rem;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.75;
  color: var(--text-secondary);
  animation: fadeInUp 0.8s ease 0.4s forwards;
  opacity: 0;
}

/* ========================================
   SECTION 2
   ======================================== */
.s2 {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 3rem 3rem;
  box-sizing: border-box;
  background: var(--bg-primary);
  gap: 3rem;
  position: relative;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.s2-intro {
  max-width: 500px;
  position: relative;
  flex-shrink: 0;
}

.s2-intro h2 {
  font-family: var(--font-title);
  font-size: clamp(1.3rem, 2.5vw, 1.85rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.35;
  letter-spacing: -0.02em;
  transition:
    color 0.5s ease,
    border-color 0.5s ease;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========================================
   RESPONSIVO
   ======================================== */
@media (max-width: 1000px) {
  section.s1 {
    padding: 5rem 1.5rem;
    min-height: 70vh;
  }

  .s2 {
    flex-direction: column;
    padding: 3rem 1.5rem;
    text-align: center;
  }

  .s2-intro {
    max-width: 100%;
    width: 100%;
  }
}

@media (max-width: 620px) {
  section.s1 {
    padding: 4rem 1rem;
    min-height: 60vh;
  }

  section.s1 h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  section.s1 p {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .s2 {
    padding: 2rem 1rem;
  }

  .s2-intro h2 {
    font-size: 1.2rem;
  }
}
</style>
