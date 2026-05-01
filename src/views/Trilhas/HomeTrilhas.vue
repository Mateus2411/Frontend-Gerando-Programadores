<script setup>
import { useRoute } from 'vue-router'
import CursoCards from '@/components/Mini Mimo/home/cards trilha/CursosCards.vue'
import perfilHome from '@/components/Mini Mimo/home/cards trilha/PerfilHome.vue'
import { onMounted } from 'vue'

const route = useRoute()

// Intersection Observer para animações de entrada
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
  <main class="trilhas-wrapper">
    <!-- Skip Link (Acessibilidade) -->
    <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>

    <!-- Atmospheric Background (Consistente com HomeView.vue) -->
    <div class="trilhas-bg">
      <div class="trilhas-orb trilhas-orb--1"></div>
      <div class="trilhas-orb trilhas-orb--2"></div>
      <div class="trilhas-grid"></div>
      <div class="trilhas-noise"></div>
    </div>

    <!-- Conteúdo Principal -->
    <div id="main-content" class="trilhas-container">
      <!-- Perfil do Usuário -->
      <section class="perfil-section" data-animate>
        <perfilHome />
      </section>

      <!-- Seção de Cursos -->
      <section class="cursos-section" data-animate>
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
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Trilhas de Aprendizado
          </span>
          <h2 class="section-title">Cursos Disponíveis</h2>
          <p class="section-description">
            Escolha uma trilha para começar sua jornada. Cursos bloqueados serão liberados conforme seu progresso.
          </p>
        </div>

        <curso-cards v-if="route.path === '/trilhas'" />
        <router-view v-else />
      </section>
    </div>
  </main>
</template>

<style scoped>
/* ========================================
   VARIÁVEIS LOCAIS
   ======================================== */
.trilhas-wrapper {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --animation-duration: 0.9s;
  --stagger-delay: 60ms;

  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden; /* Previne overflow horizontal global */
  position: relative;
}

/* Garantir que todos os filhos respeitem a largura */
.trilhas-wrapper > * {
  max-width: 100%;
  box-sizing: border-box;
}

/* ========================================
   ATMOSFERIC BACKGROUND (Consistente com Home)
   ======================================== */
.trilhas-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.trilhas-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orbFloat 14s ease-in-out infinite;
}

.trilhas-orb--1 {
  width: 500px;
  height: 500px;
  top: 10%;
  left: -5%;
  background: radial-gradient(
    circle,
    rgba(29, 155, 240, 0.08) 0%,
    transparent 70%
  );
  animation-duration: 16s;
}

.trilhas-orb--2 {
  width: 400px;
  height: 400px;
  bottom: 20%;
  right: -5%;
  background: radial-gradient(
    circle,
    rgba(29, 155, 240, 0.06) 0%,
    transparent 70%
  );
  animation-duration: 20s;
  animation-delay: -5s;
}

.trilhas-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(29, 155, 240, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(29, 155, 240, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%);
}

.trilhas-noise {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -15px) scale(1.05); }
  66% { transform: translate(-15px, 10px) scale(0.95); }
}

/* ========================================
   CONTAINER (Max-width consistente)
   ======================================== */
.trilhas-container {
  position: relative;
  z-index: 1;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

/* ========================================
   SEÇÃO PERFIL
   ======================================== */
.perfil-section {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--animation-duration) var(--ease-out),
    transform var(--animation-duration) var(--ease-out);
}

.perfil-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ========================================
   SEÇÃO CURSOS
   ======================================== */
.cursos-section {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--animation-duration) var(--ease-out) 0.2s,
    transform var(--animation-duration) var(--ease-out) 0.2s;
}

.cursos-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  margin-bottom: 2.5rem;
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
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
  text-wrap: balance;
}

.section-description {
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
  text-wrap: pretty;
  margin: 0;
}

/* ========================================
   SKIP LINK (Acessibilidade)
   ======================================== */
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  padding: 0.75rem 1.5rem;
  background: var(--accent-primary);
  color: #fff;
  font-weight: 600;
  border-radius: 0 0 10px 10px;
  text-decoration: none;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 0;
  outline: none;
}

/* ========================================
   REDUCED MOTION
   ======================================== */
@media (prefers-reduced-motion: reduce) {
  .perfil-section,
  .cursos-section {
    transition: none;
    opacity: 1;
    transform: none;
  }

  .trilhas-orb,
  .trilhas-noise {
    animation: none;
  }
}

/* ========================================
   RESPONSIVE
   ======================================== */
@media (max-width: 768px) {
  .trilhas-container {
    padding: 5rem 1.25rem 3rem;
    gap: 2.5rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }
}

@media (max-width: 480px) {
  .trilhas-container {
    padding: 4rem 1rem 2.5rem;
    gap: 2rem;
  }

  .section-badge {
    font-size: 0.7rem;
    padding: 0.45rem 1rem;
  }
}
</style>
