<script setup>
import { useRouter, useRoute } from 'vue-router'
import { defineAsyncComponent, computed } from 'vue'

const router = useRouter()
const route = useRoute()

const topicMap = {
  'nocoes-basicas-javascript': 'Noções Básicas de JavaScript',
  'variaveis-tipos-dados': 'Variáveis e Tipos de Dados',
  'operadores-expressoes': 'Operadores e Expressões',
  'fluxo-controle': 'Fluxo de Controle',
  loops: 'Loops',
  funcoes: 'Funções',
  arrays: 'Arrays',
  objetos: 'Objetos',
  'paginas-web-dinamicas-dom': 'Páginas Web Dinâmicas (DOM)',
  'modelo-objeto-documento-dom-tree': 'Modelo de Objeto de Documento (DOM Tree)',
  'eventos-javascript': 'Eventos JavaScript',
  'sincronia-assincronia-promessas-async-await': 'Sincronia e Assincronia (Promessas, async-await)',
  'classes-programacao-orientada-objetos': 'Classes e Programação Orientada a Objetos',
  'modulos-reutilizacao-codigo': 'Módulos e Reutilização de Código',
  'projetos-aplicacoes-interativas': 'Projetos e Aplicações Interativas',
}

const fileMap = {
  a: 'exemploA',
  b: 'exemploB',
  c: 'exemploC',
  d: 'exemploD',
  e: 'exercicioFinal',
}

const currentComponent = computed(() => {
  const topicSlug = route.params.topic
  const fileSlug = route.params.file
  const topic = topicMap[topicSlug]
  const file = fileMap[fileSlug]
  if (!topic || !file) {
    return null
  }
  return defineAsyncComponent(() => import(`./${topic}/${file}.vue`))
})

const trilhaJS = [
  { nome: 'Noções Básicas de JavaScript', slug: 'nocoes-basicas-javascript', nivel: 1 },
  { nome: 'Variáveis e Tipos de Dados', slug: 'variaveis-tipos-dados', nivel: 1 },
  { nome: 'Operadores e Expressões', slug: 'operadores-expressoes', nivel: 1 },
  { nome: 'Fluxo de Controle', slug: 'fluxo-controle', nivel: 1 },
  { nome: 'Loops', slug: 'loops', nivel: 1 },

  { nome: 'Funções', slug: 'funcoes', nivel: 2 },
  { nome: 'Arrays', slug: 'arrays', nivel: 2 },
  { nome: 'Objetos', slug: 'objetos', nivel: 2 },
  { nome: 'Páginas Web Dinâmicas (DOM)', slug: 'paginas-web-dinamicas-dom', nivel: 2 },
  { nome: 'Eventos JavaScript', slug: 'eventos-javascript', nivel: 2 },

  {
    nome: 'Classes e Programação Orientada a Objetos',
    slug: 'classes-programacao-orientada-objetos',
    nivel: 3,
  },
  { nome: 'Módulos e Reutilização de Código', slug: 'modulos-reutilizacao-codigo', nivel: 3 },
  {
    nome: 'Sincronia e Assincronia (Promessas, async-await)',
    slug: 'sincronia-assincronia-promessas-async-await',
    nivel: 3,
  },
  { nome: 'Projetos e Aplicações Interativas', slug: 'projetos-aplicacoes-interativas', nivel: 3 },
]
</script>

<template>
  <section v-if="!route.params.topic" class="trilha">
    <article
      v-for="(modulo, i) in trilhaJS"
      :key="i"
      class="card"
      @click="router.push(`/trilhas/javascript/${modulo.slug}/a`)"
    >
      <h3>{{ modulo.nome }}</h3>
    </article>
  </section>
  <component v-else-if="currentComponent" :is="currentComponent" />
</template>

<style scoped>
.trilha {
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
  margin: 1.2vw 1.2vw 0 1.2vw;
  padding: 0.5vw;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1.1vw;
  cursor: pointer;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  background: linear-gradient(135deg, #14007a, #1f0aa3);
  color: white;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}
</style>
