<template>
  <div class="lesson">
    <h1>📦 Objetos em JavaScript</h1>
    <p class="intro">Aprenda a organizar dados relacionados usando objetos</p>

    <section>
      <h2>💡 O que são Objetos?</h2>
      <p>
        Objetos são estruturas que armazenam <strong>múltiplos valores relacionados</strong> em
        pares de chave-valor. É como uma ficha com várias informações sobre algo.
      </p>

      <div class="example">
        <h4>📌 Criando Objetos:</h4>
        <pre><code>// ❌ Ruim - usando construtor
const pessoa = new Object();

// ✅ Bom - usando literal
const pessoa = {
  nome: "Ana",
  idade: 25,
  cidade: "São Paulo"
};</code></pre>
      </div>

      <div class="tip-box">
        <h4>🎯 Por que usar literal?</h4>
        <p>É mais curto, mais legível e mais rápido!</p>
      </div>
    </section>

    <section>
      <h2>🔑 Propriedades Computadas</h2>
      <p>Você pode criar propriedades dinamicamente usando colchetes:</p>

      <div class="example">
        <pre><code>function getKey(k) {
  return `chave_${k}`;
}

// ❌ Ruim
const obj = {
  id: 5,
  nome: 'Produto'
};
obj[getKey('ativo')] = true;

// ✅ Bom - tudo em um lugar
const obj = {
  id: 5,
  nome: 'Produto',
  [getKey('ativo')]: true
};</code></pre>
      </div>
    </section>

    <section>
      <h2>⚡ Atalhos de Sintaxe</h2>

      <div class="example">
        <h4>📌 Métodos Abreviados:</h4>
        <pre><code>// ❌ Ruim
const atom = {
  value: 1,
  addValue: function (value) {
    return atom.value + value;
  }
};

// ✅ Bom
const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  }
};</code></pre>
      </div>

      <div class="example">
        <h4>📌 Propriedades Abreviadas:</h4>
        <pre><code>const nome = "João";
const idade = 30;

// ❌ Ruim
const pessoa = {
  nome: nome,
  idade: idade
};

// ✅ Bom
const pessoa = {
  nome,
  idade
};</code></pre>
      </div>
    </section>

    <section>
      <h2>📋 Copiando Objetos</h2>

      <div class="example">
        <pre><code>const original = { a: 1, b: 2 };

// ❌ Muito ruim - modifica o original!
const copia = Object.assign(original, { c: 3 });

// ❌ Ruim
const copia = Object.assign({}, original, { c: 3 });

// ✅ Bom - usando spread
const copia = { ...original, c: 3 };

// Remover propriedade
const { a, ...semA } = copia;  // semA = { b: 2, c: 3 }</code></pre>
      </div>
    </section>

    <section>
      <h2>🎓 Exercício Prático</h2>
      <div class="exercise">
        <p>
          Crie um objeto <code>carro</code> com as propriedades: marca, modelo, ano e um método
          <code>descrever()</code> que retorna uma string com todas as informações.
        </p>

        <details>
          <summary>Ver Solução</summary>
          <pre><code>const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023,
  descrever() {
    return `${this.marca} ${this.modelo} ${this.ano}`;
  }
};

console.log(carro.descrever());
// "Toyota Corolla 2023"</code></pre>
        </details>
      </div>
    </section>

    <div class="nav-buttons">
      <button @click="$router.push('/trilhas/javascript')">← Voltar</button>
      <button @click="$router.push('/trilhas/javascript/arrays/base')" class="primary">
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

.tip-box {
  background: rgba(76, 175, 80, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4caf50;
  margin-top: 1rem;
}

.tip-box h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
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
