import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  // State - Inicializa com o valor do localStorage ou dark como padrão
  const isDark = ref(
    localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === null,
  )

  // Getters
  const currentTheme = () => (isDark.value ? 'dark' : 'light')

  // Actions
  function toggleTheme() {
    isDark.value = !isDark.value
  }

  function setTheme(dark) {
    isDark.value = dark
  }

  function setLightTheme() {
    isDark.value = false
  }

  function setDarkTheme() {
    isDark.value = true
  }

  function initTheme() {
    // Garante que o tema seja aplicado ao iniciar
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  }

  // Salva no localStorage e aplica no documento
  watch(
    isDark,
    (dark) => {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
      console.log('Tema alterado para:', dark ? 'dark' : 'light')
    },
    { immediate: true },
  )

  return {
    // State
    isDark,
    // Getters
    currentTheme,
    // Actions
    toggleTheme,
    setTheme,
    setLightTheme,
    setDarkTheme,
    initTheme,
  }
})
