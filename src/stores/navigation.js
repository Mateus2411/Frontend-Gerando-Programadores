import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

export const useNavigationStore = defineStore('navigation', () => {
  // Rotas públicas (sempre visíveis)
  const rotasPublicas = [
    { label: 'Home', to: '/', name: 'home' },
    { label: 'Cadastrar', to: '/cadastrar', name: 'cadastrar' },
    
  ]

  // Rotas privadas (apenas para usuários autenticados)
  const rotasPrivadas = [
{ label: 'Developers', to: '/devs', name: 'Developers' },
    { label: 'Ias', to: '/ias', name: 'IAs' },
    { label: 'Aprendizagem', to: '/trilhas', name: 'trilhas' },
  ]

  // Getter que retorna as rotas baseado no estado de autenticação
  const rotasMenu = computed(() => {
    const authStore = useAuthStore()

    if (authStore.logado) {
      return [...rotasPublicas, ...rotasPrivadas]
    }

    return rotasPublicas
  })

  // Verifica se uma rota específica está disponível
  function isRotaDisponivel(routeName) {
    return rotasMenu.value.some((rota) => rota.name === routeName)
  }

  // Adiciona uma rota dinâmica (se necessário no futuro)
  function adicionarRota(rota) {
    if (!rotasPrivadas.find((r) => r.name === rota.name)) {
      rotasPrivadas.push(rota)
    }
  }

  // Remove uma rota dinâmica (se necessário no futuro)
  function removerRota(routeName) {
    const index = rotasPrivadas.findIndex((r) => r.name === routeName)
    if (index !== -1) {
      rotasPrivadas.splice(index, 1)
    }
  }

  return {
    // Getters
    rotasMenu,
    rotasPublicas,
    rotasPrivadas,
    // Actions
    isRotaDisponivel,
    adicionarRota,
    removerRota,
  }
})
