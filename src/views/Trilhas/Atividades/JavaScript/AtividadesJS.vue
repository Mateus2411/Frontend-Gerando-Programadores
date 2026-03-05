<template>
  <div class="atividades-container">
    <div class="header">
      <button class="btn-back" @click="$router.push('/trilhas/javascript')">
        ← Voltar para Trilha
      </button>
      <h1>📝 Atividades JavaScript</h1>
      <p class="subtitle">Pratique seus conhecimentos com exercícios</p>
    </div>

    <!-- Filtro por Módulo -->
    <div class="filter-section">
      <label for="modulo-filter">Filtrar por módulo:</label>
      <select id="modulo-filter" v-model="moduloSelecionado">
        <option value="todos">Todos os Módulos</option>
        <option v-for="modulo in modulos" :key="modulo.id" :value="modulo.id">
          {{ modulo.nome }}
        </option>
      </select>
    </div>

    <!-- Lista de Atividades -->
    <div class="atividades-grid">
      <div
        v-for="atividade in atividadesFiltradas"
        :key="atividade.id"
        class="atividade-card"
        @click="abrirAtividade(atividade)"
      >
        <div class="card-header">
          <span class="modulo-tag">{{ atividade.modulo }}</span>
          <span class="dificuldade-tag" :class="`dificuldade-${atividade.dificuldade}`">
            {{ atividade.dificuldade }}
          </span>
        </div>
        <h3>{{ atividade.titulo }}</h3>
        <p>{{ atividade.descricao }}</p>
        <div class="card-footer">
          <span class="questoes-count">{{ atividade.questoes.length }} questões</span>
          <span class="status" :class="atividade.concluida ? 'concluida' : 'pendente'">
            {{ atividade.concluida ? '✓ Concluída' : 'Pendente' }}
          </span>
        </div>
      </div>
    </div>

    <!-- Modal de Atividade -->
    <div v-if="atividadeAtual" class="modal-overlay" @click="fecharAtividade">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>{{ atividadeAtual.titulo }}</h2>
          <button class="btn-close" @click="fecharAtividade">✕</button>
        </div>

        <div class="modal-body">
          <!-- Questão Atual -->
          <div class="questao-container">
            <div class="questao-header">
              <span class="questao-numero">
                Questão {{ questaoAtualIndex + 1 }} de {{ atividadeAtual.questoes.length }}
              </span>
              <div class="progress-bar">
                <div
                  class="progress-fill"
                  :style="{
                    width: `${((questaoAtualIndex + 1) / atividadeAtual.questoes.length) * 100}%`,
                  }"
                ></div>
              </div>
            </div>

            <div class="questao-conteudo">
              <h3>{{ questaoAtual.pergunta }}</h3>

              <!-- Código de exemplo (se houver) -->
              <pre
                v-if="questaoAtual.codigo"
                class="code-block"
              ><code>{{ questaoAtual.codigo }}</code></pre>

              <!-- Alternativas -->
              <div class="alternativas">
                <div
                  v-for="(alternativa, index) in questaoAtual.alternativas"
                  :key="index"
                  class="alternativa"
                  :class="{
                    selecionada: respostaAtual === index,
                    correta: mostrarResultado && index === questaoAtual.respostaCorreta,
                    incorreta:
                      mostrarResultado &&
                      respostaAtual === index &&
                      index !== questaoAtual.respostaCorreta,
                  }"
                  @click="selecionarResposta(index)"
                >
                  <span class="alternativa-letra">{{ String.fromCharCode(65 + index) }}</span>
                  <span class="alternativa-texto">{{ alternativa }}</span>
                </div>
              </div>

              <!-- Feedback -->
              <div v-if="mostrarResultado" class="feedback">
                <div v-if="respostaAtual === questaoAtual.respostaCorreta" class="feedback-correto">
                  <strong>✓ Correto!</strong>
                  <p>{{ questaoAtual.explicacao }}</p>
                </div>
                <div v-else class="feedback-incorreto">
                  <strong>✗ Incorreto</strong>
                  <p>{{ questaoAtual.explicacao }}</p>
                </div>
              </div>
            </div>

            <!-- Botões de Navegação -->
            <div class="questao-footer">
              <button
                v-if="!mostrarResultado"
                class="btn-verificar"
                :disabled="respostaAtual === null"
                @click="verificarResposta"
              >
                Verificar Resposta
              </button>
              <div v-else class="nav-buttons">
                <button v-if="questaoAtualIndex > 0" class="btn-anterior" @click="questaoAnterior">
                  ← Anterior
                </button>
                <button
                  v-if="questaoAtualIndex < atividadeAtual.questoes.length - 1"
                  class="btn-proximo"
                  @click="proximaQuestao"
                >
                  Próxima →
                </button>
                <button v-else class="btn-finalizar" @click="finalizarAtividade">
                  Finalizar Atividade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Placeholder para futuras integrações com IA -->
    <div class="ia-section" v-if="false">
      <h2>🤖 Assistente IA</h2>
      <p>Em breve: Correção automática e feedback personalizado com IA</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Estado
const moduloSelecionado = ref('todos')
const atividadeAtual = ref(null)
const questaoAtualIndex = ref(0)
const respostaAtual = ref(null)
const mostrarResultado = ref(false)
const respostas = ref([])

// Módulos disponíveis
const modulos = [
  { id: 'nocoes-basicas', nome: 'Noções Básicas' },
  { id: 'variaveis', nome: 'Variáveis e Tipos de Dados' },
  { id: 'operadores', nome: 'Operadores e Expressões' },
  { id: 'fluxo-controle', nome: 'Fluxo de Controle' },
  { id: 'loops', nome: 'Loops' },
  { id: 'funcoes', nome: 'Funções' },
  { id: 'arrays', nome: 'Arrays' },
  { id: 'objetos', nome: 'Objetos' },
]

// Atividades (exemplo - será preenchido com dados reais)
const atividades = ref([
  {
    id: 1,
    modulo: 'Noções Básicas',
    moduloId: 'nocoes-basicas',
    titulo: 'Introdução à Programação',
    descricao: 'Teste seus conhecimentos sobre conceitos básicos de programação',
    dificuldade: 'fácil',
    concluida: false,
    questoes: [
      {
        pergunta: 'O que é um algoritmo?',
        alternativas: [
          'Um tipo de linguagem de programação',
          'Uma sequência de passos para resolver um problema',
          'Um erro no código',
          'Um tipo de variável',
        ],
        respostaCorreta: 1,
        explicacao:
          'Um algoritmo é uma sequência lógica de passos para resolver um problema específico.',
      },
      {
        pergunta: 'Quais são as 3 etapas fundamentais de um programa?',
        alternativas: [
          'Início, Meio e Fim',
          'Entrada, Processamento e Saída',
          'Criar, Editar e Deletar',
          'Abrir, Salvar e Fechar',
        ],
        respostaCorreta: 1,
        explicacao:
          'Todo programa segue o fluxo: Entrada (dados), Processamento (regras) e Saída (resultado).',
      },
    ],
  },
  // Mais atividades serão adicionadas aqui
])

// Computed
const atividadesFiltradas = computed(() => {
  if (moduloSelecionado.value === 'todos') {
    return atividades.value
  }
  return atividades.value.filter((a) => a.moduloId === moduloSelecionado.value)
})

const questaoAtual = computed(() => {
  if (!atividadeAtual.value) return null
  return atividadeAtual.value.questoes[questaoAtualIndex.value]
})

// Métodos
function abrirAtividade(atividade) {
  atividadeAtual.value = atividade
  questaoAtualIndex.value = 0
  respostaAtual.value = null
  mostrarResultado.value = false
  respostas.value = []
}

function fecharAtividade() {
  atividadeAtual.value = null
  questaoAtualIndex.value = 0
  respostaAtual.value = null
  mostrarResultado.value = false
}

function selecionarResposta(index) {
  if (!mostrarResultado.value) {
    respostaAtual.value = index
  }
}

function verificarResposta() {
  mostrarResultado.value = true
  respostas.value[questaoAtualIndex.value] = {
    resposta: respostaAtual.value,
    correta: respostaAtual.value === questaoAtual.value.respostaCorreta,
  }
}

function proximaQuestao() {
  questaoAtualIndex.value++
  respostaAtual.value = null
  mostrarResultado.value = false
}

function questaoAnterior() {
  questaoAtualIndex.value--
  respostaAtual.value = respostas.value[questaoAtualIndex.value]?.resposta ?? null
  mostrarResultado.value = false
}

function finalizarAtividade() {
  const acertos = respostas.value.filter((r) => r.correta).length
  const total = atividadeAtual.value.questoes.length
  const percentual = ((acertos / total) * 100).toFixed(0)

  alert(`Atividade concluída!\n\nAcertos: ${acertos}/${total} (${percentual}%)`)

  // Marcar como concluída
  atividadeAtual.value.concluida = true

  fecharAtividade()
}
</script>

<style scoped>
.atividades-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--bg-primary);
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.btn-back {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-back:hover {
  transform: translateX(-4px);
  border-color: var(--accent-primary);
}

h1 {
  font-size: 2.5rem;
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.filter-section {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.filter-section label {
  font-weight: 600;
  color: var(--text-primary);
}

.filter-section select {
  flex: 1;
  max-width: 300px;
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  cursor: pointer;
}

.atividades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.atividade-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 16px;
  border: 2px solid var(--card-border);
  cursor: pointer;
  transition: all 0.3s ease;
}

.atividade-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-primary);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.modulo-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(102, 126, 234, 0.1);
  color: var(--accent-primary);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.dificuldade-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.dificuldade-fácil {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.dificuldade-médio {
  background: rgba(251, 191, 36, 0.1);
  color: #fbbf24;
}

.dificuldade-difícil {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.atividade-card h3 {
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.atividade-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.questoes-count {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status.concluida {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.status.pendente {
  background: rgba(156, 163, 175, 0.1);
  color: #9ca3af;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: var(--card-bg);
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 2px solid var(--border-color);
}

.modal-header h2 {
  color: var(--text-primary);
  font-size: 1.5rem;
  margin: 0;
}

.btn-close {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-close:hover {
  background: rgba(239, 68, 68, 0.2);
  transform: rotate(90deg);
}

.modal-body {
  padding: 2rem;
}

.questao-header {
  margin-bottom: 2rem;
}

.questao-numero {
  display: block;
  color: var(--text-secondary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.progress-bar {
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.questao-conteudo h3 {
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.code-block {
  background: var(--bg-secondary);
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
  border-left: 4px solid var(--accent-primary);
}

.code-block code {
  color: var(--text-primary);
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.alternativas {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.alternativa {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.alternativa:hover {
  border-color: var(--accent-primary);
  transform: translateX(5px);
}

.alternativa.selecionada {
  border-color: var(--accent-primary);
  background: rgba(102, 126, 234, 0.1);
}

.alternativa.correta {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
}

.alternativa.incorreta {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.alternativa-letra {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-primary);
  color: white;
  border-radius: 50%;
  font-weight: 700;
}

.alternativa.correta .alternativa-letra {
  background: #22c55e;
}

.alternativa.incorreta .alternativa-letra {
  background: #ef4444;
}

.alternativa-texto {
  flex: 1;
  color: var(--text-primary);
  line-height: 1.6;
}

.feedback {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
}

.feedback-correto {
  background: rgba(34, 197, 94, 0.1);
  border-left: 4px solid #22c55e;
}

.feedback-incorreto {
  background: rgba(239, 68, 68, 0.1);
  border-left: 4px solid #ef4444;
}

.feedback strong {
  display: block;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.feedback p {
  color: var(--text-primary);
  line-height: 1.6;
  margin: 0;
}

.questao-footer {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid var(--border-color);
}

.btn-verificar,
.btn-proximo,
.btn-anterior,
.btn-finalizar {
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-verificar {
  width: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.btn-verificar:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-verificar:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.nav-buttons {
  display: flex;
  gap: 1rem;
}

.btn-anterior,
.btn-proximo,
.btn-finalizar {
  flex: 1;
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  color: var(--text-primary);
}

.btn-finalizar {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  border: none;
}

.btn-anterior:hover,
.btn-proximo:hover,
.btn-finalizar:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-color);
}

@media (max-width: 768px) {
  .atividades-container {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .atividades-grid {
    grid-template-columns: 1fr;
  }

  .filter-section {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-section select {
    max-width: 100%;
  }

  .modal-content {
    max-height: 95vh;
  }

  .modal-body {
    padding: 1rem;
  }

  .nav-buttons {
    flex-direction: column;
  }
}
</style>
