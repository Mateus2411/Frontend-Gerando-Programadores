<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const loading = ref(true)

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

// Usar computed para garantir reatividade
const user = computed(() => {
  if (authStore.userProfile && authStore.logado) {
    const profile = authStore.userProfile

    return {
      id: profile.id || null,
      username: profile.username || profile.name || 'Usuário',
      email: profile.email || '[email]@exemplo.com',
      bio: profile.bio || 'Aprendendo programação e construindo o futuro.',
      created_at: profile.created_at || profile.createdAt || null,
      cursosConcluidos: 5,
      cursosEmAndamento: 3,
      pontos: 1250,
    }
  }

  return {
    id: null,
    username: 'Usuário',
    email: '[email]@exemplo.com',
    bio: 'Aprendendo programação e construindo o futuro.',
    created_at: null,
    cursosConcluidos: 5,
    cursosEmAndamento: 3,
    pontos: 1250,
  }
})

async function handleExportData() {
  try {
    await authStore.exportUserData()
    alert('Dados exportados com sucesso!')
  } catch {
    alert('Erro ao exportar dados')
  }
}

onMounted(async () => {
  try {
    loading.value = true
    authStore.clearError()
    await authStore.loadAuth()
  } catch (err) {
    console.error('Erro ao carregar perfil:', err)

    if (err.response?.status === 401) {
      authStore.clearError()
    }
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="perfil">
    <div class="container">
      <!-- Loading -->
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>Carregando perfil...</p>
      </div>

      <!-- Erro -->
      <div v-else-if="authStore.error" class="error-message">
        <p>{{ authStore.error }}</p>
      </div>

      <!-- Conteúdo -->
      <template v-else>
        <!-- Header do Perfil -->
        <div class="perfil-header">
          <div class="avatar-wrapper">
            <img :src="avatarUrl" alt="Avatar do usuário" class="avatar" />
          </div>

          <div class="perfil-info">
            <h1 class="nome">{{ user.username }}</h1>
            <p class="email">{{ user.email }}</p>
            <p class="bio">{{ user.bio }}</p>
            <p v-if="user.created_at" class="membro-desde">
              Membro desde {{ new Date(user.created_at).toLocaleDateString('pt-BR') }}
            </p>
          </div>
        </div>

        <!-- Estatísticas -->
        <div class="stats">
          <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-content">
              <span class="stat-number">{{ user.cursosConcluidos }}</span>
              <span class="stat-label">Concluídos</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">🚀</div>
            <div class="stat-content">
              <span class="stat-number">{{ user.cursosEmAndamento }}</span>
              <span class="stat-label">Em Andamento</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">⭐</div>
            <div class="stat-content">
              <span class="stat-number">{{ user.pontos }}</span>
              <span class="stat-label">Pontos</span>
            </div>
          </div>
        </div>

        <!-- Ações -->
        <div class="acoes">
          <button class="btn-primary" @click="$router.push('/perfil/editar')">Editar Perfil</button>
          <button class="btn-secondary" @click="handleExportData">Exportar Dados</button>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.perfil {
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.loading,
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(29, 155, 240, 0.15);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  color: #ff6b6b;
  font-size: 1.2rem;
}

.perfil-header {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px var(--shadow-color);
}

.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent-primary);
  background: var(--bg-secondary);
  transition: border-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(29, 155, 240, 0.2);
}

.edit-avatar {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 3px solid var(--card-bg);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(29, 155, 240, 0.3);
}

.edit-avatar:hover {
  background: var(--accent-hover);
  transform: scale(1.1);
}

.perfil-info {
  flex: 1;
}

.nome {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.email {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.bio {
  font-size: 1.1rem;
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.membro-desde {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-style: italic;
  transition: color 0.3s ease;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.stat-card:hover {
  background: var(--card-hover);
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px var(--shadow-color);
}

.stat-icon {
  font-size: 2.5rem;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-primary);
  transition: color 0.3s ease;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.acoes {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-primary,
.btn-secondary {
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.btn-primary {
  background: var(--accent-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(29, 155, 240, 0.3);
}

.btn-secondary {
  background: var(--card-bg);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--card-hover);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

/* Mobile */
@media (max-width: 768px) {
  .perfil {
    padding: 7rem 1rem 2rem;
  }

  .perfil-header {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
  }

  .avatar {
    width: 100px;
    height: 100px;
  }

  .nome {
    font-size: 1.5rem;
  }

  .stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .acoes {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .nome {
    font-size: 1.3rem;
  }

  .bio {
    font-size: 1rem;
  }

  .stat-icon {
    font-size: 2rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>
