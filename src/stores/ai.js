import { defineStore } from 'pinia'

export const useAiStore = defineStore('ai', {
  state: () => ({
    loading: false,
    resposta: '',
    erro: null,
    linguagemProgramacao: 'JavaScript',
  }),
  actions: {
    async perguntar(pergunta, contexto = '', linguagem = null) {
      this.loading = true
      this.erro = null
      this.resposta = ''

      try {
        // Validação da pergunta
        if (!pergunta || pergunta.trim().length === 0) {
          throw new Error('❌ Por favor, digite uma pergunta válida.')
        }

        const linguagemAtual = linguagem || this.linguagemProgramacao

        console.log('📤 Enviando para API proxy:', {
          linguagem: linguagemAtual,
          perguntaLength: pergunta.length,
        })

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: pergunta,
            language: linguagemAtual,
            context: contexto,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || `Erro ${response.status}`)
        }

        const data = await response.json()

        if (data.reply && data.reply.trim().length > 0) {
          this.resposta = data.reply.trim()
          console.log('✅ Resposta processada com sucesso')
        } else {
          throw new Error('🤖 A IA retornou uma resposta vazia. Tente reformular sua pergunta.')
        }
      } catch (error) {
        console.error('❌ Erro ao consultar IA:', error)

        if (error.message.includes('network') || error.message.includes('fetch')) {
          this.erro = '🌐 Erro de conexão. Verifique sua internet e tente novamente.'
        } else if (error.message.includes('timeout')) {
          this.erro = '⏱️ A requisição demorou muito. Tente novamente.'
        } else {
          this.erro = error.message || '❌ Erro desconhecido ao consultar a IA. Tente novamente.'
        }
      } finally {
        this.loading = false
      }
    },

    setLinguagem(novaLinguagem) {
      this.linguagemProgramacao = novaLinguagem
    },

    limparResposta() {
      this.resposta = ''
      this.erro = null
    },
  },
})
