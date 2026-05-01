<template>
  <div class="lesson">
    <h1>📥 Entrada de Dados em JavaScript</h1>
    <p class="intro">Aprenda a receber dados do usuário</p>

    <section>
      <h2>💬 prompt()</h2>
      <p>
        A função <code>prompt()</code> exibe uma caixa de diálogo com um campo de entrada.
        Retorna o que o usuário digitou (como string) ou <code>null</code> se cancelar.
      </p>
      <ExampleBox title="📌 Exemplo - prompt():">
        <pre><code>// Forma básica
let nome = prompt("Qual é o seu nome?");
console.log("Olá, " + nome);

// Com valor padrão
let cidade = prompt("Onde você mora?", "São Paulo");
console.log(cidade);</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📦 Variáveis</h2>
      <p>Variáveis armazenam dados que podem ser usados e modificados pelo programa.</p>
      
      <div class="info-box">
        <h3>Tipos de Declaração:</h3>
        <ul>
          <li><strong>let</strong> - variável que pode ser reatribuída</li>
          <li><strong>const</strong> - constante (não pode ser reatribuída)</li>
          <li><strong>var</strong> - forma antiga (evite usar)</li>
        </ul>
      </div>

      <ExampleBox title="📌 Declarando Variáveis:">
        <pre><code>// let - pode mudar
let nome = "Maria";
nome = "Ana"; // ✅ Permite

// const - não pode mudar
const PI = 3.14;
// PI = 3; // ❌ Erro!

// var - antiquado
var idade = 25; // ⚠️ Evite</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📝 Regras para Nomes de Variáveis</h2>
      <div class="rules-list">
        <div class="rule">
          <span class="rule-icon">✅</span>
          <div>
            <strong>Pode usar:</strong> letras, números, $ e _ (não pode começar com número)
          </div>
        </div>
        <ExampleBox title="📌 Exemplos válidos:">
          <pre><code>let nome = "João";
let nomeCompleto = "João Silva";  // camelCase
let $valor = 10;
let _privado = "teste";
let nome1 = "primeiro";</code></pre>
        </ExampleBox>
        <TipBox title="⚠️ Inválidos:">
          <pre><code>// ❌ Não pode começar com número
let 1nome = "João";

// ❌ Não pode ter espaços
let nome completo = "João";

// ❌ Palavras reservadas
let if = "teste";</code></pre>
        </TipBox>
      </div>
    </section>

    <section>
      <h2>🔄 Conversão de Tipos</h2>
      <p>Dados do <code>prompt()</code> sempre retornam string. Use conversão quando necessário.</p>
      
      <ExampleBox title="📌 Conversão String → Número:">
        <pre><code>// Number() - converte para número
let idade = Number(prompt("Sua idade:"));
console.log(idade + 10); // 30 (se idade=20)

// parseInt() - número inteiro
let inteiro = parseInt("42");
console.log(inteiro); // 42

// parseFloat() - número decimal
let decimal = parseFloat("3.14");
console.log(decimal); // 3.14

// Number.parseInt() e Number.parseFloat()
let num = Number.parseInt("100");</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔗 Concatenação</h2>
      <ExampleBox title="📌 Juntando Strings:">
        <pre><code>let nome = "João";
let sobrenome = "Silva";

// Com operador +
console.log(nome + " " + sobrenome); // "João Silva"

// Com template string (recomendado)
console.log(`${nome} ${sobrenome}`); // "João Silva"

// Com variáveis numéricas
let a = "10";
let b = "20";
console.log(a + b); // "1020" (string!)
console.log(Number(a) + Number(b)); // 30 (número!)</code></pre>
      </ExampleBox>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/operadores-expressoes/base')"
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
  font-size: 0.95rem;
}

.info-box {
  background: rgba(102, 126, 234, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  margin-top: 1rem;
}

.info-box h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.info-box ul {
  list-style: none;
  padding: 0;
}

.info-box li {
  color: var(--text-primary);
  padding: 0.5rem 0;
}

.tip-box {
  background: rgba(255, 152, 0, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ff9800;
  margin-top: 1rem;
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

.rules-list {
  margin-top: 1rem;
}

.rule {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
}

.rule-icon {
  font-size: 1.5rem;
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