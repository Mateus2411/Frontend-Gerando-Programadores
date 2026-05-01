<script setup>
import { onMounted } from 'vue'

const cursos = [
  {
    nome: 'Python',
    descricao: 'Linguagem versátil para iniciantes e profissionais',
    grau: 1,
    imagem: '/img Curso/python.png',
    status: 'desativado',
    rota: '/trilhas/python',
  },
  {
    nome: 'SQL',
    descricao: 'Gerencie e consulte bancos de dados relacionais',
    grau: 1,
    imagem: '/img Curso/bdsql.png',
    status: 'desativado',
    rota: '/trilhas/sql',
  },
  {
    nome: 'HTML',
    descricao: 'Estruture páginas web com marcação semântica',
    grau: 1,
    imagem: '/img Curso/html5.png',
    status: 'desativado',
    rota: '/trilhas/html',
  },
  {
    nome: 'JavaScript',
    descricao: 'Adicione interatividade e dinamismo às páginas',
    grau: 1,
    imagem: '/img Curso/javascript.png',
    status: 'ativo',
    rota: '/trilhas/javascript',
  },
  {
    nome: 'Swift',
    descricao: 'Desenvolva apps nativos para iOS e macOS',
    grau: 1,
    imagem: '/img Curso/swift.png',
    status: 'desativado',
    rota: '/trilhas/swift',
  },
  {
    nome: 'CSS',
    descricao: 'Estilize e crie layouts responsivos modernos',
    grau: 1,
    imagem: '/img Curso/css3.png',
    status: 'desativado',
    rota: '/trilhas/css',
  },
  {
    nome: 'TypeScript',
    descricao: 'JavaScript com tipagem estática e segurança',
    grau: 2,
    imagem: '/img Curso/typescript.png',
    status: 'desativado',
    rota: '/trilhas/typescript',
  },
  {
    nome: 'React',
    descricao: 'Construa interfaces de usuário componentizadas',
    grau: 2,
    imagem: '/img Curso/react.png',
    status: 'desativado',
    rota: '/trilhas/react',
  },
]

// Intersection Observer para animações escalonadas
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  )

  document.querySelectorAll('.card-wrapper').forEach((el) => observer.observe(el))
})
</script>

<template>
  <section class="container">
    <h2 class="titulo">Cursos:</h2>

    <div class="grid">
      <div
        v-for="(curso, index) in cursos"
        :key="curso.nome"
        class="card-wrapper"
        :style="{ '--stagger-delay': `${index * 60}ms` }"
      >
        <component
          :is="curso.status === 'ativo' ? 'router-link' : 'div'"
          :to="curso.status === 'ativo' ? curso.rota : null"
          class="card-link"
          :class="{ desativado: curso.status === 'desativado' }"
          :aria-disabled="curso.status === 'desativado' ? 'true' : null"
          :tabindex="curso.status === 'desativado' ? '-1' : '0'"
        >
          <div class="card" :class="{ desativado: curso.status === 'desativado' }">
            <span class="curso-label">Curso</span>

            <span v-if="curso.status === 'desativado'" class="status-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>
              Bloqueado
            </span>

            <h3>{{ curso.nome }}</h3>
            <p>{{ curso.descricao }}</p>

            <div class="nivel">
              <span
                v-for="i in 3"
                :key="i"
                class="barra"
                :class="{ ativa: i <= curso.grau }"
              ></span>

              <span class="nivel-texto">
                {{ curso.grau === 1 ? 'Fácil' : 'Médio' }}
              </span>
            </div>

            <div class="badge">
              <img :src="curso.imagem" :alt="`Logo do curso de ${curso.nome}`" />
            </div>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========================================
   VARIÁVEIS LOCAIS
   ======================================== */
.container {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --animation-duration: 0.7s;

  padding: 1.5rem;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

.titulo {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
  text-wrap: balance;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  overflow: hidden; /* Previne overflow horizontal */
}

/* Previne overflow nos cards */
.card-wrapper {
  min-width: 0; /* Permite que o card encolha */
  max-width: 100%;
}

/* ========================================
   CARD WRAPPER (Animação Escalonada)
   ======================================== */
.card-wrapper {
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity var(--animation-duration) var(--ease-out) var(--stagger-delay, 0ms),
    transform var(--animation-duration) var(--ease-out) var(--stagger-delay, 0ms);
}

.card-wrapper.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ========================================
   CARD LINK (Acessibilidade + Interatividade)
   ======================================== */
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  border-radius: 18px;
  transition: transform 160ms var(--ease-out);
}

.card-link:not(.desativado):hover {
  transform: translateY(-3px);
}

.card-link:not(.desativado):active {
  transform: scale(0.97);
}

.card-link:not(.desativado):focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 3px;
}

.card-link.desativado {
  cursor: not-allowed;
  pointer-events: none;
}

/* ========================================
   CARD (Estilo Moderno)
   ======================================== */
.card {
  position: relative;
  background: var(--card-bg);
  color: var(--text-primary);
  border-radius: 18px;
  padding: 1.5rem;
  min-height: 180px;
  transition:
    transform 200ms var(--ease-out),
    box-shadow 200ms ease,
    border-color 200ms ease,
    background-color 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(45, 55, 72, 0.06);
  border: 1.5px solid var(--card-border);
  overflow: hidden;
}

/* Ruído sutil no card */
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.015;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
  border-radius: 18px;
}

.card:not(.desativado):hover {
  box-shadow: 0 8px 24px rgba(29, 155, 240, 0.12);
  border-color: rgba(29, 155, 240, 0.3);
  background: var(--card-hover);
}

.card.desativado {
  opacity: 0.5;
  filter: grayscale(0.6);
}

.card.desativado:hover {
  transform: none;
  box-shadow: 0 4px 12px rgba(45, 55, 72, 0.06);
  border-color: var(--card-border);
}

/* ========================================
   ELEMENTOS DO CARD
   ======================================== */
.curso-label {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(102, 126, 234, 0.15);
  color: var(--accent-primary);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.status-badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  background: rgba(255, 107, 107, 0.2);
  color: #ff6b6b;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1.5px solid rgba(255, 107, 107, 0.4);
  backdrop-filter: blur(4px);
}

.status-badge svg {
  flex-shrink: 0;
}

.card h3 {
  font-size: 1.6rem;
  margin: 1rem 0 0.5rem 0;
  color: var(--text-primary);
  font-weight: 700;
  transition: color 0.3s ease;
  text-wrap: balance;
}

.card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-right: 60px;
  line-height: 1.5;
  transition: color 0.3s ease;
  text-wrap: pretty;
}

.nivel {
  display: flex;
  gap: 6px;
  margin-top: 1.5rem;
  align-items: center;
}

.barra {
  width: 8px;
  height: 16px;
  background: var(--border-color);
  border-radius: 2px;
  transition: background-color 0.3s ease;
}

.barra.ativa {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0d8bd9 100%);
}

.nivel-texto {
  margin-left: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0d8bd9 100%);
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(29, 155, 240, 0.3);
  padding: 0.5rem;
  transition: transform 200ms var(--ease-out);
}

.card-link:not(.desativado):hover .badge {
  transform: scale(1.05);
}

.badge img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

/* ========================================
   MODO ESCURO - LOGOS
   ======================================== */
:root[data-theme='dark'] .badge img {
  filter: brightness(0) invert(0);
  opacity: 0.9;
}

/* ========================================
   REDUCED MOTION
   ======================================== */
@media (prefers-reduced-motion: reduce) {
  .card-wrapper {
    transition: none;
    opacity: 1;
    transform: none;
  }

  .card-link:not(.desativado):hover {
    transform: none;
  }

  .card-link:not(.desativado):active {
    transform: none;
  }

  .card::before {
    opacity: 0;
  }
}

/* ========================================
   RESPONSIVO
   ======================================== */
@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
  }

  .titulo {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }

  .card {
    padding: 1.25rem;
    min-height: 160px;
  }

  .card h3 {
    font-size: 1.4rem;
  }

  .card p {
    font-size: 0.85rem;
  }

  .badge {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1rem;
  }

  .titulo {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card {
    padding: 1.25rem;
    min-height: 140px;
  }

  .card h3 {
    font-size: 1.3rem;
    margin: 0.75rem 0 0.4rem 0;
  }

  .card p {
    font-size: 0.8rem;
    margin-right: 55px;
    line-height: 1.4;
  }

  .curso-label {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }

  .nivel {
    margin-top: 1rem;
    gap: 5px;
  }

  .barra {
    width: 7px;
    height: 14px;
  }

  .nivel-texto {
    font-size: 0.8rem;
    margin-left: 0.4rem;
  }

  .badge {
    width: 50px;
    height: 50px;
    top: 0.75rem;
    right: 0.75rem;
  }

  .card-link:not(.desativado):hover {
    transform: translateY(-2px);
  }
}

@media (max-width: 360px) {
  .titulo {
    font-size: 1.5rem;
  }

  .card h3 {
    font-size: 1.2rem;
  }

  .card p {
    font-size: 0.75rem;
  }

  .badge {
    width: 46px;
    height: 46px;
  }
}
</style>
