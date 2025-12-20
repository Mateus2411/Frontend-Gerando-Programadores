<!-- <script setup>
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="footer-left">
        <p>&copy; 2025 Direcionamento de Estudo. Todos os direitos reservados.</p>
      </div>

      <div class="footer-developers">
        <div class="developer">
          <a href="https://github.com/Mateus2411" target="_blank" class="developer-link">
            <img src="/github-svgrepo-com.svg" alt="GitHub Logo" class="github-icon" />
            <span>Mateus Henrique</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

footer {
  width: 100%;
  margin-top: 4rem;
  background: #222222;
  border-top: 1px solid #333;
  padding: 2rem 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 1.5rem;
}

.footer-left p {
  color: #e6e6e6;
  font-size: 0.95rem;
}

.footer-developers {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.developer {
  display: flex;
  align-items: center;
}

.developer-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  color: #f5f5f5;
  font-size: 0.95rem;
  font-weight: 500;

  padding: 0.5rem 1rem;
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.developer-link:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
  color: #4a73ff;
}

.github-icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.developer-link:hover .github-icon {
  transform: scale(1.1);
  filter: invert(47%) sepia(99%) saturate(2020%) hue-rotate(214deg) brightness(95%) contrast(101%);
}

/* Responsivo */
@media (max-width: 700px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-left p {
    font-size: 0.9rem;
  }

  .developer-link {
    padding: 0.45rem 0.9rem;
    font-size: 0.9rem;
  }
}
</style> -->
<script setup>
// Podes adicionar lógica aqui se necessário (ex: data dinâmica)
</script>

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
            <span class="role">UX/UI Design</span>
            <a href="https://github.com/estela" target="_blank" class="github-pill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
              <span>Estela</span>
            </a>
          </div>

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
          <div class="creator-card">
            <span class="role">Desenvolvedor ajudante</span>
            <a href="https://github.com/Nicolas23264654" target="_blank" class="github-pill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
              <span>Black</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Estilos em CSS Puro */
.footer {
  background-color: #0a192f; /* Azul marinho profundo */
  color: #e6f1ff;
  padding: 60px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    sans-serif;
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
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 4px;
  letter-spacing: -0.02em;
}

.copy-text {
  font-size: 0.85rem;
  color: #8892b0;
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
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  .logo-img{
    max-width: 200px;
    max-height: 200px;
    border-radius: 15px;
  }
}

.logo-placeholder:hover {
  transform: rotate(-5deg) scale(1.05);
}

/* DIREITA: Criadores */
.section-title {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #64ffda;
  margin-bottom: 20px;
  text-align: right;
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
  color: #8892b0;
  font-weight: 500;
}

.github-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 8px 16px;
  border-radius: 12px;
  color: #ccd6f6;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;
  min-width: 120px;
}

.github-pill img {
  width: 18px;
  height: 18px;
  filter: brightness(0) invert(1);
}

.github-pill:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: #64ffda;
  color: #64ffda;
  transform: translateX(-5px);
}

/* RESPONSIVO */
@media (max-width: 900px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 50px;
  }

  .section-title {
    text-align: center;
  }

  .creator-card {
    justify-content: center;
    flex-direction: column;
    gap: 5px;
  }

  .github-pill:hover {
    transform: translateY(-3px);
  }
}
</style>
