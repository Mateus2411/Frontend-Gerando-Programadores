<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const menuAberto = ref(false)

function toggleMenu() {
  menuAberto.value = !menuAberto.value
}

function handleScroll() {
  const percent = window.scrollY / (document.body.scrollHeight - window.innerHeight)

  if (percent > 0.05) {
    // 0.05 = 5%
    document.querySelector('header').classList.add('hidden')
  } else {
    document.querySelector('header').classList.remove('hidden')
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleKeydown)
})
function handleKeydown(e) {
  if (e.key === 'Escape') {
    menuOpen.value = false
  }
}
const menuOpen = ref(false)
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  document.documentElement.style.overflow = open ? 'hidden' : ''
  document.body.style.touchAction = open ? 'none' : ''
})
</script>

<template>
  <header class="header">
    <!-- MENU HAMBÚRGUER -->
    <button class="hamburguer" @click="toggleMenu" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- TEXTO CENTRAL -->
    <p class="titulo">Construindo o futuro juntos</p>

    <!-- USUÁRIO -->

    <div class="usuario">
      <span class="nome">
        <span v-if="logado">Usuário</span>
        <span v-else>Visitante</span>
      </span>

      <img v-if="logado" class="avatar" src="/favicon.ico" alt="Logo" />
      <img v-else class="avatar" src="/no-img.png" alt="" />
    </div>
  </header>

  <!-- MENU LATERAL -->
  <aside class="menu-lateral" :class="{ aberto: menuAberto }">
    <img src="/if-logo-s-fundo.png" alt="" class="logo" />
    <nav>
      <div class="rotas">
        <a href="#">Início</a>
        <a href="#">Cursos</a>
      </div>
      <div class="usuario">
        <span class="nome">
          <span v-if="logado" style="color: white !important">Usuário</span>
          <span v-else style="color: white">Visitante</span>
        </span>

        <img v-if="logado" class="avatar" src="/favicon.ico" alt="imagem-usuario" />
        <img v-else class="avatar" src="/no-img.png" alt="" />
        <a v-if="logado" href="#" style="color: red">Sair</a>
      </div>
    </nav>
  </aside>

  <!-- OVERLAY -->
  <div v-if="menuAberto" class="overlay" @click="menuAberto = false" />
</template>
<style scoped>
.header {
  height: 70px;
  background: linear-gradient(90deg, #061a2f, #0b2d52);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: #fff;
  position: relative;
  z-index: 100;
}
.menu-lateral .logo {
  width: 9rem;
  height: auto;
  margin: 0 auto 1rem auto;
}

.hamburguer {
  width: 32px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.hamburguer span {
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 4px;
  transition: 0.3s ease;
}

.titulo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  font-weight: 600;
  white-space: nowrap;
}

.usuario {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
}

.menu-lateral .usuario {
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.1rem;
}

.avatar {
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  background: #0b2d52;
}

/* MENU LATERAL */
.menu-lateral {
  position: fixed;
  top: 0;
  left: -100%;
  width: 32%;
  max-width: 360px;
  height: 100vh;
  background: linear-gradient(180deg, #081f3a, #061a2f);
  padding: 2rem 1.5rem;
  transition: 0.35s ease;
  z-index: 200;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: auto; /* 🔥 resolve o corte */
  nav {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
}
.menu-lateral .usuario {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 2px solid rgba(255, 255, 255, 0.12);

  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.menu-lateral .usuario .avatar {
  height: 56px;
  width: 56px;
}

.rotas {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.rotas a {
  display: flex;
  align-items: center;

  padding: 0.7rem 1rem;
  border-radius: 8px;

  font-size: 1.15rem;
  font-weight: 500;
  color: #e6eef8;

  transition:
    background 0.25s ease,
    transform 0.15s ease;
}

.nome {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.1;
}

.menu-lateral .nome {
  align-items: flex-start;
  font-size: 1.05rem;
}

.menu-lateral .usuario a {
  font-size: 1rem;
  margin-top: 0.3rem;
}

.menu-lateral.aberto {
  left: 0;
}

/* OVERLAY */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 150;
}
@media (max-width: 480px) {
  .titulo {
    display: none;
  }
  .menu-lateral {
    width: 50%;
  }
}
@media (max-width: 300px) {
  .menu-lateral .usuario {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    text-align: center;
    span {
      font-size: 1rem;
    }
    a {
      font-size: 1rem;
    }
  }

  .menu-lateral .nome {
    align-items: center;
  }
}
</style>
