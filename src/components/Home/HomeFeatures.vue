<script setup>
const etapas = [
  {
    numero: '01',
    titulo: 'Cadastre-se',
    descricao:
      'Crie sua conta na plataforma para acessar todos os módulos, desafios e recursos de aprendizaje.',
    cor: 'step--one',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  },
  {
    numero: '02',
    titulo: 'Explore os Módulos',
    descricao:
      'Navegue pelo conteúdo estruturado de programação — teoria explicada de forma prática e direta ao ponto.',
    cor: 'step--two',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  },
  {
    numero: '03',
    titulo: 'Faça os Desafios',
    descricao:
      'A parte mais importante — resolva exercícios práticos com feedback instantâneo e acompanhe sua evolução.',
    cor: 'step--three',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  },
]
</script>

<template>
  <section class="home-features" aria-labelledby="feat-heading">
    <!-- Background Accents -->
    <div class="features-bg" aria-hidden="true">
      <div class="features-orb"></div>
    </div>

    <!-- Section Header -->
    <header class="section-header" data-animate>
      <span class="section-eyebrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        </svg>
        Como Funciona
      </span>
      <h2 id="feat-heading" class="section-title">
        Três passos para sua <span class="title-accent">transformação</span>
      </h2>
      <p class="section-desc">
        O processo é simples, direto e focado em você — do cadastro ao primeiro código funcionando.
      </p>
    </header>

    <!-- Steps Timeline -->
    <div class="steps-container">
      <div
        v-for="(step, i) in etapas"
        :key="step.numero"
        class="step-card"
        :class="step.cor"
        :style="{ '--delay': `${i * 0.15}s` }"
        data-animate
      >
        <!-- Step Number -->
        <div class="step-number" aria-hidden="true">
          <span>{{ step.numero }}</span>
        </div>

        <!-- Step Connector -->
        <div class="step-connector" v-if="i < etapas.length - 1" aria-hidden="true">
          <div class="connector-line"></div>
          <div class="connector-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <!-- Step Icon -->
        <div class="step-icon" v-html="step.icon" aria-hidden="true"></div>

        <!-- Step Content -->
        <div class="step-content">
          <h3 class="step-title">{{ step.titulo }}</h3>
          <p class="step-desc">{{ step.descricao }}</p>
        </div>

        <!-- Step Glow -->
        <div class="step-glow" aria-hidden="true"></div>
      </div>
    </div>

    <!-- AI Note -->
    <div class="ai-note" data-animate>
      <div class="ai-note__icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/><circle cx="12" cy="12" r="4"/><path d="m16.2 7.8 2-2"/>
        </svg>
      </div>
      <p class="ai-note__text">
        Você terá acesso a <strong>inteligência artificial</strong> para praticar, ambientes de teste e feedback imediato a cada linha de código escrita.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* ==================== SECTION ==================== */
.home-features {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
}

/* Background */
.features-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.features-orb {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(29, 155, 240, 0.06) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
}

/* ==================== SECTION HEADER ==================== */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
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

/* ==================== STEPS CONTAINER ==================== */
.steps-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 1;
}

/* ==================== STEP CARD ==================== */
.step-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 2.5rem 2rem 2.2rem;
  text-align: center;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease;
  overflow: hidden;
  animation: stepReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s) both;
}

@keyframes stepReveal {
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(29, 155, 240, 0.1);
}

/* Step accent colors */
.step--one:hover { border-color: rgba(29, 155, 240, 0.35); }
.step--two:hover { border-color: rgba(29, 155, 240, 0.35); }
.step--three:hover { border-color: rgba(29, 155, 240, 0.35); }

/* Step Number */
.step-number {
  position: absolute;
  top: 1.5rem;
  right: 1.8rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-primary);
  opacity: 0.4;
  letter-spacing: 0.05em;
}

/* Step Icon */
.step-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(29, 155, 240, 0.1) 0%, rgba(29, 155, 240, 0.04) 100%);
  border: 1px solid rgba(29, 155, 240, 0.2);
  border-radius: 18px;
  color: var(--accent-primary);
  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    transform 0.35s ease;
}

.step-card:hover .step-icon {
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-hover) 100%);
  border-color: transparent;
  color: #fff;
  transform: scale(1.08);
}

/* Step Content */
.step-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.step-desc {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

/* Step Glow */
.step-glow {
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(29, 155, 240, 0.08) 0%, transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.step-card:hover .step-glow {
  opacity: 1;
}

/* Step Connector */
.step-connector {
  display: none;
}

/* ==================== AI NOTE ==================== */
.ai-note {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 680px;
  margin: 3rem auto 0;
  padding: 1.3rem 1.8rem;
  background: rgba(29, 155, 240, 0.05);
  border: 1px solid rgba(29, 155, 240, 0.15);
  border-radius: 14px;
  position: relative;
  z-index: 1;
}

.ai-note__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(29, 155, 240, 0.1);
  border-radius: 10px;
  color: var(--accent-primary);
}

.ai-note__text {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-secondary);
}

.ai-note__text strong {
  color: var(--accent-primary);
  font-weight: 700;
}

/* ==================== SCROLL ANIMATION ==================== */
[data-animate] {
  transform: translateY(28px);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

[data-animate].is-visible {
  transform: translateY(0);
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 950px) {
  .steps-container {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
    gap: 1.5rem;
  }
}

@media (max-width: 580px) {
  .home-features {
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

  .step-card {
    padding: 1.75rem 1.25rem 1.5rem;
  }

  .step-number {
    top: 1.25rem;
    right: 1.25rem;
    font-size: 0.7rem;
  }

  .step-icon {
    width: 52px;
    height: 52px;
    margin-bottom: 1.25rem;
    border-radius: 14px;
  }

  .step-title {
    font-size: 1.2rem;
  }

  .step-desc {
    font-size: 0.85rem;
    line-height: 1.6;
  }

  .ai-note {
    flex-direction: column;
    text-align: center;
    gap: 0.85rem;
    padding: 1.25rem 1rem;
  }

  .ai-note__text {
    font-size: 0.88rem;
  }
}

/* ==================== REDUCED MOTION ==================== */
@media (prefers-reduced-motion: reduce) {
  .step-card,
  [data-animate] {
    animation: none;
  }

  .step-card,
  .step-card:hover,
  .step-card:hover .step-icon,
  .step-card:hover .step-glow {
    transition: color 0.3s, background 0.3s, border-color 0.3s, box-shadow 0.3s;
  }
}
</style>