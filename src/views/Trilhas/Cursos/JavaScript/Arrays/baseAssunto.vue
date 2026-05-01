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
for (let i = 0; i &lt; original.length; i++) {
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

    <section>
      <h2>🔧 Métodos de Modificação</h2>
      <div class="methods-grid">
        <div class="method-card">
          <h4>push()</h4>
          <p>Adiciona no final</p>
          <pre><code>arr.push(item)</code></pre>
        </div>
        <div class="method-card">
          <h4>pop()</h4>
          <p>Remove do final</p>
          <pre><code>arr.pop()</code></pre>
        </div>
        <div class="method-card">
          <h4>shift()</h4>
          <p>Remove do início</p>
          <pre><code>arr.shift()</code></pre>
        </div>
        <div class="method-card">
          <h4>unshift()</h4>
          <p>Adiciona no início</p>
          <pre><code>arr.unshift(item)</code></pre>
        </div>
      </div>
      <ExampleBox title="📌 Exemplo - Pilha (LIFO):">
        <pre><code>let pilha = [];
pilha.push("A");  // ["A"]
pilha.push("B");  // ["A", "B"]
pilha.push("C");  // ["A", "B", "C"]
console.log(pilha.pop());  // "C"
console.log(pilha.pop());  // "B"</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 Exemplo - Fila (FIFO):">
        <pre><code>let fila = [];
fila.push("Pessoa 1");  // ["Pessoa 1"]
fila.push("Pessoa 2");  // ["Pessoa 1", "Pessoa 2"]
console.log(fila.shift());  // "Pessoa 1"
console.log(fila.shift());  // "Pessoa 2"</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>✂️ splice() e slice()</h2>
      <ExampleBox title="📌 splice() - Remover/Adicionar:">
        <pre><code>let nums = [1, 2, 3, 4, 5];

// Remover 2 elementos a partir do índice 1
nums.splice(1, 2);
console.log(nums);  // [1, 4, 5]

// Inserir sem remover
nums.splice(1, 0, "novo");
console.log(nums);  // [1, "novo", 4, 5]</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 slice() - Copiar parte:">
        <pre><code>let letras = ["a", "b", "c", "d", "e"];

// Do índice 1 ao 3 (não inclui o 3)
console.log(letras.slice(1, 4));  // ["b", "c", "d"]

// Sem segundo parâmetro = até o fim
console.log(letras.slice(2));  // ["c", "d", "e"]</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔍 Busca e Verificação</h2>
      <ExampleBox title="📌 find() e findIndex():">
        <pre><code>let numeros = [10, 25, 30, 45, 50];

// find() - retorna o primeiro elemento
let encontrado = numeros.find(n => n > 20);
console.log(encontrado);  // 25

// findIndex() - retorna o índice
let indice = numeros.findIndex(n => n > 20);
console.log(indice);  // 1</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 includes() e indexOf():">
        <pre><code>let frutas = ["maçã", "banana", "laranja"];

// includes() - verifica se existe
console.log(frutas.includes("banana"));  // true
console.log(frutas.includes("uva"));       // false

// indexOf() - retorna o índice (-1 se não encontrar)
console.log(frutas.indexOf("banana"));   // 1
console.log(frutas.indexOf("uva"));      // -1</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔄 Ordenação</h2>
      <ExampleBox title="📌 sort() - Ordenar:">
        <pre><code>let numeros = [3, 1, 5, 2, 4];
numeros.sort();
console.log(numeros);  // [1, 2, 3, 4, 5]

// Ordenar decrescente
numeros.sort((a, b) => b - a);
console.log(numeros);  // [5, 4, 3, 2, 1]</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 reverse() - Inverter:">
        <pre><code>let array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array);  // [5, 4, 3, 2, 1]</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🔗 Juntar e Concatenar</h2>
      <ExampleBox title="📌 join() - Array para String:">
        <pre><code>let palavras = ["Olá", "Mundo", "!"];
console.log(palavras.join(" "));  // "Olá Mundo !"
console.log(palavras.join("-"));  // "Olá-Mundo-!"</code></pre>
      </ExampleBox>
      <ExampleBox title="📌 concat() - Juntar Arrays:">
        <pre><code>let a = [1, 2];
let b = [3, 4];
let c = [5];

let resultado = a.concat(b, c);
console.log(resultado);  // [1, 2, 3, 4, 5]</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>➗ Spread Operator</h2>
      <ExampleBox title="📌 Spread em Arrays:">
        <pre><code>let base = [1, 2, 3];
let扩展 = [...base, 4, 5];
console.log(扩展);  // [1, 2, 3, 4, 5]

// Copiar array
let copia = [...base];

// Mesclar arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let mesclado = [...arr1, ...arr2];</code></pre>
      </ExampleBox>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/for-of/base')"
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

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.method-card {
  background: var(--bg-secondary);
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
}

.method-card h4 {
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
}

.method-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.method-card pre {
  font-size: 0.8rem;
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
