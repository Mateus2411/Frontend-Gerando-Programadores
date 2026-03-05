<script setup>
import { useAiStore } from '@/stores'
import { ref } from 'vue'

const ai = useAiStore()
const pergunta = ref('')
const contexto = ref('')

async function testar() {
  await ai.perguntar(pergunta.value, contexto.value)
}
</script>

<template>
  <section>
    <input v-model="pergunta" type="text" placeholder="Digite sua pergunta" />
    <input v-model="contexto" type="text" placeholder="teste API" />
    <button @click="testar">Testar</button>

    <p v-if="ai.loading">Carregando...</p>
    <p v-if="ai.erro">Erro: {{ ai.erro }}</p>
    <pre v-if="ai.resposta">{{ ai.resposta }}</pre>
  </section>
</template>

<style scoped>
section {
  margin-top: 5rem;
  padding: 2rem;
}

input {
  padding: 0.5rem;
  width: 300px;
  margin-right: 1rem;
}

button {
  padding: 0.5rem 1rem;
}

pre {
  margin-top: 1rem;
  white-space: pre-wrap;
}
</style>
