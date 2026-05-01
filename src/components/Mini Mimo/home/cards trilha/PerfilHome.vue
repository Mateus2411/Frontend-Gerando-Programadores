<script setup>
import { onMounted } from 'vue'

// Cursos ativos fictícios (depois você pode puxar do backend)
const cursosAtivos = [
  {
    nome: 'JavaScript',
    progresso: 65,
    imagem: '/img Curso/javascript.png',
    cor: '#f7df1e',
    rota: '/trilhas/javascript',
  },
  {
    nome: 'Python',
    progresso: 40,
    imagem: '/img Curso/python.png',
    cor: '#3776ab',
    rota: '/trilhas/python',
  },
  {
    nome: 'HTML',
    progresso: 85,
    imagem: '/img Curso/html5.png',
    cor: '#e34f26',
    rota: '/trilhas/html',
  },
]

// Animação de entrada
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
})
</script>

<template>
  <section class="cursos-andamento-container" data-animate>
    <div class="section-header">
      <span class="section-badge">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="10,8 16,12 10,16" fill="currentColor" />
        </svg>
        Cursos em Andamento
      </span>
      <h2 class="section-title">Continuar Estudando</h2>
      <p class="section-description">
        Retome de onde parou. Seu progresso está salvo.
      </p>
    </div>

    <div class="cursos-list">
      <router-link
        v-for="curso in cursosAtivos"
        :key="curso.nome"
        :to="curso.rota"
        class="curso-card"
        :aria-label="`Continuar curso de ${curso.nome}`"
        data-animate
      >
        <div class="curso-header">
          <div class="curso-badge" :style="{ background: curso.cor }">
            <img :src="curso.imagem" :alt="`Logo do curso de ${curso.nome}`" />
          </div>
          <div class="curso-info">
            <h3>{{ curso.nome }}</h3>
            <p>{{ curso.progresso }}% completo</p>
          </div>
          <div class="curso-action">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <div class="progresso-container">
          <div class="progresso-bar">
            <div
              class="progresso-fill"
              :style="{ width: curso.progresso + '%', background: curso.cor }"
            ></div>
          </div>
          <span class="progresso-texto">{{ curso.progresso }}%</span>
        </div>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
/* ========================================
   VARIÁVEIS LOCAIS
   ======================================== */
.cursos-andamento-container {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --animation-duration: 0.8s;

  padding: 0;
  background: transparent;
  min-height: auto;
}

/* ========================================
   SEÇÃO HEADER
   ======================================== */
.section-header {
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity var(--animation-duration) var(--ease-out),
    transform var(--animation-duration) var(--ease-out);
}

.section-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  background: rgba(29, 155, 240, 0.08);
  border: 1px solid rgba(29, 155, 240, 0.2);
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--accent-primary);
  margin-bottom: 1.25rem;
}

.section-title {
  font-family: var(--font-title);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: 0 0 0.75rem 0;
  text-wrap: balance;
}

.section-description {
  font-size: clamp(0.95rem, 1.6vw, 1.1rem);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0;
  text-wrap: pretty;
}

/* ========================================
   LISTA DE CURSOS (FLEXBOX RESPONSIVO)
   ======================================== */
.cursos-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  overflow: hidden; /* Sem scroll horizontal */
}

/* ========================================
   CARD DE CURSO (LINK)
   ======================================== */
.curso-card {
  /* Dimensões flexíveis */
  flex: 1 1 280px; /* grow, shrink, basis */
  max-width: 340px; /* Largura máxima */
  
  /* Estilo visual */
  display: block;
  background: var(--card-bg);
  border-radius: 16px;
  padding: 1.25rem;
  text-decoration: none;
  color: inherit;
  transition:
    transform 160ms var(--ease-out),
    box-shadow 200ms ease,
    border-color 200ms ease,
    background-color 200ms ease;
  box-shadow: 0 4px 12px rgba(45, 55, 72, 0.06);
  border: 1.5px solid var(--card-border);
  overflow: hidden;
  position: relative;
  
  /* Animação de entrada */
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity var(--animation-duration) var(--ease-out) 0.2s,
    transform 160ms var(--ease-out),
    box-shadow 200ms ease,
    border-color 200ms ease,
    background-color 200ms ease;
}

.curso-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.curso-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(29, 155, 240, 0.12);
  border-color: rgba(29, 155, 240, 0.3);
  background: var(--card-hover);
}

.curso-card:active {
  transform: scale(0.97);
}

.curso-card:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 3px;
}

/* ========================================
   HEADER DO CARD
   ======================================== */
.curso-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.curso-badge {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0.35rem;
  transition: transform 200ms var(--ease-out);
}

.curso-card:hover .curso-badge {
  transform: scale(1.05);
}

.curso-badge img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

.curso-info {
  flex: 1;
}

.curso-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.2rem 0;
  color: var(--text-primary);
  text-wrap: balance;
}

.curso-info p {
  font-size: 0.8rem;
  opacity: 0.9;
  margin: 0;
  color: var(--text-secondary);
}

.curso-action {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--accent-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
  transition:
    background 200ms ease,
    transform 200ms var(--ease-out);
}

.curso-card:hover .curso-action {
  background: var(--accent-primary);
  color: white;
  transform: translateX(3px);
}

/* ========================================
   BARRA DE PROGRESSO
   ======================================== */
.progresso-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.progresso-bar {
  flex: 1;
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 10px;
  overflow: hidden;
}

.progresso-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.progresso-texto {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  font-variant-numeric: tabular-nums;
  min-width: 40px;
  text-align: right;
}

/* ========================================
   MODO ESCURO - LOGOS
   ======================================== */
:root[data-theme='dark'] .curso-badge img {
  filter: brightness(0) invert(0);
  opacity: 0.9;
}

/* ========================================
   REDUCED MOTION
   ======================================== */
@media (prefers-reduced-motion: reduce) {
  .section-header,
  .curso-card {
    transition: none;
    opacity: 1;
    transform: none;
  }

  .curso-card:hover {
    transform: none;
  }

  .curso-card:active {
    transform: none;
  }
}

/* ========================================
   RESPONSIVO
   ======================================== */
@media (max-width: 768px) {
  .section-header {
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }

  .cursos-list {
    gap: 0.75rem;
  }

  .curso-card {
    min-width: 260px;
    max-width: 300px;
    padding: 1rem;
  }

  .curso-badge {
    width: 40px;
    height: 40px;
    padding: 0.3rem;
  }

  .curso-info h3 {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 1.25rem;
  }

  .section-badge {
    font-size: 0.7rem;
    padding: 0.45rem 1rem;
  }

  .section-title {
    font-size: 1.35rem;
  }

  .cursos-list {
    gap: 0.5rem;
  }

  .curso-card {
    min-width: 240px;
    max-width: 280px;
    padding: 0.75rem;
  }

  .curso-header {
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .curso-badge {
    width: 36px;
    height: 36px;
  }

  .curso-info h3 {
    font-size: 0.9rem;
  }

  .curso-action {
    width: 32px;
    height: 32px;
  }

  .curso-action svg {
    width: 16px;
    height: 16px;
  }
}
</style>
