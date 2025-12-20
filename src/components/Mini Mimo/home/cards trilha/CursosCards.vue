<script setup>
const cursos = [
  {
    nome: "Python",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    icone: "🐍"
  },
  {
    nome: "SQL",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    icone: "🗄️"
  },
  {
    nome: "HTML",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    icone: "📄"
  },
  {
    nome: "JavaScript",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    icone: "🟨"
  },
  {
    nome: "Swift",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    icone: "🦅"
  },
  {
    nome: "CSS",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 1,
    icone: "🎨"
  },
  {
    nome: "TypeScript",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 2,
    icone: "🔷"
  },
  {
    nome: "React",
    descricao: "Neque porro quisquam est qui dolorem ipsum quia",
    grau: 2,
    icone: "⚛️"
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
        </div>

        <!-- Badge -->
        <div class="badge">
          {{ curso.icone }}
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
}

.barra {
  width: 16px;
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.25);
  transition: background 0.25s ease;
}

.barra.ativa {
  background: #ffd500;
}

.badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ffd500;
  color: #000;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
}
</style>
