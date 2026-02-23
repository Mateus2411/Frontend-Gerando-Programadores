<script setup>
import { useRouter, useRoute } from 'vue-router'
import { defineAsyncComponent, computed } from 'vue'

const router = useRouter()
const route = useRoute()

const topicMap = {
  'nocoes-basicas-javascript': 'Noções Básicas de JavaScript',
  'variaveis-tipos-dados': 'Variáveis e Tipos de Dados',
  'operadores-expressoes': 'Operadores e Expressões',
  'fluxo-controle': 'Fluxo de Controle',
  loops: 'Loops',
  funcoes: 'Funções',
  arrays: 'Arrays',
  objetos: 'Objetos',
  'paginas-web-dinamicas-dom': 'Páginas Web Dinâmicas (DOM)',
  'modelo-objeto-documento-dom-tree': 'Modelo de Objeto de Documento (DOM Tree)',
  'eventos-javascript': 'Eventos JavaScript',
  'sincronia-assincronia-promessas-async-await': 'Sincronia e Assincronia (Promessas, async-await)',
  'classes-programacao-orientada-objetos': 'Classes e Programação Orientada a Objetos',
  'modulos-reutilizacao-codigo': 'Módulos e Reutilização de Código',
  'projetos-aplicacoes-interativas': 'Projetos e Aplicações Interativas',
}

const fileMap = {
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
  { nome: 'Noções Básicas de JavaScript', slug: 'nocoes-basicas-javascript', nivel: 1 },
  { nome: 'Variáveis e Tipos de Dados', slug: 'variaveis-tipos-dados', nivel: 1 },
  { nome: 'Operadores e Expressões', slug: 'operadores-expressoes', nivel: 1 },
  { nome: 'Fluxo de Controle', slug: 'fluxo-controle', nivel: 1 },
  { nome: 'Loops', slug: 'loops', nivel: 1 },

  { nome: 'Funções', slug: 'funcoes', nivel: 2 },
  { nome: 'Arrays', slug: 'arrays', nivel: 2 },
  { nome: 'Objetos', slug: 'objetos', nivel: 2 },
  { nome: 'Páginas Web Dinâmicas (DOM)', slug: 'paginas-web-dinamicas-dom', nivel: 2 },
  { nome: 'Eventos JavaScript', slug: 'eventos-javascript', nivel: 2 },

  {
    nome: 'Classes e Programação Orientada a Objetos',
    slug: 'classes-programacao-orientada-objetos',
    nivel: 3,
  },
  { nome: 'Módulos e Reutilização de Código', slug: 'modulos-reutilizacao-codigo', nivel: 3 },
  {
    nome: 'Sincronia e Assincronia (Promessas, async-await)',
    slug: 'sincronia-assincronia-promessas-async-await',
    nivel: 3,
  },
  { nome: 'Projetos e Aplicações Interativas', slug: 'projetos-aplicacoes-interativas', nivel: 3 },
]
</script>

<template>
  <section v-if="!route.params.topic" class="trilha">
    <div class="header-trilha">
      <div class="icon-wrapper">
        <span class="icon">{ JS }</span>
      </div>
      <h1>Trilha JavaScript</h1>
      <p>Domine JavaScript do básico ao avançado</p>
      <div class="progress-info">
        <span class="modules-count">{{ trilhaJS.length }} módulos</span>
      </div>
    </div>

    <div class="niveis-container">
      <!-- Nível 1 -->
      <div class="nivel-section">
        <div class="nivel-header">
          <span class="nivel-icon">🌱</span>
          <h2>Fundamentos</h2>
          <span class="nivel-tag">Iniciante</span>
        </div>
        <div class="modulos-grid">
          <article
            v-for="(modulo, i) in trilhaJS.filter((m) => m.nivel === 1)"
            :key="i"
            class="card nivel-1"
            @click="router.push(`/trilhas/javascript/${modulo.slug}/a`)"
          >
            <div class="card-icon">
              <span>{{ i + 1 }}</span>
            </div>
            <div class="card-content">
              <h3>{{ modulo.nome }}</h3>
              <p class="card-desc">Comece sua jornada aqui</p>
            </div>
            <div class="card-arrow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </article>
        </div>
      </div>

      <!-- Nível 2 -->
      <div class="nivel-section">
        <div class="nivel-header">
          <span class="nivel-icon">🚀</span>
          <h2>Intermediário</h2>
          <span class="nivel-tag nivel-2-tag">Progredindo</span>
        </div>
        <div class="modulos-grid">
          <article
            v-for="(modulo, i) in trilhaJS.filter((m) => m.nivel === 2)"
            :key="i"
            class="card nivel-2"
            @click="router.push(`/trilhas/javascript/${modulo.slug}/a`)"
          >
            <div class="card-icon nivel-2-icon">
              <span>{{ trilhaJS.filter((m) => m.nivel === 1).length + i + 1 }}</span>
            </div>
            <div class="card-content">
              <h3>{{ modulo.nome }}</h3>
              <p class="card-desc">Expanda seus conhecimentos</p>
            </div>
            <div class="card-arrow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </article>
        </div>
      </div>

      <!-- Nível 3 -->
      <div class="nivel-section">
        <div class="nivel-header">
          <span class="nivel-icon">⚡</span>
          <h2>Avançado</h2>
          <span class="nivel-tag nivel-3-tag">Expert</span>
        </div>
        <div class="modulos-grid">
          <article
            v-for="(modulo, i) in trilhaJS.filter((m) => m.nivel === 3)"
            :key="i"
            class="card nivel-3"
            @click="router.push(`/trilhas/javascript/${modulo.slug}/a`)"
          >
            <div class="card-icon nivel-3-icon">
              <span>{{
                trilhaJS.filter((m) => m.nivel === 1 || m.nivel === 2).length + i + 1
              }}</span>
            </div>
            <div class="card-content">
              <h3>{{ modulo.nome }}</h3>
              <p class="card-desc">Domine conceitos avançados</p>
            </div>
            <div class="card-arrow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem 3rem;
}

/* ========== HEADER ========== */
.header-trilha {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 1rem;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.icon {
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  font-family: 'Courier New', monospace;
}

.header-trilha h1 {
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.header-trilha p {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--text-secondary);
  margin-bottom: 1rem;
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
  background: rgba(102, 126, 234, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #667eea;
}

/* ========== NÍVEIS ========== */
.niveis-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.nivel-section {
  animation: fadeInUp 0.6s ease forwards;
}

.nivel-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--card-border);
}

.nivel-icon {
  font-size: 2rem;
}

.nivel-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  transition: color 0.3s ease;
}

.nivel-tag {
  margin-left: auto;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}

.nivel-2-tag {
  background: rgba(251, 146, 60, 0.15);
  color: #fb923c;
}

.nivel-3-tag {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

/* ========== GRID ========== */
.modulos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

/* ========== CARDS ========== */
.card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: var(--card-bg);
  border: 2px solid var(--card-border);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #22c55e, #16a34a);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.card.nivel-2::before {
  background: linear-gradient(180deg, #fb923c, #f97316);
}

.card.nivel-3::before {
  background: linear-gradient(180deg, #ef4444, #dc2626);
}

.card:hover::before {
  transform: scaleY(1);
}

.card:hover {
  transform: translateX(8px);
  border-color: #667eea;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
}

/* ========== CARD ICON ========== */
.card-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.nivel-2-icon {
  background: linear-gradient(135deg, #fb923c, #f97316);
  box-shadow: 0 4px 12px rgba(251, 146, 60, 0.3);
}

.nivel-3-icon {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

/* ========== CARD CONTENT ========== */
.card-content {
  flex: 1;
  min-width: 0;
}

.card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.card-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  transition: color 0.3s ease;
}

/* ========== CARD ARROW ========== */
.card-arrow {
  flex-shrink: 0;
  color: var(--text-tertiary);
  transition: all 0.3s ease;
}

.card:hover .card-arrow {
  color: #667eea;
  transform: translateX(4px);
}

/* ========== ANIMATIONS ========== */
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

/* ========== RESPONSIVE ========== */
@media (max-width: 768px) {
  .modulos-grid {
    grid-template-columns: 1fr;
  }

  .nivel-header {
    flex-wrap: wrap;
  }

  .nivel-tag {
    margin-left: 0;
  }

  .card {
    padding: 1rem 1.25rem;
  }

  .card-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .header-trilha {
    padding: 1rem 0.5rem;
  }

  .icon-wrapper {
    width: 64px;
    height: 64px;
  }

  .icon {
    font-size: 1.4rem;
  }
}
</style>
