<template>
  <div class="lesson">
    <h1>📤 Saída de Dados em JavaScript</h1>
    <p class="intro">Aprenda diferentes formas de exibir informações no seu programa</p>

    <section>
      <h2>🔔 alert()</h2>
      <p>
        O método <code>alert()</code> exibe uma mensagem em uma caixa de diálogo (popup).
        É útil para debug rápido ou avisos simples.
      </p>
      <ExampleBox title="📌 Exemplo - alert():">
        <pre><code>alert("Olá, seja bem-vindo!");

// Com variável
let nome = "Maria";
alert("Olá, " + nome);</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>💻 console.log()</h2>
      <p>
        O <code>console.log()</code> exibe a mensagem no console do navegador.
        É a forma mais usada para debug e desenvolvimento.
      </p>
      <ExampleBox title="📌 Exemplo - console.log():">
        <pre><code>// No console do navegador (F12)
console.log("Mensagem de debug");

let nota = 10;
console.log("Sua nota é:", nota);

// Objetos
let usuario = { nome: "João", idade: 25 };
console.log(usuario);</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>📄 document.write()</h2>
      <p>
        O <code>document.write()</code> escreve diretamente no documento HTML.
        É usado principalmente para testes simples.
      </p>
      <ExampleBox title="📌 Exemplo - document.write():">
        <pre><code>document.write("&lt;h1&gt;Título na página&lt;/h1&gt;");
document.write("&lt;p&gt;Parágrafo&lt;/p&gt;");</code></pre>
      </ExampleBox>
      <TipBox title="⚠️ Atenção:">
        <p>Evite usar <code>document.write()</code> em produção - pode sobrescrever toda a página se chamado após o carregamento.</p>
      </TipBox>
    </section>

    <section>
      <h2>💡 Template Strings</h2>
      <p>
        As template strings (crases) permitem criar strings com expressões嵌入sem necessidade de concatenação.
      </p>
      <ExampleBox title="📌 Exemplo - Template Strings:">
        <pre><code>let nome = "Ana";
let idade = 28;

// ✅ Forma moderna (crases)
console.log(`Nome: ${nome}, Idade: ${idade}`);

// ✅ Múltiplas linhas
let texto = `
  Olá, ${nome}!
  Você tem ${idade} anos.
`;
console.log(texto);

// ❌ Forma antiga (evite)
console.log("Nome: " + nome + ", Idade: " + idade);</code></pre>
      </ExampleBox>
    </section>

    <section>
      <h2>🎯 Comparativo</h2>
      <div class="methods-table">
        <table>
          <thead>
            <tr>
              <th>Método</th>
              <th>Uso</th>
              <th>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>alert()</code></td>
              <td>Popup no navegador</td>
              <td>Avisos importantes, debugging rápido</td>
            </tr>
            <tr>
              <td><code>console.log()</code></td>
              <td>Console do DevTools</td>
              <td>Debug, desenvolvimento</td>
            </tr>
            <tr>
              <td><code>document.write()</code></td>
              <td>Página HTML</td>
              <td>Apenas para testes simples</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <NavButtons
      @back="$router.back()"
      @next="$router.push('/trilhas/javascript/entrada-dados/base')"
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

.methods-table table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.methods-table th,
.methods-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.methods-table th {
  background: var(--bg-secondary);
  color: var(--accent-primary);
  font-weight: 600;
}

.methods-table td {
  color: var(--text-primary);
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
  color: var(--text-primary);
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

  .methods-table {
    overflow-x: auto;
  }
}
</style>