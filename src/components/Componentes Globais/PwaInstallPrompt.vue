<template>
  <Transition name="pwa-fade">
    <div v-if="showInstallPrompt" class="pwa-install-container" :class="{ dark: isDark }">
      <div class="pwa-install-card">
        <div class="pwa-header">
          <img src="/if-logo-s-fundo.png" alt="Logo" class="pwa-logo" />
          <h3 class="pwa-title">Instalar Gerando Programadores</h3>
        </div>
        <p class="pwa-description">
          Instale nosso app para uma experiência mais rápida e completa, com acesso offline.
        </p>
        <div class="pwa-actions">
          <button class="pwa-btn pwa-btn-install" @click="installPwa">
            <span class="pwa-btn-text">Instalar App</span>
          </button>
          <button class="pwa-btn pwa-btn-dismiss" @click="dismissPrompt">
            Agora não
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const isDark = themeStore.isDark

const showInstallPrompt = ref(false)
let deferredPrompt = null

const handleBeforeInstallPrompt = (e) => {
  e.preventDefault()
  deferredPrompt = e
  showInstallPrompt.value = true
}

const installPwa = async () => {
  if (!deferredPrompt) return
  
  deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice
  
  if (outcome === 'accepted') {
    console.log('PWA instalado com sucesso!')
  } else {
    console.log('Usuário rejeitou a instalação')
  }
  
  deferredPrompt = null
  showInstallPrompt.value = false
}

const dismissPrompt = () => {
  showInstallPrompt.value = false
  deferredPrompt = null
}

const handleAppInstalled = () => {
  showInstallPrompt.value = false
  deferredPrompt = null
  console.log('PWA instalado!')
}

onMounted(() => {
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  window.addEventListener('appinstalled', handleAppInstalled)
})

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  window.removeEventListener('appinstalled', handleAppInstalled)
})
</script>

<style scoped>
.pwa-install-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: 90%;
  max-width: 400px;
  font-family: 'IBM Plex Sans', sans-serif;
}

.pwa-install-card {
  background: #181818;
  color: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.pwa-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.pwa-logo {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.pwa-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #ffffff;
}

.pwa-description {
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
}

.pwa-actions {
  display: flex;
  gap: 12px;
}

.pwa-btn {
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pwa-btn-install {
  background: #3b82f6;
  color: white;
}

.pwa-btn-install:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.pwa-btn-dismiss {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}

.pwa-btn-dismiss:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Transição suave */
.pwa-fade-enter-active,
.pwa-fade-leave-active {
  transition: all 0.3s ease;
}

.pwa-fade-enter-from,
.pwa-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

/* Tema claro (se necessário no futuro) */
.pwa-install-container:not(.dark) .pwa-install-card {
  background: #ffffff;
  color: #181818;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.pwa-install-container:not(.dark) .pwa-title {
  color: #181818;
}

.pwa-install-container:not(.dark) .pwa-description {
  color: rgba(0, 0, 0, 0.7);
}

.pwa-install-container:not(.dark) .pwa-btn-dismiss {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.7);
}

.pwa-install-container:not(.dark) .pwa-btn-dismiss:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
