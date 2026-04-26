<script setup>
const conteudo = [
  {
    titulo: 'Criar programas simples',
    descricao: 'Aprender a escrever pequenos programas que resolvem problemas reais.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    tag: 'Código',
  },
  {
    titulo: 'Visualizar informações',
    descricao: 'Transformar dados em gráficos ou relatórios claros para entender resultados rapidamente.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    tag: 'Dados',
  },
  {
    titulo: 'Resolver desafios práticos',
    descricao: 'Executar exercícios que mostram imediatamente se o código está correto e como melhorá-lo.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 2a10 10 0 0 1 10 10"/><path d="M12 6v6l4 2"/><path d="m16.2 7.8 2-2"/></svg>`,
    tag: 'Desafio',
  },
  {
    titulo: 'Automatizar tarefas básicas',
    descricao: 'Criar scripts que ajudam a poupar tempo em tarefas repetitivas.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>`,
    tag: 'Automação',
  },
  {
    titulo: 'Trabalhar em equipe',
    descricao: 'Colaborar com colegas, trocar ideias e revisar códigos de forma construtiva.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    tag: 'Colaboração',
  },
  {
    titulo: 'Desenvolver raciocínio lógico',
    descricao: 'Aprender a pensar de forma estruturada para resolver problemas de maneira eficiente.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54"/></svg>`,
    tag: 'Lógica',
  },
]
</script>

<template>
  <section class="home-learning" aria-labelledby="learn-heading">
    <!-- Section Header -->
    <header class="section-header" data-animate>
      <span class="section-eyebrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
        O Que Você Vai Construir
      </span>
      <h2 id="learn-heading" class="section-title">
        Habilidades que você vai <span class="title-accent">dominar</span>
      </h2>
      <p class="section-desc">
        Seis competências essenciais que formam um desenvolvedor completo e preparado para o mercado.
      </p>
    </header>

    <!-- Skills Grid -->
    <div class="skills-grid">
      <article
        v-for="(card, i) in conteudo"
        :key="card.titulo"
        class="skill-card"
        :style="{ '--delay': `${i * 0.1}s` }"
        data-animate
      >
        <!-- Top Bar -->
        <div class="skill-bar" aria-hidden="true"></div>

        <!-- Icon -->
        <div class="skill-icon" v-html="card.icon" aria-hidden="true"></div>

        <!-- Tag -->
        <span class="skill-tag">{{ card.tag }}</span>

        <!-- Content -->
        <div class="skill-content">
          <h3 class="skill-title">{{ card.titulo }}</h3>
          <p class="skill-desc">{{ card.descricao }}</p>
        </div>

        <!-- Hover Glow -->
        <div class="skill-glow" aria-hidden="true"></div>
      </article>
    </div>
  </section>
</template>

<style scoped>
/* ==================== SECTION ==================== */
.home-learning {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

/* ==================== SECTION HEADER ==================== */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 1.5rem;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent-primary);
  margin-bottom: 1rem;
  padding: 0.45rem 1rem;
  background: rgba(29, 155, 240, 0.08);
  border: 1px solid rgba(29, 155, 240, 0.15);
  border-radius: 100px;
}

.section-title {
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.title-accent {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #6dd5fa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-desc {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.65;
  color: var(--text-secondary);
  max-width: 520px;
  margin: 0 auto;
  text-wrap: pretty;
}

/* ==================== SKILLS GRID ==================== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* ==================== SKILL CARD ==================== */
.skill-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 18px;
  padding: 2rem 1.8rem 1.8rem;
  overflow: hidden;
  cursor: default;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease;
  animation: skillReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s) both;
}

@keyframes skillReveal {
  from { opacity: 0; transform: translateY(28px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: rgba(29, 155, 240, 0.3);
  box-shadow: 0 14px 36px rgba(29, 155, 240, 0.09);
}

/* Top Bar */
.skill-bar {
  position: absolute;
  top: 0;
  left: 1.8rem;
  right: 1.8rem;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-primary) 0%, transparent 100%);
  border-radius: 0 0 4px 4px;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.skill-card:hover .skill-bar {
  opacity: 1;
}

/* Icon */
.skill-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(29, 155, 240, 0.07);
  border: 1px solid rgba(29, 155, 240, 0.15);
  border-radius: 12px;
  color: var(--accent-primary);
  margin-bottom: 1.2rem;
  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    transform 0.35s ease;
}

.skill-card:hover .skill-icon {
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-hover) 100%);
  border-color: transparent;
  color: #fff;
  transform: rotate(-5deg) scale(1.05);
}

/* Tag */
.skill-tag {
  display: inline-block;
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-primary);
  margin-bottom: 0.9rem;
  padding: 0.25rem 0.6rem;
  background: rgba(29, 155, 240, 0.07);
  border: 1px solid rgba(29, 155, 240, 0.12);
  border-radius: 5px;
  transition: background 0.35s ease;
}

.skill-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 18px;
  padding: 2rem 1.8rem 1.8rem;
  overflow: hidden;
  cursor: default;
  display: flex;
  flex-direction: column;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

[data-animate].is-visible {
  transform: translateY(0);
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 950px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .home-learning {
    padding: 3.5rem 1rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
    padding: 0 0.5rem;
  }

  .section-eyebrow {
    font-size: 0.65rem;
    padding: 0.4rem 0.85rem;
    margin-bottom: 0.85rem;
  }

  .section-title {
    font-size: clamp(1.65rem, 6vw, 2rem);
  }

  .section-desc {
    font-size: 0.95rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skill-card {
    padding: 1.5rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  .skill-tag {
    font-size: 0.55rem;
    padding: 0.2rem 0.5rem;
    margin-bottom: 0;
  }

  .skill-content {
    flex: 1;
  }

  .skill-title {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }

  .skill-desc {
    font-size: 0.8rem;
    line-height: 1.5;
  }
}

/* ==================== REDUCED MOTION ==================== */
@media (prefers-reduced-motion: reduce) {
  .skill-card,
  [data-animate] {
    animation: none;
  }

  .skill-card,
  .skill-card:hover,
  .skill-card:hover .skill-icon,
  .skill-card:hover .skill-glow,
  .skill-card:hover .skill-bar {
    transition: color 0.3s, background 0.3s, border-color 0.3s, box-shadow 0.3s;
  }
}
</style>