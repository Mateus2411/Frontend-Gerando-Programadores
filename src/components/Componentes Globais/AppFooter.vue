<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- ESQUERDA: Copyright -->
      <div class="footer-section copyright">
        <p class="brand-text">Direcionamento de Estudo</p>
        <p class="copy-text">© 2025 • Todos os direitos reservados</p>
      </div>

      <!-- CENTRO: Logo / Branding -->
      <div class="footer-section branding">
        <div class="logo-wrapper">
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
        <h3 class="section-title">Equipe de Criação</h3>

        <div class="creators-grid">
          <div class="creator-card">
            <span class="role">Desenvolvedor</span>
            <a href="https://github.com/Mateus2411" target="_blank" class="github-pill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
              <span>Mateus</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 60px 20px;
  border-top: 1px solid var(--border-color);
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    sans-serif;
  transition: all 0.3s ease;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.6fr 1.2fr;
  align-items: center;
  gap: 40px;
}

/* SEÇÕES GERAIS */
.footer-section {
  display: flex;
  flex-direction: column;
}

/* ESQUERDA */
.brand-text {
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.copy-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
  opacity: 0.8;
}

/* CENTRO: Logo */
.branding {
  align-items: center;
}

.logo-placeholder {
  width: 70px;
  height: 70px;
  background: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--text-primary);
  transition: transform 0.3s ease;
  .logo-img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 15px;
    opacity: 0.95;
  }
}

.logo-placeholder:hover {
  transform: rotate(-5deg) scale(1.05);
}

/* DIREITA: Criadores */
.section-title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-primary);
  margin-bottom: 18px;
  text-align: right;
  font-weight: 600;
  opacity: 0.9;
}

.creators-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.creator-card {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
}

.role {
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
  opacity: 0.75;
}

.github-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--card-bg);
  padding: 8px 16px;
  border-radius: 10px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  border: 1px solid var(--border-color);
  min-width: 120px;
  opacity: 0.9;
}

.github-pill img {
  width: 18px;
  height: 18px;
  filter: brightness(0) invert(1);
  opacity: 0.85;
}

/* Modo escuro: ícone branco */
:root:not([data-theme='light']) .github-pill img {
  filter: brightness(0) invert(1);
  opacity: 0.85;
}

/* Modo claro: ícone escuro suave */
:root[data-theme='light'] .github-pill img {
  filter: brightness(0) invert(0);
  opacity: 0.6;
}

.github-pill:hover {
  background: var(--bg-primary);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateX(-5px);
  opacity: 1;
}

.github-pill:hover img {
  opacity: 1;
}

/* RESPONSIVO */
@media (max-width: 650px) {
  .footer {
    padding: 40px 20px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 35px;
  }

  .copyright {
    order: 2;
  }

  .branding {
    order: 1;
  }

  .creators {
    order: 3;
  }

  .section-title {
    text-align: center;
  }

  .creator-card {
    justify-content: center;
    flex-direction: row;
    gap: 12px;
  }

  .github-pill {
    min-width: 140px;
  }

  .github-pill:hover {
    transform: translateY(-3px);
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 30px 15px;
  }

  .footer-container {
    gap: 30px;
  }

  .brand-text {
    font-size: 1rem;
  }

  .copy-text {
    font-size: 0.8rem;
  }

  .logo-placeholder {
    width: 60px;
    height: 60px;
  }

  .logo-placeholder .logo-img {
    max-width: 150px;
    max-height: 150px;
  }

  .section-title {
    font-size: 0.8rem;
    margin-bottom: 15px;
  }

  .creators-grid {
    gap: 10px;
  }

  .creator-card {
    flex-direction: column;
    gap: 8px;
  }

  .role {
    font-size: 0.7rem;
  }

  .github-pill {
    min-width: 130px;
    padding: 7px 14px;
    font-size: 0.85rem;
  }

  .github-pill img {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 360px) {
  .footer {
    padding: 25px 12px;
  }

  .brand-text {
    font-size: 0.95rem;
  }

  .copy-text {
    font-size: 0.75rem;
  }

  .logo-placeholder {
    width: 50px;
    height: 50px;
  }

  .logo-placeholder .logo-img {
    max-width: 120px;
    max-height: 120px;
  }

  .github-pill {
    min-width: 120px;
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style>
