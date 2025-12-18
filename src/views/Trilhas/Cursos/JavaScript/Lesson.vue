<template>
  <component :is="currentComponent" />
</template>

<script>
import { defineAsyncComponent } from 'vue'

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

export default {
  name: 'JavaScriptLesson',
  computed: {
    currentComponent() {
      const topicSlug = this.$route.params.topic
      const fileSlug = this.$route.params.file
      const topic = topicMap[topicSlug]
      const file = fileMap[fileSlug]
      if (!topic || !file) {
        return null
      }
      return defineAsyncComponent(() => import(`./${topic}/${file}.vue`))
    },
  },
}
</script>

<style></style>
