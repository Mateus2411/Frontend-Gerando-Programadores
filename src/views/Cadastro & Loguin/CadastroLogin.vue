<template>
  <main class="container" v-if="larguraAtual > 800">
    <!-- CADASTRO -->
    <form
      class="card transicao"
      :class="animCadastro"
      v-show="mostrarCadastro"
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
            {{ mostrarSenhaCadastro ? '😎' : '👀' }}
          </span>
        </div>

        <span class="erro">{{ erroSenha }}</span>

        <button type="submit">Cadastrar</button>

        <p class="switch">
          Já tem conta?
          <a @click="irParaLogin()">Entrar</a>
        </p>
      </div>
    </form>

    <!-- LOGIN -->
    <form class="card transicao" :class="animLogin" v-show="mostrarLogin" @submit.prevent="login">
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
            {{ mostrarSenhaLogin ? '😎' : '👀' }}
          </span>
        </div>

        <span class="erro">{{ erroLoginSenha }}</span>

        <button type="submit">Entrar</button>

        <p class="switch">
          Ainda não tem conta?
          <a @click="irParaCadastro()">Cadastrar</a>
        </p>
      </div>
    </form>
  </main>
  <main class="container ativo" v-else>
    <div data-v-b2ae051a class="triangulo-direita"></div>
    <!-- CADASTRO -->
    <form class="card" v-show="tela === 'cadastro'" @submit.prevent="cadastrar">
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
          <span @click="toggleSenhaCadastro">{{ mostrarSenhaCadastro ? '😎' : '👀' }}</span>
        </div>
      </div>
      <span class="erro">{{ erroSenha }}</span>

      <button type="submit">Cadastrar</button>

      <p class="switch">
        Já tem conta?
        <a @click="tela = 'login'">Entrar</a>
      </p>
    </form>

    <!-- LOGIN -->
    <form class="card" v-show="tela === 'login'" @submit.prevent="login">
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
          {{ mostrarSenhaLogin ? '😎' : '👀' }}
        </span>
      </div>
      <span class="erro">{{ erroLoginSenha }}</span>

      <button type="submit">Entrar</button>


      <p class="switch">
        Ainda não tem conta?
        <a @click="tela = 'cadastro'">Cadastrar</a>
      </p>
    </form>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const tela = ref('login')

const mostrarCadastro = ref(false)
const mostrarLogin = ref(true)

const animCadastro = ref('saindo')
const animLogin = ref('entrando')

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
  return texto.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[0-9]/g, '') // Remove números
    .replace(/\s+/g, '') // Remove espaços
    .replace(/[^a-z]/g, '') // Remove caracteres especiais, mantém só letras
}
// #endregion

// Cadastro
async function cadastrar() {
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
    'porra', 'caralho', 'merda', 'puta', 'fdp', 'filhodaputa',
    'buceta', 'cu', 'cuzao', 'puto', 'viado', 'bicha',
    'arrombado', 'desgraca', 'cacete', 'carai', 'krl',
    'pqp', 'vsf', 'vaisefoder', 'fodase',
    'bosta', 'corno', 'otario', 'babaca',
    'imbecil', 'idiota', 'burro', 'retardado', 'mongoloide',
    'piranha', 'vagabunda', 'vadia', 'safada', 'pinto', 'pau',
    'rola', 'penis', 'vagina', 'ppk', 'xoxota',
    'punheta', 'broxa', 'brochar', 'foder', 'fuder', 'trepar'
  ]

  // Normaliza o nome removendo números, espaços e acentos
  const nomeNormalizado = normalizarTexto(nomeCadastro.value)

  const contemPalavrao = palavroes.some(palavrao => {
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

    alert('Cadastro realizado com sucesso!')

    nomeCadastro.value = ''
    emailCadastro.value = ''
    senhaCadastro.value = ''
    tela.value = 'login'
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error)
    erroEmail.value = authStore.error || 'Erro ao cadastrar'
  }
}

// Login
async function login() {
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

    alert('Logado com sucesso!')

    emailLogin.value = ''
    senhaLogin.value = ''

    // Redireciona para a home
    router.push('/')
  } catch (error) {
    console.error('Erro no login:', error)
    erroLoginSenha.value = authStore.error || 'Email ou senha incorretos'
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
  animLogin.value = 'saindo'

  setTimeout(() => {
    mostrarLogin.value = false
    mostrarCadastro.value = true
    animCadastro.value = 'saindo'
    requestAnimationFrame(() => {
      animCadastro.value = 'entrando'
    })
  }, 500)
}

function irParaLogin() {
  animCadastro.value = 'saindo'

  setTimeout(() => {
    mostrarCadastro.value = false
    mostrarLogin.value = true
    animLogin.value = 'saindo'
    requestAnimationFrame(() => {
      animLogin.value = 'entrando'
    })
  }, 500)
}
// #endregion
</script>

<style scoped>
@media (min-width: 801px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: var(--bg-primary);
    transition: background-color 0.3s ease;
  }

  .card {
    box-shadow: 0 5px 20px var(--shadow-color);
    border-radius: 50px;
    position: relative;
    display: flex;
    width: 800px;
    height: 400px;
    overflow: hidden;
    border: 1px solid var(--card-border);
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
  }

  /* LADO ESQUERDO - CADASTRO */
  .lado-esquerdo {
    width: 45%;
    background: var(--accent-primary);
    padding: 3rem 3rem 3rem 4rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    clip-path: polygon(100% 0, 0 0, 0 190%);
    align-items: start;
    z-index: 2;
  }

  .lado-esquerdo img {
    margin-left: -4rem;
    width: 200px;
  }

  .card .lado-esquerdo .cad {
    color: white;
    font-size: 3rem;
    font-weight: 600;
  }

  /* TRIÂNGULO DIREITA (CADASTRO) */
  .triangulo-direita {
    position: absolute;
    left: 19.98%;
    top: 0;
    width: 200px;
    height: 400px;
    background: var(--card-bg);
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    z-index: 1;
    transition: background-color 0.3s ease;
  }

  /* LADO DIREITO - FORMULÁRIO */
  .card .lado-direito {
    width: 55%;
    background: var(--card-bg);
    padding: 2.5rem 3rem 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    z-index: 2;
    transition: background-color 0.3s ease;
  }

  input {
    padding: 0.8rem;
    border: 2px solid var(--border-color);
    border-radius: 6px;
    width: 100%;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px var(--shadow-color);
  }

  input::placeholder {
    color: var(--text-tertiary);
    font-weight: 400;
  }

  input:focus {
    outline: none;
    border-color: var(--accent-primary);
    background: var(--bg-primary);
    box-shadow: 0 0 0 3px rgba(29, 155, 240, 0.1), 0 4px 8px var(--shadow-color);
    transform: translateY(-1px);
  }

  .senha-container {
    position: relative;
  }

  .input-senha {
    padding-right: 2.5rem;
  }

  .toggle-senha {
    position: absolute;
    right: 10px;
    top: 14px;
    cursor: pointer;
    color: var(--text-secondary);
  }

  button {
    background-color: var(--accent-primary);
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--accent-hover);
  }

  .erro {
    color: #ff4444;
    font-size: 0.8rem;
  }

  .switch {
    margin-top: 2rem;
    text-align: center;
    color: var(--text-secondary);
    & a {
      color: var(--accent-primary);
      font-weight: bold;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    & a:hover {
      color: var(--accent-hover);
    }
  }

  /* LADO ESQUERDO - LOGIN */
  .lado-esquerdo-login {
    width: 45%;
    background: var(--accent-primary);
    padding: 3rem 4rem 3rem 3rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    clip-path: polygon(0 -80%, 0 100%, 100% 100%);
    z-index: 2;
  }

  .lado-esquerdo-login img {
    margin-left: -4rem !important;
    width: 200px !important;
  }

  /* TRIÂNGULO ESQUERDA (LOGIN) */
  .triangulo-esquerda {
    position: absolute;
    left: 20%;
    top: 0;
    width: 199.9px;
    height: 400px;
    background: var(--card-bg);
    clip-path: polygon(100% 0, 100% 100%, 0 0%);
    transform: translateX(0);
    z-index: 1;
    transition: background-color 0.3s ease;
  }

  .log {
    font-weight: 600;
  }

  .lado-esquerdo-login h2 {
    color: white;
    font-size: 3rem;
  }

  /* Transição suave */
  .transicao {
    opacity: 0;
    transform: translateY(40px);
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
  }

  /* Entrando (subindo e aparecendo) */
  .entrando {
    opacity: 1;
    transform: translateY(0);
  }

  /* Saindo (descendo e sumindo) */
  .saindo {
    opacity: 0;
    transform: translateY(40px);
  }

  /* ---------- ANIMAÇÃO ---------- */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
@media (max-width: 800px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  img {
    display: none;
  }

  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--bg-primary);
    color: var(--text-primary);
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease;
  }

  /* ---------- CARD DE CADASTRO E LOGIN ---------- */
  .card {
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: center;
    align-items: center;
    background: var(--card-bg);
    padding: 2.7rem 3rem;
    border-radius: 18px;
    width: 380px;
    border: 1px solid var(--card-border);
    box-shadow: 0 8px 35px var(--shadow-color);
    animation: fadeIn 0.3s ease;
    transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .card h2 {
    text-align: center;
    font-size: 1.8rem;
    color: var(--text-primary);
    width: 100%;
    margin-bottom: 2rem;
  }

  /* ---------- INPUTS ---------- */
  .card input {
    width: 100%;
    padding: 1rem 1rem;
    border-radius: 10px;
    outline: none;
    border: 2px solid var(--border-color);
    background: var(--bg-primary);
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px var(--shadow-color);
  }

  .card input::placeholder {
    color: var(--text-tertiary);
    font-weight: 400;
  }

  .card input:focus {
    border-color: var(--accent-primary);
    background: var(--bg-primary);
    box-shadow: 0 0 0 3px rgba(29, 155, 240, 0.1), 0 4px 8px var(--shadow-color);
    transform: translateY(-1px);
  }

  /* ---------- CONTAINER DE SENHA ---------- */
  .senha-container {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: stretch;
    position: relative;
  }

  .input-senha {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    padding-right: 0.25rem;
    color: var(--text-primary);
    font-size: 1rem;
    font-family: inherit;
    line-height: 1.5;
    box-sizing: border-box;
    padding: 0px 100px 0px 0px;
  }

  .input-senha::placeholder {
    color: var(--text-tertiary);
  }

  .toggle-senha {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 0.75rem;
    user-select: none;
    font-size: 1.3rem;
    transition: all 0.2s ease;
    cursor: pointer;
    background: transparent;
    border: none;
    line-height: 1;
    flex-shrink: 0;
    box-sizing: border-box;
    position: absolute;
    margin-top: 0.3rem;
    color: var(--text-secondary);
  }

  .toggle-senha:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  .toggle-senha:active {
    transform: scale(0.95);
  }

  /* ---------- BOTÃO ---------- */
  .card button,
  .card input[type='submit'] {
    width: 100%;
    padding: 0.9rem;
    margin-top: 0.5rem;
    background: var(--accent-primary);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card button:hover,
  .card input[type='submit']:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
  }

  /* ---------- MENSAGENS DE ERRO ---------- */
  .erro {
    color: #ff4444;
    font-size: 0.85rem;
    margin-top: -0.3rem;
    margin-bottom: 0.8rem;
    width: 100%;
    text-align: left;
    min-height: 1.2rem;
  }

  /* ---------- SWITCH (ALTERAR ENTRE CADASTRO/LOGIN) ---------- */
  .switch {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-align: center;
  }

  .switch a {
    color: var(--accent-primary);
    cursor: pointer;
    text-decoration: none;
    margin-left: 0.3rem;
    transition: color 0.3s ease;
  }

  .switch a:hover {
    color: var(--accent-hover);
    text-decoration: underline;
  }

  /* ---------- ANIMAÇÃO ---------- */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
