<script setup>
import { onMounted, ref } from 'vue'

import AppIAs from '@/components/IAs/CardsS2.vue'
import AppEducaCard from '@/components/IAs/S3A.vue'
import AppIasS4 from '@/components/IAs/IasCadsS4.vue'

//  #region Maquina de escrita

const title = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        title.value.style.animation = 'typing 3s steps(45) forwards, blink .7s infinite'
        observer.unobserve(title.value)
      }
    })
  })

  observer.observe(title.value)

  // Verifica interseções iniciais (caso o elemento já esteja visível)
  const initialEntries = observer.takeRecords()
  initialEntries.forEach((entry) => {
    if (entry.isIntersecting) {
      title.value.style.animation = 'typing 3s steps(45) forwards, blink .7s infinite'
      observer.unobserve(title.value)
    }
  })
})

// #endregion
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
      <div id="escrita-animada">
        <h2 ref="title">O que diferencia uma IA das outras?</h2>
      </div>
      <AppIAs />
    </section>
    <AppEducaCard />
    <AppIasS4 />
  </main>
</template>
<style>
main {
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

section.s1 {
  display: flex;
  align-items: center;
  min-height: 85vh;
  padding: 6.8vw 1.4vw;
  gap: 3vw;
  margin-top: -5vw;

  /* imagem de fundo com overlay escuro e efeito cover */
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/image.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
}

section.s1 > div {
  flex: 1;
  text-align: left;
  max-width: 600px;
  margin-top: 5rem;
}

section.s1 h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}

section.s1 p {
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

section.s1 a {
  background: #3d5afe;
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
  transition: background 0.3s ease;
}

section.s1 a:hover {
  background: #2a3dbf;
}

.s2 {
  display: flex;
  width: 100%;
  padding: 3vw 5vw;
  box-sizing: border-box;
  background: var(--bg-primary);
  align-items: center;
  justify-content: space-around;
  transition: background-color 0.3s ease;
}
#escrita-animada {
  max-width: 100%;
  overflow: hidden;
}
#escrita-animada h2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  max-width: 100%;
  font-weight: 500;
  color: var(--text-primary);
  margin-right: 2rem;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--text-primary);
  width: 0;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;
}
/* RESPONSIVO */
@media (max-width: 1260px) {
  section.s1 {
    padding: 12vw 1.4vw;
  }
}
@media (max-width: 1000px) {
  section.s1 {
    padding: 11vw 1.1vw;
  }
  .s2 {
    flex-direction: column;
    text-align: center;
    padding: 3vw 3vw;
  }
  #escrita-animada {
    width: 100%;
    max-width: 100%;
  }
  #escrita-animada h2 {
    margin-bottom: 2rem;
    margin-right: 0;
    font-size: 1.5rem;
    white-space: normal;
    border-right: none;
    width: 100%;
    animation: none !important;
  }
}

@media (max-width: 865px) {
  section.s1 {
    padding: 11.2vw 1.4vw;
  }
}

@media (max-width: 620px) {
  section.s1 {
    flex-direction: column;
    text-align: center;
    margin-top: 0vw;
    padding: 11.5vw 1.2vw;
  }
  section.s1 div {
    margin-top: 8rem;
  }
  section.s1 h1 {
    font-size: 2.5rem;
  }
  section.s1 p {
    font-size: 1rem;
  }
}

@media (max-width: 700px) {
  #escrita-animada h2 {
    font-size: 1.3rem;
  }
}

/* animação da escrita */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
} /* cursor piscando */
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
