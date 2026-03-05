<template>
  <div class="base-assunto">
    <div class="container">
      <h1 class="titulo-principal">Operadores e Expressões</h1>

      <section class="secao-conteudo">
        <h2>O que são Operadores?</h2>
        <p>
          Operadores são símbolos especiais que realizam operações em valores e variáveis. Eles são
          fundamentais para criar expressões e realizar cálculos, comparações e operações lógicas em
          seus programas.
        </p>
      </section>

      <section class="secao-conteudo">
        <h2>Tipos de Operadores</h2>

        <div class="topico">
          <h3>Operadores Aritméticos</h3>
          <p>Realizam operações matemáticas básicas:</p>
          <div class="codigo-exemplo">
            <pre><code>let soma = 10 + 5;        // 15
let subtracao = 10 - 5;   // 5
let multiplicacao = 10 * 5; // 50
let divisao = 10 / 5;     // 2
let resto = 10 % 3;       // 1 (resto da divisão)</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Operadores de Comparação</h3>
          <p>Comparam valores e retornam true ou false:</p>
          <div class="codigo-exemplo">
            <pre><code>let igual = 5 == "5";     // true (compara apenas valor)
let identico = 5 === "5"; // false (compara valor e tipo)
let diferente = 5 != 3;   // true
let maior = 10 &gt; 5;       // true
let menor = 5 &lt; 10;       // true</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Operadores Lógicos</h3>
          <p>Combinam expressões booleanas:</p>
          <div class="codigo-exemplo">
            <pre><code>let e = true && false;    // false (E lógico)
let ou = true || false;   // true (OU lógico)
let nao = !true;          // false (NÃO lógico)</code></pre>
          </div>
        </div>

        <div class="topico">
          <h3>Operadores de Atribuição</h3>
          <p>Atribuem valores às variáveis:</p>
          <div class="codigo-exemplo">
            <pre><code>let x = 10;
x += 5;  // x = x + 5 (agora x é 15)
x -= 3;  // x = x - 3 (agora x é 12)
x *= 2;  // x = x * 2 (agora x é 24)
x /= 4;  // x = x / 4 (agora x é 6)</code></pre>
          </div>
        </div>
      </section>

      <section class="secao-conteudo">
        <h2>Expressões</h2>
        <p>
          Uma expressão é qualquer combinação válida de valores, variáveis e operadores que produz
          um resultado. Expressões podem ser simples ou complexas:
        </p>
        <div class="codigo-exemplo">
          <pre><code>// Expressão simples
let resultado = 5 + 3;

// Expressão complexa
let media = (nota1 + nota2 + nota3) / 3;

// Expressão com operadores lógicos
let aprovado = media >= 7 && frequencia >= 75;</code></pre>
        </div>
      </section>

      <section class="secao-conteudo">
        <h2>Precedência de Operadores</h2>
        <p>
          Assim como na matemática, os operadores têm uma ordem de execução. Multiplicação e divisão
          são executadas antes de soma e subtração. Use parênteses para controlar a ordem:
        </p>
        <div class="codigo-exemplo">
          <pre><code>let resultado1 = 5 + 3 * 2;     // 11 (multiplicação primeiro)
let resultado2 = (5 + 3) * 2;   // 16 (parênteses primeiro)</code></pre>
        </div>
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
