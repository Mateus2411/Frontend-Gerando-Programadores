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
      <li v-for="card in conteudoS4" :key="card.id">
        <strong>{{ card.titulo }}</strong>
        <p>{{ card.descricao }}</p>
      </li>
    </ul>
  </section>
</template>
<style scoped>
section {
  max-width: 1200px;
  margin: 6rem auto;
  padding: 3rem 2rem;
  align-items: center;
}

section h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #1a1a1a;
  text-align: center;
}

section ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(279px, 1fr));
  gap: 1.5rem;
  padding: 0;
  align-items: stretch;
}

section ul li {
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  color: #555;
  line-height: 1.8;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
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
  transform: translateY(-5px);
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
}
@media (min-width:950px ){
  section ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  gap: 1.5rem;
  padding: 0;
  align-items: stretch;
}
}
</style>
