<template>
  <div class="lesson">
    <h1>🚀 Noções Básicas de JavaScript</h1>
    <p class="intro">
      Bem-vindo ao mundo da programação! Vamos começar entendendo o que é um programa.
    </p>

    <section>
      <h2>💡 O que é um Programa?</h2>
      <p>
        Um programa de computador é uma <strong>solução tecnológica para um problema real</strong>.
        É como uma receita de bolo: você segue passos específicos para chegar a um resultado.
      </p>

      <div class="info-box">
        <h3>As 3 Etapas Fundamentais:</h3>
        <ul>
          <li><strong>📥 Entrada:</strong> Dados inseridos no programa (ex: nome do usuário)</li>
          <li>
            <strong>⚙️ Processamento:</strong> Dados são processados seguindo regras (ex: calcular
            idade)
          </li>
          <li>
            <strong>📤 Saída:</strong> Resultado apresentado ao usuário (ex: mensagem na tela)
          </li>
        </ul>
      </div>

      <div class="example">
        <h4>📌 Exemplo Real - Calculadora:</h4>
        <pre><code>// ENTRADA: Usuário digita dois números
const num1 = 10;
const num2 = 5;

// PROCESSAMENTO: Programa calcula a soma
const resultado = num1 + num2;

// SAÍDA: Mostra o resultado
console.log(resultado);  // 15</code></pre>
      </div>
    </section>

    <section>
      <h2>🧩 O que é um Algoritmo?</h2>
      <p>
        Um algoritmo é uma <strong>sequência lógica de passos</strong> para resolver um problema. É
        como uma receita: você segue instruções na ordem certa para obter o resultado desejado.
      </p>

      <div class="example">
        <h4>📌 Exemplo do Dia a Dia - Fazer um Sanduíche:</h4>
        <ol>
          <li>Pegar duas fatias de pão</li>
          <li>Passar manteiga no pão</li>
          <li>Colocar queijo e presunto</li>
          <li>Fechar o sanduíche</li>
          <li>Servir</li>
        </ol>
      </div>

      <div class="example">
        <h4>💻 Exemplo em Programação - Somar Dois Números:</h4>
        <ol>
          <li>Pedir o primeiro número ao usuário</li>
          <li>Armazenar o primeiro número em uma variável</li>
          <li>Pedir o segundo número ao usuário</li>
          <li>Armazenar o segundo número em outra variável</li>
          <li>Somar os dois números</li>
          <li>Apresentar o resultado na tela</li>
        </ol>

        <pre><code>

          // Implementação em JavaScript:

          const num1 = Number(prompt("Digite o primeiro número:"));
          const num2 = Number(prompt("Digite o segundo número:"));
          const soma = num1 + num2;

          alert("A soma é: " + soma);</code></pre>
      </div>
    </section>

    <section>
      <h2>🎨 Por que JavaScript?</h2>
      <p>JavaScript é a linguagem da web! Com ela você pode:</p>

      <div class="info-box">
        <ul>
          <li><strong>🌐 Criar sites interativos:</strong> Botões, animações, formulários</li>
          <li><strong>📱 Desenvolver apps mobile:</strong> React Native, Ionic</li>
          <li><strong>🖥️ Construir servidores:</strong> Node.js</li>
          <li><strong>🎮 Fazer jogos:</strong> Phaser, Three.js</li>
        </ul>
      </div>
    </section>

    <div class="nav-buttons">
      <button @click="$router.back()">← Anterior</button>
      <button>
        @click="$router.push('/trilhas/javascript/saida-dados/base')"
        class="primary"
      >
        Próximo →
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick()
  window.scrollTo({
    top: 20,
    behavior: 'smooth',
  })
})
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
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.1) 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  margin-top: 1rem;
}

.info-box h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.info-box ul {
  list-style: none;
  padding: 0;
}

.info-box li {
  color: var(--text-primary);
  padding: 0.6rem 0;
  font-size: 1.05rem;
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
}

.info-box li:last-child {
  border-bottom: none;
}

.example {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.example h4 {
  color: #a8b2dc;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.example ol {
  color: #c9d1d9;
  line-height: 1.8;
  padding-left: 1.5rem;
}

.example ol li {
  margin-bottom: 0.5rem;
}

pre {
  overflow-x: auto;
  white-space: pre;
  word-break: normal;
  background: #0d1117;
  border-radius: 8px;
  padding: 1.25rem;
  font-size: 0.9rem;
  line-height: 1.6;
  border: 1px solid #30363d;
  margin-top: 1rem;
}

code {
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  color: #e6edf3;
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

button.primary:hover {
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .lesson {
    padding: 1rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  .intro {
    font-size: 1rem;
  }

  section {
    padding: 1.25rem;
  }

  pre {
    font-size: 0.8rem;
    padding: 1rem;
  }

  .nav-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }

  .nav-buttons button {
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .example {
    padding: 1rem;
  }

  pre {
    font-size: 0.75rem;
    padding: 0.75rem;
    border-radius: 6px;
  }
}
</style>
