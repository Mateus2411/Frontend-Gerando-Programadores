<template>
  <div class="lesson">
    <h1>📚 Arrays em JavaScript</h1>
    <p class="intro">Aprenda a trabalhar com listas de dados de forma eficiente</p>

    <section>
      <h2>💡 O que são Arrays?</h2>
      <p>
        Arrays são <strong>listas ordenadas</strong> que armazenam múltiplos valores. Cada valor tem
        uma posição (índice) começando do 0.
      </p>

      <div class="example">
        <h4>📌 Criando Arrays:</h4>
        <pre><code>// ❌ Ruim
const items = new Array();

// ✅ Bom - usando literal
const items = [];
const frutas = ["maçã", "banana", "laranja"];</code></pre>
      </div>
    </section>

    <section>
      <h2>➕ Adicionando Itens</h2>

      <div class="example">
        <pre><code>const pilha = [];

// ❌ Ruim
pilha[pilha.length] = "novo item";

// ✅ Bom - use push
pilha.push("novo item");
pilha.push("outro item");

console.log(pilha);  // ["novo item", "outro item"]</code></pre>
      </div>
    </section>

    <section>
      <h2>📋 Copiando Arrays</h2>

      <div class="example">
        <pre><code>const original = [1, 2, 3];

// ❌ Ruim - loop manual
const copia = [];
for (let i = 0; i < original.length; i++) {
  copia[i] = original[i];
}

// ✅ Bom - usando spread
const copia = [...original];

// Adicionar mais itens
const completo = [...original, 4, 5, 6];</code></pre>
      </div>
    </section>

    <section>
      <h2>🔄 Métodos Importantes</h2>

      <div class="example">
        <h4>📌 map() - Transformar cada item:</h4>
        <pre><code>const numeros = [1, 2, 3, 4];

// Dobrar cada número
const dobrados = numeros.map((num) => num * 2);
console.log(dobrados);  // [2, 4, 6, 8]</code></pre>
      </div>

      <div class="example">
        <h4>📌 filter() - Filtrar itens:</h4>
        <pre><code>const idades = [15, 22, 18, 30, 12];

// Apenas maiores de idade
const maiores = idades.filter((idade) => idade >= 18);
console.log(maiores);  // [22, 18, 30]</code></pre>
      </div>

      <div class="example">
        <h4>📌 reduce() - Reduzir a um valor:</h4>
        <pre><code>const precos = [10, 20, 30, 40];

// Somar todos os preços
const total = precos.reduce((soma, preco) => {
  return soma + preco;
}, 0);

console.log(total);  // 100</code></pre>
      </div>

      <div class="example">
        <h4>📌 find() - Encontrar um item:</h4>
        <pre><code>const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "João" },
  { id: 3, nome: "Maria" }
];

const usuario = usuarios.find((u) => u.id === 2);
console.log(usuario);  // { id: 2, nome: "João" }</code></pre>
      </div>
    </section>

    <section>
      <h2>⚠️ Sempre Retorne nos Callbacks</h2>

      <div class="example">
        <pre><code>// ❌ Ruim - sem return
[1, 2, 3].map((x) => {
  const y = x + 1;
  // Esqueceu o return!
});

// ✅ Bom
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// ✅ Melhor - return implícito
[1, 2, 3].map((x) => x + 1);</code></pre>
      </div>
    </section>

    <section>
      <h2>🎓 Exercício Prático</h2>
      <div class="exercise">
        <p>
          Dado o array <code>[10, 25, 30, 15, 40]</code>, crie um novo array apenas com números
          maiores que 20, e depois dobre cada um desses números.
        </p>

        <details>
          <summary>Ver Solução</summary>
          <pre><code>const numeros = [10, 25, 30, 15, 40];

const resultado = numeros
  .filter((num) => num > 20)
  .map((num) => num * 2);

console.log(resultado);  // [50, 60, 80]</code></pre>
        </details>
      </div>
    </section>

    <div class="nav-buttons">
      <button @click="$router.push('/trilhas/javascript/objetos/base')">← Anterior</button>
      <button @click="$router.push('/trilhas/javascript/funcoes/base')" class="primary">
        Próximo →
      </button>
    </div>
  </div>
</template>

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

pre {
  background: var(--bg-primary);
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin-top: 0.5rem;
}

code {
  color: var(--text-primary);
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  line-height: 1.6;
}

.exercise {
  background: rgba(255, 152, 0, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ff9800;
}

.exercise details {
  margin-top: 1rem;
}

.exercise summary {
  color: var(--accent-primary);
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem;
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

  .nav-buttons {
    flex-direction: column;
  }
}
</style>
