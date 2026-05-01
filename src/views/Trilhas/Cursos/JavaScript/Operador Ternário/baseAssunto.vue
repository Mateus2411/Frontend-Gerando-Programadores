<template>
  <div class="lesson">
    <h1>❓ Operador Ternário em JavaScript</h1>
    <p class="intro">Uma forma compacta de escrever condições simples</p>

    <section>
      <h2>📋 Sintaxe</h2>
      <p>O operador ternário é a única operação ternária (3 operandos) do JavaScript.</p>
      <div class="syntax-box">
        <pre><code>condição ? valorSeVerdadeiro : valorSeFalso</code></pre>
      </div>
      <ExampleBox title="📌 Estrutura:">
        <pre><code>//       ↓ condição        ↓ verdade      ↓ falso
let resultado = idade >= 18 ? "Adulto" : "Menor";</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔢 Classificação de Operadores</h2>
      <div class="info-box">
        <ul>
          <li><strong>Unários</strong> - 1 operando: <code>-5</code>, <code>!true</code></li>
          <li><strong>Binários</strong> - 2 operandos: <code>a + b</code>, <code>x === y</code></li>
          <li><strong>Ternários</strong> - 3 operandos: <code>a ? b : c</code></li>
        </ul>
      </div>
    </section>

    <section>
      <h2>🎯 Exemplos Práticos</h2>
      <ExampleBox title="📌 Exemplo 1 - Atribuição Simples:">
        <pre><code>let idade = 20;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(status); // "Maior de idade"</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Exemplo 2 - Exibição:">
        <pre><code>let nota = 8;
console.log(nota >= 7 ? "Aprovado" : "Reprovado");
// Resultado: "Aprovado"</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Exemplo 3 - Variável com Cálculo:">
        <pre><code>let quantidade = 10;
let preco = 50;
let total = quantidade > 5 ? preco * 0.9 : preco;

console.log(total); // 45 (10% desconto!)
// Sem ternário seria:
// let total = quantidade > 5 ? preco * 0.9 : preco;</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔗 Encadeamento de Ternários</h2>
      <TipBox title="⚠️ Cuidado:">
        <p>Encadear ternários pode tornar o código difícil de ler.</p>
      </TipBox>
      <ExampleBox title="📌 Encadeamento (use com moderação):">
        <pre><code>let nota = 7;

let conceito = nota >= 9 ? "A" : 
               nota >= 7 ? "B" : 
               nota >= 5 ? "C" : "D";

console.log(conceito); // "B"</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Equivalente com if...else:">
        <pre><code>let nota = 7;
let conceito;

if (nota >= 9) {
  conceito = "A";
} else if (nota >= 7) {
  conceito = "B";
} else if (nota >= 5) {
  conceito = "C";
} else {
  conceito = "D";
}

console.log(conceito); // "B"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>⚖️ Ternário vs if...else</h2>
      <div class="comparison">
        <div class="col">
          <h4>✅ Use Ternário quando:</h4>
          <ul>
            <li>Condição simples</li>
            <li>Atribuição direta</li>
            <li>Uma linha de código</li>
          </ul>
        </div>
        <div class="col">
          <h4>❌ Use if...else quando:</h4>
          <ul>
            <li>Condições complexas</li>
            <li>Múltiplos blocos de código</li>
            <li>Lógica difícil de seguir</li>
          </ul>
        </div>
      </div>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/switch-case/base')"
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

.syntax-box {
  background: var(--accent-soft);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.syntax-box pre {
  margin: 0;
  font-size: 1.2rem;
}

.info-box {
  background: rgba(102, 126, 234, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.info-box ul {
  list-style: none;
  padding: 0;
}

.info-box li {
  color: var(--text-primary);
  padding: 0.5rem 0;
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
  background: rgba(255, 152, 0, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ff9800;
  margin-top: 1rem;
}

.tip-box p {
  margin: 0;
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