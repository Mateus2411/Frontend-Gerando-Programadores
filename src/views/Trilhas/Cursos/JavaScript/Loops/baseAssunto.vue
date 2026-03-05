<template>
  <div class="base-assunto">
    <div class="container">
      <h1 class="titulo-principal">Estruturas de Repetição (Loops)</h1>

      <section class="secao-conteudo">
        <h2>O que são Loops?</h2>
        <p>
          Loops (ou estruturas de repetição) permitem executar um bloco de código várias vezes. Eles
          são essenciais quando você precisa realizar a mesma operação repetidamente, como processar
          itens de uma lista ou executar algo até que uma condição seja atendida.
        </p>
      </section>

      <section class="secao-conteudo">
        <h2>Tipos de Loops</h2>

        <div class="topico">
          <h3>For...Of</h3>
          <p>Ideal para percorrer todos os elementos de um array:</p>
          <div class="codigo-exemplo">
            <pre><code>let frutas = ["Maçã", "Banana", "Laranja"];

for (let fruta of frutas) {
  console.log(fruta);
}
// Saída: Maçã, Banana, Laranja</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>For com Variável de Controle</h3>
          <p>Quando você sabe exatamente quantas vezes quer repetir:</p>
          <div class="codigo-exemplo">
            <pre><code>// Imprime números de 1 a 5
for (let i = 1; i &lt;= 5; i++) {
  console.log(i);
}

// Percorre array com índice
let cores = ["Vermelho", "Verde", "Azul"];
for (let i = 0; i &lt; cores.length; i++) {
  console.log(`Cor ${i + 1}: ${cores[i]}`);
}</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>While</h3>
          <p>Executa enquanto uma condição for verdadeira:</p>
          <div class="codigo-exemplo">
            <pre><code>let contador = 1;

while (contador &lt;= 5) {
  console.log(`Contagem: ${contador}`);
  contador++;
}

// Útil quando não sabe quantas iterações serão necessárias
let senha = "";
while (senha !== "1234") {
  senha = prompt("Digite a senha:");
}</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Do...While</h3>
          <p>Similar ao while, mas executa pelo menos uma vez:</p>
          <div class="codigo-exemplo">
            <pre><code>let numero;

do {
  numero = prompt("Digite um número maior que 10:");
} while (numero &lt;= 10);

console.log("Número válido!");</code></pre>
          </div>
        </div>
      </section>

      <section class="secao-conteudo">
        <h2>Controlando Loops</h2>
        <div class="topico">
          <h3>Break</h3>
          <p>Interrompe o loop completamente:</p>
          <div class="codigo-exemplo">
            <pre><code>for (let i = 1; i &lt;= 10; i++) {
  if (i === 5) {
    break; // Para quando i for 5
  }
  console.log(i);
}
// Saída: 1, 2, 3, 4</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Continue</h3>
          <p>Pula para a próxima iteração:</p>
          <div class="codigo-exemplo">
            <pre><code>for (let i = 1; i &lt;= 5; i++) {
  if (i === 3) {
    continue; // Pula o 3
  }
  console.log(i);
}
// Saída: 1, 2, 4, 5</code></pre>
          </div>
        </div>
      </section>

      <section class="secao-conteudo">
        <h2>Quando Usar Cada Loop?</h2>
        <ul>
          <li>
            <strong>For...Of:</strong> Quando precisa percorrer todos os elementos de um array
          </li>
          <li>
            <strong>For tradicional:</strong> Quando precisa do índice ou controle preciso das
            iterações
          </li>
          <li><strong>While:</strong> Quando não sabe quantas vezes vai repetir</li>
          <li><strong>Do...While:</strong> Quando precisa executar pelo menos uma vez</li>
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
