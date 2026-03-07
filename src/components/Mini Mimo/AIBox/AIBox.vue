<script setup>
import { useAiStore } from '@/stores'
import { ref, nextTick, watch } from 'vue'

const ai = useAiStore()
const pergunta = ref('')
const mensagens = ref([])
const chatMessages = ref(null)
const linguagem = ref('')

const STORAGE_KEY = 'chat_history'
const EXPIRATION_TIME = 10 * 60 * 1000 // 10 minutos em milissegundos

// Props para detectar quando o chat abre
const props = defineProps({
  chatAberto: {
    type: Boolean,
    default: false
  }
})

// Carrega histórico quando o chat abre
watch(() => props.chatAberto, (novoValor) => {
  if (novoValor) {
    console.log('🔓 Chat aberto, carregando histórico...')
    carregarHistorico()
  }
}, { immediate: true })

function carregarHistorico() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    console.log('🔍 Tentando carregar histórico...', stored ? 'Encontrado' : 'Não encontrado')

    if (stored) {
      const data = JSON.parse(stored)
      const now = new Date().getTime()
      const tempoDecorrido = now - data.savedAt
      const minutosDecorridos = Math.floor(tempoDecorrido / 60000)

      console.log(`⏱️ Tempo decorrido: ${minutosDecorridos} minutos`)

      // Verifica se o histórico ainda é válido (menos de 10 minutos)
      if (tempoDecorrido < EXPIRATION_TIME) {
        // Reconstrói as mensagens com objetos Date
        mensagens.value = data.messages.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
        console.log('✅ Histórico carregado:', mensagens.value.length, 'mensagens')
      } else {
        console.log('⏰ Histórico expirado, limpando...')
        localStorage.removeItem(STORAGE_KEY)
      }
    } else {
      console.log('📭 Nenhum histórico encontrado')
    }
  } catch (error) {
    console.error('❌ Erro ao carregar histórico:', error)
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
    console.log('💾 Histórico salvo:', mensagens.value.length, 'mensagens')
  } catch (error) {
    console.error('❌ Erro ao salvar histórico:', error)
  }
}

const keyWords = [
  'javascript',
  'python',
  'sql',
  'html',
  'css',
  'typescript',
  'java',
  'c++',
  'c#',
  'php',
  'ruby',
  'swift',
  'go',
  'rust',
  'kotlin',
  'react',
  'vue',
  'angular',
]

function detectarLinguagem(texto) {
  const textoLower = texto.toLowerCase()
  const linguaEncontrada = keyWords.find((keyword) => textoLower.includes(keyword))
  if (linguaEncontrada) {
    linguagem.value = linguaEncontrada.charAt(0).toUpperCase() + linguaEncontrada.slice(1)
    console.log('Linguagem detectada:', linguagem.value)
  } else {
    linguagem.value = 'JavaScript'
  }
}

// Prompt de sistema personalizado
const promptSistema = `Você é Cognexus, assistente de programação para iniciantes. Responda em português brasileiro.

REGRAS:
- Linguagem simples e clara
- Exemplos práticos com codigo comentado
- Explique o "porquê", não só o "como"
- Use markdown: \`\`\`linguagem para código
- Máximo 15 linhas de código por exemplo
- Compare boas e mas praticas

ESTRUTURA:
1. Resposta direta (2-3 frases)
2. Exemplo de codigo comentado
3. Dica importante

VALIDAR CODIGO E ARRUMAR:
1. Ajude o usuario com o codigo fornecido pelo mesmo e arrume
2. Arrume o codigo por completo e termine com o codigo funcionando

- Se nao tiver codigo do usuario, apenas responda com a explicacao
- Se o codigo estiver errado, corrija e explique o erro
- Se o codigo estiver certo, elogie e sugira melhorias

Seja amigavel, paciente e incentivador!`

async function enviarMensagem() {
  if (!pergunta.value.trim()) return

  // Adiciona mensagem do usuário
  mensagens.value.push({
    tipo: 'usuario',
    texto: pergunta.value,
    timestamp: new Date(),
  })

  console.log('📝 Mensagem do usuário adicionada. Total:', mensagens.value.length)

  const perguntaAtual = pergunta.value
  pergunta.value = ''

  // Scroll para o final
  await nextTick()
  scrollToBottom()

  // Chama a IA com prompt personalizado
  detectarLinguagem(perguntaAtual)
  await ai.perguntar(perguntaAtual, promptSistema, linguagem.value)

  // Adiciona resposta da IA
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

  // Salva histórico após adicionar mensagens
  salvarHistorico()

  await nextTick()
  scrollToBottom()
}

function scrollToBottom() {
  if (chatMessages.value) {
    chatMessages.value.scrollTop = chatMessages.value.scrollHeight
  }
}

function formatarMensagem(texto) {
  if (!texto) return ''

  let formatted = texto

  // Primeiro, protege blocos de código substituindo por placeholders
  const codigosBlocos = []
  formatted = formatted.replace(/```(\w+)?\n([\s\S]*?)```/g, (_match, lang, code) => {
    const placeholder = `___CODE_BLOCK_${codigosBlocos.length}___`
    // Escapa HTML dentro do código
    const escapedCode = code
      .trim()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    codigosBlocos.push(
      `<pre><code class="language-${lang || 'plaintext'}">${escapedCode}</code></pre>`,
    )
    return placeholder
  })

  // Protege código inline
  const codigosInline = []
  formatted = formatted.replace(/`([^`]+)`/g, (_match, code) => {
    const placeholder = `___CODE_INLINE_${codigosInline.length}___`
    const escapedCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    codigosInline.push(`<code class="inline-code">${escapedCode}</code>`)
    return placeholder
  })

  // Agora escapa HTML perigoso no texto restante
  formatted = formatted.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  // Formata negrito
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

  // Formata itálico (evita conflito com negrito)
  formatted = formatted.replace(/(?<!\*)\*(?!\*)([^*]+)\*(?!\*)/g, '<em>$1</em>')

  // Formata links
  formatted = formatted.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
  )

  // Formata quebras de linha
  formatted = formatted.replace(/\n/g, '<br>')

  // Restaura blocos de código
  codigosBlocos.forEach((codigo, index) => {
    formatted = formatted.replace(`___CODE_BLOCK_${index}___`, codigo)
  })

  // Restaura código inline
  codigosInline.forEach((codigo, index) => {
    formatted = formatted.replace(`___CODE_INLINE_${index}___`, codigo)
  })

  return formatted
}
</script>

<template>
  <div class="chat-container-embedded">
    <div class="chat-messages" ref="chatMessages">
      <div v-if="mensagens.length === 0" class="empty-state">
        <div class="empty-icon">💬</div>
        <p>Comece uma conversa!</p>
        <span>Faça uma pergunta sobre JavaScript</span>
      </div>

      <div v-for="(msg, index) in mensagens" :key="index" :class="['mensagem', msg.tipo]">
        <div class="mensagem-avatar">
          {{ msg.tipo === 'usuario' ? '👤' : '🤖' }}
        </div>
        <div class="mensagem-conteudo">
          <div class="mensagem-texto" v-html="formatarMensagem(msg.texto)"></div>
          <div class="mensagem-hora">
            {{ msg.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) }}
          </div>
        </div>
      </div>

      <div v-if="ai.loading" class="mensagem ia typing">
        <div class="mensagem-avatar">🤖</div>
        <div class="mensagem-conteudo">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-input">
      <input
        v-model="pergunta"
        type="text"
        placeholder="Digite sua mensagem..."
        @keydown.enter="enviarMensagem"
        :disabled="ai.loading"
      />
      <button @click="enviarMensagem" :disabled="ai.loading || !pergunta.trim()">
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
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.chat-container-embedded {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-primary);
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--text-secondary);
  text-align: center;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state p {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.empty-state span {
  font-size: 0.95rem;
}

.mensagem {
  display: flex;
  gap: 0.75rem;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mensagem.usuario {
  flex-direction: row-reverse;
}

.mensagem-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
  background: var(--bg-secondary);
}

.mensagem.usuario .mensagem-avatar {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.mensagem-conteudo {
  max-width: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mensagem.usuario .mensagem-conteudo {
  align-items: flex-end;
}

.mensagem-texto {
  background: var(--card-bg);
  color: var(--text-primary);
  padding: 0.875rem 1.125rem;
  border-radius: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  box-shadow: 0 2px 4px var(--shadow-color);
}

.mensagem-texto :deep(pre) {
  background: var(--bg-primary);
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 0.5rem 0;
  border: 1px solid var(--border-color);
  max-width: 100%;
}

.mensagem-texto :deep(code) {
  font-family: 'Courier New', 'Consolas', monospace;
  font-size: 0.9rem;
  word-break: break-all;
}

.mensagem-texto :deep(.inline-code) {
  background: var(--bg-secondary);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
  color: var(--accent-primary);
}

.mensagem-texto :deep(strong) {
  font-weight: 700;
  color: var(--accent-primary);
}

.mensagem-texto :deep(em) {
  font-style: italic;
  color: var(--text-secondary);
}

.mensagem-texto :deep(a) {
  color: var(--accent-primary);
  text-decoration: underline;
  transition: opacity 0.2s ease;
}

.mensagem-texto :deep(a:hover) {
  opacity: 0.8;
}

.mensagem.usuario .mensagem-texto :deep(a) {
  color: white;
  font-weight: 600;
}

.mensagem.usuario .mensagem-texto {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-bottom-right-radius: 4px;
}

.mensagem.ia .mensagem-texto {
  border-bottom-left-radius: 4px;
}

.mensagem.erro .mensagem-texto {
  background: rgba(255, 107, 107, 0.15);
  color: #ff6b6b;
  border: 1px solid rgba(255, 107, 107, 0.3);
}

.mensagem-hora {
  font-size: 0.75rem;
  color: var(--text-secondary);
  padding: 0 0.5rem;
}

.typing-indicator {
  background: var(--card-bg);
  padding: 1rem 1.25rem;
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  display: flex;
  gap: 0.4rem;
  box-shadow: 0 2px 4px var(--shadow-color);
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: var(--text-secondary);
  border-radius: 50%;
  animation: typing 1.4s infinite;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  30% {
    transform: translateY(-10px);
    opacity: 1;
  }
}

.chat-input {
  display: flex;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  background: var(--card-bg);
  border-top: 2px solid var(--border-color);
  box-shadow: 0 -2px 8px var(--shadow-color);
}

.chat-input input {
  flex: 1;
  padding: 0.875rem 1.125rem;
  border: 2px solid var(--border-color);
  border-radius: 24px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.chat-input input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.chat-input input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.chat-input button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.chat-input button:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.chat-input button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: scale(1);
}

/* Scrollbar customizada */
.chat-messages::-webkit-scrollbar {
  width: 8px;
}

.chat-messages::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

.chat-messages::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: var(--accent-primary);
}

@media (max-width: 768px) {
  .chat-messages {
    padding: 1rem;
  }

  .mensagem-conteudo {
    max-width: 85%;
  }

  .chat-input {
    padding: 1rem;
    margin-bottom: 2rem;
  }

  .chat-input button {
    width: 44px;
    height: 44px;
  }
}
@media (max-width: 480px) {
  .chat-input{
    margin-bottom: 3rem;
  }
}
</style>
