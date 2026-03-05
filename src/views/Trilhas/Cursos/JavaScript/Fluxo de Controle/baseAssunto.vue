<template>
  <div class="base-assunto">
    <div class="container">
      <h1 class="titulo-principal">Fluxo de Controle</h1>

      <section class="secao-conteudo">
        <h2>O que é Fluxo de Controle?</h2>
        <p>
          O fluxo de controle determina a ordem em que as instruções do seu programa são executadas.
          Por padrão, o código é executado linha por linha, de cima para baixo. Mas com estruturas
          de decisão, você pode alterar esse fluxo baseado em condições.
        </p>
      </section>

      <section class="secao-conteudo">
        <h2>Estruturas de Decisão</h2>

        <div class="topico">
          <h3>IF...ELSE</h3>
          <p>A estrutura mais básica para tomar decisões no código:</p>
          <div class="codigo-exemplo">
            <pre><code>let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>IF...ELSE IF...ELSE</h3>
          <p>Para múltiplas condições:</p>
          <div class="codigo-exemplo">
            <pre><code>let nota = 7.5;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 7) {
  console.log("Bom!");
} else if (nota >= 5) {
  console.log("Regular");
} else {
  console.log("Insuficiente");
}</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Operador Ternário</h3>
          <p>Uma forma compacta de escrever if...else simples:</p>
          <div class="codigo-exemplo">
            <pre><code>let idade = 20;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";

// Equivalente a:
// if (idade >= 18) {
//   status = "Maior de idade";
// } else {
//   status = "Menor de idade";
// }</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Switch...Case</h3>
          <p>Ideal para comparar um valor com múltiplas opções:</p>
          <div class="codigo-exemplo">
            <pre><code>let diaSemana = 3;
let nomeDia;

switch (diaSemana) {
  case 1:
    nomeDia = "Segunda-feira";
    break;
  case 2:
    nomeDia = "Terça-feira";
    break;
  case 3:
    nomeDia = "Quarta-feira";
    break;
  default:
    nomeDia = "Dia inválido";
}</code></pre>
          </div>
        </div>
      </section>

      <section class="secao-conteudo">
        <h2>Quando Usar Cada Estrutura?</h2>
        <ul>
          <li>
            <strong>IF...ELSE:</strong> Para condições simples ou complexas com operadores lógicos
          </li>
          <li>
            <strong>Operador Ternário:</strong> Para atribuições condicionais simples em uma linha
          </li>
          <li>
            <strong>Switch...Case:</strong> Quando você tem muitas comparações de igualdade com o
            mesmo valor
          </li>
        </ul>
      </section>

      <div class="navegacao">
        <button @click="voltarHome" class="btn-voltar">← Voltar para Módulos</button>
        <button @click="proximoConteudo" class="btn-proximo">Próximo Exemplo →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const voltarHome = () => {
  router.push('/trilhas/javascript')
}

const proximoConteudo = () => {
  const moduloSlug = route.params.modulo
  router.push(`/trilhas/javascript/${moduloSlug}/exemploA`)
}
</script>

<style scoped>
.base-assunto {
  min-height: 100vh;
  background: var(--background-primary);
  padding: 2rem 1rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.titulo-principal {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.secao-conteudo {
  background: var(--background-secondary);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.secao-conteudo h2 {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.secao-conteudo p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.secao-conteudo ul {
  list-style: none;
  padding: 0;
}

.secao-conteudo li {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;
}

.secao-conteudo li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-color, #667eea);
}

.topico {
  margin: 1.5rem 0;
}

.topico h3 {
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.codigo-exemplo {
  background: var(--background-primary);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
}

.codigo-exemplo pre {
  margin: 0;
  font-family: 'Courier New', monospace;
}

.codigo-exemplo code {
  color: var(--text-primary);
  font-size: 0.95rem;
  line-height: 1.5;
}

.navegacao {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
}

.btn-voltar,
.btn-proximo {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-voltar {
  background: var(--background-secondary);
  color: var(--text-primary);
}

.btn-proximo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-voltar:hover,
.btn-proximo:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .titulo-principal {
    font-size: 2rem;
  }

  .secao-conteudo {
    padding: 1.5rem;
  }

  .navegacao {
    flex-direction: column;
  }
}
</style>
