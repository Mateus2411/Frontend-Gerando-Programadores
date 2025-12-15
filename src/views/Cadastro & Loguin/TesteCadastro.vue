<template>
  <main class="container">
    <!-- CADASTRO -->
    <form
      class="card transicao"
      :class="animCadastro"
      v-if="mostrarCadastro"
      @submit.prevent="cadastrar"
    >
      <div class="lado-esquerdo">
        <h2 class="cad">Cadastro</h2>
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
      </div>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
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
</script>

<style scoped>
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
  background: rgb(255, 245, 216);
}
.card {
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
  z-index: 2; /* fica na frente */
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
  justify-content: flex-end;
  align-items: flex-start;
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
</style>
