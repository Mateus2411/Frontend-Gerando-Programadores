<script setup>
const objetivos = [
  {
    id: 1,
    titulo: 'Aprender',
    descricao:
      'Aqui nos iniciaremos com o básico da programação, ficando na aprendizagem e desenvolvimento para que no futuro não precise voltar.',
    emoji: '01',
    tag: 'Fundação',
  },
  {
    id: 2,
    titulo: 'Praticar',
    descricao:
      'Muitas das coisas requerem prática, e programação não é diferente — te forçando a praticar através de exercícios reais.',
    emoji: '02',
    tag: 'Mão na Massa',
  },
  {
    id: 3,
    titulo: 'Desenvolver',
    descricao:
      'Desenvolver projetos — definitivamente você já deve ter pensado em fazer algo grande mas quando olhou mais de perto percebeu que não tem como (por agora).',
    emoji: '03',
    tag: 'Criação',
  },
  {
    id: 4,
    titulo: 'Testar',
    descricao:
      'Testar seus conhecimentos — nada melhor do que testar o que aprendeu para ver se realmente entendeu e está apto a seguir em frente.',
    emoji: '04',
    tag: 'Validação',
  },
]
</script>

<template>
  <section class="home-objectives" aria-labelledby="obj-heading">
    <!-- Section Header -->
    <header class="section-header" data-animate>
      <span class="section-eyebrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        Pilares do Aprendizado
      </span>
      <h2 id="obj-heading" class="section-title">
        Os 4 Pilares da <span class="title-accent">Evolução</span>
      </h2>
      <p class="section-desc">
        Uma metodologia comprovada que transforma iniciantes em desenvolvedores completos.
      </p>
    </header>

    <!-- Cards -->
    <div class="cards-container">
      <article
        v-for="(card, i) in objetivos"
        :key="card.id"
        class="card"
        :style="{ '--delay': `${i * 0.12}s` }"
        data-animate
      >
        <!-- Card Glow -->
        <div class="card-glow" aria-hidden="true"></div>

        <!-- Card Tag -->
        <span class="card-tag">{{ card.tag }}</span>

        <!-- Card Icon -->
        <div class="card-icon">
          <span class="card-num">{{ card.emoji }}</span>
        </div>

        <!-- Card Content -->
        <div class="card-content">
          <h3 class="card-title">{{ card.titulo }}</h3>
          <p class="card-desc">{{ card.descricao }}</p>
        </div>

        <!-- Card Arrow -->
        <div class="card-arrow" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <!-- Card Border -->
        <div class="card-border" aria-hidden="true"></div>
      </article>
    </div>

    <!-- Decorative Bottom -->
    <div class="section-footer" aria-hidden="true">
      <div class="footer-line"></div>
      <div class="footer-diamond"></div>
      <div class="footer-line"></div>
    </div>
  </section>
</template>

<style scoped>
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
  max-width: 560px;
  margin: 0 auto;
  text-wrap: pretty;
}

/* ==================== CARDS CONTAINER ==================== */
.home-objectives {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  position: relative;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.8rem;
}

/* ==================== CARD ==================== */
.card {
  position: relative;
  background: var(--card-bg);
  border-radius: 20px;
  padding: 2.8rem 2.4rem 2.6rem;
  border: 1px solid var(--card-border);
  cursor: default;
  overflow: hidden;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease;
  animation: cardReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s) both;
}

@keyframes cardReveal {
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
}

.card:hover {
  transform: translateY(-6px);
  border-color: rgba(29, 155, 240, 0.35);
  box-shadow:
    0 20px 48px rgba(29, 155, 240, 0.12),
    0 0 0 1px rgba(29, 155, 240, 0.08);
}

/* Card Glow */
.card-glow {
  position: absolute;
  top: -40%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, rgba(29, 155, 240, 0.06) 0%, transparent 60%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.card:hover .card-glow {
  opacity: 1;
}

/* Card Tag */
.card-tag {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-primary);
  margin-bottom: 1.2rem;
  padding: 0.3rem 0.7rem;
  background: rgba(29, 155, 240, 0.08);
  border: 1px solid rgba(29, 155, 240, 0.15);
  border-radius: 6px;
}

/* Card Icon */
.card-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, rgba(29, 155, 240, 0.15) 0%, rgba(29, 155, 240, 0.05) 100%);
  border: 1px solid rgba(29, 155, 240, 0.2);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.4rem;
  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    transform 0.35s ease;
}

.card:hover .card-icon {
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-hover) 100%);
  border-color: transparent;
  transform: scale(1.08);
}

.card-num {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--accent-primary);
  transition: color 0.35s ease;
}

.card:hover .card-num {
  color: #fff;
}

/* Card Content */
.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.card-desc {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

/* Card Arrow */
.card-arrow {
  position: absolute;
  bottom: 1.8rem;
  right: 1.8rem;
  color: var(--accent-primary);
  opacity: 0;
  transform: translateX(-8px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Card Border Gradient (top) */
.card-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), #6dd5fa, var(--accent-primary));
  background-size: 200% 100%;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:hover .card-border {
  transform: scaleX(1);
}

/* ==================== SECTION FOOTER ==================== */
.section-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
}

.footer-line {
  width: 80px;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(29, 155, 240, 0.4), transparent);
}

.footer-diamond {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  transform: rotate(45deg);
  flex-shrink: 0;
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
@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }
}

@media (max-width: 580px) {
  .home-objectives {
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

  .cards-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card {
    padding: 1.75rem 1.25rem 1.5rem;
  }

  .card-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
  }

  .card-num {
    font-size: 0.95rem;
  }

  .card-tag {
    font-size: 0.6rem;
    margin-bottom: 1rem;
    padding: 0.25rem 0.6rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-desc {
    font-size: 0.85rem;
    line-height: 1.6;
  }

  .card-arrow {
    bottom: 1.25rem;
    right: 1.25rem;
  }

  .section-footer {
    margin-top: 3rem;
  }
}

/* ==================== REDUCED MOTION ==================== */
@media (prefers-reduced-motion: reduce) {
  .card,
  [data-animate] {
    animation: none;
    transition: none;
  }

  .card:hover,
  .card:hover .card-icon,
  .card:hover .card-num,
  .card:hover .card-arrow,
  .card:hover .card-border,
  .card:hover .card-glow {
    transform: none;
    animation: none;
    transition: color 0.3s, background 0.3s, border-color 0.3s, box-shadow 0.3s, opacity 0.3s;
  }
}
</style>