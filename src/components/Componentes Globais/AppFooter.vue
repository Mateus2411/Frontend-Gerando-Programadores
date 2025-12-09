<script setup>
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

        <!-- <div class="developer">
          <a href="https://github.com/Davi-Prussek" target="_blank" class="developer-link">
            <img src="/github-svgrepo-com.svg" alt="GitHub Logo" class="github-icon" />
            <span>Davi Prussek</span>
          </a>
        </div> -->
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
</style>
