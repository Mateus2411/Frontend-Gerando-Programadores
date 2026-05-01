<template>
  <div class="lesson">
    <h1>🔢 For com Variável de Controle</h1>
    <p class="intro">O loop mais versátil e controlado do JavaScript</p>

    <section>
      <h2>📋 Sintaxe</h2>
      <p>
        O <code>for</code> tradicional usa três partes: inicialização, condição e incremento.
      </p>
      <ExampleBox title="📌 Estrutura:">
        <pre><code>for (inicialização; condição; incremento) {
  // código executado a cada iteração
}</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🎯 Partes do For</h2>
      <div class="parts-table">
        <table>
          <thead>
            <tr>
              <th>Parte</th>
              <th>Descrição</th>
              <th>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Inicialização</strong></td>
              <td>Cria a variável controladora</td>
              <td><code>let i = 0</code></td>
            </tr>
            <tr>
              <td><strong>Condição</strong></td>
              <td>Verifica se continua</td>
              <td><code>i &lt; 5</code></td>
            </tr>
            <tr>
              <td><strong>Incremento</strong></td>
              <td>Atualiza a variável</td>
              <td><code>i++</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2>💻 Exemplos Práticos</h2>
      <ExampleBox title="📌 Contador simples (0 a 4):">
        <pre><code>for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Resultado: 0, 1, 2, 3, 4</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Contador até 10:">
        <pre><code>for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Resultado: 1, 2, 3, ..., 10</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Decremento (5 a 1):">
        <pre><code>for (let i = 5; i > 0; i--) {
  console.log(i);
}
// Resultado: 5, 4, 3, 2, 1</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Pular de 2 em 2:">
        <pre><code>for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Resultado: 0, 2, 4, 6, 8, 10</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📊 Tabuadas</h2>
      <ExampleBox title="📌 Tabuada do 5:">
        <pre><code>let numero = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
// Resultado:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔁 Iterando Arrays</h2>
      <ExampleBox title="📌 Com índices:">
        <pre><code>let frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`${i}: ${frutas[i]}`);
}
// Resultado:
// "0: maçã"
// "1: banana"
// "2: laranja"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>⚠️ Loop Infinito</h2>
      <TipBox title="❌ Cuidado:">
        <p>Evite condições que sempre retornam true!</p>
      </TipBox>
      <ExampleBox title="📌 Errado (não execute!):">
        <pre><code>// ❌ NUNCA faça isso
// for (let i = 1; i > 0; i++) { ... }

// ❌ Cuidado com variáveis externas
let i = 0;
for (; i < 5;) {
  console.log(i);
  // Precisa incrementar manualmente!
}</code></pre>
      </ExampleBox>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/while/base')"
    />
  </div>
</template>

<script setup>
import ExampleBox from '@/components/Lesson/ExampleBox.vue'
import TipBox from '@/components/Lesson/TipBox.vue'
import NavButtons from '@/components/Lesson/NavButtons.vue'
</script>

<style scoped>
.lesson {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--bg-primary);
  min-height: 100vh;
}

h1 {
  color: var(--accent-primary);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

section {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px var(--shadow-color);
}

h2 {
  color: var(--text-primary);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

p {
  color: var(--text-primary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

pre {
  background: var(--bg-secondary);
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}

code {
  color: var(--text-primary);
  font-family: 'Courier New', monospace;
}

.parts-table {
  overflow-x: auto;
  margin-top: 1rem;
}

.parts-table table {
  width: 100%;
  border-collapse: collapse;
}

.parts-table th,
.parts-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.parts-table th {
  background: var(--bg-secondary);
  color: var(--accent-primary);
}

.parts-table td {
  color: var(--text-primary);
}

.example {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
}

.example h4 {
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.tip-box {
  background: rgba(244, 67, 54, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #f44336;
  margin-top: 1rem;
}

.tip-box p {
  margin: 0;
}

@media (max-width: 768px) {
  .lesson {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  section {
    padding: 1.5rem;
  }
}
</style>