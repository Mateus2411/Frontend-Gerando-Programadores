<script setup>
import { useAiStore } from '@/stores/ai'
import { ref, nextTick, watch, onMounted } from 'vue'

const ai = useAiStore()
const pergunta = ref('')
const mensagens = ref([])
const chatMessages = ref(null)
const linguagem = ref('')

const STORAGE_KEY = 'chat_history'
const EXPIRATION_TIME = 10 * 60 * 1000

const props = defineProps({
  chatAberto: {
    type: Boolean,
    default: false
  }
})

watch(() => props.chatAberto, (novoValor) => {
  if (novoValor) {
    carregarHistorico()
  }
}, { immediate: true })

function carregarHistorico() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const data = JSON.parse(stored)
      const now = new Date().getTime()
      const tempoDecorrido = now - data.savedAt
      if (tempoDecorrido < EXPIRATION_TIME) {
        mensagens.value = data.messages.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  } catch (error) {
    console.error('Erro ao carregar histórico:', error)
    localStorage.removeItem(STORAGE_KEY)
  }
}

function salvarHistorico() {
  try {
    const data = {
      messages: mensagens.value,
      savedAt: new Date().getTime()
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Erro ao salvar histórico:', error)
  }
}

const keyWords = [
  'javascript', 'python', 'sql', 'html', 'css', 'typescript',
  'java', 'c++', 'c#', 'php', 'ruby', 'swift', 'go', 'rust',
  'kotlin', 'react', 'vue', 'angular'
]

function detectarLinguagem(texto) {
  const textoLower = texto.toLowerCase()
  const linguaEncontrada = keyWords.find((keyword) => textoLower.includes(keyword))
  if (linguaEncontrada) {
    linguagem.value = linguaEncontrada.charAt(0).toUpperCase() + linguaEncontrada.slice(1)
  } else {
    linguagem.value = 'JavaScript'
  }
}

const promptSistema = `Você é Cognexus, assistente de programação para iniciantes. Responda SEMPRE em português brasileiro usando MARKDOWN completo.

LINGUAGEM PADRÃO: JavaScript
- Use JavaScript em todos os exemplos de código, a menos que o usuário especifique outra linguagem
- Sempre use \`\`\`javascript para blocos de código JavaScript

FORMATAÇÃO MARKDOWN OBRIGATÓRIA:
- Use **negrito** para termos importantes
- Use *itálico* para ênfase
- Use \`código inline\` para nomes de variáveis, funções, etc
- Use \`\`\`javascript para blocos de código
- Use > para citações ou notas importantes
- Use - ou * para listas
- Use ### para subtítulos quando necessário

ESTRUTURA DE RESPOSTA:
1. **Resposta direta** (2-3 frases em negrito)
2. **Exemplo prático** (código JavaScript commented)
3. **Dica importante** (com > citação)

VALIDAR E CORRIGIR CÓDIGO:
- Se o usuário enviar código, analise e corrija em JavaScript
- Explique os erros encontrados usando **negrito** para destacar
- Mostre o código corrigido completo
- Use comentários \`//\` para explicar as correções

Seja amigável, paciente e incentivador!`

async function enviarMensagem() {
  if (!pergunta.value.trim()) return

  mensagens.value.push({
    tipo: 'usuario',
    texto: pergunta.value,
    timestamp: new Date(),
  })

  const perguntaAtual = pergunta.value
  pergunta.value = ''

  await nextTick()
  scrollToBottom()

  detectarLinguagem(perguntaAtual)
  await ai.perguntar(perguntaAtual, promptSistema, linguagem.value)

  if (ai.resposta) {
    mensagens.value.push({
      tipo: 'ia',
      texto: ai.resposta,
      timestamp: new Date(),
    })
  }

  if (ai.erro) {
    mensagens.value.push({
      tipo: 'erro',
      texto: ai.erro,
      timestamp: new Date(),
    })
  }

  salvarHistorico()
  await nextTick()
  scrollToBottom()
}

function scrollToBottom() {
  if (chatMessages.value) {
    chatMessages.value.scrollTo({
      top: chatMessages.value.scrollHeight,
      behavior: 'smooth'
    })
  }
}

function limparChat() {
  mensagens.value = []
  localStorage.removeItem(STORAGE_KEY)
}

function formatarMensagem(texto) {
  if (!texto) return ''

  let formatted = texto

  const codigosBlocos = []
  formatted = formatted.replace(/```(\w+)?\n([\s\S]*?)```/g, (_match, lang, code) => {
    const placeholder = `___CODE_BLOCK_${codigosBlocos.length}___`
    const escapedCode = code.trim()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    codigosBlocos.push(
      `<pre><code class="language-${lang || 'plaintext'}">${escapedCode}</code></pre>`
    )
    return placeholder
  })

  const codigosInline = []
  formatted = formatted.replace(/`([^`]+)`/g, (_match, code) => {
    const placeholder = `___CODE_INLINE_${codigosInline.length}___`
    const escapedCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    codigosInline.push(`<code class="inline-code">${escapedCode}</code>`)
    return placeholder
  })

  formatted = formatted.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  formatted = formatted.replace(/(?<!\*)\*(?!\*)([^*]+)\*(?!\*)/g, '<em>$1</em>')
  formatted = formatted.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>')
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
  formatted = formatted.replace(/\n/g, '<br>')

  codigosBlocos.forEach((codigo, index) => {
    formatted = formatted.replace(`___CODE_BLOCK_${index}___`, codigo)
  })

  codigosInline.forEach((codigo, index) => {
    formatted = formatted.replace(`___CODE_INLINE_${index}___`, codigo)
  })

  return formatted
}

const sugestoes = [
  ' Como criar uma função em JavaScript?',
  ' O que é um array?',
  ' Como fazer um loop for?',
  ' Diferença entre let e const',
]

function usarSugestao(sugestao) {
  pergunta.value = sugestao
  enviarMensagem()
}
</script>

<template>
  <div class="chat-container-embedded">
    <div class="chat-messages" ref="chatMessages">
      <div v-if="mensagens.length === 0" class="empty-state">
        <div class="empty-illustration">
          <div class="ai-avatar-large">
            <svg viewBox="0 0 64 64" fill="none">
              <!-- Robot Head -->
              <rect x="16" y="12" width="32" height="36" rx="6" fill="currentColor" fill-opacity="0.2"/>
              <rect x="16" y="12" width="32" height="36" rx="6" stroke="currentColor" stroke-width="2"/>
              
              <!-- Eyes -->
              <circle cx="26" cy="26" r="5" fill="currentColor"/>
              <circle cx="38" cy="26" r="5" fill="currentColor"/>
              
              <!-- Eye Shine -->
              <circle cx="24" cy="24" r="2" fill="white" fill-opacity="0.8"/>
              <circle cx="36" cy="24" r="2" fill="white" fill-opacity="0.8"/>
              
              <!-- Mouth -->
              <rect x="24" y="36" width="16" height="3" rx="1.5" fill="currentColor"/>
              <rect x="26" y="40" width="12" height="2" rx="1" fill="currentColor" fill-opacity="0.5"/>
              
              <!-- Antenna -->
              <line x1="32" y1="12" x2="32" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <circle cx="32" cy="4" r="2" fill="currentColor"/>
            </svg>
          </div>
          <div class="pulse-ring"></div>
        </div>
        <h3 class="empty-title">Olá! Sou o Cognexus</h3>
        <p class="empty-subtitle">Seu assistente de programação</p>
        
        <div class="suggestions">
          <p class="suggestions-label">Tente perguntar:</p>
          <div class="suggestions-grid">
            <button 
              v-for="(sug, i) in sugestoes" 
              :key="i"
              @click="usarSugestao(sug)"
              class="suggestion-chip"
              :disabled="ai.loading"
            >
              <span class="chip-icon">→</span>
              {{ sug }}
            </button>
          </div>
        </div>
      </div>

      <div v-for="(msg, index) in mensagens" :key="index" :class="['mensagem', msg.tipo]">
        <div class="mensagem-avatar">
          <svg v-if="msg.tipo === 'usuario'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27c-.57 1.33-1.85 2.27-3.46 2.27-2.1 0-3.86-1.64-4.18-3.71-.1-.64.07-1.27.45-1.79A2.97 2.97 0 0 1 10 14c0-.83.34-1.58.88-2.12S12 11 13 11c.3 0 .59.04.86.12L14 11h1v-1.27c.34-.6.99-1 1.73-1A2 2 0 0 1 16 6a2 2 0 0 1-2 2h-2z"/>
            <circle cx="9" cy="9" r="1" fill="currentColor"/>
            <circle cx="15" cy="9" r="1" fill="currentColor"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          </svg>
        </div>
        <div class="mensagem-conteudo">
          <div class="mensagem-texto" v-html="formatarMensagem(msg.texto)"></div>
          <div class="mensagem-hora">
            {{ msg.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) }}
          </div>
        </div>
      </div>

      <div v-if="ai.loading" class="mensagem ia typing">
        <div class="mensagem-avatar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27c-.57 1.33-1.85 2.27-3.46 2.27-2.1 0-3.86-1.64-4.18-3.71-.1-.64.07-1.27.45-1.79A2.97 2.97 0 0 1 10 14c0-.83.34-1.58.88-2.12S12 11 13 11c.3 0 .59.04.86.12L14 11h1v-1.27c.34-.6.99-1 1.73-1A2 2 0 0 1 16 6a2 2 0 0 1-2 2h-2z"/>
            <circle cx="9" cy="9" r="1" fill="currentColor"/>
            <circle cx="15" cy="9" r="1" fill="currentColor"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          </svg>
        </div>
        <div class="mensagem-conteudo">
          <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-input-area">
      <div class="chat-input-wrapper">
        <input
          v-model="pergunta"
          type="text"
          placeholder="Digite sua mensagem..."
          @keydown.enter="enviarMensagem"
          :disabled="ai.loading"
          class="chat-input-field"
        />
        <button 
          @click="enviarMensagem" 
          :disabled="ai.loading || !pergunta.trim()"
          class="send-button"
        >
          <svg v-if="!ai.loading" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          <span v-else class="loading-spinner"></span>
        </button>
      </div>
      
      <button 
        v-if="mensagens.length > 0" 
        @click="limparChat"
        class="clear-button"
        title="Limpar conversa"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
        Limpar
      </button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');

/* ========================================
   CONTAINER PRINCIPAL
   ======================================== */
.chat-container-embedded {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-primary);
  overflow: hidden;
  min-height: 0;
}

/* ========================================
   ÁREA DE MENSAGENS
   ======================================== */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 0;
}

/* ========================================
   EMPTY STATE
   ======================================== */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 3rem 2rem;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.empty-illustration {
  position: relative;
  margin-bottom: 2rem;
}

.ai-avatar-large {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  position: relative;
  z-index: 1;
  animation: float 3s ease-in-out infinite;
  box-shadow: 0 8px 32px rgba(16, 185, 129, 0.4);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.ai-avatar-large svg {
  width: 56px;
  height: 56px;
}

.pulse-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  border: 2px solid #10b981;
  opacity: 0;
  animation: pulse 2s ease-out infinite;
}

@keyframes pulse {
  0% { transform: scale(0.9); opacity: 0.6; }
  100% { transform: scale(1.4); opacity: 0; }
}

.empty-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.empty-subtitle {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
}

.suggestions {
  width: 100%;
  max-width: 400px;
}

.suggestions-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.suggestions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.suggestion-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 14px;
  color: var(--text-primary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: left;
}

.suggestion-chip:hover:not(:disabled) {
  border-color: var(--accent-primary);
  background: rgba(102, 126, 234, 0.08);
  transform: translateX(4px);
}

.suggestion-chip:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.chip-icon {
  color: var(--accent-primary);
  font-weight: 600;
}

/* ========================================
   MENSAGENS
   ======================================== */
.mensagem {
  display: flex;
  gap: 1rem;
  animation: messageIn 0.35s ease;
}

@keyframes messageIn {
  from { opacity: 0; transform: translateY(12px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.mensagem.usuario {
  flex-direction: row-reverse;
}

.mensagem-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  background: var(--bg-secondary);
}

.mensagem-avatar svg {
  width: 22px;
  height: 22px;
}

.mensagem.usuario .mensagem-avatar {
  background: linear-gradient(135deg, var(--accent-primary), #8b5cf6);
  color: white;
}

.mensagem.ia .mensagem-avatar {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.mensagem-conteudo {
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.mensagem.usuario .mensagem-conteudo {
  align-items: flex-end;
}

.mensagem-texto {
  background: var(--card-bg);
  color: var(--text-primary);
  padding: 1rem 1.25rem;
  border-radius: 20px;
  line-height: 1.6;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  box-shadow: 0 2px 8px var(--shadow-color);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
}

.mensagem.usuario .mensagem-texto {
  background: linear-gradient(135deg, var(--accent-primary), #8b5cf6);
  color: white;
  border-bottom-right-radius: 4px;
}

.mensagem.ia .mensagem-texto {
  border-bottom-left-radius: 4px;
  background: var(--card-bg);
}

/* Código */
.mensagem-texto :deep(pre) {
  background: var(--bg-primary);
  padding: 1.25rem;
  border-radius: 12px;
  overflow-x: auto;
  margin: 1rem 0;
  border: 1px solid var(--border-color);
  max-width: 100%;
}

.mensagem-texto :deep(code) {
  font-family: 'JetBrains Mono', 'Consolas', monospace;
  font-size: 0.9rem;
  word-break: break-all;
}

.mensagem-texto :deep(.inline-code) {
  background: var(--bg-secondary);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  font-size: 0.9em;
  color: var(--accent-primary);
  font-family: 'JetBrains Mono', monospace;
}

.mensagem.usuario .mensagem-texto :deep(.inline-code) {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Formatação */
.mensagem-texto :deep(strong) {
  font-weight: 700;
  color: var(--accent-primary);
}

.mensagem.usuario .mensagem-texto :deep(strong) {
  color: white;
}

.mensagem-texto :deep(em) {
  font-style: italic;
  color: var(--text-secondary);
}

.mensagem-texto :deep(a) {
  color: var(--accent-primary);
  text-decoration: underline;
}

.mensagem.usuario .mensagem-texto :deep(a) {
  color: white;
  font-weight: 600;
}

.mensagem-texto :deep(blockquote) {
  margin: 0.75rem 0;
  padding: 0.75rem 1rem;
  border-left: 3px solid var(--accent-primary);
  background: var(--bg-secondary);
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: var(--text-secondary);
}

.mensagem.usuario .mensagem-texto :deep(blockquote) {
  border-left-color: white;
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

.mensagem.erro .mensagem-texto {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.mensagem-hora {
  font-size: 0.75rem;
  color: var(--text-secondary);
  padding: 0 0.5rem;
}

/* Typing */
.typing-dots {
  background: var(--card-bg);
  padding: 1.25rem 1.5rem;
  border-radius: 20px;
  border-bottom-left-radius: 4px;
  display: flex;
  gap: 0.6rem;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.typing-dots span {
  width: 10px;
  height: 10px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: typingBounce 1.4s infinite ease-in-out;
}

.typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typingBounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-8px); opacity: 1; }
}

/* ========================================
   ÁREA DE INPUT
   ======================================== */
.chat-input-area {
  padding: 1.25rem 1.5rem 1.5rem;
  background: var(--card-bg);
  border-top: 1px solid var(--border-color);
}

.chat-input-wrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.chat-input-field {
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid var(--border-color);
  border-radius: 18px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.chat-input-field::placeholder {
  color: var(--text-secondary);
}

.chat-input-field:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);
}

.chat-input-field:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.send-button {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, var(--accent-primary), #8b5cf6);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.send-button:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.send-button svg {
  width: 22px;
  height: 22px;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.clear-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.clear-button:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
}

.clear-button svg {
  width: 16px;
  height: 16px;
}

/* ========================================
   SCROLLBAR
   ======================================== */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: var(--accent-primary);
}

/* ========================================
   RESPONSIVO
   ======================================== */
@media (max-width: 768px) {
  .chat-messages {
    padding: 1.25rem;
    gap: 1.25rem;
  }
  
  .mensagem-conteudo {
    max-width: 85%;
  }
  
  .mensagem-texto {
    padding: 0.875rem 1.125rem;
    font-size: 0.95rem;
  }
  
  .chat-input-area {
    padding: 1rem 1.25rem 1.5rem;
  }
  
  .send-button {
    width: 52px;
    height: 52px;
  }
  
  .empty-title {
    font-size: 1.5rem;
  }
  
  .ai-avatar-large {
    width: 80px;
    height: 80px;
  }
  
  .ai-avatar-large svg {
    width: 44px;
    height: 44px;
  }
  
  .suggestions-grid {
    grid-template-columns: 1fr;
  }
  
  .pulse-ring {
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
  }
}
</style>