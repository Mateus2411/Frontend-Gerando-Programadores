<template>
  <div class="lesson">
    <h1>📝 Strings em JavaScript</h1>
    <p class="intro">Aprenda a trabalhar com textos de forma profissional</p>

    <section>
      <h2>💡 O que são Strings?</h2>
      <p>
        Strings são <strong>sequências de caracteres</strong> usadas para representar texto. Em
        JavaScript, podemos criar strings de várias formas.
      </p>

      <div class="example">
        <h4>📌 Tipos de Aspas:</h4>
        <pre><code>// ❌ Ruim - aspas duplas
const nome = "Capitão Janeway";

// ❌ Ruim - template literal sem necessidade
const nome = `Capitão Janeway`;

// ✅ Bom - aspas simples
const nome = 'Capitão Janeway';</code></pre>
      </div>

      <div class="tip-box">
        <h4>🎯 Quando usar cada tipo?</h4>
        <ul>
          <li><strong>Aspas simples (''):</strong> Para strings normais</li>
          <li>
            <strong>Template literals (``):</strong> Quando precisa interpolar variáveis ou quebrar
            linhas
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2>🔗 Concatenação vs Template Literals</h2>

      <div class="example">
        <h4>📌 Forma Antiga (Concatenação):</h4>
        <pre><code>// ❌ Ruim
function saudar(nome) {
  return 'Como vai, ' + nome + '?';
}

// ❌ Ruim
function saudar(nome) {
  return ['Como vai, ', nome, '?'].join();
}</code></pre>
      </div>

      <div class="example">
        <h4>📌 Forma Moderna (Template Literals):</h4>
        <pre><code>// ✅ Bom
function saudar(nome) {
  return `Como vai, ${nome}?`;
}

// Múltiplas variáveis
const usuario = 'Ana';
const idade = 25;
const mensagem = `${usuario} tem ${idade} anos`;

console.log(mensagem);  // "Ana tem 25 anos"</code></pre>
      </div>
    </section>

    <section>
      <h2>📏 Strings Longas</h2>

      <div class="example">
        <pre><code>// ❌ Ruim - quebrar com \
const erro = 'Este é um erro muito longo que foi lançado \
porque algo deu errado no sistema.';

// ❌ Ruim - concatenação
const erro = 'Este é um erro muito longo ' +
  'que foi lançado porque algo deu errado.';

// ✅ Bom - deixar em uma linha
const erro = 'Este é um erro muito longo que foi lançado porque algo deu errado no sistema.';</code></pre>
      </div>
    </section>

    <section>
      <h2>🔧 Métodos Úteis de String</h2>

      <div class="example">
        <h4>📌 Transformações:</h4>
        <pre><code>const texto = "JavaScript é Incrível";

// Maiúsculas e minúsculas
console.log(texto.toUpperCase());  // "JAVASCRIPT É INCRÍVEL"
console.log(texto.toLowerCase());  // "javascript é incrível"

// Remover espaços
const comEspacos = "  Olá  ";
console.log(comEspacos.trim());    // "Olá"

// Substituir
const frase = "Eu gosto de Python";
console.log(frase.replace("Python", "JavaScript"));
// "Eu gosto de JavaScript"</code></pre>
      </div>

      <div class="example">
        <h4>📌 Busca e Verificação:</h4>
        <pre><code>const email = "usuario@exemplo.com";

// Verificar se contém
console.log(email.includes("@"));        // true
console.log(email.startsWith("usuario")); // true
console.log(email.endsWith(".com"));     // true

// Encontrar posição
console.log(email.indexOf("@"));         // 7</code></pre>
      </div>

      <div class="example">
        <h4>📌 Dividir e Juntar:</h4>
        <pre><code>// Dividir string em array
const frase = "JavaScript é legal";
const palavras = frase.split(" ");
console.log(palavras);  // ["JavaScript", "é", "legal"]

// Juntar array em string
const frutas = ["maçã", "banana", "laranja"];
const lista = frutas.join(", ");
console.log(lista);  // "maçã, banana, laranja"</code></pre>
      </div>
    </section>

    <section>
      <h2>⚠️ Evite eval()</h2>

      <div class="example">
        <pre><code>// ❌ NUNCA faça isso - é perigoso!
const codigo = "alert('Hackeado!')";
eval(codigo);  // Abre vulnerabilidades de segurança

// ✅ Use alternativas seguras
const resultado = Function('return 2 + 2')();  // Ainda evite
// Melhor: faça o cálculo diretamente
const resultado = 2 + 2;</code></pre>
      </div>
    </section>

    <section>
      <h2>🎓 Exercício Prático</h2>
      <div class="exercise">
        <p>
          Crie uma função que recebe nome e sobrenome e retorna o nome completo em maiúsculas, com
          as iniciais separadas por ponto.
        </p>
        <p>Exemplo: <code>formatarNome("ana", "silva")</code> → <code>"A. SILVA"</code></p>

        <details>
          <summary>Ver Solução</summary>
          <pre><code>function formatarNome(nome, sobrenome) {
  const inicial = nome[0].toUpperCase();
  const sobrenomeMaiusculo = sobrenome.toUpperCase();
  return `${inicial}. ${sobrenomeMaiusculo}`;
}

console.log(formatarNome("ana", "silva"));
// "A. SILVA"

console.log(formatarNome("joão", "santos"));
// "J. SANTOS"</code></pre>
        </details>
      </div>
    </section>

    <div class="nav-buttons">
      <button @click="$router.push('/trilhas/javascript/arrays/base')">← Anterior</button>
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
