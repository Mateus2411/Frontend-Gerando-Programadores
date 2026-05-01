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

        console.log('📥 Resposta recebida:', response.status, response.statusText)

        // Lê o texto da resposta (apenas uma vez!)
        const responseText = await response.text()
        console.log('📥 Texto da resposta:', responseText.substring(0, 200))

        // Tenta fazer parse do JSON
        let data
        try {
          data = JSON.parse(responseText)
        } catch (e) {
          console.error('❌ Erro ao fazer parse do JSON:', responseText)
          throw new Error('Resposta inválida do servidor (não é JSON)')
        }

        // Verifica se há erro na resposta
        if (!response.ok) {
          throw new Error(data.error || `Erro ${response.status}`)
        }

        // Verifica se tem resposta da IA
        if (data.reply && data.reply.trim().length > 0) {
          this.resposta = data.reply.trim()
          console.log('✅ Resposta processada com sucesso')
        } else if (data.error) {
          throw new Error(data.error)
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
