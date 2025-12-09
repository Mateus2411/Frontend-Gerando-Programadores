<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'

// #region Configs Menu
// #region Header sumindo

function handleScroll() {
  const percent = window.scrollY / (document.body.scrollHeight - window.innerHeight)

  if (percent > 0.1) {
    // 0.1 = 10%
    document.querySelector('header').classList.add('hidden')
  } else {
    document.querySelector('header').classList.remove('hidden')
  }
}
// #endregion
// #region Sair do Menu Lateral
function handleKeydown(e) {
  if (e.key === 'Escape') {
    menuOpen.value = false
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

const menuOpen = ref(false)
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  document.documentElement.style.overflow = open ? 'hidden' : ''
  document.body.style.touchAction = open ? 'none' : ''
})
// #endregion
// #endregion
// #region Gerador header

const headerData = {
  logo: {
    src: '/if-design-svgrepo-com.svg',
    alt: 'Logo IF'
  },
  menu: [
    { label: 'Home', to: '/' },
    { label: 'Cadastrar', to: '/cadastrar' },
  ]
}

// #endregion

//token
const token = localStorage.getItem('token')

// #region Rotas a serem colocadas

let newLinks = [
  { label: 'Ias', to: '/ias' }
]

// #endregion

// #region Validador de Token e Ativador de rotas protegidas

async function applyTokenLinks() {
  const tokenTest = token

  if (!tokenTest) return

  for (let item of newLinks) {
    headerData.menu.push(item)
  }
}

applyTokenLinks()
// #endregion

</script>
<template>
  <header>
    <div>
      <img :src="headerData.logo.src" :alt="headerData.logo.alt" />
    </div>

    <div class="links" :class="{ open: menuOpen }">
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="menu" aria-label="Abrir menu"
        @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>

      <ul id="menu">
        <li v-for="item in headerData.menu" :key="item.to">
          <router-link :to="item.to" @click="menuOpen = false">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
  <teleport to="body">
    <div class="menu-backdrop" :class="{ show: menuOpen }" v-show="menuOpen" @click="menuOpen = false"></div>
  </teleport>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:
    'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}

header {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  padding: 1.5vw 4vw;

  background-color: #f8f9fa;
  border-radius: 20px;

  background:
    linear-gradient(#9c9c9c, #707070) padding-box,
    linear-gradient(90deg, #9c9c9c, #707070) border-box;

  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  z-index: 99999;
}

header.hidden {
  opacity: 0;
  transform: translate(-50%, -40px);
  pointer-events: none;
}

header .links {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

header .links ul {
  display: flex;
  gap: 4vw;
  margin-right: 2vw;
  cursor: pointer;
}

header .links ul li a {
  font-size: large;
  font-weight: bolder;
  color: white;
}

.router-link-exact-active {
  background: rgba(0, 0, 0, 0.823);
  padding: 1vw 1.2vw;
  border-radius: 15px;
  color: white !important;
}

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.6);
  color: white;
}

.menu-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: #fff;
  margin: 3px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

@media (max-width: 1000px) {
  header {
    padding: 12px 16px;
  }

  header .links ul {
    position: fixed;
    top: -11%;
    right: 0;
    height: 100vh;
    width: min(75vw, 320px);
    background: rgba(0, 0, 0, 0.92);
    backdrop-filter: saturate(120%) blur(2px);
    box-shadow: -8px 0 35px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 5rem 1.5rem 2rem;
    gap: 2rem;
    margin-right: 0;
    transform: translateX(120%);
    transition: transform 0.3s ease;
    cursor: default;
    z-index: 100001;
    overflow-y: auto;
  }

  header .links.open ul {
    transform: translateX(20%);
  }

  .menu-toggle {
    display: inline-flex;
    margin-left: auto;
  }

  header .links ul li a {
    font-size: 1.1rem;
    color: #fff;
    padding: 9px 10px;
    border-radius: 10px;
    transition: background 0.2s ease;
    background: rgba(40, 40, 40, 0);
  }

  header .links ul li a:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
  }

  .links.open .menu-toggle span:nth-child(1) {
    transform: translateY(5px) rotate(45deg);
  }

  .links.open .menu-toggle span:nth-child(2) {
    opacity: 0;
  }

  .links.open .menu-toggle span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }

  .menu-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;

  /* ocupa tudo EXCETO o menu */
  width: calc(100vw - min(85vw, 290px));

  background: rgba(63, 63, 63, 0.35);
  backdrop-filter: blur(1px);
  z-index: 100000;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.menu-backdrop.show {
  opacity: 1;
  pointer-events: auto;
}

}
</style>
