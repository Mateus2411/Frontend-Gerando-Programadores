<script setup>
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from '@/stores/theme'
import { useNavigationStore } from '@/stores/navigation'
import { useRouter } from 'vue-router'
import AIBox from '@/components/Mini Mimo/AIBox/AIBox.vue'

const router = useRouter()
const authStore = useAuthStore()
const themeStore = useThemeStore()
const navStore = useNavigationStore()

// State
const menuAberto = ref(false)
const chatAberto = ref(false)
const headerVisible = ref(true)
const lastScrollY = ref(0)

// Computed para a logo da sidebar baseado no tema
const logoUrl = computed(() => {
  return themeStore.isDark ? '/if-logo-s-fundo.png' : '/if-preto.png'
})

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

  return authStore.logado ? '/favicon.ico' : '/no-img.png'
})

// Funções
function toggleMenu() {
  menuAberto.value = !menuAberto.value
}

function toggleChat() {
  chatAberto.value = !chatAberto.value
  console.log('Chat aberto:', chatAberto.value)
}

function closeMenu() {
  menuAberto.value = false
}

function closeChat() {
  chatAberto.value = false
}

function handleScroll() {
  const currentScrollY = window.scrollY
  const scrollPercent = currentScrollY / (document.body.scrollHeight - window.innerHeight)

  // Esconde header se rolar mais de 5% para baixo
  if (scrollPercent > 0.05 && currentScrollY > lastScrollY.value) {
    headerVisible.value = false
  } else {
    headerVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

function handleKeydown(e) {
  if (e.key === 'Escape') {
    if (chatAberto.value) {
      closeChat()
    } else if (menuAberto.value) {
      closeMenu()
    }
  }
}

async function handleLogout() {
  try {
    await authStore.logout()
  } finally {
    closeMenu()
    router.push('/cadastrar')
  }
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('keydown', handleKeydown)
  // Carrega autenticação para atualizar as rotas
  authStore.loadAuth().catch(() => {})
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleKeydown)
})

// Watchers
watch(menuAberto, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
  } else {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
    document.body.style.touchAction = ''
  }
})
</script>

<template>
  <header class="header" :class="{ hidden: !headerVisible }">
    <button
      class="hamburguer"
      @click="toggleMenu"
      aria-label="Abrir menu de navegação"
      :aria-expanded="menuAberto"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <h1 class="titulo">Construindo o futuro juntos</h1>

    <div class="header-actions">
      <button
        class="theme-toggle"
        @click="themeStore.toggleTheme"
        :aria-label="themeStore.isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
        :title="themeStore.isDark ? 'Modo claro' : 'Modo escuro'"
      >
        <svg
          v-if="themeStore.isDark"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
      <button
        class="AI"
        @click="toggleChat"
        aria-label="Abrir assistente IA"
        :title="chatAberto ? 'Fechar chat' : 'Abrir chat IA'"
      >
        <img src="/brainAi.svg" alt="IA" />
      </button>
      <router-link to="/perfil" class="usuario" aria-label="Ir para perfil">
        <span class="nome">{{ authStore.username }}</span>
        <img
          :src="avatarUrl"
          :alt="authStore.logado ? 'Avatar do usuário' : 'Avatar visitante'"
          class="avatar"
        />
      </router-link>
    </div>
  </header>

  <aside
    class="menu-lateral"
    :class="{ aberto: menuAberto }"
    aria-label="Menu de navegação"
    role="navigation"
  >
    <img :src="logoUrl" alt="Logo IF" class="logo" />

    <nav>
      <ul class="rotas">
        <li v-for="item in navStore.rotasMenu" :key="item.to">
          <router-link :to="item.to" @click="closeMenu">{{ item.label }}</router-link>
        </li>
      </ul>

      <div class="usuario-menu">
        <router-link
          to="/perfil"
          class="usuario-link"
          aria-label="Ir para perfil"
          @click="closeMenu"
        >
          <span class="nome">{{ authStore.username }}</span>
          <img
            :src="avatarUrl"
            :alt="authStore.logado ? 'Avatar do usuário' : 'Avatar visitante'"
            class="avatar"
          />
        </router-link>

        <!-- Botão de Tema na Sidebar (visível apenas em mobile) -->
        <button
          class="theme-toggle-sidebar"
          @click="themeStore.toggleTheme"
          :aria-label="themeStore.isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
        >
          <svg
            v-if="themeStore.isDark"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <span>{{ themeStore.isDark ? 'Modo Claro' : 'Modo Escuro' }}</span>
        </button>

        <a
          v-if="authStore.logado"
          class="entrar sair"
          href="#"
          @click.prevent="handleLogout"
          aria-label="Sair da conta"
          >Sair</a
        >
        <router-link
          v-else
          to="/cadastrar"
          class="entrar"
          aria-label="Fazer login"
          @click="closeMenu"
          >Entrar</router-link
        >
      </div>
    </nav>
  </aside>

  <div v-if="menuAberto" class="overlay" @click="closeMenu" aria-hidden="true" />

  <!-- Chat Flutuante -->
  <div v-if="chatAberto" class="chat-flutuante">
    <div class="chat-header-float">
      <h3>🤖 Cognexus</h3>
      <button @click="closeChat" class="close-chat" aria-label="Fechar chat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <AIBox />
  </div>
</template>

<style scoped>
/* ========================================
   HEADER PRINCIPAL
   ======================================== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  height: 6rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(41, 45, 52, 0.348);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  color: #fff;
  transition: transform 0.3s ease;
}

.header.hidden {
  transform: translateY(-100%);
}

/* ========================================
   BOTÃO HAMBÚRGUER
   ======================================== */
.hamburguer {
  width: 32px;
  height: 24px;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: none;
  border: none;
  cursor: pointer;
}

.hamburguer span {
  width: 100%;
  height: 3px;

  background: white;
  border-radius: 4px;
  transition: 0.3s ease;
}

/* ========================================
   TÍTULO
   ======================================== */
.titulo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  white-space: nowrap;
}

/* ========================================
   AÇÕES DO HEADER (TEMA + USUÁRIO)
   ======================================== */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* ========================================
   BOTÃO DE TEMA
   ======================================== */
.theme-toggle {
  width: 40px;
  height: 40px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  cursor: pointer;

  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(20deg) scale(1.1);
}

.theme-toggle svg {
  transition: transform 0.3s ease;
}

/* ========================================
   BOTÃO AI
   ======================================== */
.AI {
  width: 40px;
  height: 40px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 50%;
  cursor: pointer;

  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.AI:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}

.AI img {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
}

/* ========================================
   USUÁRIO (HEADER)
   ======================================== */
.usuario {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.9rem;
  text-decoration: none;
  color: inherit;

  transition: opacity 0.2s ease;
}

.usuario:hover {
  opacity: 0.8;
}

.usuario .nome {
  line-height: 1.1;
}

.avatar {
  width: 40px;
  height: 40px;

  border-radius: 50%;
  object-fit: cover;
  background: #0b2d52;
}

/* ========================================
   MENU LATERAL
   ======================================== */
.menu-lateral {
  position: fixed;
  top: 0;
  left: -281px;
  z-index: 200;

  width: 280px;
  height: 100vh;
  min-height: 100vh;
  padding: 0;

  display: flex;
  flex-direction: column;

  background: var(--sidebar-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-right: 1px solid var(--sidebar-border);

  overflow-y: auto;
  overflow-x: hidden;
  transition:
    left 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s ease,
    border-color 0.3s ease;

  /* Adiciona padding para evitar que conteúdo fique atrás da barra de navegação do celular */
  padding-bottom: env(safe-area-inset-bottom, 0);
}

.menu-lateral.aberto {
  left: 0;
}

.menu-lateral .logo {
  width: 7rem;
  height: auto;
  margin: 1.5rem auto 2rem;

  filter: drop-shadow(0 4px 12px rgba(29, 155, 240, 0.3));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}

.menu-lateral .logo:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 6px 16px rgba(29, 155, 240, 0.5));
}

.menu-lateral nav {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

/* ========================================
   ROTAS (MENU LATERAL)
   ======================================== */
.rotas {
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;
  list-style: none;
}

.rotas li {
  display: block;
}

.rotas a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;

  font-size: 1rem;
  font-weight: 500;
  color: var(--sidebar-text);
  text-decoration: none;

  background-color: transparent;
  border-left: 3px solid transparent;

  transition: all 0.2s ease;
}

.rotas a:hover {
  background-color: var(--sidebar-hover);
  border-left-color: var(--accent-primary);
  color: var(--sidebar-text-hover);
}

.rotas a.router-link-active {
  background-color: var(--sidebar-active);
  border-left-color: var(--accent-primary);
  color: var(--accent-primary);
  font-weight: 600;
}

/* ========================================
   USUÁRIO (MENU LATERAL)
   ======================================== */
.usuario-menu {
  margin-top: auto;
  padding: 1.5rem 1rem;
  /* Adiciona padding extra para evitar que fique atrás da barra de navegação */
  padding-bottom: calc(1.5rem + env(safe-area-inset-bottom, 20px));

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  background: var(--sidebar-footer-bg);
  border-top: 1px solid var(--sidebar-border);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.usuario-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  text-decoration: none;
  color: var(--sidebar-text);

  transition:
    opacity 0.2s ease,
    color 0.3s ease;
}

.usuario-link:hover {
  opacity: 0.8;
}

.usuario-link .nome {
  font-size: 1.05rem;
  text-align: center;
}

.usuario-menu .avatar {
  width: 48px;
  height: 48px;
}

.entrar {
  padding: 0.6rem 1.2rem;

  font-size: 0.9rem;
  text-decoration: none;
  color: var(--sidebar-text);

  background-color: transparent;
  border-radius: 20px;

  transition:
    background-color 0.2s ease,
    color 0.3s ease;
}

.entrar:hover {
  background-color: var(--sidebar-hover);
}

.entrar.sair {
  color: #ff6b6b;
}

.entrar.sair:hover {
  background-color: rgba(255, 107, 107, 0.1);
}

/* ========================================
   BOTÃO DE TEMA NA SIDEBAR
   ======================================== */
.theme-toggle-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  padding: 0.75rem 1.2rem;
  margin: 0.5rem 0;

  font-size: 0.95rem;
  font-weight: 500;
  color: var(--sidebar-text);

  background: var(--sidebar-button-bg);
  border: 1px solid var(--sidebar-button-border);
  border-radius: 12px;
  cursor: pointer;

  transition: all 0.3s ease;
}

.theme-toggle-sidebar:hover {
  background: var(--sidebar-button-hover);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.theme-toggle-sidebar svg {
  flex-shrink: 0;
}

/* ========================================
   BOTÃO AI NA SIDEBAR
   ======================================== */
.ai-toggle-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  padding: 0.75rem 1.2rem;
  margin: 0.5rem 0;

  font-size: 0.95rem;
  font-weight: 500;
  color: white;

  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 12px;
  cursor: pointer;

  transition: all 0.3s ease;
}

.ai-toggle-sidebar:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.ai-toggle-sidebar img {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
  flex-shrink: 0;
}

/* ========================================
   OVERLAY
   ======================================== */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 150;

  background: rgba(0, 0, 0, 0.5);
}

/* ========================================
   CHAT FLUTUANTE
   ======================================== */
.chat-flutuante {
  position: fixed;
  top: 6rem;
  right: 1rem;
  z-index: 9999;

  width: 50%;
  height: calc(100vh - 7rem);
  max-height: 700px;

  background: var(--card-bg);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  display: flex;
  flex-direction: column;
}

.chat-header-float {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.chat-header-float h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.close-chat {
  width: 32px;
  height: 32px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;

  transition: all 0.3s ease;
}

.close-chat:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

/* Animação do chat */
.slide-chat-enter-active,
.slide-chat-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-chat-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-chat-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* ========================================
   RESPONSIVIDADE
   ======================================== */
@media (max-width: 750px) {
  .theme-toggle,
  .AI {
    display: none;
  }

  .chat-flutuante {
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
  }
}

@media (min-width: 751px) {
  .theme-toggle-sidebar,
  .ai-toggle-sidebar {
    display: none;
  }
}

@media (max-width: 540px) {
  .titulo {
    display: none;
  }
}

@media (max-width: 300px) {
  .usuario-menu {
    gap: 0.3rem;
  }

  .usuario-link .nome {
    font-size: 1rem;
  }

  .entrar {
    font-size: 1rem;
    margin-bottom: 4rem;
  }
}
</style>
