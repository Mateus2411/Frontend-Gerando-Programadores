<script setup>
const ia_educacao = [
  'Ias na Educação',
  {
    topico: 'Políticas e Governança',
    conteudo: [
      'Adoção de políticas nacionais para uso de IA na educação.',
      'Criação de diretrizes focadas em privacidade, equidade e ética.',
      'Participação conjunta de governo, escolas e especialistas.',
    ],
  },
  {
    topico: 'Práticas Pedagógicas',
    conteudo: [
      'IA como assistente do professor, não substituto.',
      'Apoio em feedback automatizado e tutoria assistida.',
      'Aumento do tempo de interação pedagógica real.',
    ],
  },
  {
    topico: 'Personalização e Avaliação',
    conteudo: [
      'Aprendizagem adaptativa baseada no progresso do aluno.',
      'Uso de dados educacionais para detectar dificuldades.',
      'Melhor acompanhamento da evolução individual.',
    ],
  },
  {
    topico: 'Equidade e Inclusão',
    conteudo: [
      'Garantir acesso a dispositivos e internet.',
      'Evitar ampliação das desigualdades digitais.',
      'Foco especial em alunos vulneráveis e regiões remotas.',
    ],
  },
  {
    topico: 'Competências e Currículo',
    conteudo: [
      'Ensino de alfabetização em IA e pensamento de máquina.',
      'Desenvolvimento de consciência crítica sobre algoritmos.',
      'Preparação para o mercado tecnológico.',
    ],
  },
  {
    topico: 'Riscos e Ética',
    conteudo: [
      'Cuidado com vieses e decisões automatizadas opacas.',
      'Proteção rigorosa de dados estudantis.',
      'Preferência por modelos auditáveis e transparentes.',
    ],
  },
  {
    topico: 'Estudos de Caso',
    conteudo: [
      'Projetos nacionais de integração de IA nas escolas.',
      'Parcerias para capacitação de professores.',
      'Sistemas adaptativos aplicados em larga escala.',
    ],
  },
]

const fontes_confiaveis = [
  'Fontes Confiaveis',
  {
    site: 'UNESCO',
    motivo: 'Órgão global especializado em educação e regulamentação de IA.',
  },
  {
    site: 'OECD',
    motivo: 'Relatórios internacionais comparativos sobre IA e educação.',
  },
  {
    site: 'World Economic Forum (WEF)',
    motivo: 'Estudos e tendências sobre tecnologias emergentes no ensino.',
  },
  {
    site: 'EDUCAUSE / EdSurge',
    motivo: 'Casos reais, análises de ferramentas e práticas modernas.',
  },
  {
    site: 'Financial Times',
    motivo: 'Cobertura confiável de iniciativas e políticas educacionais.',
  },
]

const resumo_final = {
  title: 'Transformando Seu Potencial com IA',
  motivacional:
    'Estamos vivendo um dos momentos mais importantes da tecnologia: a IA deixou de ser apenas uma ferramenta e se tornou uma extensão da nossa capacidade de aprender, criar e evoluir. Estudar com apoio da inteligência artificial não torna o estudante dependente — torna ele mais preparado, mais rápido e mais estratégico. Quanto mais você dominar essas ferramentas agora, mais forte estará no futuro, tanto no mercado quanto na vida acadêmica.',
  frase_final:
    'Separei alguns sites essenciais para estudo, com dinâmicas e ferramentas que vão impulsionar seu desenvolvimento e tornar sua evolução ainda mais sólida.',
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
  --bg: var(--bg-primary);
  --card-bg: var(--card-bg);
  --accent: var(--accent-primary);
  --accent-2: var(--accent-hover);
  --text-strong: var(--text-primary);
  --text-muted: var(--text-secondary);
  --border: var(--card-border);
  --shadow: var(--shadow-color);
  background: var(--bg);
  padding: clamp(2rem, 4vw, 3.5rem) clamp(1rem, 3vw, 1.8rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.6rem, 3vw, 3.2rem);
  max-width: 1200px;
  margin-inline: auto;
  transition: background-color 0.3s ease;
}

.titulo {
  font-family: var(--font-title);
  text-align: center;
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  margin-bottom: clamp(1rem, 2vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: var(--accent);
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
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    background 0.28s ease;
  grid-column: 1 / -1;
}

.educacao::after,
.fontes::after,
.finalizacao::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 100px;
  background: linear-gradient(
    90deg,
    transparent,
    color-mix(in srgb, var(--accent) 35%, transparent),
    transparent
  );
  opacity: 0.85;
  pointer-events: none;
}

.educacao:hover,
.fontes:hover,
.finalizacao:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--shadow);
}

.educacao h3,
.fontes h3 {
  font-family: var(--font-title);
  margin-bottom: 0.9rem;
  font-size: clamp(1.1rem, 1.8vw, 1.32rem);
  font-weight: 700;
  color: var(--accent);
  letter-spacing: -0.3px;
}

.educacao {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.educacao h2 {
  align-items: center;
}

.educacao-card-item {
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  transition: background 0.25s ease;
}

.educacao-card-item:last-child {
  border-bottom: none;
}

.educacao-card-item:hover {
  background: var(--accent-soft);
  border-radius: 12px;
  padding: 1rem;
}

.educacao-card-item.card-zoomed {
  transform: scale(1.03);
  z-index: 10;
  box-shadow: 0 8px 25px var(--shadow);
  border-radius: 12px;
  padding: 1rem;
  background: var(--accent-soft);
}

.educacao ul {
  margin: 0.4rem 0 0 1rem;
  padding: 0;
}

.educacao li {
  margin: 0.45rem 0;
  list-style: disc;
}

.educacao li p {
  font-family: var(--font-body);
  color: var(--text-strong);
  font-size: 1.05rem;
  line-height: 1.55rem;
}

#motivacional {
  font-family: var(--font-body);
  margin-bottom: 1.6rem;
  font-size: clamp(1.05rem, 1.8vw, 1.22rem);
  line-height: 1.95rem;
  font-weight: 500;
  color: var(--text-strong);
}

#fraseFinal {
  background: var(--accent-soft);
  padding: clamp(1.1rem, 2.2vw, 1.5rem);
  border-radius: 18px;
  font-family: var(--font-body);
  font-size: clamp(0.98rem, 1.6vw, 1.08rem);
  line-height: 1.6rem;
  border-left: 4px solid var(--accent);
  color: var(--text-strong);
  text-align: center;
  font-weight: 500;
  transition: all 0.3s ease;
}

#fraseFinal:hover {
  background: var(--accent-soft-hover);
  transform: translateX(2px);
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
  border-radius: 12px;
  transition: background 0.25s ease;
}

.fontes > div:hover {
  background: var(--accent-soft);
}

.fontes h3 {
  font-family: var(--font-title);
  color: var(--accent);
}

.fontes p {
  font-family: var(--font-body);
  color: var(--text-muted);
}

@media (min-width: 900px) {
  .educacao {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem 2rem;
  }

  .educacao-card-item {
    padding: 1rem;
    border-radius: 14px;
    border-bottom: none;
    background: var(--accent-soft);
  }
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
  .fontes > div {
    grid-template-columns: 1fr;
  }
}
</style>
