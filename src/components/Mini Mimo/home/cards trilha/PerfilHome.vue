<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Computed para o avatar do usuário
const avatarUrl = computed(() => {
  if (authStore.userProfile?.foto) {
    const fotoNome = authStore.userProfile.foto
    
    if (fotoNome.startsWith('masc-')) {
      return `/perfil_avatar/masculino/${fotoNome}`
    } else if (fotoNome.startsWith('fem-')) {
      return `/perfil_avatar/feminino/${fotoNome}`
    }
  }
  
  return '/favicon.ico'
})

// Cursos ativos fictícios (depois você pode puxar do backend)
const cursosAtivos = [
  {
    nome: 'JavaScript',
    progresso: 65,
    imagem: '/img Curso/javascript.png',
    cor: '#f7df1e'
  },
  {
    nome: 'Python',
    progresso: 40,
    imagem: '/img Curso/python.png',
    cor: '#3776ab'
  },
  {
    nome: 'HTML',
    progresso: 85,
    imagem: '/img Curso/html5.png',
    cor: '#e34f26'
  }
]
</script>

<template>
  <section class="perfil-container">
    <h1 class="titulo">Meu Perfil</h1>

    <div class="perfil-card">
      <!-- Avatar e Info -->
      <div class="perfil-header">
        <div class="avatar-wrapper">
          <img :src="avatarUrl" alt="Foto de perfil" class="avatar">
          <div class="status-badge"></div>
        </div>
        <div class="perfil-info">
          <h2 class="nome">{{ authStore.username }}</h2>
          <p class="email">{{ authStore.email }}</p>
          <div class="stats">
            <div class="stat">
              <span class="stat-number">{{ cursosAtivos.length }}</span>
              <span class="stat-label">Cursando</span>
            </div>
            <div class="stat">
              <span class="stat-number">12</span>
              <span class="stat-label">Concluídos</span>
            </div>
            <div class="stat">
              <span class="stat-number">850</span>
              <span class="stat-label">Pontos</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Cursos Ativos -->
      <div class="cursos-section">
        <h3 class="secao-titulo">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          Cursando Agora
        </h3>

        <div class="cursos-grid">
          <div v-for="curso in cursosAtivos" :key="curso.nome" class="curso-card">
            <div class="curso-header">
              <div class="curso-badge" :style="{ background: curso.cor }">
                <img :src="curso.imagem" :alt="curso.nome">
              </div>
              <div class="curso-info">
                <h4>{{ curso.nome }}</h4>
                <p>{{ curso.progresso }}% completo</p>
              </div>
            </div>

            <div class="progresso-container">
              <div class="progresso-bar">
                <div 
                  class="progresso-fill" 
                  :style="{ width: curso.progresso + '%', background: curso.cor }"
                ></div>
              </div>
            </div>

            <button class="btn-continuar">
              Continuar
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perfil-container {
  padding: 1.5rem;
  margin-top: 6rem;
  background: var(--bg-primary);
  min-height: auto;
  transition: background-color 0.3s ease;
}

.titulo {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
}

.perfil-card {
  background: var(--card-bg);
  border-radius: 24px;
  padding: 1.75rem;
  box-shadow: 0 4px 20px var(--shadow-color);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Header do Perfil */
.perfil-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 1.5rem;
  transition: border-color 0.3s ease;
}

.avatar-wrapper {
  position: relative;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent-primary);
  box-shadow: 0 4px 12px rgba(45, 28, 212, 0.2);
  transition: border-color 0.3s ease;
}

.status-badge {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  background: #4caf50;
  border: 3px solid white;
  border-radius: 50%;
}

.perfil-info {
  flex: 1;
}

.nome {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
  transition: color 0.3s ease;
}

.email {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
  transition: color 0.3s ease;
}

.stats {
  display: flex;
  gap: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-primary);
  transition: color 0.3s ease;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
  transition: color 0.3s ease;
}

/* Seção de Cursos */
.cursos-section {
  margin-top: 1.5rem;
}

.secao-titulo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
  transition: color 0.3s ease;
}

.secao-titulo svg {
  color: var(--accent-primary);
  transition: color 0.3s ease;
}

.cursos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  max-height: 450px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

/* Scrollbar customizada */
.cursos-grid::-webkit-scrollbar {
  width: 6px;
}

.cursos-grid::-webkit-scrollbar-track {
  background: var(--bg-secondary);
  border-radius: 10px;
}

.cursos-grid::-webkit-scrollbar-thumb {
  background: var(--accent-primary);
  border-radius: 10px;
}

.curso-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 1.5rem;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.curso-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}

.curso-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.curso-badge {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0.4rem;
}

.curso-badge img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

.curso-info h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
}

.curso-info p {
  font-size: 0.85rem;
  opacity: 0.9;
  margin: 0;
}

.progresso-container {
  margin-bottom: 1.25rem;
}

.progresso-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
}

.progresso-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.btn-continuar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-continuar:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(5px);
}

/* Responsivo */
@media (max-width: 768px) {
  .perfil-container {
    padding: 1.5rem;
  }

  .titulo {
    font-size: 2rem;
  }

  .perfil-card {
    padding: 1.5rem;
  }

  .perfil-header {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .avatar {
    width: 80px;
    height: 80px;
  }

  .nome {
    font-size: 1.5rem;
  }

  .stats {
    justify-content: center;
    gap: 1rem;
  }

  .stat {
    padding: 0.5rem 1rem;
  }

  .stat-number {
    font-size: 1.25rem;
  }

  .cursos-grid {
    grid-template-columns: 1fr;
    max-height: 400px;
  }
}

@media (max-width: 480px) {
  .perfil-container {
    padding: 1rem;
  }

  .titulo {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  .perfil-card {
    padding: 1.25rem;
    border-radius: 16px;
  }

  .avatar {
    width: 70px;
    height: 70px;
  }

  .nome {
    font-size: 1.3rem;
  }

  .email {
    font-size: 0.85rem;
  }

  .stats {
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .stat {
    flex: 1;
    min-width: 80px;
  }

  .secao-titulo {
    font-size: 1.2rem;
  }

  .curso-card {
    padding: 1.25rem;
  }

  .curso-badge {
    width: 45px;
    height: 45px;
  }

  .curso-badge img {
    width: 30px;
    height: 30px;
  }

  .curso-info h4 {
    font-size: 1.1rem;
  }
}

/* Modo escuro - logos pretos */
:root[data-theme='dark'] .curso-badge img {
  filter: brightness(0) invert(0);
  opacity: 0.9;
}
</style>