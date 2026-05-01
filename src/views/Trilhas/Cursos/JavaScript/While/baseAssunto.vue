<template>
  <div class="lesson">
    <h2>⏳ While em JavaScript</h2>
    <p class="intro">Repita código enquanto uma condição for verdadeira</p>

    <section>
      <h2>📋 Sintaxe</h2>
      <p>O <code>while</code> repete o bloco enquanto a condição for verdadeira.</p>
      <ExampleBox title="📌 Estrutura:">
        <pre><code>while (condição) {
  // código executado enquanto condição for true
}</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>⚠️ Importante: Condição Primeiro</h2>
      <p>A condição é avaliada <strong>antes</strong> de cada execução. Se for falsa logo no início, o loop não executa!</p>
      <ExampleBox title="📌 Condição falsa desde o início:">
        <pre><code>let tentativas = 0;

while (tentativas > 3) {
  console.log("Tentativa: " + tentativas);
  tentativas++;
}

// Não executa nenhuma vez! (0 não é > 3)</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>💻 Exemplos Práticos</h2>
      <ExampleBox title="📌 Contador crescente:">
        <pre><code>let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
// Resultado: 0, 1, 2, 3, 4</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Contador decrescente:">
        <pre><code>let valor = 10;

while (valor > 0) {
  console.log(valor);
  valor -= 2;
}
// Resultado: 10, 8, 6, 4, 2</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🎯 Validação de Entrada</h2>
      <ExampleBox title="📌 Loop até entrada válida:">
        <pre><code>// Simula prompt - tente digitar algo inválido primeiro
let resposta = "invalido";

while (resposta !== "sim" && resposta !== "não") {
  console.log("Por favor, responda 'sim' ou 'não'");
  resposta = "sim"; // Simulando entrada do usuário
}

console.log("Resposta registrada: " + resposta);
// Resultado: Para quando usuário digita "sim" ou "não"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>⚠️ Loop Infinito</h2>
      <TipBox title="❌ CUIDADO:">
        <p>Sempre tenha uma forma de sair do loop!</p>
      </TipBox>
      <ExampleBox title="📌 Errado (não execute!):">
        <pre><code>// ❌ NUNCA faça isso!
// while (true) {
//   console.log("Loop infinito!");
// }

// ❌ Esqueceu o incremento
let i = 0;
while (i < 10) {
  console.log(i);
  // i++ está faltando!
}</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔄 do...while</h2>
      <p>O <code>do...while</code> executa o código <strong>antes</strong> de verificar a condição.</p>
      <ExampleBox title="📌 Diferença: while vs do...while:">
        <pre><code>// while - verifica antes
let x = 10;
while (x < 5) {
  console.log("while executou");
}
// ❌ Não executa nenhuma vez!

// do...while - executa primeiro
let y = 10;
do {
  console.log("do...while executou");
} while (y < 5);
// ✅ Executa pelo menos uma vez!</code></pre>
      </ExampleBox>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/funcoes/base')"
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

h1, h2 {
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

  h1, h2 {
    font-size: 2rem;
  }

  section {
    padding: 1.5rem;
  }
}
</style>