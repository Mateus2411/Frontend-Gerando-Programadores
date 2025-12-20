<script setup>
const cursos = [
  {
    nome: "Python",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    imagem: "/img Curso/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn-removebg-preview.png"
  },
  {
    nome: "SQL",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    imagem: "/img Curso/banco-de-dados-do-sql-ícone-móvel-isolado-servidor-da-web-lisa-com-palavra-ilustração-vetor-isolada-no-fundo-moderno-128839153-removebg-preview.png"
  },
  {
    nome: "HTML",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    imagem: "/img Curso/images-removebg-preview.png"
  },
  {
    nome: "JavaScript",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    imagem: "/img Curso/transferir.png"
  },
  {
    nome: "Swift",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    imagem: "/img Curso/images-removebg-preview (1).png"
  },
  {
    nome: "CSS",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    imagem: "/img Curso/download-removebg-preview.png"
  },
  {
    nome: "TypeScript",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 2,
    imagem: "/img Curso/Typescript_logo_2020.svg-removebg-preview.png"
  },
  {
    nome: "React",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 2,
    imagem: "/img Curso/logo-e648a71158884495e9550fb5e6675ec6-removebg-preview.png"
  }
]
</script>

<template>
  <section class="container">
    <h2 class="titulo">Cursos:</h2>

    <div class="grid">
      <div class="card" v-for="curso in cursos" :key="curso.nome">
        <span class="curso-label">Curso</span>

        <h3>{{ curso.nome }}</h3>

        <p>{{ curso.descricao }}</p>

        <!-- Barras de grau -->
        <div class="nivel">
          <span
            v-for="i in 3"
            :key="i"
            class="barra"
            :class="{ ativa: i <= curso.grau }"
          ></span>
          <span style="margin-left: 1.0000000001vw;">{{ curso.grau === 1? "Fácil" : "Médio" }}</span>
        </div>

        <!-- Badge com imagem -->
        <div class="badge">
          <img :src="curso.imagem" :alt="curso.nome" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 2rem;
  background: #e4ebff;
}

.titulo {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d1cd4;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card {
  position: relative;
  background: linear-gradient(135deg, #14007a, #1f0aa3);
  color: white;
  border-radius: 18px;
  padding: 1.5rem;
  min-height: 180px;
  transition: 0.5s ease;
}
.card:hover{
    transform: scale(1.05);
    box-shadow: 5px 5px 5px 5px rgba(175, 175, 252, 0.352);
}

.curso-label {
  opacity: 0.7;
  font-size: 0.9rem;
}

.card h3 {
  font-size: 1.6rem;
  margin: 0.5rem 0;
}

.card p {
  font-size: 0.9rem;
  opacity: 0.85;
}

.nivel {
  display: flex;
  gap: 6px;
  margin-top: 1.2rem;
  margin-top: 6rem;
  align-items: center;
}

.barra {
  width: 16px;
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.25);
}

.barra.ativa {
  background: #ffd500;
}

.badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ffd500;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 10px;
}
</style>