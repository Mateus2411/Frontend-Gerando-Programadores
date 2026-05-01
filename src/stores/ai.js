import { defineStore } from 'pinia'
import { OpenAI } from 'openai'

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
        // API key da variável de ambiente
        const apiKey = import.meta.env.VITE_AI_KEY_CHAT

        if (!apiKey) {
          throw new Error('🔑 API key não configurada. Configure VITE_AI_KEY_CHAT')
        }

        // Validação da pergunta
        if (!pergunta || pergunta.trim().length === 0) {
          throw new Error('❌ Por favor, digite uma pergunta válida.')
        }

        const client = new OpenAI({
          baseURL: 'https://openrouter.ai/api/v1',
          apiKey: apiKey,
          dangerouslyAllowBrowser: true,
        })

        const linguagemAtual = linguagem || this.linguagemProgramacao
        const mensagens = []

        // Adiciona contexto do sistema personalizado
        if (contexto) {
          mensagens.push({
            role: 'system',
            content: `${contexto}\n\n🎯 CONTEXTO ADICIONAL: Foque em exemplos e explicações usando ${linguagemAtual}. Adapte a complexidade da resposta ao nível da pergunta.`,
          })
        } else {
          mensagens.push({
            role: 'system',
            content: `Você é um assistente de programação especializado em ${linguagemAtual}. Responda sempre em português brasileiro de forma clara e didática.`,
          })
        }

        // Adiciona a pergunta do usuário
        mensagens.push({ role: 'user', content: pergunta })

        console.log('📤 Enviando para API:', {
          model: 'minimax/minimax-m2.5:free',
          linguagem: linguagemAtual,
          perguntaLength: pergunta.length,
        })

        const chatCompletion = await client.chat.completions.create({
          model: 'minimax/minimax-m2.5:free',
          messages: mensagens,
          temperature: 0.7, // Criatividade moderada
          max_tokens: 1024, // Ajuste para limite do modelo gratuito
          top_p: 0.9, // Diversidade de resposta
          frequency_penalty: 0.3, // Reduz repetições
          presence_penalty: 0.2, // Incentiva novos tópicos
        })

        console.log('📥 Resposta recebida:', {
          choices: chatCompletion.choices?.length,
          finishReason: chatCompletion.choices[0]?.finish_reason,
        })

        const respostaTexto = chatCompletion.choices[0]?.message?.content

        if (respostaTexto && respostaTexto.trim().length > 0) {
          this.resposta = respostaTexto.trim()
          console.log('✅ Resposta processada com sucesso')
        } else {
          throw new Error('🤖 A IA retornou uma resposta vazia. Tente reformular sua pergunta.')
        }
      } catch (error) {
        console.error('❌ Erro ao consultar IA:', error)

        // Mensagens de erro mais amigáveis
        if (error.message.includes('API key')) {
          this.erro = error.message
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          this.erro = '🌐 Erro de conexão. Verifique sua internet e tente novamente.'
        } else if (error.message.includes('timeout')) {
          this.erro = '⏱️ A requisição demorou muito. Tente novamente.'
        } else if (error.message.includes('rate limit')) {
          this.erro = '⚠️ Muitas requisições. Aguarde alguns segundos e tente novamente.'
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
