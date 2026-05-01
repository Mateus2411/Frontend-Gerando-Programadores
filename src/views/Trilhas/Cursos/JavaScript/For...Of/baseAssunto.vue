<template>
  <div class="lesson">
    <h1>🔄 For...Of em JavaScript</h1>
    <p class="intro">Itere sobre elementos de arrays de forma simples</p>

    <section>
      <h2>💡 O que é o For...Of?</h2>
      <p>
        O <code>for...of</code> percorre diretamente os <strong>valores</strong> de um array,
        sem necessidade de usar índices.
      </p>
      <ExampleBox title="📌 Sintaxe:">
        <pre><code>for (let elemento of array) {
  // código executado para cada elemento
}</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🎯 Exemplos Práticos</h2>
      <ExampleBox title="📌 Iterando um array simples:">
        <pre><code>let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
  console.log(fruta);
}
// Resultado:
// "maçã"
// "banana"
// "laranja"</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Somando valores:">
        <pre><code>let numeros = [10, 20, 30, 40];
let soma = 0;

for (let num of numeros) {
  soma += num;
}

console.log(soma); // 100</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Encontrando o maior valor:">
        <pre><code>let valores = [5, 12, 8, 3, 25];
let maior = valores[0];

for (let valor of valores) {
  if (valor > maior) {
    maior = valor;
  }
}

console.log(maior); // 25</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📊 For...Of com Índices</h2>
      <p>Se precisar do índice, use o método <code>entries()</code>.</p>
      <ExampleBox title="📌 Obtendo índice e valor:">
        <pre><code>let cores = ["vermelho", "verde", "azul"];

for (let [indice, cor] of cores.entries()) {
  console.log(`${indice}: ${cor}`);
}
// Resultado:
// "0: vermelho"
// "1: verde"
// "2: azul"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔤 For...Of com Strings</h2>
      <ExampleBox title="📌 Iterando caracteres:">
        <pre><code>let palavra = "JavaScript";

for (let letra of palavra) {
  console.log(letra);
}
// Resultado:
// "J"
// "a"
// "v"
// "a"
// "S"
// "c"
// "r"
// "i"
// "p"
// "t"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>⚡ Break e Continue</h2>
      <ExampleBox title="📌 Break - parar o loop:">
        <pre><code>let numeros = [1, 2, 3, 4, 5];

for (let num of numeros) {
  if (num === 3) {
    break;
  }
  console.log(num);
}
// Resultado: 1, 2</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Continue - pular iteração:">
        <pre><code>let numeros = [1, 2, 3, 4, 5];

for (let num of numeros) {
  if (num === 3) {
    continue;
  }
  console.log(num);
}
// Resultado: 1, 2, 4, 5</code></pre>
      </ExampleBox>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/for-controle/base')"
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