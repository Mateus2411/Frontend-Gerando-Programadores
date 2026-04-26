<script setup>
import { onMounted } from 'vue'
import HomeObjectives from '@/components/Home/HomeObjectives.vue'
import HomeFeatures from '@/components/Home/HomeFeatures.vue'
import HomeLearning from '@/components/Home/HomeLearning.vue'
import HomeMindset from '@/components/Home/HomeMindset.vue'

// Intersection Observer for scroll animations
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
  <main class="home-wrapper">
    <!-- Skip Link -->
    <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>

    <!-- ==================== HERO ==================== -->
    <section class="hero-section" aria-label="Hero principal">
      <!-- Atmospheric Background Layers -->
      <div class="hero-bg">
        <div class="hero-orb hero-orb--1"></div>
        <div class="hero-orb hero-orb--2"></div>
        <div class="hero-orb hero-orb--3"></div>
        <div class="hero-grid"></div>
        <div class="hero-noise"></div>
      </div>

      <!-- Floating Code Snippets -->
      <div class="hero-code-float" aria-hidden="true">
        <div class="code-card code-card--left">
          <span class="code-keyword">const</span>
          <span class="code-var"> skills</span>
          <span class="code-op"> =</span>
          <span class="code-bracket"> [</span>
          <span class="code-str">'JavaScript'</span>
          <span class="code-punct">,</span>
          <br />
          <span class="code-str indent">'Vue.js'</span>
          <span class="code-punct">,</span>
          <br />
          <span class="code-str indent">'CSS'</span>
          <span class="code-bracket">]</span>
          <span class="code-punct">;</span>
        </div>
        <div class="code-card code-card--right">
          <span class="code-comment">// build the future</span>
          <br />
          <span class="code-fn">function</span>
          <span class="code-var"> evolve</span>
          <span class="code-bracket">() {</span>
          <br />
          <span class="code-stmt indent">learn</span>
          <span class="code-bracket">();</span>
          <br />
          <span class="code-stmt indent">practice</span>
          <span class="code-bracket">();</span>
          <br />
          <span class="code-bracket">}</span>
        </div>
      </div>

      <!-- Hero Badge -->
      <div class="hero-badge">
        <span class="hero-badge__dot"></span>
        Plataforma de Estudo Direcionado
      </div>

      <!-- Hero Content -->
      <div class="hero-content" id="main-content">
        <h1 class="hero-title">
          <span class="hero-title__line">Desenvolva suas</span>
          <span class="hero-title__accent">habilidades</span>
          <span class="hero-title__line">em programação</span>
        </h1>
        <p class="hero-sub">
          Uma jornada estruturada para você evoluir do zero ao profissional — com prática
          real, desafios progressivos e feedback instantâneo.
        </p>

        <div class="hero-actions">
          <router-link class="btn-primary" to="/cadastrar">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Começar Agora
          </router-link>
          <router-link class="btn-ghost" to="/trilhas">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10,8 16,12 10,16" fill="currentColor" />
            </svg>
            Ver Trilhas
          </router-link>
        </div>

        <!-- Stats Row -->
        <div class="hero-stats" aria-label="Números da plataforma">
          <div class="hero-stat">
            <span class="hero-stat__number">4</span>
            <span class="hero-stat__label">Pilares</span>
          </div>
          <div class="hero-stat-divider" aria-hidden="true"></div>
          <div class="hero-stat">
            <span class="hero-stat__number">100%</span>
            <span class="hero-stat__label">Prática</span>
          </div>
          <div class="hero-stat-divider" aria-hidden="true"></div>
          <div class="hero-stat">
            <span class="hero-stat__number">AI</span>
            <span class="hero-stat__label">Assistência</span>
          </div>
          <div class="hero-stat-divider" aria-hidden="true"></div>
          <div class="hero-stat">
            <span class="hero-stat__number">∞</span>
            <span class="hero-stat__label">Desafios</span>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator" aria-hidden="true">
        <span class="scroll-indicator__text">Scroll</span>
        <div class="scroll-indicator__line"></div>
      </div>
    </section>

    <!-- ==================== SECTIONS ==================== -->
    <HomeObjectives />
    <HomeFeatures />
    <HomeLearning />
    <HomeMindset />
  </main>
</template>

<style scoped>
/* ============================================================
   CSS CUSTOM PROPERTIES — Developer Academy Theme
   ============================================================ */
.home-wrapper {
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

/* ==================== HERO SECTION ==================== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  overflow: hidden;
}

/* --- Atmospheric Background --- */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orbFloat 12s ease-in-out infinite;
}

.hero-orb--1 {
  width: 600px;
  height: 600px;
  top: -15%;
  left: -10%;
  background: radial-gradient(
    circle,
    rgba(29, 155, 240, 0.12) 0%,
    transparent 70%
  );
  animation-duration: 14s;
}

.hero-orb--2 {
  width: 500px;
  height: 500px;
  bottom: -10%;
  right: -8%;
  background: radial-gradient(
    circle,
    rgba(29, 155, 240, 0.08) 0%,
    transparent 70%
  );
  animation-duration: 18s;
  animation-delay: -4s;
}

.hero-orb--3 {
  width: 300px;
  height: 300px;
  top: 40%;
  right: 20%;
  background: radial-gradient(
    circle,
    rgba(29, 155, 240, 0.06) 0%,
    transparent 70%
  );
  animation-duration: 10s;
  animation-delay: -7s;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(29, 155, 240, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(29, 155, 240, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%);
}

.hero-noise {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 15px) scale(0.95); }
}

/* --- Floating Code Cards --- */
.hero-code-float {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.code-card {
  position: absolute;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.7rem;
  line-height: 1.7;
  padding: 1.2rem 1.4rem;
  background: rgba(17, 34, 64, 0.6);
  border: 1px solid rgba(29, 155, 240, 0.15);
  border-radius: 12px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  white-space: pre;
  animation: codeFloat 8s ease-in-out infinite;
}

.code-card--left {
  left: 3%;
  top: 28%;
  width: 200px;
  animation-duration: 9s;
  animation-delay: 0s;
}

.code-card--right {
  right: 4%;
  bottom: 30%;
  width: 210px;
  animation-duration: 11s;
  animation-delay: -3s;
}

@keyframes codeFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-18px) rotate(1deg); }
}

.code-keyword { color: #c792ea; }
.code-var { color: #82aaff; }
.code-op { color: #89ddff; }
.code-bracket { color: #cocop; }
.code-str { color: #c3e88d; }
.code-punct { color: #89ddff; }
.code-comment { color: #697098; font-style: italic; }
.code-fn { color: #82aaff; }
.code-stmt { color: #f78c6c; }
.indent { margin-left: 1.2rem; display: inline-block; }

/* --- Hero Badge --- */
.hero-badge {
  position: relative;
  z-index: 2;
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
  margin-bottom: 2rem;
  animation: badgeEntrance 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
}

.hero-badge__dot {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

@keyframes badgeEntrance {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Hero Content --- */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 780px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.hero-title {
  font-family: var(--font-title);
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.03em;
  text-wrap: balance;
  margin: 0;
  animation: heroTitleEntrance 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both;
}

.hero-title__line {
  display: block;
  color: var(--text-primary);
  text-shadow: 0 2px 12px rgba(10, 22, 40, 0.5);
}

.hero-title__accent {
  display: block;
  background: linear-gradient(
    135deg,
    var(--accent-primary) 0%,
    #6dd5fa 50%,
    var(--accent-primary) 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease-in-out infinite;
  animation-delay: 1s;
  text-shadow: 0 2px 12px rgba(29, 155, 240, 0.3);
}

@keyframes heroTitleEntrance {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-sub {
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
  text-wrap: pretty;
  animation: heroSubEntrance 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both;
}

@keyframes heroSubEntrance {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Hero Actions (CTAs) --- */
.hero-actions {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  width: 100%;
  max-width: 360px;
  animation: heroActionsEntrance 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.65s both;
}

@keyframes heroActionsEntrance {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.btn-primary {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  background: var(--accent-primary);
  color: #fff;
  font-weight: 600;
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid transparent;
  transition:
    background 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.2s ease;
  box-shadow: 0 4px 20px rgba(29, 155, 240, 0.3);
  animation: btnGlow 3s ease-in-out infinite;
}

@keyframes btnGlow {
  0%, 100% { box-shadow: 0 4px 20px rgba(29, 155, 240, 0.3); }
  50% { box-shadow: 0 4px 32px rgba(29, 155, 240, 0.5), 0 0 48px rgba(29, 155, 240, 0.1); }
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(29, 155, 240, 0.4);
  animation: none;
}

.btn-primary:active {
  transform: translateY(-1px);
}

.btn-primary svg {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.btn-primary:hover svg {
  transform: translateX(3px);
}

.btn-ghost {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.8rem;
  background: transparent;
  color: var(--accent-primary);
  font-weight: 600;
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  text-decoration: none;
  border-radius: 12px;
  border: 1.5px solid rgba(29, 155, 240, 0.3);
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;
}

.btn-ghost:hover {
  background: rgba(29, 155, 240, 0.06);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(29, 155, 240, 0.12);
}

/* --- Hero Stats --- */
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1.4rem 2.5rem;
  background: rgba(17, 34, 64, 0.4);
  border: 1px solid rgba(29, 155, 240, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  animation: heroStatsEntrance 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.85s both;
  margin-top: 0.5rem;
  width: 100%;
  max-width: fit-content;
}

@keyframes heroStatsEntrance {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.hero-stat__number {
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 800;
  color: var(--accent-primary);
  line-height: 1;
  letter-spacing: -0.02em;
}

.hero-stat__label {
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
}

.hero-stat-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(29, 155, 240, 0.3),
    transparent
  );
}

/* --- Scroll Indicator --- */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: scrollFadeIn 1s ease 1.5s both;
}

@keyframes scrollFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.scroll-indicator__text {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
  writing-mode: horizontal-tb;
}

.scroll-indicator__line {
  width: 1px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    var(--accent-primary),
    transparent
  );
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; opacity: 1; }
  50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
  51% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
  100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
}

/* --- Skip Link --- */
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

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1100px) {
  .code-card {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 5rem 1.25rem 3rem;
    min-height: 100svh;
    justify-content: flex-start;
    padding-top: 6rem;
  }

  .hero-badge {
    padding: 0.45rem 1rem;
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 2.8rem);
    line-height: 1.1;
  }

  .hero-sub {
    font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  }

  .hero-actions {
    margin-top: 0.5rem;
  }

  .btn-primary,
  .btn-ghost {
    min-width: 0;
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }

  .hero-stats {
    padding: 1rem 1.25rem;
    gap: 0.6rem;
    margin-top: 1rem;
  }

  .hero-stat__number {
    font-size: 1.3rem;
  }

  .hero-stat__label {
    font-size: 0.6rem;
  }

  .hero-stat-divider {
    height: 24px;
  }

  .scroll-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 4rem 1rem 2.5rem;
  }

  .hero-stats {
    padding: 1rem 1.2rem;
    gap: 0.8rem;
  }

  .hero-stat-divider {
    height: 30px;
  }
}

/* ==================== REDUCED MOTION ==================== */
@media (prefers-reduced-motion: reduce) {
  .hero-orb,
  .code-card,
  .hero-badge__dot,
  .hero-title__accent,
  .btn-primary,
  .scroll-indicator__line {
    animation: none;
  }

  .hero-title,
  .hero-sub,
  .hero-actions,
  .hero-stats,
  .scroll-indicator,
  .hero-badge {
    animation: none;
  }
}
</style>