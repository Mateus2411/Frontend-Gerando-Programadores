<template>
  <section class="edit-perfil">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <button class="btn-voltar" @click="voltar" aria-label="Voltar para perfil">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Voltar
        </button>
        <h1>Editar Perfil</h1>
      </div>

      <!-- Loading -->
      <div v-if="authStore.loading" class="loading">
        <div class="spinner"></div>
        <p>Salvando...</p>
      </div>

      <!-- Formulário -->
      <form v-else @submit.prevent="salvar" class="form-edit">
        <!-- Avatar -->
        <div class="section avatar-section">
          <h2>Foto de Perfil</h2>
          <div class="avatar-edit">
            <div class="avatar-preview" @click="mostrarModalAvatar = true">
              <img :src="previewAvatar" alt="Avatar" class="avatar" />
              <div class="avatar-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </div>
            </div>
            <div class="avatar-actions">
              <button type="button" class="btn-secondary" @click="mostrarModalAvatar = true">
                Escolher Avatar
              </button>
              <p class="hint">Clique para escolher um avatar</p>
            </div>
          </div>
        </div>

        <!-- Nome de Usuário -->
        <div class="section">
          <h2>Nome de Usuário</h2>
          <div class="input-group">
            <label for="username">Nome</label>
            <input
              id="username"
              v-model="form.username"
              type="text"
              placeholder="Seu nome"
              maxlength="50"
            />
            <span v-if="errors.username" class="error">{{ errors.username }}</span>
            <span class="char-count">{{ form.username.length }}/50</span>
          </div>
        </div>

        <!-- Email -->
        <div class="section">
          <h2>Email</h2>
          <div class="input-group">
            <label for="email">Endereço de Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="seu@email.com"
              disabled
            />
            <p class="hint">O email não pode ser alterado</p>
          </div>
        </div>

        <!-- Biografia -->
        <div class="section">
          <h2>Biografia</h2>
          <div class="input-group">
            <label for="bio">Sobre Você</label>
            <textarea
              id="bio"
              v-model="form.bio"
              placeholder="Conte um pouco sobre você..."
              rows="4"
              maxlength="200"
            ></textarea>
            <span v-if="errors.bio" class="error">{{ errors.bio }}</span>
            <span class="char-count">{{ form.bio.length }}/200</span>
          </div>
        </div>

        <!-- Senha -->
        <div class="section">
          <h2>Alterar Senha</h2>
          <div class="input-group">
            <label for="currentPassword">Senha Atual</label>
            <div class="password-input">
              <input
                id="currentPassword"
                v-model="form.currentPassword"
                :type="showCurrentPassword ? 'text' : 'password'"
                placeholder="Digite sua senha atual"
              />
              <button
                type="button"
                class="toggle-password"
                @click="showCurrentPassword = !showCurrentPassword"
              >
                {{ showCurrentPassword ? '😎' : '👀' }}
              </button>
            </div>
            <span v-if="errors.currentPassword" class="error">{{ errors.currentPassword }}</span>
          </div>

          <div class="input-group">
            <label for="newPassword">Nova Senha</label>
            <div class="password-input">
              <input
                id="newPassword"
                v-model="form.newPassword"
                :type="showNewPassword ? 'text' : 'password'"
                placeholder="Digite a nova senha"
              />
              <button
                type="button"
                class="toggle-password"
                @click="showNewPassword = !showNewPassword"
              >
                {{ showNewPassword ? '😎' : '👀' }}
              </button>
            </div>
            <span v-if="errors.newPassword" class="error">{{ errors.newPassword }}</span>
          </div>

          <div class="input-group">
            <label for="confirmPassword">Confirmar Nova Senha</label>
            <div class="password-input">
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Confirme a nova senha"
              />
              <button
                type="button"
                class="toggle-password"
                @click="showConfirmPassword = !showConfirmPassword"
              >
                {{ showConfirmPassword ? '😎' : '👀' }}
              </button>
            </div>
            <span v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</span>
          </div>
          <p class="hint">Deixe em branco se não quiser alterar a senha</p>
        </div>

        <!-- Mensagem de Erro Geral -->
        <div v-if="authStore.error" class="error-message">
          {{ authStore.error }}
        </div>

        <!-- Ações -->
        <div class="actions">
          <button type="button" class="btn-cancel" @click="voltar">
            Cancelar
          </button>
          <button type="submit" class="btn-save" :disabled="authStore.loading">
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  </section>

  <!-- Modal de Seleção de Avatar (fora da section para sobrepor tudo) -->
  <Teleport to="body">
    <div v-if="mostrarModalAvatar" class="modal-overlay" @click="mostrarModalAvatar = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>Escolha seu Avatar</h2>
          <button class="btn-close" @click="mostrarModalAvatar = false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Abas -->
        <div class="modal-tabs">
          <button
            class="tab-button"
            :class="{ active: abaAtiva === 'masculino' }"
            @click="abaAtiva = 'masculino'"
          >
            Masculino
          </button>
          <button
            class="tab-button"
            :class="{ active: abaAtiva === 'feminino' }"
            @click="abaAtiva = 'feminino'"
          >
            Feminino
          </button>
        </div>

        <div class="modal-body">
          <!-- Avatares Masculinos -->
          <div v-show="abaAtiva === 'masculino'" class="avatar-grid">
            <div
              v-for="avatar in avataresMasculinos"
              :key="avatar.path"
              class="avatar-option"
              :class="{ selected: avatarSelecionado === avatar.path }"
              @click="avatarSelecionado = avatar.path"
            >
              <img :src="avatar.path" :alt="avatar.nome" />
              <div v-if="avatarSelecionado === avatar.path" class="check-mark">✓</div>
            </div>
          </div>

          <!-- Avatares Femininos -->
          <div v-show="abaAtiva === 'feminino'" class="avatar-grid">
            <div
              v-for="avatar in avataresFemininos"
              :key="avatar.path"
              class="avatar-option"
              :class="{ selected: avatarSelecionado === avatar.path }"
              @click="avatarSelecionado = avatar.path"
            >
              <img :src="avatar.path" :alt="avatar.nome" />
              <div v-if="avatarSelecionado === avatar.path" class="check-mark">✓</div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn-modal-cancel" @click="mostrarModalAvatar = false">
            Cancelar
          </button>
          <button type="button" class="btn-modal-confirm" @click="confirmarAvatar">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const mostrarModalAvatar = ref(false)
const previewAvatar = ref('/favicon.ico')
const avatarSelecionado = ref('')
const abaAtiva = ref('masculino')

const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)

// Desabilita scroll quando modal está aberto
watch(mostrarModalAvatar, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
})

// Lista de avatares disponíveis
const avataresMasculinos = [
  { nome: 'Avatar 1', path: '/perfil_avatar/masculino/masc-1.png' },
  { nome: 'Avatar 2', path: '/perfil_avatar/masculino/masc-2.png' },
  { nome: 'Avatar 3', path: '/perfil_avatar/masculino/masc-3.png' },
  { nome: 'Avatar 4', path: '/perfil_avatar/masculino/masc-4.png' },
  { nome: 'Avatar 5', path: '/perfil_avatar/masculino/masc-5.png' },
  { nome: 'Avatar 6', path: '/perfil_avatar/masculino/masc-6.png' }
]

const avataresFemininos = [
  { nome: 'Avatar 1', path: '/perfil_avatar/feminino/fem-1.png' },
  { nome: 'Avatar 2', path: '/perfil_avatar/feminino/fem-2.png' },
  { nome: 'Avatar 3', path: '/perfil_avatar/feminino/fem-3.png' },
  { nome: 'Avatar 4', path: '/perfil_avatar/feminino/fem-4.png' },
  { nome: 'Avatar 5', path: '/perfil_avatar/feminino/fem-5.png' },
  { nome: 'Avatar 6', path: '/perfil_avatar/feminino/fem-6.png' }
]

const form = reactive({
  username: '',
  email: '',
  bio: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  avatar: null
})

const errors = reactive({
  username: '',
  bio: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

function limparErros() {
  errors.username = ''
  errors.bio = ''
  errors.currentPassword = ''
  errors.newPassword = ''
  errors.confirmPassword = ''
  authStore.clearError()
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

function validar() {
  limparErros()
  let valido = true

  const admBlock = ['admin', 'administrator', 'adm', 'careca']

  // Lista de palavrões (censurada para moderação)
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

  // Valida username
  if (!form.username.trim()) {
    errors.username = 'O nome não pode estar vazio'
    valido = false
  } else if (form.username.length < 3) {
    errors.username = 'O nome deve ter pelo menos 3 caracteres'
    valido = false
  } else {
    // Verifica se o nome foi alterado
    const nomeAlterado = form.username !== authStore.userProfile?.username

    // Só valida bloqueios se o nome foi alterado
    if (nomeAlterado) {
      if (admBlock.includes(form.username.toLowerCase())) {
        errors.username = 'O careca é o único adm'
        valido = false
      } else {
        // Normaliza o username removendo números, espaços e acentos
        const usernameNormalizado = normalizarTexto(form.username)

        // Verifica se contém palavrão
        const contemPalavrao = palavroes.some(palavrao => {
          const palavraoNormalizado = normalizarTexto(palavrao)
          return usernameNormalizado.includes(palavraoNormalizado)
        })

        if (contemPalavrao) {
          errors.username = 'Nome de usuário contém linguagem inapropriada'
          valido = false
        }
      }
    }
  }

  // Valida bio
  if (form.bio.length > 200) {
    errors.bio = 'A biografia não pode ter mais de 200 caracteres'
    valido = false
  }

  // Valida senha (se estiver tentando alterar)
  if (form.newPassword || form.confirmPassword || form.currentPassword) {
    if (!form.currentPassword) {
      errors.currentPassword = 'Digite sua senha atual'
      valido = false
    }

    if (!form.newPassword) {
      errors.newPassword = 'Digite a nova senha'
      valido = false
    } else {
      const errosSenha = validarSenha(form.newPassword)
      if (errosSenha.length > 0) {
        errors.newPassword = errosSenha.join(' • ')
        valido = false
      }
    }

    if (form.newPassword !== form.confirmPassword) {
      errors.confirmPassword = 'As senhas não coincidem'
      valido = false
    }
  }

  return valido
}

async function salvar() {
  if (!validar()) return

  try {
    const usernameChanged = form.username !== authStore.userProfile?.username
    const bioChanged = form.bio !== (authStore.userProfile?.bio || authStore.userProfile?.biography || '')
    const passwordChanged = form.newPassword && form.currentPassword
    const fotoChanged = form.avatar && form.avatar !== authStore.userProfile?.foto

    if (usernameChanged) {
      await authStore.updateUsername(form.username)
    }

    if (bioChanged) {
      await authStore.updateBio(form.bio)
    }

    if (passwordChanged) {
      await authStore.updatePassword(form.currentPassword, form.newPassword)
    }

    if (fotoChanged) {
      // Extrai apenas o nome do arquivo (ex: "masc-3.jpg" ou "fem-2.jpg")
      const fotoNome = form.avatar.split('/').pop()
      await authStore.updateFoto(fotoNome)
    }

    if (!usernameChanged && !bioChanged && !passwordChanged && !fotoChanged) {
      alert('Nenhuma alteração foi feita')
      return
    }

    alert('Perfil atualizado com sucesso!')
    router.push('/perfil')
  } catch (err) {
    console.error('Erro ao salvar perfil:', err)
  }
}

function voltar() {
  router.push('/perfil')
}

function confirmarAvatar() {
  if (avatarSelecionado.value) {
    previewAvatar.value = avatarSelecionado.value
    form.avatar = avatarSelecionado.value
    mostrarModalAvatar.value = false
  }
}

onMounted(() => {
  // Carrega dados atuais do usuário
  if (authStore.userProfile) {
    form.username = authStore.userProfile.username || ''
    form.email = authStore.userProfile.email || ''
    form.bio = authStore.userProfile.bio || authStore.userProfile.biography || ''

    // Carrega avatar do usuário
    if (authStore.userProfile.foto) {
      const fotoNome = authStore.userProfile.foto

      // Determina o caminho completo baseado no nome do arquivo
      if (fotoNome.startsWith('masc-')) {
        previewAvatar.value = `/perfil_avatar/masculino/${fotoNome}`
      } else if (fotoNome.startsWith('fem-')) {
        previewAvatar.value = `/perfil_avatar/feminino/${fotoNome}`
      } else {
        previewAvatar.value = '/favicon.ico'
      }

      form.avatar = previewAvatar.value
    } else {
      previewAvatar.value = '/favicon.ico'
    }
  }
})
</script>

<style scoped>
.edit-perfil {
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  background: var(--bg-primary);
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.btn-voltar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-voltar:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-4px);
}

.header h1 {
  font-size: 2rem;
  color: var(--text-primary);
  margin: 0;
}

/* Loading */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: var(--text-secondary);
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(29, 155, 240, 0.2);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Form */
.form-edit {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.section:hover {
  border-color: rgba(29, 155, 240, 0.3);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.section h2 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin: 0 0 1.5rem 0;
  font-weight: 600;
}

/* Avatar Section */
.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.avatar-edit {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  justify-content: center;
}

.avatar-preview {
  position: relative;
  cursor: pointer;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent-primary);
  background: #0b2d52;
}

.avatar-overlay {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
}

.avatar-preview:hover .avatar-overlay {
  opacity: 1;
}

.avatar-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}

/* Input Group */
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.input-group:last-child {
  margin-bottom: 0;
}

.input-group label {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
}

.input-group input,
.input-group textarea {
  padding: 0.875rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.input-group input:focus,
.input-group textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  background: var(--bg-primary);
  box-shadow: 0 0 0 3px rgba(29, 155, 240, 0.1);
}

.input-group input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.input-group textarea {
  resize: vertical;
  min-height: 100px;
}

/* Password Input */
.password-input {
  position: relative;
  display: flex;
  align-items: center;
}

.password-input input {
  flex: 1;
  padding-right: 3rem;
}

.toggle-password {
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;
}

.toggle-password:hover {
  transform: scale(1.1);
}

/* Hints e Contadores */
.hint {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
}

.char-count {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-align: right;
}

/* Erros */
.error {
  color: #ff4444;
  font-size: 0.85rem;
}

.error-message {
  background: rgba(255, 68, 68, 0.1);
  border: 1px solid #ff4444;
  border-radius: 10px;
  padding: 1rem;
  color: #ff4444;
  text-align: center;
}

/* Ações */
.actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding-top: 1rem;
}

.btn-cancel,
.btn-save,
.btn-secondary {
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.btn-cancel {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-cancel:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.btn-save {
  background: var(--accent-primary);
  color: white;
}

.btn-save:hover:not(:disabled) {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(29, 155, 240, 0.3);
}

.btn-save:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background: var(--accent-primary);
  color: white;
}

.btn-secondary:hover {
  background: var(--accent-hover);
}

/* Mobile */
@media (max-width: 768px) {
  .edit-perfil {
    padding: 7rem 1rem 2rem;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .header h1 {
    font-size: 1.5rem;
  }

  .avatar-edit {
    flex-direction: column;
    gap: 1.5rem;
  }

  .avatar-actions {
    align-items: center;
  }

  .section {
    padding: 1.5rem;
  }

  .actions {
    flex-direction: column-reverse;
  }

  .btn-cancel,
  .btn-save {
    width: 100%;
  }
}


/* Modal de Avatar */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: var(--card-bg);
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 85vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6);
  border: 1px solid var(--border-color);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-secondary);
}

.modal-header h2 {
  font-size: 1.4rem;
  color: var(--text-primary);
  margin: 0;
  font-weight: 600;
}

.btn-close {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-close:hover {
  background: rgba(255, 68, 68, 0.1);
  color: #ff4444;
}

/* Abas */
.modal-tabs {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-secondary);
}

.tab-button {
  flex: 1;
  padding: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.tab-button:hover {
  color: var(--text-primary);
  background: rgba(29, 155, 240, 0.05);
}

.tab-button.active {
  color: var(--accent-primary);
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-primary);
}

.modal-body {
  padding: 2rem;
  overflow-y: auto;
  flex: 1;
  background: var(--bg-primary);
}

.avatar-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.avatar-option {
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  border: 3px solid var(--border-color);
  transition: all 0.3s ease;
  aspect-ratio: 1;
  background: var(--bg-secondary);
}

.avatar-option img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.avatar-option:hover {
  transform: scale(1.05);
  border-color: var(--accent-primary);
  box-shadow: 0 8px 20px rgba(29, 155, 240, 0.3);
}

.avatar-option.selected {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 4px rgba(29, 155, 240, 0.2);
  transform: scale(1.02);
}

.check-mark {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: var(--accent-primary);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  animation: checkPop 0.3s ease;
}

@keyframes checkPop {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.modal-footer {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 2rem;
  border-top: 1px solid var(--border-color);
  justify-content: flex-end;
  background: var(--bg-secondary);
}

.btn-modal-cancel,
.btn-modal-confirm {
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-modal-cancel {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-modal-cancel:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.btn-modal-confirm {
  background: var(--accent-primary);
  color: white;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.btn-modal-confirm:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(29, 155, 240, 0.4);
}

@media (max-width: 768px) {
  .modal-content {
    max-height: 90vh;
    max-width: 95vw;
  }

  .modal-header {
    padding: 1.25rem 1.5rem;
  }

  .modal-header h2 {
    font-size: 1.2rem;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .avatar-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .modal-footer {
    padding: 1.25rem 1.5rem;
    flex-direction: column-reverse;
  }

  .btn-modal-cancel,
  .btn-modal-confirm {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .avatar-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .check-mark {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
}
</style>
