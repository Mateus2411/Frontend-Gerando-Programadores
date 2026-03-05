<template>
  <div class="base-assunto">
    <div class="container">
      <h1 class="titulo-principal">Funções</h1>

      <section class="secao-conteudo">
        <h2>O que são Funções?</h2>
        <p>
          Funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas
          permitem organizar o código, evitar repetição e criar programas modulares. Uma função pode
          receber dados (parâmetros), processar esses dados e retornar um resultado.
        </p>
      </section>

      <section class="secao-conteudo">
        <h2>Criando Funções</h2>

        <div class="topico">
          <h3>Função Básica</h3>
          <div class="codigo-exemplo">
            <pre><code>function saudar() {
  console.log("Olá, mundo!");
}

saudar(); // Chama a função</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Funções com Parâmetros</h3>
          <p>Recebem dados para processar:</p>
          <div class="codigo-exemplo">
            <pre><code>function saudarPessoa(nome) {
  console.log(`Olá, ${nome}!`);
}

saudarPessoa("Maria"); // Olá, Maria!
saudarPessoa("João");  // Olá, João!

// Múltiplos parâmetros
function somar(a, b) {
  console.log(a + b);
}

somar(5, 3); // 8</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Funções com Retorno</h3>
          <p>Devolvem um valor que pode ser usado:</p>
          <div class="codigo-exemplo">
            <pre><code>function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(4, 5);
console.log(resultado); // 20

// Usando direto em expressões
let total = multiplicar(3, 7) + 10; // 31</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Arrow Functions</h3>
          <p>Sintaxe moderna e compacta:</p>
          <div class="codigo-exemplo">
            <pre><code>// Função tradicional
function dobrar(x) {
  return x * 2;
}

// Arrow function equivalente
const dobrar = (x) => {
  return x * 2;
};

// Arrow function compacta (retorno implícito)
const dobrar = x => x * 2;

console.log(dobrar(5)); // 10</code></pre>
          </div>
        </div>
      </section>

      <section class="secao-conteudo">
        <h2>Tipos Especiais de Funções</h2>

        <div class="topico">
          <h3>Funções Anônimas</h3>
          <p>Funções sem nome, geralmente usadas como callbacks:</p>
          <div class="codigo-exemplo">
            <pre><code>setTimeout(function() {
  console.log("Executado após 2 segundos");
}, 2000);</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Funções Callback</h3>
          <p>Funções passadas como argumento para outras funções:</p>
          <div class="codigo-exemplo">
            <pre><code>function processar(numero, callback) {
  let resultado = numero * 2;
  callback(resultado);
}

processar(5, function(res) {
  console.log(`Resultado: ${res}`);
}); // Resultado: 10</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Parâmetros Opcionais</h3>
          <p>Parâmetros com valores padrão:</p>
          <div class="codigo-exemplo">
            <pre><code>function saudar(nome = "visitante") {
  console.log(`Olá, ${nome}!`);
}

saudar("Ana");  // Olá, Ana!
saudar();       // Olá, visitante!</code></pre>
          </div>
        </div>
      </section>

      <section class="secao-conteudo">
        <h2>Por que Usar Funções?</h2>
        <ul>
          <li><strong>Reutilização:</strong> Escreva uma vez, use várias vezes</li>
          <li><strong>Organização:</strong> Código mais limpo e fácil de entender</li>
          <li><strong>Manutenção:</strong> Altere em um lugar, afeta todos os usos</li>
          <li><strong>Modularização:</strong> Divida problemas complexos em partes menores</li>
        </ul>
      </section>

      <div class="navegacao">
        <button @click="voltarHome" class="btn-voltar">← Voltar para Módulos</button>
        <button @click="proximoConteudo" class="btn-proximo">Próximo Exemplo →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const voltarHome = () => {
  router.push('/trilhas/javascript')
}

const proximoConteudo = () => {
  const moduloSlug = route.params.modulo
  router.push(`/trilhas/javascript/${moduloSlug}/exemploA`)
}
</script>

<style scoped>
.base-assunto {
  min-height: 100vh;
  background: var(--background-primary);
  padding: 2rem 1rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.titulo-principal {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.secao-conteudo {
  background: var(--background-secondary);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.secao-conteudo h2 {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.secao-conteudo p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.secao-conteudo ul {
  list-style: none;
  padding: 0;
}

.secao-conteudo li {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;
}

.secao-conteudo li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-color, #667eea);
}

.topico {
  margin: 1.5rem 0;
}

.topico h3 {
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.codigo-exemplo {
  background: var(--background-primary);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
}

.codigo-exemplo pre {
  margin: 0;
  font-family: 'Courier New', monospace;
}

.codigo-exemplo code {
  color: var(--text-primary);
  font-size: 0.95rem;
  line-height: 1.5;
}

.navegacao {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
}

.btn-voltar,
.btn-proximo {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-voltar {
  background: var(--background-secondary);
  color: var(--text-primary);
}

.btn-proximo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-voltar:hover,
.btn-proximo:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .titulo-principal {
    font-size: 2rem;
  }

  .secao-conteudo {
    padding: 1.5rem;
  }

  .navegacao {
    flex-direction: column;
  }
}
</style>
