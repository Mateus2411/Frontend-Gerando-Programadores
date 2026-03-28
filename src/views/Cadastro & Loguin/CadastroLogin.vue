<template>
  <main class="container auth-shell" v-if="larguraAtual >= 801">
    <transition name="auth-fade" mode="out-in">
      <!-- CADASTRO -->
      <form
        v-if="modo === 'cadastro'"
        class="card"
        @submit.prevent="cadastrar"
      >
      <div class="lado-esquerdo">
        <h2 class="cad">Cadastro</h2>
        <img src="/if-logo-s-fundo.png" alt="" />
      </div>

      <div class="triangulo-direita"></div>

      <div class="lado-direito">
        <input v-model="nomeCadastro" placeholder="Nome" />
        <span class="erro">{{ erroNome }}</span>

        <input v-model="emailCadastro" placeholder="Email" />
        <span class="erro">{{ erroEmail }}</span>

        <div class="senha-container">
          <input
            v-model="senhaCadastro"
            :type="mostrarSenhaCadastro ? 'text' : 'password'"
            placeholder="Senha"
            class="input-senha"
          />
          <span class="toggle-senha" @click="toggleSenhaCadastro">
            <img
              v-if="mostrarSenhaCadastro"
              src="/lock-password-unlocked-svgrepo-com.svg"
              alt="Ocultar senha"
            />
            <img v-else src="/lock-password-svgrepo-com.svg" alt="Mostrar senha" />
          </span>
        </div>

        <span class="erro">{{ erroSenha }}</span>

        <button type="submit" :disabled="processando">
          {{ processando ? 'Aguarde...' : 'Cadastrar' }}
        </button>

        <p class="switch">
          Já tem conta?
          <button type="button" class="switch-btn" @click="irParaLogin">Entrar</button>
        </p>
      </div>
    </form>

      <!-- LOGIN -->
      <form
        v-else-if="modo === 'login'"
        class="card"
        @submit.prevent="login"
      >
      <div class="lado-esquerdo-login">
        <h2 class="log">Login</h2>
        <img src="/if-logo-s-fundo.png" alt="" />
      </div>

      <div class="triangulo-esquerda"></div>

      <div class="lado-direito">
        <input v-model="emailLogin" placeholder="Email" />
        <span class="erro">{{ erroLoginEmail }}</span>

        <div class="senha-container">
          <input
            v-model="senhaLogin"
            :type="mostrarSenhaLogin ? 'text' : 'password'"
            placeholder="Senha"
            class="input-senha"
          />
          <span class="toggle-senha" @click="toggleSenhaLogin">
            <img
              v-if="mostrarSenhaLogin"
              src="/lock-password-unlocked-svgrepo-com.svg"
              alt="Ocultar senha"
            />
            <img v-else src="/lock-password-svgrepo-com.svg" alt="Mostrar senha" />
          </span>
        </div>

        <span class="erro">{{ erroLoginSenha }}</span>

        <button type="submit" :disabled="processando">
          {{ processando ? 'Aguarde...' : 'Entrar' }}
        </button>

        <p class="switch">
          Ainda não tem conta?
          <button type="button" class="switch-btn" @click="irParaCadastro">Cadastrar</button>
        </p>
      </div>
      </form>
    </transition>
  </main>
  <main class="container auth-shell ativo" v-else>
    <!-- CADASTRO -->
    <form class="card" v-if="modo === 'cadastro'" @submit.prevent="cadastrar">
      <h2 style="margin-bottom: 1.5rem">Cadastro</h2>

      <input v-model="nomeCadastro" placeholder="Nome" />
      <span class="erro">{{ erroNome }}</span>

      <input v-model="emailCadastro" placeholder="Email" />
      <span class="erro">{{ erroEmail }}</span>

      <div class="senha-container">
        <input
          v-model="senhaCadastro"
          :type="mostrarSenhaCadastro ? 'text' : 'password'"
          placeholder="Senha"
          class="input-senha"
        />
        <div class="toggle-senha">
          <span @click="toggleSenhaCadastro">
            <img
              v-if="mostrarSenhaCadastro"
              src="/lock-password-unlocked-svgrepo-com.svg"
              alt="Ocultar senha"
            />
            <img v-else src="/lock-password-svgrepo-com.svg" alt="Mostrar senha" />
          </span>
        </div>
      </div>
      <span class="erro">{{ erroSenha }}</span>

      <button type="submit" :disabled="processando">
        {{ processando ? 'Aguarde...' : 'Cadastrar' }}
      </button>

      <p class="switch">
        Já tem conta?
        <button type="button" class="switch-btn" @click="irParaLogin">Entrar</button>
      </p>
    </form>

    <!-- LOGIN -->
    <form class="card" v-else-if="modo === 'login'" @submit.prevent="login">
      <h2 style="margin-bottom: 1.1rem !important">Login</h2>

      <input v-model="emailLogin" placeholder="Email" />
      <span class="erro">{{ erroLoginEmail }}</span>

      <div class="senha-container">
        <input
          v-model="senhaLogin"
          :type="mostrarSenhaLogin ? 'text' : 'password'"
          placeholder="Senha"
          class="input-senha"
        />
        <span class="toggle-senha" @click="toggleSenhaLogin">
          <img
            v-if="mostrarSenhaLogin"
            src="/lock-password-unlocked-svgrepo-com.svg"
            alt="Ocultar senha"
          />
          <img v-else src="/lock-password-svgrepo-com.svg" alt="Mostrar senha" />
        </span>
      </div>
      <span class="erro">{{ erroLoginSenha }}</span>

      <button type="submit" :disabled="processando">
        {{ processando ? 'Aguarde...' : 'Entrar' }}
      </button>

      <p class="switch">
        Ainda não tem conta?
        <button type="button" class="switch-btn" @click="irParaCadastro">Cadastrar</button>
      </p>
    </form>
  </main>
</template>

<script setup>
import { ref, onMounted} from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useNotificationStore } from '@/stores/notification'

const router = useRouter()
const authStore = useAuthStore()
const notificationStore = useNotificationStore()

/** Único estado para login vs cadastro (desktop e mobile) — evita dessincronia ao redimensionar */
const modo = ref('login')

const processando = ref(false)

const nomeCadastro = ref('')
const emailCadastro = ref('')
const senhaCadastro = ref('')
const erroNome = ref('')
const erroEmail = ref('')
const erroSenha = ref('')

const emailLogin = ref('')
const senhaLogin = ref('')
const erroLoginEmail = ref('')
const erroLoginSenha = ref('')
const mostrarSenhaCadastro = ref(false)
const mostrarSenhaLogin = ref(false)

// #region Validadores

function ValidarEmail(email) {
  var exclude = /[^@.\w]|^[.-]{2}|[@.]{2}|(@)[^@]*\1/i
  var check = /@[a-zA-Z0-9-.]+./i
  var checkend = /com$/i
  return !(
    email.search(exclude) !== -1 ||
    email.search(check) === -1 ||
    email.search(checkend) === -1
  )
}

function validarSenha(senha) {
  const erros = []
  if (senha.length < 6) erros.push('Mínimo 6 caracteres')
  if (!/[A-Z]/i.test(senha)) erros.push('Falta uma letra')
  if (!/[0-9]/.test(senha)) erros.push('Falta um número')
  if (!/[*@#!?.-_]/.test(senha)) erros.push('Falta caractere especial (* @ # ! ? . - _)')

  return erros
}

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[0-9]/g, '') // Remove números
    .replace(/\s+/g, '') // Remove espaços
    .replace(/[^a-z]/g, '') // Remove caracteres especiais, mantém só letras
}
// #endregion

// Cadastro
async function cadastrar() {
  if (processando.value) return
  processando.value = true

  try {
    erroNome.value = ''
    erroEmail.value = ''
    erroSenha.value = ''

    // Validação de nome vazio
    if (!nomeCadastro.value) {
      erroNome.value = 'O nome não pode ser vazio'
      return
    }

    // Validação de tamanho mínimo
    if (nomeCadastro.value.length < 3) {
      erroNome.value = 'O nome deve ter pelo menos 3 caracteres'
      return
    }

    // Bloqueio de admin (easter egg)
    const admBlock = ['admin', 'administrator', 'adm', 'careca']
    if (admBlock.includes(nomeCadastro.value.toLowerCase())) {
      erroNome.value = 'O careca é o único adm'
      return
    }

    // Validação de palavrões
    const palavroes = [
      'porra',
      'caralho',
      'merda',
      'puta',
      'fdp',
      'filhodaputa',
      'buceta',
      'cu',
      'cuzao',
      'puto',
      'viado',
      'bicha',
      'arrombado',
      'desgraca',
      'cacete',
      'carai',
      'krl',
      'pqp',
      'vsf',
      'vaisefoder',
      'fodase',
      'bosta',
      'corno',
      'otario',
      'babaca',
      'imbecil',
      'idiota',
      'burro',
      'retardado',
      'mongoloide',
      'piranha',
      'vagabunda',
      'vadia',
      'safada',
      'pinto',
      'pau',
      'rola',
      'penis',
      'vagina',
      'ppk',
      'xoxota',
      'punheta',
      'broxa',
      'brochar',
      'foder',
      'fuder',
      'trepar',
    ]

    // Normaliza o nome removendo números, espaços e acentos
    const nomeNormalizado = normalizarTexto(nomeCadastro.value)

    const contemPalavrao = palavroes.some((palavrao) => {
      const palavraoNormalizado = normalizarTexto(palavrao)
      return nomeNormalizado.includes(palavraoNormalizado)
    })

    if (contemPalavrao) {
      erroNome.value = 'Nome de usuário contém linguagem inapropriada'
      return
    }

    // Validação de email
    if (!emailCadastro.value || !ValidarEmail(emailCadastro.value)) {
      erroEmail.value = 'Email inválido'
      return
    }

    // Validação de senha
    const erros = validarSenha(senhaCadastro.value)

    if (erros.length > 0) {
      erroSenha.value = erros.join(' • ')
      return
    }

    try {
      await authStore.register(nomeCadastro.value, emailCadastro.value, senhaCadastro.value)

      notificationStore.success('Cadastro realizado com sucesso!')

      nomeCadastro.value = ''
      emailCadastro.value = ''
      senhaCadastro.value = ''
      modo.value = 'login'
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error)
      notificationStore.error(authStore.error || 'Erro ao cadastrar')
      erroEmail.value = authStore.error || 'Erro ao cadastrar'
    }
  } finally {
    processando.value = false
  }
}

// Login
async function login() {
  if (processando.value) return
  processando.value = true

  try {
    erroLoginEmail.value = ''
    erroLoginSenha.value = ''

    if (!emailLogin.value) {
      erroLoginEmail.value = 'O email não pode ser vazio'
      return
    }
    if (!ValidarEmail(emailLogin.value)) {
      erroLoginEmail.value = 'Email inválido'
      return
    }
    if (!senhaLogin.value) {
      erroLoginSenha.value = 'A senha não pode ser vazia'
      return
    }

    try {
      await authStore.login(emailLogin.value, senhaLogin.value)

      notificationStore.success('Login realizado com sucesso!')

      emailLogin.value = ''
      senhaLogin.value = ''

      // Redireciona para a home
      router.push('/')
    } catch (error) {
      console.error('Erro no login:', error)
      notificationStore.error(authStore.error || 'Email ou senha incorretos')
      erroLoginSenha.value = authStore.error || 'Email ou senha incorretos'
    }
  } finally {
    processando.value = false
  }
}

// #region Funcs Basicas
function toggleSenhaCadastro() {
  mostrarSenhaCadastro.value = !mostrarSenhaCadastro.value
}

function toggleSenhaLogin() {
  mostrarSenhaLogin.value = !mostrarSenhaLogin.value
}
// #endregion

// #region Calculos Tela
const larguraAtual = ref(window.innerWidth)
function alterarLarg() {
  larguraAtual.value = window.innerWidth
}
onMounted(() => {
  window.addEventListener('resize', alterarLarg)
})
// #endregion

// #region Animação Do Cadastro

function irParaCadastro() {
  if (modo.value === 'cadastro') return
  modo.value = 'cadastro'
}

function irParaLogin() {
  if (modo.value === 'login') return
  modo.value = 'login'
}
// #endregion
</script>

<style scoped>
/*
 * Visual fixo desta tela (referência): fundo navy, painel direito escuro,
 * inputs escuros e texto claro — não usa o tema claro global do App.
 */
.auth-shell {
  --auth-page: #0a1528;
  --auth-panel: #0b1426;
  --auth-input: #111c2a;
  --auth-input-focus: #152438;
  --auth-border: rgba(255, 255, 255, 0.12);
  --auth-text: #e8edf4;
  --auth-muted: #94a3b8;
  --auth-link: #5eb8f7;
  --auth-shadow: rgba(0, 0, 0, 0.45);
}

/* Link visual nos botões “Entrar / Cadastrar” (evita <a href="#"> quebrar em alguns browsers) */
.auth-shell .switch .switch-btn {
  background: none;
  border: none;
  padding: 0;
  margin-left: 0.25rem;
  font: inherit;
  font-size: inherit;
  color: var(--auth-link);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
}

.auth-shell .switch .switch-btn:hover {
  color: #93c5fd;
  text-decoration: underline;
}

@media (min-width: 801px) {
  .auth-shell * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:
      'IBM Plex Sans',
      system-ui,
      -apple-system,
      sans-serif;
  }

  .auth-shell.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: var(--auth-page);
    color: var(--auth-text);
  }

  .auth-shell .card {
    box-shadow: 0 16px 48px var(--auth-shadow);
    border-radius: 32px;
    position: relative;
    display: flex;
    width: 800px;
    height: 400px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  /* LADO ESQUERDO - CADASTRO */
  .auth-shell .lado-esquerdo {
    width: 45%;
    background: var(--accent-primary);
    padding: 3rem 3rem 3rem 4rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    clip-path: polygon(100% 0, 0 0, 0 190%);
    align-items: start;
    z-index: 2;
  }

  .auth-shell .lado-esquerdo img {
    margin-left: -4rem;
    width: 200px;
  }

  .auth-shell .card .lado-esquerdo .cad {
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .auth-shell .triangulo-direita {
    position: absolute;
    left: 19.98%;
    top: 0;
    width: 200px;
    height: 400px;
    background: var(--auth-panel);
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    z-index: 1;
  }

  .auth-shell .card .lado-direito {
    width: 55%;
    background: var(--auth-panel);
    padding: 2.5rem 3rem 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    justify-content: center;
    z-index: 2;
  }

  .auth-shell input {
    padding: 0.75rem 0.85rem;
    border: 1px solid var(--auth-border);
    border-radius: 8px;
    width: 100%;
    background: var(--auth-input);
    color: var(--auth-text);
    font-size: 0.95rem;
    font-weight: 500;
    transition:
      border-color 0.2s ease,
      background 0.2s ease,
      box-shadow 0.2s ease;
  }

  .auth-shell input::placeholder {
    color: var(--auth-muted);
    font-weight: 400;
  }

  .auth-shell input:focus {
    outline: none;
    border-color: rgba(29, 155, 240, 0.55);
    background: var(--auth-input-focus);
    box-shadow: 0 0 0 3px rgba(29, 155, 240, 0.15);
  }

  .auth-shell .senha-container {
    position: relative;
  }

  .auth-shell .input-senha {
    padding-right: 2.5rem;
  }

  .auth-shell .toggle-senha {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .auth-shell .toggle-senha img {
    width: 20px;
    height: 20px;
    opacity: 0.85;
    filter: brightness(0) saturate(100%) invert(100%);
  }

  .auth-shell .toggle-senha:hover img {
    opacity: 1;
  }

  .auth-shell button[type='submit'] {
    background-color: var(--accent-primary);
    color: #fff;
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 0.25rem;
    transition: background-color 0.2s ease;
  }

  .auth-shell button[type='submit']:hover {
    background-color: var(--accent-hover);
  }

  .auth-shell button[type='submit']:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .auth-shell .erro {
    color: #f87171;
    font-size: 0.8rem;
    min-height: 1rem;
  }

  .auth-shell .switch {
    margin-top: 1.25rem;
    text-align: center;
    color: var(--auth-muted);
    font-size: 0.9rem;
  }

  /* LOGIN — painel esquerdo */
  .auth-shell .lado-esquerdo-login {
    width: 45%;
    background: var(--accent-primary);
    padding: 3rem 4rem 3rem 3rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    clip-path: polygon(0 -80%, 0 100%, 100% 100%);
    z-index: 2;
  }

  .auth-shell .lado-esquerdo-login img {
    margin-left: -4rem !important;
    width: 200px !important;
  }

  .auth-shell .triangulo-esquerda {
    position: absolute;
    left: 20%;
    top: 0;
    width: 199.9px;
    height: 400px;
    background: var(--auth-panel);
    clip-path: polygon(100% 0, 100% 100%, 0 0%);
    z-index: 1;
  }

  .auth-shell .log {
    font-weight: 700;
  }

  .auth-shell .lado-esquerdo-login h2 {
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .auth-fade-enter-active,
  .auth-fade-leave-active {
    transition: opacity 0.45s ease, transform 0.45s ease;
  }

  .auth-fade-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }

  .auth-fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
}

@media (max-width: 800px) {
  .auth-shell * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:
      'IBM Plex Sans',
      system-ui,
      -apple-system,
      sans-serif;
  }

  .auth-shell.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--auth-page);
    color: var(--auth-text);
    padding: 1.25rem;
  }

  .auth-shell .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    padding: 2.25rem 1.75rem;
    border-radius: 24px;
    background: var(--auth-panel);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 16px 40px var(--auth-shadow);
    animation: authFadeIn 0.35s ease;
  }

  .auth-shell .card h2 {
    text-align: center;
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--auth-text);
    width: 100%;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  .auth-shell .card input {
    width: 100%;
    padding: 0.85rem 1rem;
    border-radius: 10px;
    outline: none;
    border: 1px solid var(--auth-border);
    background: var(--auth-input);
    color: var(--auth-text);
    font-size: 1rem;
    margin-bottom: 0.75rem;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .auth-shell .card input::placeholder {
    color: var(--auth-muted);
  }

  .auth-shell .card input:focus {
    border-color: rgba(29, 155, 240, 0.55);
    background: var(--auth-input-focus);
    box-shadow: 0 0 0 3px rgba(29, 155, 240, 0.15);
  }

  .auth-shell .senha-container {
    width: 100%;
    position: relative;
    margin-bottom: 0.75rem;
  }

  .auth-shell .senha-container .input-senha {
    margin-bottom: 0;
    padding-right: 2.75rem;
  }

  .auth-shell .toggle-senha {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
  }

  .auth-shell .toggle-senha img {
    width: 22px;
    height: 22px;
    opacity: 0.85;
    filter: brightness(0) saturate(100%) invert(100%);
  }

  .auth-shell .card button[type='submit'],
  .auth-shell .card input[type='submit'] {
    width: 100%;
    padding: 0.9rem;
    margin-top: 0.35rem;
    background: var(--accent-primary);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .auth-shell .card button[type='submit']:hover,
  .auth-shell .card input[type='submit']:hover {
    background: var(--accent-hover);
  }

  .auth-shell .card button[type='submit']:disabled,
  .auth-shell .card input[type='submit']:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .auth-shell .erro {
    color: #f87171;
    font-size: 0.85rem;
    margin-top: -0.35rem;
    margin-bottom: 0.5rem;
    width: 100%;
    text-align: left;
    min-height: 1.1rem;
  }

  .auth-shell .switch {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--auth-muted);
    text-align: center;
  }

  @keyframes authFadeIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
