<script setup>
const dev = {
  nome: 'Mateus Henrique',
  sobrenome: 'da Silva',
  foto: '/careca.jpg',
  bio: [
    'Desenvolvedor brasileiro focado em programação, lógica e construção de sistemas web.',
    'Tenho interesse em entender profundamente como a tecnologia funciona — desde lógica de programação até a estrutura de sistemas completos. Gosto de resolver problemas de forma direta, criando soluções simples, eficientes e bem estruturadas.',
    'Grande parte do meu tempo é dedicada ao estudo e experimentação com código, principalmente utilizando JavaScript, explorando manipulação de dados, algoritmos e desenvolvimento para web.',
    'Valorizo código claro, pensamento lógico e evolução constante como desenvolvedor.',
  ],
  info: {
    localizacao: 'Brasil',
    area: 'Desenvolvimento Web',
    stack: 'JavaScript • Web APIs • Estrutura de dados • Lógica de programação',
    foco: 'Aprofundamento em programação, desenvolvimento de projetos próprios e aprimoramento técnico contínuo.',
  },
}

const stacks = [
  { nome: 'JavaScript', nivel: 70 },
  { nome: 'HTML',       nivel: 80 },
  { nome: 'CSS',        nivel: 70 },
  { nome: 'Vue.js',     nivel: 65 },
  { nome: 'Node.js',    nivel: 65 },
  { nome: 'Git',        nivel: 70 },
]
</script>

<template>
  <main class="dp">

    <!-- ══ HERO ══ -->
    <section class="dp-hero">
      <div class="dp-hero__photo-wrap">
        <img :src="dev.foto" :alt="dev.nome" class="dp-hero__photo" loading="eager" />
        <div class="dp-hero__overlay"></div>
      </div>

      <div class="dp-hero__content">
        <div class="dp-hero__tag">
          <span class="dp-hero__dot"></span>
          <span class="dp-hero__tag-text">Desenvolvedor</span>
        </div>

        <h1 class="dp-hero__name">
          <span class="dp-hero__name-first">{{ dev.nome }}</span>
          <span class="dp-hero__name-last">{{ dev.sobrenome }}</span>
        </h1>

        <div class="dp-hero__meta">
          <span>{{ dev.info.localizacao }}</span>
          <span class="dp-hero__meta-sep">—</span>
          <span>{{ dev.info.area }}</span>
        </div>
      </div>

      <div class="dp-hero__scroll">
        <span>scroll</span>
        <span class="dp-hero__scroll-arrow">↓</span>
      </div>
    </section>

    <!-- ══ SOBRE ══ -->
    <section class="dp-bio">
      <span class="dp-bg-num" aria-hidden="true">01</span>

      <div class="dp-bio__inner">
        <div class="dp-bio__left">
          <span class="dp-label">// Sobre</span>
          <p class="dp-bio__lead">{{ dev.bio[0] }}</p>
          <p v-for="(p, i) in dev.bio.slice(1)" :key="i" class="dp-bio__body">{{ p }}</p>
        </div>

        <aside class="dp-bio__right">
          <div
            v-for="item in [
              { label: 'Stack', value: dev.info.stack },
              { label: 'Foco',  value: dev.info.foco  },
            ]"
            :key="item.label"
            class="dp-card"
          >
            <span class="dp-card__label">{{ item.label }}</span>
            <span class="dp-card__value">{{ item.value }}</span>
          </div>

          <div class="dp-card dp-card--active">
            <span class="dp-card__label">Status</span>
            <span class="dp-card__value">
              <span class="dp-card__dot" aria-hidden="true"></span>
              Disponível para projetos
            </span>
          </div>
        </aside>
      </div>

      <div class="dp-ornament" aria-hidden="true">
        <span class="dp-ornament__line"></span>
        <span class="dp-ornament__diamond"></span>
        <span class="dp-ornament__line"></span>
      </div>
    </section>

    <!-- ══ STACK ══ -->
    <section class="dp-stack">
      <span class="dp-bg-num" aria-hidden="true">02</span>

      <div class="dp-stack__inner">
        <div class="dp-stack__header">
          <span class="dp-label">// Tecnologias</span>
          <h2 class="dp-stack__title">Stack</h2>
          <p class="dp-stack__sub">Ferramentas que uso no dia a dia para construir projetos.</p>
        </div>

        <div class="dp-stack__bars">
          <div
            class="dp-bar"
            v-for="tech in stacks"
            :key="tech.nome"
            :style="{ '--fill': tech.nivel + '%' }"
          >
            <div class="dp-bar__header">
              <span class="dp-bar__name">{{ tech.nome }}</span>
              <span class="dp-bar__pct">{{ tech.nivel }}%</span>
            </div>
            <div
              class="dp-bar__track"
              role="progressbar"
              :aria-valuenow="tech.nivel"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-label="tech.nome + ' — ' + tech.nivel + '%'"
            >
              <div class="dp-bar__fill"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300;1,9..144,700&family=JetBrains+Mono:wght@400;500;700&family=IBM+Plex+Sans:wght@300;400;500;700&display=swap');

/* ════════════════════════════════════════
   TOKENS — usa sistema azul do site como base
   acento: azul-teal claro (#4db8f5) em vez do verde
   para harmonizar com o navy predominante
════════════════════════════════════════ */
.dp {
  --dp-bg:       #0a1628;   /* navy base do site */
  --dp-bg2:      #0d1e38;
  --dp-bg3:      #102040;

  --dp-accent:   #4db8f5;   /* azul-teal claro — coerente com --accent-primary do site */
  --dp-accent-d: rgba(77, 184, 245, 0.14);
  --dp-accent-g: rgba(77, 184, 245, 0.30);
  --dp-accent-b: rgba(77, 184, 245, 0.22);

  --dp-text:     #e2eaf4;
  --dp-muted:    #8da4bf;
  --dp-faint:    #2e4060;

  --dp-border:   rgba(255, 255, 255, 0.07);
  --dp-bh:       rgba(77, 184, 245, 0.30);

  --dp-ok:       #2dd4a0;   /* verde só para o status "disponível" */

  background: var(--dp-bg);
  color: var(--dp-text);
  font-family: 'IBM Plex Sans', sans-serif;
  min-height: 100vh;
}

/* ════════════════════════════════════════
   HERO
════════════════════════════════════════ */
.dp-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.dp-hero__photo-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
  animation: dp-scaleIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.dp-hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: saturate(0.65) contrast(1.1) brightness(0.65);
}

.dp-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    var(--dp-bg) 0%,
    rgba(10, 22, 40, 0.55) 40%,
    rgba(10, 22, 40, 0.20) 100%
  );
}

.dp-hero__content {
  position: relative;
  z-index: 2;
  padding: 4rem 2rem 3rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  animation: dp-fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
}

.dp-hero__tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.dp-hero__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--dp-accent);
}

.dp-hero__tag-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--dp-muted);
}

.dp-hero__name {
  line-height: 0.9;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
  text-wrap: balance;
}

.dp-hero__name-first {
  display: block;
  font-family: 'Fraunces', serif;
  font-size: clamp(3rem, 9vw, 7rem);
  font-weight: 800;
  color: #ffffff;
}

.dp-hero__name-last {
  display: block;
  font-family: 'Fraunces', serif;
  font-size: clamp(3rem, 9vw, 7rem);
  font-weight: 800;
  font-style: italic;
  color: var(--dp-accent);
  opacity: 0.92;
}

.dp-hero__meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.05em;
}

.dp-hero__meta-sep { color: rgba(255, 255, 255, 0.2); }

.dp-hero__scroll {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: dp-fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both;
}

.dp-hero__scroll span:first-child {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
}

.dp-hero__scroll-arrow {
  color: var(--dp-accent);
  animation: dp-bounce 2s ease-in-out infinite;
}

/* ════════════════════════════════════════
   RÓTULO DE SEÇÃO
════════════════════════════════════════ */
.dp-label {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--dp-accent);
  font-weight: 500;
  margin-bottom: 1.5rem;
}

/* ════════════════════════════════════════
   NÚMERO DECORATIVO
════════════════════════════════════════ */
.dp-bg-num {
  position: absolute;
  top: -0.1em;
  right: -0.04em;
  font-family: 'Fraunces', serif;
  font-size: clamp(9rem, 20vw, 17rem);
  font-weight: 800;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px var(--dp-faint);
  pointer-events: none;
  user-select: none;
  z-index: 0;
  opacity: 0.6;
}

/* ════════════════════════════════════════
   BIO
════════════════════════════════════════ */
.dp-bio {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem 5rem;
  overflow: hidden;
}

.dp-bio__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
  align-items: start;
}

.dp-bio__lead {
  font-family: 'Fraunces', serif;
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  font-weight: 300;
  line-height: 1.65;
  color: var(--dp-text);
  border-left: 2px solid var(--dp-accent);
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  text-wrap: pretty;
}

.dp-bio__body {
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  line-height: 1.9;
  color: var(--dp-muted);
  text-wrap: pretty;
  margin-bottom: 1.25rem;
}

.dp-bio__right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2.5rem;
  opacity: 1;
}

/* ── cards de info ── */
.dp-card {
  padding: 1.25rem 1.5rem;
  background: var(--dp-bg2);
  border: 1px solid var(--dp-border);
  border-radius: 8px;
  transition:
    border-color 0.22s ease,
    background   0.22s ease,
    transform    0.22s ease;
}

.dp-card:hover {
  border-color: var(--dp-bh);
  background: var(--dp-bg3);
  transform: translateX(4px);
}

.dp-card--active .dp-card__value { color: var(--dp-ok); }

.dp-card__label {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--dp-faint);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.dp-card__value {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--dp-text);
  line-height: 1.55;
}

.dp-card__dot {
  flex-shrink: 0;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--dp-ok);
  animation: dp-pulse 2.4s ease-in-out infinite;
}

/* ── ornamento ── */
.dp-ornament {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
  max-width: 280px;
}

.dp-ornament__line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, var(--dp-accent), transparent);
  opacity: 0.35;
}

.dp-ornament__diamond {
  width: 7px; height: 7px;
  background: var(--dp-accent);
  transform: rotate(45deg);
  opacity: 0.55;
  flex-shrink: 0;
}

/* ════════════════════════════════════════
   STACK
════════════════════════════════════════ */
.dp-stack {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem 6rem;
  overflow: hidden;
}

.dp-stack__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.dp-stack__title {
  font-family: 'Fraunces', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 0.95;
  color: var(--dp-text);
  text-wrap: balance;
  margin-bottom: 1rem;
}

.dp-stack__sub {
  font-size: 0.88rem;
  color: var(--dp-muted);
  line-height: 1.6;
  text-wrap: pretty;
}

.dp-stack__bars {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2.5rem;
}

/* ── barra individual ── */
.dp-bar__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.dp-bar__name {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: var(--dp-text);
  font-weight: 500;
}

.dp-bar__pct {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--dp-accent);
  opacity: 0.75;
}

.dp-bar__track {
  width: 100%;
  height: 3px;
  background: var(--dp-border);
  border-radius: 2px;
  overflow: hidden;
}

.dp-bar__fill {
  height: 100%;
  width: var(--fill, 50%);
  background: linear-gradient(90deg, var(--dp-accent), rgba(77, 184, 245, 0.35));
  border-radius: 2px;
  box-shadow: 0 0 10px var(--dp-accent-g);
  transition: width 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ════════════════════════════════════════
   FOOTER
════════════════════════════════════════ */
.dp-footer {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
}

.dp-footer__top {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.dp-footer__name {
  font-family: 'Fraunces', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dp-text);
  letter-spacing: -0.02em;
}

.dp-footer__sep { color: var(--dp-faint); }

.dp-footer__role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--dp-muted);
  letter-spacing: 0.08em;
}

.dp-footer__divider {
  width: 100%;
  height: 1px;
  background: var(--dp-border);
  margin-bottom: 1.5rem;
}

.dp-footer__copy {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  color: var(--dp-faint);
  letter-spacing: 0.05em;
}

/* ════════════════════════════════════════
   KEYFRAMES
════════════════════════════════════════ */
@keyframes dp-scaleIn {
  from { opacity: 0; transform: scale(1.05); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes dp-fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes dp-bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}

@keyframes dp-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.25; }
}

/* ════════════════════════════════════════
   REDUCED MOTION
════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  .js-animate {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .dp-hero__photo-wrap,
  .dp-hero__content,
  .dp-hero__scroll {
    animation: none !important;
  }
  .dp-hero__scroll-arrow,
  .dp-card__dot { animation: none !important; }
}

/* ════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════ */
@media (max-width: 1024px) {
  .dp-stack__inner { grid-template-columns: 1fr; gap: 2rem; }
  .dp-stack__bars  { padding-top: 0; }
}

@media (max-width: 900px) {
  .dp-bio__inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .dp-bio__right { padding-top: 0; flex-direction: row; flex-wrap: wrap; }
  .dp-card       { flex: 1; min-width: 200px; }
}

@media (max-width: 640px) {
  .dp-hero__content { padding: 3rem 1rem 2rem; }
  .dp-bio, .dp-stack { padding-left: 1rem; padding-right: 1rem; }
  .dp-bio__right { flex-direction: column; }
  .dp-card { min-width: auto; }
  .dp-hero__scroll { display: none; }
}
</style>