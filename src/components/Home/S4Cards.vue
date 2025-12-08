<script setup>
defineProps({
  titulo: String,
  descricao: String,
})

const conteudoS4 = [
  {
    titulo: "Criar programas simples",
    descricao: "Aprender a escrever pequenos programas que resolvem problemas reais."
  },
  {
    titulo: "Visualizar informações",
    descricao: "Transformar dados em gráficos ou relatórios claros para entender resultados rapidamente."
  },
  {
    titulo: "Resolver desafios práticos",
    descricao: "Executar exercícios que mostram imediatamente se o código está correto e como melhorá-lo."
  },
  {
    titulo: "Automatizar tarefas básicas",
    descricao: "Criar scripts que ajudam a poupar tempo em tarefas repetitivas."
  },
  {
    titulo: "Trabalhar em equipe",
    descricao: "Colaborar com colegas, trocar ideias e revisar códigos de forma construtiva."
  },
  {
    titulo: "Desenvolver raciocínio lógico",
    descricao: "Aprender a pensar de forma estruturada para resolver problemas de maneira eficiente."
  }
]
</script>

<template>
  <section>
    <h2>O Que Você Vai Construir e Aprender</h2>
    <ul>
      <li v-for="card in conteudoS4" :key="card.titulo">
        <strong>{{ card.titulo }}</strong>
        <p>{{ card.descricao }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  max-width: 1200px;
  margin: 5rem auto;
  padding: 2.5rem 1.5rem;
}

section h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.2rem;
  color: #1a1a1a;
  text-align: center;
}

/* GRID base — funciona bem em qualquer tela */
section ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.4rem;
  padding: 0;
}

/* CARDS */
section ul li {
  background: #ffffff;
  padding: 1.7rem;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  color: #555;
  line-height: 1.7;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

section ul li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #4a73ff 0%, #3b5fe0 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

section ul li:hover {
  transform: translateY(-4px);
  border-color: #4a73ff;
  box-shadow: 0 8px 25px rgba(74, 115, 255, 0.15);
  color: #1a1a1a;
}

section ul li:hover::before {
  opacity: 1;
}

section ul li strong {
  font-weight: 700;
  color: #4a73ff;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
  display: block;
}

/* ------------ RESPONSIVIDADE REAL ------------ */

/* Tablets */
@media (max-width: 900px) {
  section {
    margin: 4rem auto;
    padding: 2rem 1.3rem;
  }

  section h2 {
    font-size: 1.8rem;
  }

  section ul {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

/* Celulares médios */
@media (max-width: 600px) {
  section {
    margin: 3.5rem auto;
    padding: 1.7rem 1rem;
  }

  section h2 {
    font-size: 1.6rem;
  }

  section ul li {
    padding: 1.4rem;
    font-size: 0.95rem;
  }
}

/* Celulares pequenos */
@media (max-width: 400px) {
  section h2 {
    font-size: 1.45rem;
  }

  section ul {
    grid-template-columns: 1fr;
  }

  section ul li {
    padding: 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
