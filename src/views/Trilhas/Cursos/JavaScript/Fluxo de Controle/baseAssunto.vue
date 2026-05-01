<template>
  <div class="lesson">
    <h1>🔀 Fluxo de Controle em JavaScript</h1>
    <p class="intro">Controle a execução do seu programa com estruturas de decisão</p>

    <section>
      <h2>💡 O que é Fluxo de Controle?</h2>
      <p>
        O fluxo de controle determina a ordem em que as instruções do seu programa são executadas.
        Por padrão, o código é executado linha por linha, de cima para baixo. Mas com estruturas
        de decisão, você pode alterar esse fluxo baseado em condições.
      </p>
    </section>

    <section>
      <h2>🎯 IF...ELSE</h2>
      <p>A estrutura mais básica para tomar decisões no código:</p>
      <ExampleBox title="📌 Exemplo:">
        <pre><code>let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📝 IF...ELSE IF...ELSE</h2>
      <p>Para múltiplas condições:</p>
      <ExampleBox title="📌 Exemplo:">
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
      </ExampleBox>
    </section>

    <section>
      <h2>❓ Operador Ternário</h2>
      <p>Uma forma compacta de escrever if...else simples:</p>
      <ExampleBox title="📌 Exemplo:">
        <pre><code>let idade = 20;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(status); // "Maior de idade"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔄 Switch...Case</h2>
      <p>Ideal para comparar um valor com múltiplas opções:</p>
      <ExampleBox title="📌 Exemplo:">
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
}

console.log(nomeDia); // "Quarta-feira"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📋 Quando Usar Cada Estrutura?</h2>
      <div class="comparison">
        <div class="col">
          <h4>IF...ELSE</h4>
          <ul>
            <li>Condições simples ou complexas</li>
            <li>Operadores lógicos (&&, ||)</li>
            <li>Comparações (&gt;, &lt;, &gt;=, &lt;=)</li>
          </ul>
        </div>
        <div class="col">
          <h4>Operador Ternário</h4>
          <ul>
            <li>Atribuições simples</li>
            <li>Uma linha</li>
            <li>Valor depende de condição</li>
          </ul>
        </div>
        <div class="col">
          <h4>Switch...Case</h4>
          <ul>
            <li>Muitas comparações de igualdade</li>
            <li>Mesmo valor comparado múltiplas vezes</li>
            <li>Código mais limpo</li>
          </ul>
        </div>
      </div>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/operador-ternario/base')"
    />
  </div>
</template>

<script setup>
import ExampleBox from '@/components/Lesson/ExampleBox.vue'
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

.comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.comparison h4 {
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.comparison ul {
  list-style: none;
  padding: 0;
}

.comparison li {
  color: var(--text-primary);
  padding: 0.5rem 0;
  font-size: 0.95rem;
}

.comparison li::before {
  content: "• ";
  color: var(--accent-primary);
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

  .comparison {
    grid-template-columns: 1fr;
  }
}
</style>