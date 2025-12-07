<script setup>
import { ref } from 'vue'
import api from '@/axios'
import { useRouter } from 'vue-router'
import header1 from '@/components/Componentes Globais/AppHeader.vue'

// #region Cadastro & Loguin
// tela ativa (cadastro / login)
const tela = ref('cadastro')
const router = useRouter()

// CADASTRO
const nomeCadastro = ref('')
const emailCadastro = ref('')
const senhaCadastro = ref('')
const erroNome = ref('')
const erroEmail = ref('')
const erroSenha = ref('')

// LOGIN
const emailLogin = ref('')
const senhaLogin = ref('')
const erroLoginEmail = ref('')
const erroLoginSenha = ref('')
const mostrarSenhaCadastro = ref(false)
const mostrarSenhaLogin = ref(false)

// valida email
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

// valida senha
function validarSenha(senha) {
  const erros = []
  if (senha.length < 6) erros.push('Mínimo 6 caracteres')
  if (!/[A-Z]/i.test(senha)) erros.push('Falta uma letra')
  if (!/[0-9]/.test(senha)) erros.push('Falta um número')
  if (!/[*@#!?.-_]/.test(senha)) erros.push('Falta caractere especial (* @ # ! ? . - _)')

  return erros
}

// cadastrar
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
    const res = await api.post('/register', {
      username: nomeCadastro.value,
      email: emailCadastro.value,
      password: senhaCadastro.value,
    })

    console.log('Cadastro realizado com sucesso:', res.data)
    alert('Cadastro realizado com sucesso!')
    router.push('/')
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error)
    if (error.response?.data?.msg) {
      erroEmail.value = error.response.data.msg
    } else {
      alert('Erro ao cadastrar usuário. Tente novamente mais tarde.')
    }
  }
}

// login
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

  // Envia os dados eaparece nas logs
  console.log('Tentando login com email:', emailLogin.value)
  console.log('Dados enviados:', { email: emailLogin.value, password: senhaLogin.value })

  // Validar o loguin
  try {
    const res = await api.post('/login', {
      email: emailLogin.value,
      password: senhaLogin.value,
    })
    console.log('Resposta do login:', res)
    console.log('Token recebido:', res.data.token)
    localStorage.setItem('token', res.data.token)
    console.log('Token armazenado no localStorage:', localStorage.getItem('token'))
    alert('Logado com sucesso!')
    router.push('/')
  } catch (err) {
    console.error('Erro no login:', err)
    console.error('Detalhes do erro:', err.response?.data)
    console.error('Status do erro:', err.response?.status)
    erroLoginSenha.value = err.response?.data?.msg || 'Email ou senha incorretos'
  }
}

// Mostrar a Senha ( Cadastro & Login)
function toggleSenhaCadastro() {
  mostrarSenhaCadastro.value = !mostrarSenhaCadastro.value
}

function toggleSenhaLogin() {
  mostrarSenhaLogin.value = !mostrarSenhaLogin.value
}
// #endregion


</script>
<template>
  <header1 />
  <main class="container ativo">
    <!-- CADASTRO -->
    <div class="card" v-show="tela === 'cadastro'">
      <h2>Cadastro</h2>

      <input v-model="nomeCadastro" placeholder="Nome" />
      <span class="erro">{{ erroNome }}</span>

      <input v-model="emailCadastro" placeholder="Email" />
      <span class="erro">{{ erroEmail }}</span>

      <div class="senha-container">
        <input v-model="senhaCadastro" :type="mostrarSenhaCadastro ? 'text' : 'password'" placeholder="Senha"
          class="input-senha" />
        <div class="toggle-senha">
          <span @click="toggleSenhaCadastro">{{ mostrarSenhaCadastro ? '😎' : '👀' }}</span>
        </div>
      </div>
      <span class="erro">{{ erroSenha }}</span>

      <button @click="cadastrar">Cadastrar</button>

      <p class="switch">
        Já tem conta?
        <a @click="tela = 'login'">Entrar</a>
      </p>
    </div>

    <!-- LOGIN -->
    <div class="card" v-show="tela === 'login'">
      <h2>Login</h2>

      <input v-model="emailLogin" placeholder="Email" />
      <span class="erro">{{ erroLoginEmail }}</span>

      <div class="senha-container">
        <input v-model="senhaLogin" :type="mostrarSenhaLogin ? 'text' : 'password'" placeholder="Senha"
          class="input-senha" />
        <span class="toggle-senha" @click="toggleSenhaLogin">
          {{ mostrarSenhaLogin ? '😎' : '👀' }}
        </span>
      </div>
      <span class="erro">{{ erroLoginSenha }}</span>

      <button @click="login">Entrar</button>

      <p class="switch">
        Ainda não tem conta?
        <a @click="tela = 'cadastro'">Cadastrar</a>
      </p>
    </div>
  </main>
</template>

<style scoped>
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
  margin-bottom: 1.2rem;
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
</style>
