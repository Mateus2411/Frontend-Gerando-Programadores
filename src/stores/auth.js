import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/axios'

export const useAuthStore = defineStore('auth', () => {
  console.log('🔄 Auth Store inicializado em:', new Date().toISOString())

  // State
  const logado = ref(false)
  const userProfile = ref(null)
  const cursos = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Getters
  const isAuthenticated = computed(() => logado.value)
  const currentUser = computed(() => userProfile.value)
  const username = computed(() => userProfile.value?.username || 'Visitante')
  const email = computed(() => userProfile.value?.email || '')
  const bio = computed(
    () => userProfile.value?.biography || userProfile.value?.bio || 'Sem biografia',
  )
  const createdAt = computed(() => userProfile.value?.created_at || '')
  const cursosAtivos = computed(() => cursos.value.filter((c) => c.status === 1))
  const totalCursos = computed(() => cursos.value.length)

  // Actions
  async function loadAuth() {
    loading.value = true
    error.value = null

    try {
      const res = await api.get('/auth/me')

      // Tenta diferentes estruturas de resposta
      let userData = null
      let isLoggedIn = false

      if (res.data.logado && res.data.user) {
        userData = res.data.user
        isLoggedIn = true
      } else if (res.data.user) {
        userData = res.data.user
        isLoggedIn = true
      } else if (res.data.id || res.data.username || res.data.email) {
        userData = res.data
        isLoggedIn = true
      } else if (res.data.data) {
        userData = res.data.data
        isLoggedIn = true
      }

      if (isLoggedIn && userData) {
        logado.value = true
        userProfile.value = userData
        cursos.value = userData.cursos || []
      } else {
        logado.value = false
        userProfile.value = null
        cursos.value = []
      }

      return res
    } catch (err) {
      console.error('Erro ao carregar autenticação:', err)

      logado.value = false
      userProfile.value = null
      cursos.value = []

      if (err.response?.status === 401 || err.response?.status === 404) {
        error.value = null
        return null
      }

      error.value = err.response?.data?.msg || err.message || 'Erro ao carregar autenticação'
      throw err
    } finally {
      loading.value = false
    }
  }

  function setUserProfile(data) {
    if (data) {
      if (data.logado && data.user) {
        userProfile.value = data.user
        cursos.value = data.user.cursos || []
        logado.value = true
      } else if (data.user) {
        userProfile.value = data.user
        cursos.value = data.user.cursos || []
        logado.value = true
      } else {
        userProfile.value = data
        cursos.value = data.cursos || []
        logado.value = true
      }
    } else {
      userProfile.value = null
      cursos.value = []
      logado.value = false
    }
  }

  async function login(email, password) {
    loading.value = true
    error.value = null

    try {
      const res = await api.post('/login', { email, password })
      setUserProfile(res.data)

      try {
        const authRes = await loadAuth()
        if (!authRes) {
          // Endpoint /auth/me não disponível, usando dados do login
        }
      } catch {
        // Erro ao recarregar dados, mantendo dados do login
      }

      return res
    } catch (err) {
      console.error('Erro no login:', err)
      error.value = err.response?.data?.msg || err.message || 'Email ou senha incorretos'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function register(username, email, password) {
    loading.value = true
    error.value = null

    try {
      const res = await api.post('/register', { username, email, password })
      return res
    } catch (err) {
      console.error('Erro ao cadastrar:', err)
      error.value = err.response?.data?.msg || err.message || 'Erro ao cadastrar'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    loading.value = true
    error.value = null

    try {
      await api.post('/auth/logout')
    } catch (err) {
      console.error('Erro ao fazer logout:', err)
    } finally {
      logado.value = false
      userProfile.value = null
      cursos.value = []
      loading.value = false
    }
  }

  async function exportUserData() {
    loading.value = true
    error.value = null

    try {
      let userData = null

      if (userProfile.value) {
        userData = userProfile.value
      } else {
        const res = await api.get('/auth/me')
        userData = res.data.user || res.data.data || res.data
      }

      if (!userData || Object.keys(userData).length === 0) {
        throw new Error('Nenhum dado de usuário disponível para exportar')
      }

      const exportData = {
        exportDate: new Date().toISOString(),
        version: '1.0',
        data: userData,
      }

      const dataStr = JSON.stringify(exportData, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(dataBlob)

      const link = document.createElement('a')
      link.href = url
      link.download = `meus-dados-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Erro ao exportar dados:', err)
      error.value = err.message || 'Erro ao exportar dados'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function updateUsername(userName) {
    loading.value = true
    error.value = null

    try {
      const res = await api.put('/auth/username', { userName })
      console.log('updateUsername: Nome atualizado:', res.data)

      // Atualiza o perfil local
      if (res.data.user) {
        userProfile.value = { ...userProfile.value, ...res.data.user }
      } else if (res.data.username) {
        userProfile.value.username = res.data.username
      }

      return res
    } catch (err) {
      console.error('updateUsername: Erro ao atualizar nome:', err)
      error.value = err.response?.data?.msg || err.message || 'Erro ao atualizar nome'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function updateBio(bio) {
    loading.value = true
    error.value = null

    try {
      const res = await api.put('/auth/bio', { bio })
      console.log('updateBio: Biografia atualizada:', res.data)

      // Atualiza o perfil local
      if (res.data.user) {
        userProfile.value = { ...userProfile.value, ...res.data.user }
      } else if (res.data.bio !== undefined) {
        userProfile.value.bio = res.data.bio
        userProfile.value.biography = res.data.bio
      }

      return res
    } catch (err) {
      console.error('updateBio: Erro ao atualizar biografia:', err)
      error.value = err.response?.data?.msg || err.message || 'Erro ao atualizar biografia'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function updatePassword(currentPassword, newPassword) {
    loading.value = true
    error.value = null

    try {
      const res = await api.put('/auth/password', { currentPassword, newPassword })
      console.log('updatePassword: Senha atualizada:', res.data)

      return res
    } catch (err) {
      console.error('updatePassword: Erro ao atualizar senha:', err)
      error.value = err.response?.data?.msg || err.message || 'Erro ao atualizar senha'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function updateFoto(fotoNome) {
    loading.value = true
    error.value = null

    try {
      const res = await api.put('/auth/foto', { foto: fotoNome })
      console.log('updateFoto: Foto atualizada:', res.data)

      // Atualiza o perfil local
      if (res.data.user) {
        userProfile.value = { ...userProfile.value, ...res.data.user }
      } else if (res.data.foto !== undefined) {
        userProfile.value.foto = res.data.foto
      }

      return res
    } catch (err) {
      console.error('updateFoto: Erro ao atualizar foto:', err)
      error.value = err.response?.data?.msg || err.message || 'Erro ao atualizar foto'
      throw err
    } finally {
      loading.value = false
    }
  }

  function clearError() {
    error.value = null
  }

  return {
    // State
    logado,
    userProfile,
    cursos,
    loading,
    error,
    // Getters
    isAuthenticated,
    currentUser,
    username,
    email,
    bio,
    createdAt,
    cursosAtivos,
    totalCursos,
    // Actions
    loadAuth,
    setUserProfile,
    login,
    register,
    logout,
    exportUserData,
    updateUsername,
    updateBio,
    updatePassword,
    updateFoto,
    clearError,
  }
})
