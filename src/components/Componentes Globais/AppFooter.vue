<script setup>
const currentYear = new Date().getFullYear()

const creators = [
  {
    role: 'Desenvolvedor',
    name: 'Mateus',
    github: 'https://github.com/Mateus2411',
  },
]
</script>

<template>
  <footer class="footer">
    <!-- Background Effects -->
    <div class="footer-bg" aria-hidden="true">
      <div class="bg-glow bg-glow--left"></div>
      <div class="bg-glow bg-glow--right"></div>
      <div class="bg-grid"></div>
    </div>

    <div class="footer-container">
      <!-- Main Content -->
      <div class="footer-main">
        <!-- ESQUERDA: Copyright + Made with -->
        <div class="footer-section copyright">
          <p class="brand-text">Direcionamento de Estudo</p>
          <p class="copy-text">
            <span>&copy; {{ currentYear }} • Todos os direitos reservados</span>
          </p>
          <p class="made-with">
            <span class="heart-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
            Feito com ☕
          </p>
        </div>

        <!-- CENTRO: Logo / Branding -->
        <div class="footer-section branding">
          <div class="logo-wrapper">
            <div class="logo-glow"></div>
            <div class="logo-placeholder">
              <img
                src="/Gemini_Generated_Image_yhkozhyhkozhyhko-removebg-preview.png"
                alt="Logo Direcionamento de Estudo"
                class="logo-img"
              />
            </div>
          </div>
        </div>

        <!-- DIREITA: Criadores -->
        <div class="footer-section creators">
          <h3 class="section-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Equipe de Criação
          </h3>

          <div class="creators-list">
            <div v-for="creator in creators" :key="creator.name" class="creator-card">
              <span class="role">{{ creator.role }}</span>
              <a :href="creator.github" target="_blank" class="github-pill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                />
                <span>{{ creator.name }}</span>
                <svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ==================== FOOTER ==================== */
.footer {
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 0;
  border-top: 1px solid var(--border-color);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

/* Background Effects */
.footer-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
}

.bg-glow--left {
  width: 300px;
  height: 300px;
  top: -50%;
  left: -10%;
  background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
}

.bg-glow--right {
  width: 250px;
  height: 250px;
  bottom: -50%;
  right: -5%;
  background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(29, 155, 240, 0.04) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* ==================== CONTAINER ==================== */
.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 24px 30px;
  position: relative;
  z-index: 1;
}

/* ==================== MAIN LAYOUT ==================== */
.footer-main {
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr;
  align-items: start;
  gap: 40px;
}

/* SEÇÕES GERAIS */
.footer-section {
  display: flex;
  flex-direction: column;
}

/* ==================== ESQUERDA ==================== */
.copyright {
  align-items: flex-start;
}

.brand-text {
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.copy-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  opacity: 0.75;
}

.copy-icon {
  display: flex;
  color: var(--accent-primary);
  opacity: 0.6;
}

.made-with {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  font-size: 0.75rem;
  color: var(--text-tertiary);
  opacity: 0.6;
  white-space: nowrap;
}

.heart-icon {
  display: flex;
  color: #ef4444;
  animation: heartPulse 1.5s ease-in-out infinite;
}

@keyframes heartPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

/* ==================== CENTRO: Logo ==================== */
.branding {
  align-items: center;
}

.logo-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-glow {
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
  opacity: 0.15;
  filter: blur(20px);
  border-radius: 50%;
}

.logo-placeholder {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.logo-img {
  max-width: 220px;
  max-height: 220px;
  border-radius: 16px;
  opacity: 0.95;
  filter: drop-shadow(0 4px 12px rgba(29, 155, 240, 0.15));
}

.logo-placeholder:hover {
  transform: scale(1.08) rotate(-3deg);
}

/* ==================== DIREITA: Criadores ==================== */
.creators {
  align-items: flex-end;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-primary);
  margin-bottom: 20px;
  font-weight: 600;
  opacity: 0.85;
}

.creators-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.creator-card {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.role {
  font-size: 0.78rem;
  color: var(--text-secondary);
  font-weight: 500;
  opacity: 0.65;
  letter-spacing: 0.02em;
}

.github-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--card-bg);
  padding: 10px 18px;
  border-radius: 12px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid var(--card-border);
}

.github-pill img {
  width: 18px;
  height: 18px;
  filter: brightness(0) invert(1);
  opacity: 0.8;
  transition: opacity 0.25s ease;
}

.external-icon {
  opacity: 0;
  transform: translate(-4px, 2px);
  transition: all 0.25s ease;
  color: var(--accent-primary);
}

/* Modo escuro: ícone branco */
:root:not([data-theme='light']) .github-pill img {
  filter: brightness(0) invert(1);
}

/* Modo claro: ícone escuro suave */
:root[data-theme='light'] .github-pill img {
  filter: brightness(0) invert(0);
  opacity: 0.5;
}

.github-pill:hover {
  background: var(--bg-primary);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateX(-6px);
  box-shadow: 0 6px 20px rgba(29, 155, 240, 0.12);
}

.github-pill:hover img {
  opacity: 1;
}

.github-pill:hover .external-icon {
  opacity: 1;
  transform: translate(0, 0);
}

/* ==================== RESPONSIVO ==================== */
@media (max-width: 768px) {
  .footer-container {
    padding: 40px 20px 28px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 35px;
  }

  .copyright {
    align-items: center;
  }

  .creators {
    align-items: center;
  }

  .section-title {
    justify-content: center;
  }

  .creator-card {
    justify-content: center;
    flex-direction: row;
  }

  .divider-line {
    max-width: 120px;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 32px 16px 24px;
  }

  .footer-divider {
    margin-bottom: 32px;
  }

  .brand-text {
    font-size: 1.05rem;
  }

  .copy-text {
    font-size: 0.78rem;
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }

  .logo-placeholder {
    width: 65px;
    height: 65px;
  }

  .logo-img {
    max-width: 170px;
    max-height: 170px;
  }

  .section-title {
    font-size: 0.7rem;
    margin-bottom: 16px;
  }

  .creator-card {
    flex-direction: column;
    gap: 8px;
  }

  .github-pill {
    min-width: 150px;
    padding: 8px 16px;
    font-size: 0.85rem;
  }

  .footer-bottom {
    margin-top: 32px;
    padding-top: 20px;
  }

  .bottom-text {
    font-size: 0.75rem;
  }
}

@media (max-width: 360px) {
.footer-container {
    padding: 32px 16px 24px;
  }

  .brand-text {
    font-size: 0.95rem;
  }

  .logo-placeholder {
    width: 55px;
    height: 55px;
  }

  .logo-img {
    max-width: 140px;
    max-height: 140px;
  }

  .github-pill {
    min-width: 130px;
    padding: 7px 14px;
    font-size: 0.8rem;
  }
}
</style>
