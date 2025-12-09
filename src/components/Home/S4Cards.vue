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

<style scoped>section {
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

section ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;        /* quebra de linha */
  gap: 1.4rem;
  padding: 0;
  margin: 0;
}

/* -------- 3 por linha no DESKTOP -------- */
section ul li {
  flex: 1 1 calc(33.333% - 1.4rem);
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

/* BARRA LATERAL */
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

/* HOVER */
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

/* ----------- RESPONSIVIDADE FLEX REAL ----------- */

/* Tablets — 2 por linha */
@media (max-width: 900px) {
  section ul li {
    flex: 1 1 calc(50% - 1.4rem);
  }
}

/* Celulares — 1 por linha */
@media (max-width: 600px) {
  section ul li {
    flex: 1 1 100%;
    padding: 1.4rem;
    font-size: 0.95rem;
  }

  section h2 {
    font-size: 1.6rem;
  }
}

/* Celulares pequenos */
@media (max-width: 400px) {
  section ul li {
    padding: 1.2rem;
    font-size: 0.9rem;
  }

  section h2 {
    font-size: 1.45rem;
  }
}

</style>
