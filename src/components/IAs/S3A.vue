<script setup>
const ia_educacao = [
  "Ias na Educação",
  {
    topico: "Políticas e Governança",
    conteudo: [
      "Adoção de políticas nacionais para uso de IA na educação.",
      "Criação de diretrizes focadas em privacidade, equidade e ética.",
      "Participação conjunta de governo, escolas e especialistas."
    ]
  },
  {
    topico: "Práticas Pedagógicas",
    conteudo: [
      "IA como assistente do professor, não substituto.",
      "Apoio em feedback automatizado e tutoria assistida.",
      "Aumento do tempo de interação pedagógica real."
    ]
  },
  {
    topico: "Personalização e Avaliação",
    conteudo: [
      "Aprendizagem adaptativa baseada no progresso do aluno.",
      "Uso de dados educacionais para detectar dificuldades.",
      "Melhor acompanhamento da evolução individual."
    ]
  },
  {
    topico: "Equidade e Inclusão",
    conteudo: [
      "Garantir acesso a dispositivos e internet.",
      "Evitar ampliação das desigualdades digitais.",
      "Foco especial em alunos vulneráveis e regiões remotas."
    ]
  },
  {
    topico: "Competências e Currículo",
    conteudo: [
      "Ensino de alfabetização em IA e pensamento de máquina.",
      "Desenvolvimento de consciência crítica sobre algoritmos.",
      "Preparação para o mercado tecnológico."
    ]
  },
  {
    topico: "Riscos e Ética",
    conteudo: [
      "Cuidado com vieses e decisões automatizadas opacas.",
      "Proteção rigorosa de dados estudantis.",
      "Preferência por modelos auditáveis e transparentes."
    ]
  },
  {
    topico: "Estudos de Caso",
    conteudo: [
      "Projetos nacionais de integração de IA nas escolas.",
      "Parcerias para capacitação de professores.",
      "Sistemas adaptativos aplicados em larga escala."
    ]
  }
]

const fontes_confiaveis = [
  "Fontes Confiaveis",
  {
    site: "UNESCO",
    motivo: "Órgão global especializado em educação e regulamentação de IA."
  },
  {
    site: "OECD",
    motivo: "Relatórios internacionais comparativos sobre IA e educação."
  },
  {
    site: "World Economic Forum (WEF)",
    motivo: "Estudos e tendências sobre tecnologias emergentes no ensino."
  },
  {
    site: "EDUCAUSE / EdSurge",
    motivo: "Casos reais, análises de ferramentas e práticas modernas."
  },
  {
    site: "Financial Times",
    motivo: "Cobertura confiável de iniciativas e políticas educacionais."
  }
]

const resumo_final = {
  title: "Transformando Seu Potencial com IA",
  motivacional:
    "Estamos vivendo um dos momentos mais importantes da tecnologia: a IA deixou de ser apenas uma ferramenta e se tornou uma extensão da nossa capacidade de aprender, criar e evoluir. Estudar com apoio da inteligência artificial não torna o estudante dependente — torna ele mais preparado, mais rápido e mais estratégico. Quanto mais você dominar essas ferramentas agora, mais forte estará no futuro, tanto no mercado quanto na vida acadêmica.",
  frase_final:
    "Separei alguns sites essenciais para estudo, com dinâmicas e ferramentas que vão impulsionar seu desenvolvimento e tornar sua evolução ainda mais sólida."
}
</script>

<template>
  <section class="s3">
    <div class="educacao">
      <h2 class="titulo">
        {{ ia_educacao[0] }}
      </h2>
      <div v-for="(item, i) in ia_educacao.slice(1)" :key="i">
        <h3>
          {{ item.topico }}
        </h3>
        <ul>
          <li v-for="(linha, key) in item.conteudo" :key="key">
            <p>
              {{ linha }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="fontes">
      <h2 class="titulo">
        {{ fontes_confiaveis[0] }}
      </h2>
      <div v-for="(item, i) in fontes_confiaveis.slice(1)" :key="i">
        <h3>
          {{ item.site }}
        </h3>
        <p>
          {{ item.motivo }}
        </p>
      </div>
    </div>
    <div class="finalizacao">
      <h2 class="titulo">
        {{ resumo_final.title }}
      </h2>
      <div>
        <p id="motivacional">
          {{ resumo_final.motivacional }}
        </p>
        <p id="fraseFinal">
          {{ resumo_final.frase_final }}
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
section.s3 {
  --bg: radial-gradient(1200px 800px at 15% -10%, #eef2ff 0%, #f7f9ff 35%, #ffffff 100%);
  --card-bg: #ffffff;
  --accent: #345dff;
  --accent-2: #87a6ff;
  --text-strong: #0f172a;
  --text-muted: #475569;
  --border: rgba(2, 6, 23, 0.06);
  --shadow: 0 10px 32px rgba(2, 6, 23, 0.08);
  background: var(--bg);
  padding: clamp(2rem, 4vw, 3.5rem) clamp(1rem, 3vw, 1.8rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.6rem, 3vw, 3.2rem);
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
}

.titulo {
  text-align: center;
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  margin-bottom: clamp(1rem, 2vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.15;
  background: linear-gradient(90deg, #1b1f3b, #3b58ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.educacao,
.fontes,
.finalizacao {
  background: var(--card-bg);
  padding: clamp(1.6rem, 2.5vw, 2.3rem) clamp(1.2rem, 2vw, 1.9rem);
  border-radius: 20px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  transition: transform 0.28s ease, box-shadow 0.28s ease, border 0.28s ease, background 0.28s ease;
  grid-column: 1 / -1;
}



.educacao::before,
.fontes::before,
.finalizacao::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  width: 0%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 100px;
  transition: width 0.35s ease;
}

.educacao:hover::before,
.fontes:hover::before,
.finalizacao:hover::before {
  width: 100%;
}

.educacao h3,
.fontes h3 {
  margin-bottom: 0.9rem;
  font-size: clamp(1.1rem, 1.8vw, 1.32rem);
  font-weight: 700;
  color: #2d4aff;
  letter-spacing: -0.3px;
}
/* —————————————— EDUCACAO —————————————— */

.educacao {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.educacao h2{
  align-items: center;
  margin-top: 4rem;
}
/* cada bloco interno */
.educacao > div {
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(2, 6, 23, 0.06);
}

.educacao > div:last-child {
  border-bottom: none;
}

/* títulos */
.educacao h3 {
  border-radius: 10px;
  color: #2d4aff;
  font-weight: 700;
  display: inline-block;
}

/* lista */
.educacao ul {
  margin: 0.4rem 0 0 1rem;
  padding: 0;
  display: block;
}

.educacao li {
  margin: 0.45rem 0;
  list-style: disc;
}

.educacao li p {
  color: var(--text-strong);
  font-size: 1.05rem;
  line-height: 1.55rem;
}

/* —————————————— DESKTOP: fica horizontal —————————————— */
@media (min-width: 900px) {
  .educacao {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem 2rem;
  }

  .educacao > div {
    border-bottom: none;
    padding: 1rem;
    border-radius: 14px;
    background: rgba(52, 93, 255, 0.04);
    transition: 0.25s ease;
  }

  .educacao > div:hover {
    background: rgba(52, 93, 255, 0.08);
  }
}

#motivacional {
  margin-bottom: 1.6rem;
  font-size: clamp(1.05rem, 1.8vw, 1.22rem);
  line-height: 1.95rem;
  font-weight: 500;
  color: var(--text-strong);
}

#fraseFinal {
  background: linear-gradient(180deg, #eaf0ff 0%, #eef2ff 100%);
  padding: clamp(1.1rem, 2.2vw, 1.5rem);
  border-radius: 18px;
  font-size: clamp(0.98rem, 1.6vw, 1.08rem);
  line-height: 1.6rem;
  border-left: 6px solid var(--accent);
  color: var(--text-strong);
  text-align: center;
  font-weight: 500;
}

.finalizacao {
  grid-column: 1 / -1;
}

.fontes > div {
  display: grid;
  grid-template-columns: minmax(180px, 0.7fr) 1fr;
  gap: 0.4rem 1rem;
  align-items: start;
  padding: clamp(0.6rem, 1.6vw, 0.9rem);
  border: none;
  border-radius: 12px;
}

.fontes p {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  section.s3 {
    padding: clamp(1.6rem, 5vw, 2.3rem) clamp(0.8rem, 4vw, 1rem);
  }
  .titulo {
    margin-bottom: clamp(0.9rem, 3vw, 1.4rem);
  }
  .educacao,
  .fontes,
  .finalizacao {
    padding: clamp(1.2rem, 4vw, 1.7rem) clamp(1rem, 3.5vw, 1.3rem);
  }
}

@media (min-width: 900px) {
  section.s3 {
    grid-template-columns: 1fr;
  }
}
</style>
