<script setup>
</script>
<template>
  <footer>
    <div class="footer-content">
      <div class="footer-copyright">
        <p>&copy; 2025 Direcionamento de Estudo. Todos os direitos reservados.</p>
      </div>
      <div class="footer-developers">
        <div class="developer">
          <a href="https://github.com/Mateus2411" target="_blank" class="developer-link">
            <img src="/github-svgrepo-com.svg" alt="GitHub Logo" class="github-icon" />
            <span>Mateus Henrique</span>
          </a>
        </div>
        <div class="developer">
          <a href="https://github.com/Davi-Prussek" target="_blank" class="developer-link">
            <img src="/github-svgrepo-com.svg" alt="GitHub Logo" class="github-icon" />
            <span>Davi Prussek</span>
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
  text-decoration: none;
  list-style: none;
}

footer {
  width: 100%;
  margin-top: 4rem;
  padding: 0;
  background: linear-gradient(180deg, #222222 0%, #222222 100%);
  border-top: 1px solid #e0e0e0;
}

.footer-content {
  max-width: 1200px;
  margin: 0;
  padding: 2.5rem 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-around;
}

.footer-copyright {
  text-align: center;
}

.footer-copyright p {
  color: #ffffff;
  font-size: 0.9rem;
  margin: 0;
}

.footer-developers {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.developer {
  display: flex;
  align-items: center;
}

.developer-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff5f5;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: transparent;
  filter: brightness(100%);
}

.developer-link:hover {
  background:   rgba(255, 255, 255, 0.1);
  color: #4a73ff;
  transform: translateY(-2px);
}

.github-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  filter: brightness(0) saturate(100%);
}

.developer-link:hover .github-icon {
  transform: scale(1.1);
  filter: brightness(0) saturate(100%) invert(37%) sepia(96%) saturate(2000%) hue-rotate(220deg)
    brightness(100%) contrast(100%);
}

.developer-link span {
  transition: color 0.3s ease;
}

/* Responsividade */
@media (max-width: 600px) {
  .footer-content {
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }

  .footer-developers {
    flex-direction: column;
    gap: 1rem;
  }

  .footer-copyright p {
    font-size: 0.85rem;
  }
}
</style>
