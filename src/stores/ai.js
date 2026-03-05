import { defineStore } from 'pinia'

const key = import.meta.env.VITE_AI_KEY_CHAT

export const useAiStore = defineStore('ai', {
  state: () => ({
    loading: false,
    resposta: '',
    erro: null,
  }),
  actions: {
    async perguntar(pergunta, contexto) {
      this.loading = true
      this.erro = null
      console.log('problema key: ' + key)
      try {
        const res = await fetch(
          'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${key}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              inputs: contexto ? `${contexto}\n\n${pergunta}` : pergunta,
            }),
          },
        )

        if (!res.ok) {
          throw new Error(`Erro na API: ${res.status}`)
        }

        const data = await res.json()

        if (data.error) {
          throw new Error(data.error)
        }

        this.resposta = data[0]?.generated_text || ''
      } catch (error) {
        this.erro = error.message
        console.error('Erro ao consultar IA:', error)
      } finally {
        this.loading = false
      }
    },
  },
})
