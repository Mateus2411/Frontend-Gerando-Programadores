<template>
  <div class="lesson">
    <h1>🔀 Switch...Case em JavaScript</h1>
    <p class="intro">Escolha entre múltiplas opções de forma clara</p>

    <section>
      <h2>📋 Sintaxe</h2>
      <p>O <code>switch</code> compara um valor contra múltiplas opções.</p>
      <ExampleBox title="📌 Estrutura:">
        <pre><code>switch (valor) {
  case valor1:
    // código se valor === valor1
    break;
  case valor2:
    // código se valor === valor2
    break;
  default:
    // código se nenhum caso for igual
}</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🎯 Exemplo Prático</h2>
      <ExampleBox title="📌 Dia da Semana:">
        <pre><code>let dia = 3;
let nomeDia;

switch (dia) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda-feira";
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  case 4:
    nomeDia = "Quarta-feira";
    break;
  case 5:
    nomeDia = "Quinta-feira";
    break;
  case 6:
    nomeDia = "Sexta-feira";
    break;
  case 7:
    nomeDia = "Sábado";
    break;
  default:
    nomeDia = "Dia inválido";
}

console.log(nomeDia); // "Terça-feira"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>⚠️ A Importância do break</h2>
      <p>Sem <code>break</code>, o código continua executando nos casos seguintes!</p>
      <ExampleBox title="📌 Sem break - erro comum:">
        <pre><code>let fruta = "maçã";

switch (fruta) {
  case "maçã":
    console.log("É uma maçã");
  case "banana":
    console.log("É uma banana");
  default:
    console.log("Nãosei");
}

// Resultado:
// "É uma maçã"
// "É uma banana"
// "Nãosei"
// ⚠️ CUIDADO!</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Com break - correto:">
        <pre><code>let fruta = "maçã";

switch (fruta) {
  case "maçã":
    console.log("É uma maçã");
    break;
  case "banana":
    console.log("É uma banana");
    break;
  default:
    console.log("Nãosei");
}

// Resultado: "É uma maçã" ✅</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📚 Multiple Cases (Fall-through)</h2>
      <p>Você pode agrupar múltiplos casos para executar o mesmo código.</p>
      <ExampleBox title="📌 Múltiplos Casos:">
        <pre><code>let nota = 7;
let conceito;

switch (nota) {
  case 10:
  case 9:
    conceito = "A";
    break;
  case 8:
  case 7:
    conceito = "B";
    break;
  case 6:
  case 5:
    conceito = "C";
    break;
  default:
    conceito = "D";
}

console.log(conceito); // "B"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📦 default</h2>
      <p>O <code>default</code> é executado quando nenhum caso corresponde.</p>
      <ExampleBox title="📌 Exemplo:">
        <pre><code>let cor = "roxo";

switch (cor) {
  case "vermelho":
    console.log("Pare!");
    break;
  case "amarelo":
    console.log("Atenção!");
    break;
  case "verde":
    console.log("Siga!");
    break;
  default:
    console.log("Cor inválida");
}

// Resultado: "Cor inválida"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>⚖️ Switch vs if...else</h2>
      <div class="comparison">
        <div class="col">
          <h4>✅ Switch é melhor quando:</h4>
          <ul>
            <li>Muitas comparações de igualdade</li>
            <li>Valor fixo para comparar</li>
            <li>Código mais limpo</li>
          </ul>
        </div>
        <div class="col">
          <h4>✅ if...else é melhor quando:</h4>
          <ul>
            <li>Condições complexas (>, <, &&, ||)</li>
            <li>Faixas de valores</li>
          </ul>
        </div>
      </div>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/arrays/base')"
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
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
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