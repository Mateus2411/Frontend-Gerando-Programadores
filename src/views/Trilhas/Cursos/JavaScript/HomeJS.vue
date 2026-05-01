<script setup>
import { useRouter, useRoute } from 'vue-router'
import { defineAsyncComponent, computed } from 'vue'

const router = useRouter()
const route = useRoute()

const topicMap = {
  'nocoes-basicas-javascript': 'Noções Básicas de JavaScript',
  'saida-dados': 'Saída de Dados',
  'entrada-dados': 'Entrada de Dados',
  'variaveis-tipos-dados': 'Variáveis e Tipos de Dados',
  'operadores-expressoes': 'Operadores e Expressões',
  'strings': 'Strings',
  'operadores-logicos': 'Operadores Lógicos',
  'fluxo-controle-if': 'IF...Else',
  'operador-ternario': 'Operador Ternário',
  'switch-case': 'Switch...Case',
  'arrays': 'Arrays',
  'for-of': 'For...Of',
  'for-controle': 'For com Variável de Controle',
  'while': 'While',
  'funcoes': 'Funções',
  'objetos': 'Objetos',
}

const fileMap = {
  base: 'baseAssunto',
  a: 'exemploA',
  b: 'exemploB',
  c: 'exemploC',
  d: 'exemploD',
  e: 'exercicioFinal',
}

const currentComponent = computed(() => {
  const topicSlug = route.params.topic
  const fileSlug = route.params.file
  const topic = topicMap[topicSlug]
  const file = fileMap[fileSlug]
  if (!topic || !file) {
    return null
  }
  return defineAsyncComponent(() => import(`./${topic}/${file}.vue`))
})

const trilhaJS = [
  { nome: 'O que é Programação?', slug: 'nocoes-basicas-javascript', nivel: 1 },
  { nome: 'Variáveis e Tipos de Dados', slug: 'variaveis-tipos-dados', nivel: 1 },
  { nome: 'Saída de Dados', slug: 'saida-dados', nivel: 1 },
  { nome: 'Entrada de Dados', slug: 'entrada-dados', nivel: 1 },
  { nome: 'Operadores e Expressões', slug: 'operadores-expressoes', nivel: 1 },
  { nome: 'Strings', slug: 'strings', nivel: 1 },
  { nome: 'Operadores Lógicos', slug: 'operadores-logicos', nivel: 1 },
  { nome: 'IF...Else', slug: 'fluxo-controle-if', nivel: 1 },
  { nome: 'Operador Ternário', slug: 'operador-ternario', nivel: 1 },
  { nome: 'Switch...Case', slug: 'switch-case', nivel: 1 },
  { nome: 'Arrays', slug: 'arrays', nivel: 2 },
  { nome: 'For...Of', slug: 'for-of', nivel: 2 },
  { nome: 'For com Variável de Controle', slug: 'for-controle', nivel: 2 },
  { nome: 'While', slug: 'while', nivel: 2 },
  { nome: 'Funções', slug: 'funcoes', nivel: 2 },
  { nome: 'Objetos', slug: 'objetos', nivel: 3 },
]
</script>

<template>
  <section v-if="!route.params.topic" class="trilha">
    <!-- Atmospheric Background -->
    <div class="trilha-bg">
      <div class="trilha-orb trilha-orb--1"></div>
      <div class="trilha-orb trilha-orb--2"></div>
      <div class="trilha-grid"></div>
    </div>

    <div class="header-trilha">
      <div class="header-content">
        <div class="icon-wrapper">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3h18v18H3V3zm4.5 13.5h3v-9h3l-4.5 6-4.5-6h3v9z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h1>Trilha JavaScript</h1>
        <p class="subtitle">Domine JavaScript do básico ao avançado</p>
        <div class="progress-info">
          <span class="modules-count">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            {{ trilhaJS.length }} módulos
          </span>
        </div>
      </div>
    </div>

    <div class="niveis-container">
      <!-- Nível 1 -->
      <div class="nivel-section">
        <div class="nivel-header">
          <div class="nivel-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h2>Fundamentos</h2>
          <span class="nivel-tag tag-iniciante">Iniciante</span>
        </div>
        <div class="modulos-grid">
          <article
            v-for="(modulo, i) in trilhaJS.filter((m) => m.nivel === 1)"
            :key="i"
            class="card"
            @click="router.push(`/trilhas/javascript/${modulo.slug}/base`)"
          >
            <div class="card-accent"></div>
            <div class="card-icon">
              <span>{{ i + 1 }}</span>
            </div>
            <div class="card-content">
              <h3>{{ modulo.nome }}</h3>
              <p class="card-desc">Comece sua jornada aqui</p>
            </div>
            <div class="card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </article>
        </div>
      </div>

      <!-- Nível 2 -->
      <div class="nivel-section">
        <div class="nivel-header">
          <div class="nivel-icon-wrapper icon-intermediario">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <h2>Intermediário</h2>
          <span class="nivel-tag tag-intermediario">Progredindo</span>
        </div>
        <div class="modulos-grid">
          <article
            v-for="(modulo, i) in trilhaJS.filter((m) => m.nivel === 2)"
            :key="i"
            class="card card-intermediario"
            @click="router.push(`/trilhas/javascript/${modulo.slug}/base`)"
          >
            <div class="card-accent accent-intermediario"></div>
            <div class="card-icon icon-intermediario">
              <span>{{ trilhaJS.filter((m) => m.nivel === 1).length + i + 1 }}</span>
            </div>
            <div class="card-content">
              <h3>{{ modulo.nome }}</h3>
              <p class="card-desc">Expanda seus conhecimentos</p>
            </div>
            <div class="card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  <component v-else-if="currentComponent" :is="currentComponent" />
</template>

<style scoped>
.trilha {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  overflow: hidden;
}

/* ========================================
    ATMOSPHERIC BACKGROUND
    ======================================== */
.trilha-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.trilha-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: orbFloat 12s ease-in-out infinite;
}

.trilha-orb--1 {
  width: 400px;
  height: 400px;
  top: -10%;
  right: -5%;
  background: radial-gradient(circle, rgba(29, 155, 240, 0.12) 0%, transparent 70%);
  animation-duration: 14s;
}

.trilha-orb--2 {
  width: 300px;
  height: 300px;
  bottom: 20%;
  left: -8%;
  background: radial-gradient(circle, rgba(29, 155, 240, 0.08) 0%, transparent 70%);
  animation-duration: 16s;
  animation-delay: -5s;
}

.trilha-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(29, 155, 240, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(29, 155, 240, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 75%);
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -15px) scale(1.03); }
  66% { transform: translate(-15px, 10px) scale(0.98); }
}

/* ========================================
    HEADER
    ======================================== */
.header-trilha {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(29, 155, 240, 0.08) 0%, rgba(29, 155, 240, 0.03) 100%);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  backdrop-filter: blur(8px);
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0d8bd9 100%);
  border-radius: 20px;
  margin-bottom: 0.5rem;
  box-shadow: 0 8px 24px rgba(29, 155, 240, 0.3);
  color: white;
  animation: iconPulse 3s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% { box-shadow: 0 8px 24px rgba(29, 155, 240, 0.3); }
  50% { box-shadow: 0 8px 32px rgba(29, 155, 240, 0.45), 0 0 24px rgba(29, 155, 240, 0.15); }
}

.header-trilha h1 {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
}

.subtitle {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: var(--text-secondary);
  margin: 0;
  transition: color 0.3s ease;
}

.progress-info {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.modules-count {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--accent-soft);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-primary);
  transition: all 0.3s ease;
}

.modules-count svg {
  flex-shrink: 0;
}

/* ========================================
    NÍVEIS CONTAINER
    ======================================== */
.niveis-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.nivel-section {
  animation: fadeInUp 0.6s ease forwards;
}

.nivel-section:nth-child(2) {
  animation-delay: 0.15s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nivel-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--card-border);
}

.nivel-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(34, 197, 94, 0.15);
  border-radius: 10px;
  color: #22c55e;
  transition: all 0.3s ease;
}

.nivel-icon-wrapper.icon-intermediario {
  background: rgba(251, 146, 60, 0.15);
  color: #fb923c;
}

.nivel-header h2 {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  transition: color 0.3s ease;
}

.nivel-tag {
  margin-left: auto;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tag-iniciante {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}

.tag-intermediario {
  background: rgba(251, 146, 60, 0.15);
  color: #fb923c;
}

/* ========================================
    MODULES GRID
    ======================================== */
.modulos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
}

.card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.card-accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #22c55e, #16a34a);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.card:hover .card-accent {
  transform: scaleY(1);
}

.card:hover {
  transform: translateX(6px);
  border-color: #22c55e;
  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.15);
}

.card.card-intermediario:hover {
  border-color: #fb923c;
  box-shadow: 0 8px 24px rgba(251, 146, 60, 0.15);
}

.card-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 197, 94, 0.15);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  color: #22c55e;
  transition: all 0.3s ease;
}

.card:hover .card-icon {
  background: #22c55e;
  color: white;
}

.card-icon.icon-intermediario {
  background: rgba(251, 146, 60, 0.15);
  color: #fb923c;
}

.card:hover .card-icon.icon-intermediario {
  background: #fb923c;
  color: white;
}

.card-accent.accent-intermediario {
  background: linear-gradient(180deg, #fb923c, #f97316);
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.2rem 0;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.card-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  transition: color 0.3s ease;
}

.card-arrow {
  flex-shrink: 0;
  color: var(--text-tertiary);
  transition: all 0.3s ease;
}

.card:hover .card-arrow {
  color: #22c55e;
  transform: translateX(4px);
}

.card.card-intermediario:hover .card-arrow {
  color: #fb923c;
}

/* ========================================
    RESPONSIVE
    ======================================== */
@media (max-width: 768px) {
  .trilha {
    padding: 1.5rem 1rem 3rem;
  }

  .header-trilha {
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
  }

  .modulos-grid {
    grid-template-columns: 1fr;
  }

  .nivel-header {
    flex-wrap: wrap;
  }

  .nivel-tag {
    margin-left: 0;
    order: 4;
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
  }

  .card {
    padding: 1rem 1.25rem;
  }

  .card-icon {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .header-trilha {
    padding: 1.5rem 1rem;
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
  }

  .icon-wrapper svg {
    width: 28px;
    height: 28px;
  }

  .header-trilha h1 {
    font-size: 1.75rem;
  }
}

/* ========================================
    DARK MODE ADJUSTMENTS
    ======================================== */
[data-theme='dark'] .trilha-orb--1 {
  background: radial-gradient(circle, rgba(29, 155, 240, 0.15) 0%, transparent 70%);
}

[data-theme='dark'] .trilha-orb--2 {
  background: radial-gradient(circle, rgba(29, 155, 240, 0.1) 0%, transparent 70%);
}

[data-theme='dark'] .header-trilha {
  background: linear-gradient(135deg, rgba(29, 155, 240, 0.1) 0%, rgba(29, 155, 240, 0.05) 100%);
}

/* ========================================
    REDUCED MOTION
    ======================================== */
@media (prefers-reduced-motion: reduce) {
  .trilha-orb,
  .icon-wrapper {
    animation: none;
  }

  .nivel-section {
    animation: none;
  }
}
</style>