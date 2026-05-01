<template>
  <div class="lesson">
    <h1>🔀 IF...Else em JavaScript</h1>
    <p class="intro">Aprenda a tomar decisões no seu código</p>

    <section>
      <h2>📋 Estrutura Básica</h2>
      <p>A estrutura <code>if</code> executa um bloco de código se a condição for verdadeira.</p>
      <ExampleBox title="📌 Sintaxe:">
        <pre><code>if (condição) {
  // código executado se verdadeiro
}</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Exemplo Prático:">
        <pre><code>let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade!");
}</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>⚖️ if...else</h2>
      <p>O <code>else</code> define o que fazer quando a condição é falsa.</p>
      <ExampleBox title="📌 Exemplo:">
        <pre><code>let temperatura = 25;

if (temperatura > 30) {
  console.log("Está quente!");
} else {
  console.log("Temperatura agradavel");
}
// Resultado: "Temperatura agradavel"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔗 if...else if...else</h2>
      <p>Para múltiplas condições, use <code>else if</code>.</p>
      <ExampleBox title="📌 Exemplo - Classificação:">
        <pre><code>let nota = 7.5;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 7) {
  console.log("Bom!");
} else if (nota >= 5) {
  console.log("Regular");
} else {
  console.log("Reprovado");
}
// Resultado: "Bom!"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🎯 Operadores de Comparação</h2>
      <div class="operators-table">
        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Descrição</th>
              <th>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>==</code></td>
              <td>Igual (valor)</td>
              <td>5 == "5" → true</td>
            </tr>
            <tr>
              <td><code>===</code></td>
              <td>Idêntico (valor + tipo)</td>
              <td>5 === "5" → false</td>
            </tr>
            <tr>
              <td><code>!=</code></td>
              <td>Diferente (valor)</td>
              <td>5 != "5" → false</td>
            </tr>
            <tr>
              <td><code>!==</code></td>
              <td>Diferente (tipo)</td>
              <td>5 !== "5" → true</td>
            </tr>
            <tr>
              <td><code>&gt;</code></td>
              <td>Maior que</td>
              <td>10 > 5 → true</td>
            </tr>
            <tr>
              <td><code>&lt;</code></td>
              <td>Menor que</td>
              <td>3 < 5 → true</td>
            </tr>
            <tr>
              <td><code>&gt;=</code></td>
              <td>Maior ou igual</td>
              <td>5 >= 5 → true</td>
            </tr>
            <tr>
              <td><code>&lt;=</code></td>
              <td>Menor ou igual</td>
              <td>4 <= 5 → true</td>
            </tr>
          </tbody>
        </table>
      </div>
      <TipBox title="💡 Dica:">
        <p>Use sempre <code>===</code> e <code>!==</code> para evitar comparações inesperadas!</p>
      </TipBox>
    </section>

    <section>
      <h2>🔀 Aninhamento</h2>
      <ExampleBox title="📌 Condições dentro de condições:">
        <pre><code>let idade = 20;
let temCarteira = true;

if (idade >= 18) {
  if (temCarteira) {
    console.log("Pode dirigir!");
  } else {
    console.log("Idade OK, mas tire a carteira");
  }
} else {
  console.log("Muito jovem para dirigir");
}</code></pre>
      </ExampleBox>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/operador-ternario/base')"
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

.operators-table {
  overflow-x: auto;
  margin-top: 1rem;
}

.operators-table table {
  width: 100%;
  border-collapse: collapse;
}

.operators-table th,
.operators-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.operators-table th {
  background: var(--bg-secondary);
  color: var(--accent-primary);
}

.operators-table td {
  color: var(--text-primary);
}

.tip-box {
  background: rgba(76, 175, 80, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4caf50;
  margin-top: 1rem;
}

.tip-box p {
  margin: 0;
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