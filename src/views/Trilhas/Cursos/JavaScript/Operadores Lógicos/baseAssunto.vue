<template>
  <div class="lesson">
    <h1>🔢 Operadores Lógicos em JavaScript</h1>
    <p class="intro">Combine condições para criar lógica mais complexa</p>

    <section>
      <h2>🤝 AND (&&) - E Lógico</h2>
      <p>
        Retorna <code>true</code> apenas se <strong>ambas</strong> as condições forem verdadeiras.
      </p>
      <ExampleBox title="📌 Tabela Verdade - AND:">
        <pre><code>true  && true   → true
true  && false → false
false && true  → false
false && false → false</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Exemplo Prático:">
        <pre><code>let idade = 25;
let temCNH = true;

// Usando AND
if (idade >= 18 && temCNH) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir");
}
// Resultado: "Pode dirigir!"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🤝 OR (||) - OU Lógico</h2>
      <p>
        Retorna <code>true</code> se <strong>pelo menos uma</strong> das condições for verdadeira.
      </p>
      <ExampleBox title="📌 Tabela Verdade - OR:">
        <pre><code>true  || true   → true
true  || false → true
false || true  → true
false || false → false</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Exemplo Prático:">
        <pre><code>lettemFerias = false;
lettemFolga = true;

// Usando OR
if (temFerias || temFolga) {
  console.log("Pode sair!");
} else {
  console.log("Precisa trabalhar");
}
// Resultado: "Pode sair!"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>❌ NOT (!) - NÃO Lógico</h2>
      <p>
        Inverte o valor booleano: <code>true</code> vira <code>false</code> e vice-versa.
      </p>
      <ExampleBox title="📌 Tabela Verdade - NOT:">
        <pre><code>!true  → false
!false → true</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Exemplo Prático:">
        <pre><code>let estaLogado = false;

// Usando NOT
if (!estaLogado) {
  console.log("Faça login para continuar");
}
// Resultado: "Faça login para continuar"

// Dupla negação
let ativo = true;
console.log(!!ativo); // true (mantém o valor original)</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔗 Combinações Avançadas</h2>
      <ExampleBox title="📌 Múltiplas Condições:">
        <pre><code>let idade = 20;
let renda = 1500;
let temScore = true;

// Condição complexa
if (idade >= 18 && (renda >= 1000 || temScore)) {
  console.log("Crédito aprovado!");
}
// Resultado: "Crédito aprovado!"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>⚡ Short-Circuit Evaluation</h2>
      <p>O JavaScript otimiza a avaliação - para se a primeira condição já definir o resultado.</p>
      <ExampleBox title="📌 Curto-Circuito com AND:">
        <pre><code>// Se primeira for false, não avalia a segunda
let x = 0;
if (x > 0 && x++) {
  console.log("Nunca executa");
}
console.log(x); // 0 (x++ não foi executado!)</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Curto-Circuito com OR:">
        <pre><code>// Se primeira for true, não avalia a segunda
let y = 5;
if (y > 0 || y++) {
  console.log("Executa!");
}
console.log(y); // 5 (y++ não foi executado!)</code></pre>
      </ExampleBox>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/strings/base')"
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
  font-family: 'Courier New', monospace;
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