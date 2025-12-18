<template>
  <main class="container" v-if="larguraAtual > 600">
    <!-- CADASTRO -->
    <form
      class="card transicao"
      :class="animCadastro"
      v-if="mostrarCadastro"
      @submit.prevent="cadastrar"
    >
      <div class="lado-esquerdo">
        <h2 class="cad">Cadastro</h2>
        <img src="/if-design-svgrepo-com.svg" alt="" />
      </div>

      <div class="triangulo"></div>

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
    <form class="card transicao" :class="animLogin" v-if="mostrarLogin" @submit.prevent="login">
      <div class="lado-direito" style="padding-top: 5rem !important">
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

      <div class="triangulo-login"></div>

      <div class="lado-esquerdo-login">
        <h2 class="log">Login</h2>
        <img src="/if-design-svgrepo-com.svg" alt="" />
      </div>
    </form>
  </main>
  <main class="container ativo" v-else>
    <!-- CADASTRO -->
    <form class="card" v-show="tela === 'cadastro'" @submit.prevent="cadastrar">
      <h2>Cadastro</h2>

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
      <h2 style="top: 0;">Login</h2>

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
import api from '@/axios'

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

async function cadastrar() {
  erroNome.value = ''
  erroEmail.value = ''
  erroSenha.value = ''

  if (!nomeCadastro.value) {
    erroNome.value = 'O nome não pode ser vazio'
    return
  }

  if (!emailCadastro.value || !ValidarEmail(emailCadastro.value)) {
    erroEmail.value = 'Email inválido'
    return
  }

  const erros = validarSenha(senhaCadastro.value)

  if (erros.length > 0) {
    erroSenha.value = erros.join(' • ')
    return
  }

  try {
    const response = await api.post('/register', {
      username: nomeCadastro.value,
      email: emailCadastro.value,
      password: senhaCadastro.value,
    })

    console.log('Cadastro realizado com sucesso:', response.data)
    alert('Cadastro realizado com sucesso!')

    nomeCadastro.value = ''
    emailCadastro.value = ''
    senhaCadastro.value = ''
    tela.value = 'login'
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error)
    const msg = error.response?.data?.msg || error.message || 'Erro ao cadastrar'
    erroEmail.value = msg
  }
}

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

  console.log('Tentando login com email:', emailLogin.value)
  console.log('Dados enviados:', { email: emailLogin.value, password: senhaLogin.value })

  try {
    const response = await api.post('/login', {
      email: emailLogin.value,
      password: senhaLogin.value,
    })

    console.log('Resposta do login:', response.data)
    console.log('Token recebido:', response.data.token)
    localStorage.setItem('token', response.data.token)
    console.log('Token armazenado no localStorage:', localStorage.getItem('token'))
    alert('Logado com sucesso!')

    emailLogin.value = ''
    senhaLogin.value = ''
  } catch (error) {
    console.error('Erro no login:', error)
    const msg = error.response?.data?.msg || error.message || 'Email ou senha incorretos'
    erroLoginSenha.value = msg
  }
}

function irParaLogin() {
  animCadastro.value = 'saindo'
  setTimeout(() => {
    mostrarCadastro.value = false
    tela.value = 'login'
    animLogin.value = 'entrando'
    mostrarLogin.value = true
  }, 350)
}

function irParaCadastro() {
  animLogin.value = 'saindo'
  setTimeout(() => {
    mostrarLogin.value = false
    tela.value = 'cadastro'
    animCadastro.value = 'entrando'
    mostrarCadastro.value = true
  }, 350)
}

function toggleSenhaCadastro() {
  mostrarSenhaCadastro.value = !mostrarSenhaCadastro.value
}

function toggleSenhaLogin() {
  mostrarSenhaLogin.value = !mostrarSenhaLogin.value
}

// #endregion

const larguraAtual = ref(window.innerWidth)
function alterarLarg() {
  larguraAtual.value = window.innerWidth
  console.log(larguraAtual.value)
}
onMounted(() => {
  window.addEventListener('resize', alterarLarg)
})
</script>

<style scoped>
@media (min-width: 700px) {
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
    background: rgb(255, 255, 255);
  }
  .card {
    box-shadow: 0.0000000001px 5px 10px 1px #007bff4d;
    border-radius: 50px;
    position: relative;
    display: flex;
    width: 800px;
    height: 400px;
    overflow: hidden;
  }

  /* LADO ESQUERDO */
  .lado-esquerdo {
    width: 50%;
    background: #007bff;
    clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
    padding: 3rem 3rem 3rem 4rem;
    color: white;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    img {
      width: 100px;
    }
  }

  /* TRIÂNGULO COMPLEMENTAR */
  .triangulo {
    position: absolute;
    left: 29.9%;
    top: 0;
    width: 20.1%;
    height: 100%;
    background: #ffffff;
    clip-path: polygon(0 0, 100% 100%, 0 100%);
    z-index: 1; /* atrás do trapézio, mas NA FRENTE do fundo */
    transform: rotateY(180deg);
  }

  .card .lado-esquerdo .cad {
    color: white;
    font-size: 3rem;
    font-weight: 600;
  }

  /* LADO DIREITO (FORMULÁRIO) */
  .card .lado-direito {
    width: 50%;
    background: white;
    padding: 2.5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
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
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  .erro {
    color: red;
    font-size: 0.8rem;
  }

  .switch {
    margin-top: 1rem;
    text-align: center;
    & a {
      color: #007bff;
      font-weight: bold;
      cursor: pointer;
    }
  }

  /* LADO DIREITO AZUL (LOGIN) */
  .lado-esquerdo-login {
    width: 50%;
    background: #007bff;
    clip-path: polygon(40% 0, 100% 0%, 100% 100%, 0 100%);
    padding: 3rem 4rem 3rem 3rem;
    color: rgb(0, 0, 0);
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: end;
    flex-direction: column;
    img {
      width: 100px;
    }
  }

  /* TRIÂNGULO COMPLEMENTAR (LOGIN) */
  .triangulo-login {
    position: absolute;
    right: 29.9%;
    top: 0;
    width: 20.1%;
    height: 100%;
    background: #ffffff;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    z-index: 1;
  }

  .log {
    font-weight: 600;
  }

  .lado-esquerdo-login {
    h2 {
      color: white;
      font-size: 3rem;
    }
  }

  /* Transição suave */
  .transicao {
    transition: all 0.5s ease;
  }

  /* Entrando (subindo e aparecendo) */
  .entrando {
    opacity: 1;
    transform: translateY();
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
@media (max-width: 699px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
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
    background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
    color: #2d2d2d;
    margin: 0;
    padding: 0;
  }

  /* ---------- CARD DE CADASTRO E LOGIN ---------- */
  .card {
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    padding: 2.7rem 3rem;
    border-radius: 18px;
    width: 380px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 8px 35px rgba(0, 0, 0, 0.08);
    animation: fadeIn 0.3s ease;
  }

  .card h2 {
    text-align: center;
    font-size: 1.8rem;
    color: #1a1a1a;
    width: 100%;
  }

  /* ---------- INPUTS ---------- */
  .card input {
    width: 100%;
    padding: 0.9rem 1rem;
    border-radius: 10px;
    outline: none;
    border: 1.5px solid #e0e0e0;
    background: #f8f9fa;
    color: #1a1a1a;
    transition: 0.2s;
    margin-bottom: 0.5rem;
  }

  .card input::placeholder {
    color: #999;
  }

  .card input:focus {
    border-color: #4a73ff;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(74, 115, 255, 0.1);
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
    color: #1a1a1a;
    font-size: 1rem;
    font-family: inherit;
    line-height: 1.5;
    box-sizing: border-box;
    padding: 0px 100px 0px 0px;
  }

  .input-senha::placeholder {
    color: #999;
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
    background: #4a73ff;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }

  .card button:hover,
  .card input[type='submit']:hover {
    background: #3b5fe0;
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
    color: #555;
    text-align: center;
  }

  .switch a {
    color: #4a73ff;
    cursor: pointer;
    text-decoration: none;
    margin-left: 0.3rem;
    transition: 0.2s;
  }

  .switch a:hover {
    color: #3b5fe0;
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
