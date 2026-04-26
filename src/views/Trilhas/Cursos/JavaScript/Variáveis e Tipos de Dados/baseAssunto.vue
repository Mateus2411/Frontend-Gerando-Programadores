<template>
  <div class="lesson">
    <h1>📦 Variáveis e Tipos de Dados</h1>
    <p class="intro">Aprenda a armazenar e manipular dados em JavaScript</p>

    <section>
      <h2>💡 O que são Variáveis?</h2>
      <p>
        Variáveis são <strong>espaços na memória</strong> onde armazenamos dados que serão
        utilizados pelo programa. Pense nelas como caixas etiquetadas onde você guarda informações.
      </p>

      <InfoBox title="Declarando Variáveis em JavaScript:">
        <pre><code>let nome = "João";        // Variável que pode mudar
const PI = 3.14;          // Constante (não muda)
var idade = 25;           // Forma antiga (evite usar)</code></pre>
      </InfoBox>

      <TipBox title="🎯 Boas Práticas:">
        <ul>
          <li><strong>Use const</strong> sempre que o valor não for mudar</li>
          <li><strong>Use let</strong> quando precisar reatribuir valores</li>
          <li><strong>Evite var</strong> - ele tem comportamento confuso com escopo</li>
        </ul>
      </TipBox>
    </section>

    <section>
      <h2>🎯 Tipos de Dados Primitivos</h2>
      <p>
        JavaScript possui 7 tipos primitivos. Quando você acessa um tipo primitivo, trabalha
        diretamente com seu valor.
      </p>

      <div class="types-grid">
        <div class="type-card">
          <h4>String (Texto)</h4>
          <code>"Olá Mundo"</code>
          <p class="type-desc">Textos entre aspas</p>
        </div>
        <div class="type-card">
          <h4>Number (Número)</h4>
          <code>42, 3.14</code>
          <p class="type-desc">Inteiros e decimais</p>
        </div>
        <div class="type-card">
          <h4>Boolean (Lógico)</h4>
          <code>true, false</code>
          <p class="type-desc">Verdadeiro ou falso</p>
        </div>
        <div class="type-card">
          <h4>Undefined</h4>
          <code>undefined</code>
          <p class="type-desc">Valor não definido</p>
        </div>
        <div class="type-card">
          <h4>Null</h4>
          <code>null</code>
          <p class="type-desc">Ausência intencional</p>
        </div>
        <div class="type-card">
          <h4>Symbol</h4>
          <code>Symbol('id')</code>
          <p class="type-desc">Identificador único</p>
        </div>
        <div class="type-card">
          <h4>BigInt</h4>
          <code>9007199254740991n</code>
          <p class="type-desc">Números muito grandes</p>
        </div>
      </div>

      <ExampleBox title="📌 Exemplo Prático - Tipos Primitivos:">
        <pre><code>const idade = 25;
let novaIdade = idade;
novaIdade = 30;

console.log(idade);      // 25 (não mudou!)
console.log(novaIdade);  // 30

// Primitivos copiam o VALOR</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📦 Tipos Complexos (Referência)</h2>
      <p>
        Quando você acessa um tipo complexo, trabalha com uma <strong>referência</strong> ao valor,
        não o valor em si.
      </p>

      <div class="types-grid">
        <div class="type-card">
          <h4>Object (Objeto)</h4>
          <code>{ nome: "Ana" }</code>
        </div>
        <div class="type-card">
          <h4>Array (Lista)</h4>
          <code>[1, 2, 3]</code>
        </div>
        <div class="type-card">
          <h4>Function (Função)</h4>
          <code>function() {}</code>
        </div>
      </div>

      <ExampleBox title="📌 Exemplo Prático - Tipos por Referência:">
        <pre><code>const lista1 = [1, 2, 3];
const lista2 = lista1;
lista2[0] = 99;

console.log(lista1[0]);  // 99 (mudou!)
console.log(lista2[0]);  // 99

// Arrays copiam a REFERÊNCIA, não o valor!</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📝 Entrada e Saída de Dados</h2>
      <ExampleBox title="Saída (Exibir dados):">
        <pre><code>console.log("Olá!");      // No console
alert("Mensagem");        // Popup na tela</code></pre>
      </ExampleBox>
      <ExampleBox title="Entrada (Receber dados):">
        <pre><code>let nome = prompt("Digite seu nome:");
console.log("Olá, " + nome);</code></pre>
      </ExampleBox>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/variaveis-tipos-dados/a')"
    />
  </div>
</template>

<script setup>
import InfoBox from '@/components/Lesson/InfoBox.vue'
import TipBox from '@/components/Lesson/TipBox.vue'
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

.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.type-card {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 2px solid var(--border-color);
}

.type-card h4 {
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
}

.type-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

.tip-box {
  background: rgba(76, 175, 80, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4caf50;
  margin-top: 1rem;
}

.tip-box h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.tip-box ul {
  list-style: none;
  padding: 0;
}

.tip-box li {
  color: var(--text-primary);
  padding: 0.5rem 0;
  font-size: 1rem;
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

.nav-buttons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--border-color);
}

button {
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-primary);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-color);
}

button.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: transparent;
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

  .types-grid {
    grid-template-columns: 1fr;
  }

  .nav-buttons {
    flex-direction: column;
  }
}
</style>
