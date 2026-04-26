<script setup>
const mantrasComuns = [
  'Lembre-se: o usuário é inimigo da sanidade do dev.',
  'Nunca confie no input do usuário, ele sempre encontra um jeito de quebrar tudo.',
  'Se algo pode dar errado, o usuário vai encontrar esse caminho.',
  'O usuário não lê documentação, ele clica em tudo até funcionar.',
  'Todo bug em produção foi causado por um usuário criativo demais.',
  'Validação no frontend é sugestão, validação no backend é lei.',
  'O código que você escreve hoje é o pesadelo que você debugga amanhã.',
  'Comentários mentem, código não. Mas às vezes o código também mente.',
  'Se funciona, não mexa. Se mexeu, reze para funcionar de novo.',
  'A melhor feature é aquela que você não precisa implementar.',
]

const mantraRara =
  '🎉 EASTER EGG! Parabéns, você encontrou a frase rara! A verdade é: o dev também é usuário e quebra tudo igual. 🎉'

const chanceFraseRara = Math.random() < 0.005

const mantraAleatoria = chanceFraseRara
  ? mantraRara
  : mantrasComuns[Math.floor(Math.random() * mantrasComuns.length)]

const stackIcons = [
  {
    name: 'Vue.js',
    icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js" width="24" height="24" />`,
    color: '#42b883',
  },
  {
    name: 'JavaScript',
    icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" width="24" height="24" />`,
    color: '#f7df1e',
  },
  {
    name: 'CSS3',
    icon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" width="24" height="24" />`,
    color: '#264de4',
  },
  {
    name: 'Security',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    color: '#c9a84c',
  },
]
</script>

<template>
  <section class="home-mindset" aria-labelledby="mindset-heading">
    <!-- Background Elements -->
    <div class="mindset-bg" aria-hidden="true">
      <div class="bg-shape bg-shape--tl"></div>
      <div class="bg-shape bg-shape--br"></div>
      <div class="bg-dots"></div>
    </div>

    <!-- Section Header -->
    <header class="section-header" data-animate>
      <span class="section-eyebrow">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        Arquitetura &amp; Boas Práticas
      </span>
      <h2 id="mindset-heading" class="section-title">
        Tecnologia por <span class="title-accent">trás das cortinas</span>
      </h2>
    </header>

    <!-- Main Content -->
    <div class="mindset-layout">
      <!-- Left: Architecture Text -->
      <div class="mindset-text" data-animate>
        <p class="mindset-desc">
          Esta plataforma é construída sobre uma <strong>stack moderna</strong> (Vue.js, JavaScript,
          CSS), adotando padrões de código de alta manutenibilidade, escalabilidade e segurança de
          dados.
        </p>

        <p class="mindset-desc">
          O código é limpo, documentado e aderente ao <strong>SOLID</strong>. Implementamos
          criptografia robusta para os dados transacionais. Nossa missão é desenvolver
          <strong>engenheiros de software</strong> com rigor técnico.
        </p>

        <!-- Stack Icons -->
        <div class="stack-row" aria-label="Tecnologias utilizadas">
          <div
            v-for="tech in stackIcons"
            :key="tech.name"
            class="stack-icon"
            :style="{ '--tech-color': tech.color }"
            :aria-label="tech.name"
            :title="tech.name"
            v-html="tech.icon"
          ></div>
        </div>
      </div>

      <!-- Right: Dev Mantra -->
      <div class="mantra-card" data-animate>
        <div class="mantra-decoration" aria-hidden="true">
          <span class="mantra-quote">"</span>
        </div>
        <blockquote class="mantra-text" v-html="mantraAleatoria"></blockquote>
        <div class="mantra-footer">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span class="mantra-footer__label">Dev Wisdom</span>
            <span class="mantra-footer__dot"></span>
            <span class="mantra-footer__update">Atualizado a cada visita</span>
          </div>
      </div>
    </div>

    <!-- Separation -->
    <div class="separation" aria-hidden="true">
      <div class="separation-line"></div>
    </div>
  </section>
</template>

<style scoped>
/* ==================== SECTION ==================== */
.home-mindset {
  max-width: 1200px;
  margin: 0 auto;
  padding: 7rem 2.5rem;
  position: relative;
  overflow-x: hidden;
  background: var(--bg-primary);
}

/* Background */
.mindset-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.bg-shape--tl {
  width: 400px;
  height: 400px;
  top: -10%;
  left: -5%;
  background: radial-gradient(circle, rgba(29, 155, 240, 0.05) 0%, transparent 70%);
}

.bg-shape--br {
  width: 350px;
  height: 350px;
  bottom: 0;
  right: -8%;
  background: radial-gradient(circle, rgba(29, 155, 240, 0.06) 0%, transparent 70%);
}

.bg-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(29, 155, 240, 0.06) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 80%);
}

/* ==================== SECTION HEADER ==================== */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
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
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.title-accent {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #6dd5fa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ==================== LAYOUT ==================== */
.mindset-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
  position: relative;
  z-index: 1;
}

/* ==================== MINDTEXT ==================== */
.mindset-text {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.mindset-desc {
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  line-height: 1.75;
  color: var(--text-secondary);
}

.mindset-desc strong {
  color: var(--accent-primary);
  font-weight: 700;
}

/* Stack Row */
.stack-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.stack-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  color: var(--tech-color, var(--accent-primary));
  cursor: default;
  transition:
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.stack-icon:hover {
  transform: translateY(-3px) scale(1.1);
  border-color: var(--tech-color, var(--accent-primary));
  box-shadow: 0 4px 14px rgba(29, 155, 240, 0.15);
}

/* ==================== MANTRA CARD ==================== */
.mantra-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 3rem 2.5rem 2.5rem;
  overflow: hidden;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease;
}

.mantra-card:hover {
  transform: translateY(-4px);
  border-color: rgba(29, 155, 240, 0.25);
  box-shadow: 0 16px 40px rgba(29, 155, 240, 0.1);
}

.mantra-decoration {
  position: absolute;
  top: 1.2rem;
  right: 1.8rem;
  pointer-events: none;
}

.mantra-quote {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
  color: rgba(29, 155, 240, 0.08);
  user-select: none;
}

.mantra-text {
  font-family: 'IBM Plex Sans', var(--font-body);
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  font-style: italic;
  line-height: 1.7;
  color: var(--text-primary);
  margin: 0 0 1.5rem;
  text-wrap: pretty;
}

.mantra-footer {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.75rem;
}

.mantra-footer svg {
  color: var(--accent-primary);
  flex-shrink: 0;
}

.mantra-footer__label {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
}

.mantra-footer__dot {
  width: 3px;
  height: 3px;
  background: var(--text-tertiary);
  border-radius: 50%;
  opacity: 0.4;
}

.mantra-footer__update {
  font-size: 0.65rem;
  color: var(--text-tertiary);
  opacity: 0.6;
}

/* ==================== SEPARATION ==================== */
.separation {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 0 0;
  position: relative;
  z-index: 1;
}

.separation-line {
  width: 100%;
  max-width: 200px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--card-border), transparent);
  border-radius: 1px;
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
@media (max-width: 900px) {
  .mindset-layout {
    grid-template-columns: 1fr;
  }

  .mantra-card {
    order: -1;
  }
}

@media (max-width: 580px) {
  .home-mindset {
    padding: 3.5rem 1rem;
    display: block;
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

  .mindset-desc {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .mantra-card {
    padding: 1.75rem 1.25rem 1.5rem;
  }

  .mantra-quote {
    font-size: 3.5rem;
  }

  .mantra-text {
    font-size: 1rem;
  }

  .mantra-footer {
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .mantra-footer__label {
    min-width: 100%;
  }

  .separation {
    padding: 3rem 0 0;
  }
}

/* ==================== REDUCED MOTION ==================== */
@media (prefers-reduced-motion: reduce) {
  .mantra-card,
  .stack-icon,
  [data-animate] {
    animation: none;
    transition:
      color 0.3s,
      background 0.3s,
      border-color 0.3s,
      box-shadow 0.3s,
      transform 0.3s;
  }

  .mantra-card:hover,
  .stack-icon:hover {
    transform: none;
    transition:
      color 0.3s,
      background 0.3s,
      border-color 0.3s,
      box-shadow 0.3s;
  }
}
</style>
