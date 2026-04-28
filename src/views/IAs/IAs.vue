<script setup>
import { ref, onMounted } from 'vue'

// ========================================
// DADOS S2 - Cards
// ========================================
const s2Cards = [
  {
    title: 'Evolução Contínua das IAs',
    description:
      'Uma IA evolui conforme recebe mais dados, identificando padrões e ajustando suas respostas. Com o tempo, ela fica mais precisa e confiável, entendendo melhor situações reais. Esse refinamento constante é o que diferencia uma IA comum de uma avançada.',
  },
  {
    title: 'Adaptação ao Usuário e ao Contexto',
    description:
      'IAs modernas aprendem com o estilo e o comportamento de cada pessoa. Elas moldam a linguagem, as sugestões e a forma de responder conforme o uso. Isso torna a experiência mais natural e personalizada a cada interação.',
  },
]

// ========================================
// DADOS S3 - Educação
// ========================================
const ia_educacao = [
  'IAs na Educação',
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
  'Fontes Confiáveis',
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
    'Estamos vivendo um dos momentos mais importantes da tecnologia: a IA dejó de ser apenas uma ferramenta e se tornou uma extensão da nossa capacidade de aprender, criar e evoluir. Estudar com apoio da inteligência artificial não torna o estudante dependente — torna ele mais preparado, mais rápido e mais estratégico. Quanto mais você dominar essas ferramentas agora, mais forte estará no futuro, tanto no mercado quanto na vida acadêmica.',
  frase_final:
    'Separei alguns sites essenciais para estudo, com dinâmicas e ferramentas que vão impulsionar seu desenvolvimento e tornar sua evolução ainda mais sólida.',
}

// ========================================
// DADOS S4 - IA Programação
// ========================================
const IA_programacao = {
  aprendizagem: [
    { nome: 'freeCodeCamp AI Tutor', site: 'https://www.freecodecamp.org', desc: 'Explica conceitos básicos de programação com ajudar de IA.' },
    { nome: 'W3Schools AI', site: 'https://www.w3schools.com', desc: 'Auxilia no aprendizado de HTML, CSS e JS com respostas guiadas.' },
    { nome: 'Khan Academy - Khanmigo', site: 'https://www.khanacademy.org', desc: 'Tutor interativo que ensina lógica e programação.' },
    { nome: 'Codecademy AI Assistant', site: 'https://www.codecademy.com', desc: 'Ajuda no entendimento de exercícios e códigos.' },
    { nome: 'LeetCode AI', site: 'https://leetcode.com', desc: 'Explica problemas e sugere abordagens de algoritmos.' },
    { nome: 'HackerRank AI', site: 'https://www.hackerrank.com', desc: 'Auxilia na resolução e revisão de desafios técnicos.' },
    { nome: 'Codewars Sensei AI', site: 'https://www.codewars.com', desc: 'Oferece dicas curtas para desafios de kata.' },
    { nome: 'Exercism Mentor AI', site: 'https://exercism.org', desc: 'Mentoria instantânea nos exercícios práticos.' },
    { nome: 'Brilliant AI', site: 'https://brilliant.org', desc: 'Ajuda na matemática e lógica aplicada à programação.' },
    { nome: 'StackOverflow OverflowAI', site: 'https://stackoverflow.co', desc: 'Responde dúvidas técnicas com base na base do Stack Overflow.' },
    { nome: 'GeekforGeeks AI Guide', site: 'https://geeksforgeeks.org', desc: 'Explica estruturas de dados e algoritmos rapidamente.' },
    { nome: 'MIT OpenCourseWare AI Tools', site: 'https://ocw.mit.edu', desc: 'Auxilia no entendimento dos cursos de ciência da computação.' },
    { nome: 'Coursera AI Helper', site: 'https://www.coursera.org', desc: 'Resume aulas e explica conteúdos de CS.' },
    { nome: 'Udemy Learn AI Assistant', site: 'https://www.udemy.com', desc: 'Ajuda a entender as aulas e conteúdos dos cursos.' },
    { nome: 'edX Assistant', site: 'https://www.edx.org', desc: 'Traz explicações rápidas de tópicos de computação.' },
    { nome: 'CodeCrafters AI', site: 'https://codecrafters.io', desc: 'Ajuda a construir projetos complexos do zero.' },
    { nome: 'Project Euler Helper', site: 'https://projecteuler.net', desc: 'Sugere ideias para problemas matemáticos avançados.' },
    { nome: 'The Odin Project AI Helper', site: 'https://www.theodinproject.com', desc: 'Explica conceitos do full-stack passo a passo.' },
    { nome: 'CS50 AI Support', site: 'https://cs50.harvard.edu', desc: 'Ajuda no entendimento do famoso curso CS50.' },
    { nome: 'Roadmap.sh AI Guide', site: 'https://roadmap.sh', desc: 'Explica rotas de aprendizado e tecnologias.' },
    { nome: 'SoloLearn AI', site: 'https://sololearn.com', desc: 'Auxilia iniciantes com respostas simples e diretas.' },
    { nome: 'Scrimba AI', site: 'https://scrimba.com', desc: 'Explica trechos das aulas interativas.' },
    { nome: 'Hyperskill JetBrains AI', site: 'https://hyperskill.org', desc: 'Suporta no aprendizado com exemplos concretos.' },
    { nome: 'MDN AI Docs', site: 'https://developer.mozilla.org', desc: 'Explica trechos da documentação web.' },
    { nome: 'Google Learn AI Tools', site: 'https://developers.google.com', desc: 'Ensina APIs, web e cloud com IA.' },
    { nome: 'Microsoft Learn AI', site: 'https://learn.microsoft.com', desc: 'Ajuda no aprendizado de .NET, Azure e mais.' },
    { nome: 'AWS Educate AI', site: 'https://aws.amazon.com/education', desc: 'Auxilia no início com serviços AWS.' },
    { nome: 'Oracle Dev AI', site: 'https://developer.oracle.com', desc: 'Explica Java e ferramentas Oracle.' },
    { nome: 'IBM Learning AI', site: 'https://developer.ibm.com', desc: 'Ajuda no aprendizado de IA e cloud.' },
    { nome: 'Meta AI Learning Toolbox', site: 'https://ai.meta.com', desc: 'Oferece orientação sobre IA e modelos Meta.' },
    { nome: 'DeepLearning.AI', site: 'https://www.deeplearning.ai', desc: 'Explica fundamentos de IA e deep learning.' },
    { nome: 'Fast.ai', site: 'https://fast.ai', desc: 'Ajuda em machine learning prático.' },
    { nome: 'OpenCV Academy AI', site: 'https://opencv.org', desc: 'Explica visão computacional de forma simples.' },
    { nome: 'PyTorch Learn', site: 'https://pytorch.org', desc: 'Apoia no uso de PyTorch.' },
    { nome: 'TensorFlow Learning', site: 'https://www.tensorflow.org', desc: 'Ajuda na compreensão de TensorFlow.' },
    { nome: 'Kaggle Learn AI', site: 'https://kaggle.com/learn', desc: 'Ensina IA e dados com exemplos práticos.' },
    { nome: 'DataCamp AI', site: 'https://datacamp.com', desc: 'Auxilia em exercícios de dados e Python.' },
    { nome: 'CodeSignal AI', site: 'https://codesignal.com', desc: 'Dá dicas em provas técnicas.' },
    { nome: 'InterviewBit AI', site: 'https://interviewbit.com', desc: 'Explica desafios de entrevistas.' },
    { nome: 'AlgoExpert AI', site: 'https://www.algoexpert.io', desc: 'Sugere soluções para algoritmos complexos.' },
    { nome: 'Frontend Mentor AI', site: 'https://frontendmentor.io', desc: 'Oferece dicas para melhorar seus projetos front-end.' },
    { nome: 'App Academy Open AI', site: 'https://www.appacademy.io', desc: 'Ajuda a entender conteúdos de full-stack.' },
    { nome: 'DigitalOcean Tutorials AI', site: 'https://www.digitalocean.com/community', desc: 'Explica guias e tutoriais cloud.' },
    { nome: 'Linux Foundation Training AI', site: 'https://training.linuxfoundation.org', desc: 'Ajuda no estudo de Linux e DevOps.' },
    { nome: 'Rustlings AI Tutor', site: 'https://github.com/rust-lang/rustlings', desc: 'Auxilia no aprendizado de Rust.' },
    { nome: 'Go by Example AI', site: 'https://gobyexample.com', desc: 'Explica exemplos de código Go.' },
    { nome: 'SQLBolt AI Helper', site: 'https://sqlbolt.com', desc: 'Ajuda nos exercícios de SQL.' },
    { nome: 'Programiz AI', site: 'https://programiz.com', desc: 'Explica programação básica com exemplos.' },
    { nome: 'TutorialsPoint AI', site: 'https://tutorialspoint.com', desc: 'Simplifica conteúdos técnicos extensos.' },
    { nome: 'Javapoint AI', site: 'https://www.javatpoint.com', desc: 'Ajuda no estudo de Java e frameworks.' },
  ],
  uso_dia_a_dia: [
    { nome: 'GitHub Copilot', site: 'https://github.com/features/copilot', desc: 'Gera código automaticamente enquanto você programa.' },
    { nome: 'Cursor IDE AI', site: 'https://cursor.sh', desc: 'IDE que entende e escreve código com IA.' },
    { nome: 'Bolt.new', site: 'https://bolt.new', desc: 'Cria apps completos a partir de prompts.' },
    { nome: 'Codeium', site: 'https://codeium.com', desc: 'Sugestões rápidas de código para várias linguagens.' },
    { nome: 'Tabnine', site: 'https://tabnine.com', desc: 'Completa código com IA treinada localmente.' },
    { nome: 'AWS CodeWhisperer', site: 'https://aws.amazon.com/codewhisperer', desc: 'Completa código otimizado para AWS.' },
    { nome: 'Replit Ghostwriter', site: 'https://replit.com', desc: 'Auxilia no desenvolvimento direto no Replit.' },
    { nome: 'CodeGeeX', site: 'https://codegeex.ai', desc: 'Modelo open-source que gera código multi-linguagem.' },
    { nome: 'Ponicode', site: 'https://ponicode.com', desc: 'Gera testes unitários automáticos.' },
    { nome: 'Mutable AI', site: 'https://mutable.ai', desc: 'Transforma arquivos inteiros com IA.' },
    { nome: 'CodiumAI', site: 'https://www.codium.ai', desc: 'Analisa e valida código em tempo real.' },
    { nome: 'Pieces for Developers', site: 'https://pieces.app', desc: 'Armazena e sugere snippets úteis automaticamente.' },
    { nome: 'Cody (Sourcegraph)', site: 'https://sourcegraph.com/cody', desc: 'Busca e entende seu código inteiro.' },
    { nome: 'WindSurf IDE', site: 'https://windsurf.ai', desc: 'IDE colaborativa com agente de IA.' },
    { nome: 'DeepCode AI', site: 'https://www.deepcode.ai', desc: 'Faz revisão automática de código.' },
    { nome: 'OpenAI Code Assistant', site: 'https://openai.com', desc: 'Gera funções completas com alta precisão.' },
    { nome: 'CodeSquire', site: 'https://codesquire.ai', desc: 'Focado em Python e dados; gera blocos prontos.' },
    { nome: 'AskCodi', site: 'https://www.askcodi.com', desc: 'Gera código e documentações rapidamente.' },
    { nome: 'Phind', site: 'https://www.phind.com', desc: 'Motor de busca especializado em programação.' },
    { nome: 'Zed AI', site: 'https://zed.dev', desc: 'Editor ultra rápido com IA integrada.' },
    { nome: 'v0.dev', site: 'https://v0.dev', desc: 'Gera interfaces completas automaticamente.' },
    { nome: 'Blackbox AI', site: 'https://www.blackbox.ai', desc: 'Compila, explica e extrai código de qualquer lugar.' },
    { nome: 'OpenDevin', site: 'https://github.com/OpenDevin', desc: 'Agente que executa tarefas complexas no PC.' },
    { nome: 'AutoRegex', site: 'https://autoregex.xyz', desc: 'Gera expressões regulares automaticamente.' },
    { nome: 'Codium', site: 'https://codium.ai', desc: 'Assistente de qualidade e testes de código.' },
    { nome: 'InstCode AI', site: 'https://instcode.ai', desc: 'Gera projetos completos a partir de prompts.' },
    { nome: 'Refact AI', site: 'https://refact.ai', desc: 'IA para refatorar códigos automaticamente.' },
    { nome: 'Continue.dev', site: 'https://continue.dev', desc: 'Extensão de IA integrada ao VS Code.' },
    { nome: 'BuildShip AI', site: 'https://buildship.com', desc: 'Automatiza criação de backends e APIs.' },
    { nome: 'Lightning AI', site: 'https://lightning.ai', desc: 'Auxilia com pipelines de IA e ML.' },
    { nome: 'Uizard', site: 'https://uizard.io', desc: 'Cria interfaces a partir de desenhos.' },
    { nome: 'Locofy AI', site: 'https://locofy.ai', desc: 'Transforma layouts em código real.' },
    { nome: 'TeleportHQ', site: 'https://teleporthq.io', desc: 'Gera sites e componentes automáticos.' },
    { nome: 'GPT Engineer', site: 'https://github.com/AntonOsika/gpt-engineer', desc: 'Cria projetos completos via conversação.' },
    { nome: 'AI Code Reviewer', site: 'https://aicodereviewer.com', desc: 'Revisa código com foco em segurança.' },
    { nome: 'Bito AI', site: 'https://bito.ai', desc: 'Extensão com geração de código instantânea.' },
    { nome: 'StackSpot AI', site: 'https://stackspot.com', desc: 'Automatiza setups e padrões de projetos.' },
    { nome: 'Render AI Tools', site: 'https://render.com', desc: 'Auxilia no deploy com sugestões.' },
    { nome: 'Snyk AI', site: 'https://snyk.io', desc: 'Analisa vulnerabilidades automaticamente.' },
    { nome: 'Codify AI', site: 'https://codify.ai', desc: 'Cria scripts e automações simples.' },
    { nome: 'Jina AI', site: 'https://jina.ai', desc: 'Focado em IA multimodal e APIs de busca.' },
    { nome: 'Replicate', site: 'https://replicate.com', desc: 'Roda modelos de IA via API facilmente.' },
    { nome: 'OctoAI', site: 'https://octo.ai', desc: 'Infraestrutura otimizada para modelos de IA.' },
    { nome: 'Runway Dev Tools', site: 'https://runwayml.com', desc: 'Ferramentas visuais ampliadas para devs.' },
    { nome: 'Anysphere', site: 'https://anysphere.co', desc: 'IDE com raciocínio profundo de IA.' },
    { nome: 'AirOps', site: 'https://www.airops.com', desc: 'Criação rápida de automações e agentes.' },
    { nome: 'CodeComplete AI', site: 'https://codecomplete.ai', desc: 'Auxilia em revisões e completions.' },
    { nome: 'Figstack', site: 'https://figstack.com', desc: 'Explica código em linguagem natural.' },
    { nome: 'Supermaven', site: 'https://supermaven.com', desc: 'Completa código com extrema velocidade.' },
    { nome: 'Kodu.ai', site: 'https://kodu.ai', desc: 'Plataforma para gerar códigos sob demanda.' },
  ],
}

const tipo = ref('uso_dia_a_dia')
const mostrarDesc = ref(true)

// Animação de entrada
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
})
</script>

<template>
  <main>
    <!-- ======================================== -->
    <!-- HERO SECTION -->
    <!-- ======================================== -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="hero-content">
        <span class="hero-label">TECNOLOGIA & EDUCAÇÃO</span>
        <h1 class="hero-title">
          Inteligências <span class="hero-accent">Artificiais</span>
        </h1>
        <p class="hero-sub">
          A inteligência artificial se tornou uma das tecnologias mais influentes da atualidade,
          auxiliando desde tarefas simples até processos complexos. Esta página apresenta de forma
          clara e objetiva como as IAs funcionam e por que elas são tão úteis no cotidiano.
        </p>
        <div class="hero-cta">
          <a href="#ia-section" class="cta-primary">Explorar Ferramentas</a>
          <a href="#conceitos" class="cta-ghost">Conceitos Básicos</a>
        </div>
      </div>
    </section>

    <!-- ======================================== -->
    <!-- SECTION 2 - CONCEITOS -->
    <!-- ======================================== -->
    <section id="conceitos" class="section-conceitos">
      <div class="section-header" data-animate>
        <span class="section-label">FUNDAMENTOS</span>
        <h2 class="section-title">O que diferencia uma IA das outras?</h2>
      </div>
      <div class="conceitos-grid">
        <div
          v-for="(card, i) in s2Cards"
          :key="card.title"
          class="concept-card"
          :data-animate="true"
          :style="{ '--delay': `${i * 0.15}s` }"
        >
          <div class="concept-icon">
            <svg v-if="i === 0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
            </svg>
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </section>

    <!-- ======================================== -->
    <!-- SECTION 3 - EDUCAÇÃO -->
    <!-- ======================================== -->
    <section class="section-educacao">
      <div class="educacao-container">
        <div class="educacao-card" data-animate>
          <h2 class="card-title">{{ ia_educacao[0] }}</h2>
          <div class="topics-grid">
            <div
              v-for="(item, i) in ia_educacao.slice(1)"
              :key="i"
              class="topic-item"
            >
              <h3>
                <span class="topic-num">{{ String(i + 1).padStart(2, '0') }}</span>
                {{ item.topico }}
              </h3>
              <ul>
                <li v-for="(linha, key) in item.conteudo" :key="key">{{ linha }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="fontes-card" data-animate>
          <h2 class="card-title">{{ fontes_confiaveis[0] }}</h2>
          <div class="fontes-list">
            <div
              v-for="(item, i) in fontes_confiaveis.slice(1)"
              :key="i"
              class="fonte-item"
            >
              <span class="fonte-site">{{ item.site }}</span>
              <p class="fonte-motivo">{{ item.motivo }}</p>
            </div>
          </div>
        </div>

        <div class="final-card" data-animate>
          <h2 class="card-title">{{ resumo_final.title }}</h2>
          <p class="motivacional">{{ resumo_final.motivacional }}</p>
          <div class="frase-destaque">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <p>{{ resumo_final.frase_final }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================== -->
    <!-- SECTION 4 - IA PROGRAMAÇÃO -->
    <!-- ======================================== -->
    <section id="ia-section" class="section-ia">
      <div class="section-header" data-animate>
        <span class="section-label">FERRAMENTAS</span>
        <h2 class="section-title">IA para Programação</h2>
      </div>

      <div class="controls" data-animate>
        <div class="toggle-group">
          <button
            :class="{ active: tipo === 'aprendizagem' }"
            @click="tipo = 'aprendizagem'"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            Aprendizagem
          </button>
          <button
            :class="{ active: tipo === 'uso_dia_a_dia' }"
            @click="tipo = 'uso_dia_a_dia'"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            Uso Diário
          </button>
        </div>
        <label class="toggle-desc">
          <input type="checkbox" v-model="mostrarDesc" />
          <span class="toggle-track">
            <span class="toggle-thumb"></span>
          </span>
          <span class="toggle-label">Mostrar descrições</span>
        </label>
      </div>

      <div class="ia-grid">
        <a
          v-for="(item, i) in IA_programacao[tipo]"
          :key="i"
          :href="item.site"
          target="_blank"
          rel="noopener noreferrer"
          class="ia-card"
          :class="{ 'show-desc': mostrarDesc }"
          :data-animate="true"
          :style="{ '--delay': `${(i % 12) * 0.05}s` }"
        >
          <span class="ia-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h4 class="ia-nome">{{ item.nome }}</h4>
          <p class="ia-desc">{{ item.desc }}</p>
          <span class="ia-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
        </a>
      </div>
    </section>

    <!-- ======================================== -->
    <!-- FOOTER -->
    <!-- ======================================== -->
    <footer class="page-footer">
      <div class="footer-content">
        <p>Explore, aprenda e evolua com as melhores ferramentas de IA.</p>
        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/trilhas">Trilhas</a>
          <a href="/devs">Devs</a>
        </div>
      </div>
    </footer>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');

main {
  background: var(--bg-primary);
  min-height: 100vh;
}

/* ========================================
   HERO SECTION
   ======================================== */
.hero {
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 7.6rem 1.5rem 3rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% 90%, rgba(29, 155, 240, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 10%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 40% 30% at 50% 50%, rgba(29, 155, 240, 0.04) 0%, transparent 50%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(29, 155, 240, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(29, 155, 240, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 70%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
}

.hero-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--accent-primary);
  background: linear-gradient(135deg, rgba(29, 155, 240, 0.15), rgba(139, 92, 246, 0.15));
  padding: 0.5rem 1rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(29, 155, 240, 0.2);
}

.hero-title {
  font-family: 'Syne', var(--font-title);
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  animation: heroFadeIn 0.8s ease 0.2s backwards;
}

.hero-accent {
  background: linear-gradient(135deg, var(--accent-primary), #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  animation: heroFadeIn 0.8s ease 0.4s backwards;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: heroFadeIn 0.8s ease 0.6s backwards;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9rem 1.75rem;
  background: linear-gradient(135deg, var(--accent-primary), #6366f1);
  color: #fff;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(29, 155, 240, 0.3);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(29, 155, 240, 0.4);
}

.cta-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9rem 1.75rem;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-ghost:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  background: rgba(29, 155, 240, 0.05);
}

/* ========================================
   SECTION HEADERS
   ======================================== */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--accent-primary);
  margin-bottom: 0.75rem;
}

.section-title {
  font-family: 'Syne', var(--font-title);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

/* ========================================
   SECTION 2 - CONCEITOS
   ======================================== */
.section-conceitos {
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.conceitos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.concept-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), #8b5cf6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-primary);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.concept-card:hover::before {
  opacity: 1;
}

.concept-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(29, 155, 240, 0.15), rgba(139, 92, 246, 0.1));
  border-radius: 14px;
  margin-bottom: 1.25rem;
}

.concept-icon svg {
  width: 24px;
  height: 24px;
  stroke: var(--accent-primary);
}

.concept-card h3 {
  font-family: 'Syne', var(--font-title);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.concept-card p {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-secondary);
}

/* ========================================
   SECTION 3 - EDUCAÇÃO
   ======================================== */
.section-educacao {
  padding: 4rem 2rem 5rem;
  background: linear-gradient(180deg, var(--bg-primary) 0%, rgba(29, 155, 240, 0.03) 50%, var(--bg-primary) 100%);
}

.educacao-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
}

.educacao-card,
.fontes-card,
.final-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.educacao-card:hover,
.fontes-card:hover,
.final-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  border-color: rgba(29, 155, 240, 0.3);
}

.card-title {
  font-family: 'Syne', var(--font-title);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--accent-primary);
  text-align: center;
  margin-bottom: 2rem;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.topic-item h3 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Syne', var(--font-title);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.topic-num {
  font-family: 'Space Grotesk', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-primary);
  background: rgba(29, 155, 240, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
}

.topic-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.topic-item li {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: 0.4rem 0;
  padding-left: 1rem;
  position: relative;
}

.topic-item li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  opacity: 0.6;
}

.fontes-list {
  display: grid;
  gap: 1rem;
}

.fonte-item {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  transition: all 0.2s ease;
}

.fonte-item:hover {
  background: rgba(29, 155, 240, 0.08);
}

.fonte-site {
  font-family: 'Space Grotesk', monospace;
  font-weight: 600;
  color: var(--accent-primary);
  font-size: 0.95rem;
}

.fonte-motivo {
  font-family: var(--font-body);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.motivacional {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.frase-destaque {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(29, 155, 240, 0.1), rgba(139, 92, 246, 0.05));
  padding: 1.5rem;
  border-radius: 16px;
  border-left: 3px solid var(--accent-primary);
}

.frase-destaque svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  stroke: var(--accent-primary);
}

.frase-destaque p {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-primary);
  line-height: 1.6;
}

/* ========================================
   SECTION 4 - IA PROGRAMAÇÃO
   ======================================== */
.section-ia {
  padding: 5rem 2rem;
  max-width: 1300px;
  margin: 0 auto;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.toggle-group {
  display: flex;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 14px;
  padding: 4px;
}

.toggle-group button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.7rem 1.25rem;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.toggle-group button svg {
  width: 18px;
  height: 18px;
}

.toggle-group button.active {
  background: var(--accent-primary);
  color: #fff;
}

.toggle-desc {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.toggle-desc input {
  display: none;
}

.toggle-track {
  width: 44px;
  height: 24px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 100px;
  position: relative;
  transition: all 0.25s ease;
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  background: var(--text-secondary);
  border-radius: 50%;
  transition: all 0.25s ease;
}

.toggle-desc input:checked + .toggle-track {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
}

.toggle-desc input:checked + .toggle-track .toggle-thumb {
  transform: translateX(20px);
  background: #fff;
}

.toggle-label {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.ia-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.ia-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.ia-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(29, 155, 240, 0.05), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.ia-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-primary);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.ia-card:hover::before {
  opacity: 1;
}

.ia-num {
  font-family: 'Space Grotesk', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-primary);
  opacity: 0.6;
}

.ia-nome {
  font-family: 'Syne', var(--font-title);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.2s ease;
}

.ia-card:hover .ia-nome {
  color: var(--accent-primary);
}

.ia-desc {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 0;
  opacity: 0;
}

.ia-card.show-desc .ia-desc,
.ia-card:hover .ia-desc {
  max-height: 100px;
  opacity: 1;
}

.ia-arrow {
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-primary);
  border-radius: 8px;
  opacity: 0;
  transform: translateX(8px);
  transition: all 0.3s ease;
}

.ia-arrow svg {
  width: 16px;
  height: 16px;
  stroke: #fff;
}

.ia-card:hover .ia-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ========================================
   PAGE FOOTER
   ======================================== */
.page-footer {
  border-top: 1px solid var(--card-border);
  padding: 3rem 2rem;
  text-align: center;
}

.footer-content p {
  font-family: var(--font-body);
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.footer-links a {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--accent-primary);
}

/* ========================================
   ANIMAÇÕES
   ======================================== */
[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--delay, 0s);
}

[data-animate].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  [data-animate] {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .hero-title,
  .hero-sub,
  .hero-cta {
    animation: none;
  }

  .scroll-line {
    animation: none;
  }
}

/* ========================================
   RESPONSIVO
   ======================================== */
@media (max-width: 768px) {
  .hero {
    padding: 5rem 1.5rem 3rem;
    min-height: auto;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-sub {
    font-size: 1rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .scroll-indicator {
    display: none;
  }

  .section-conceitos,
  .section-ia {
    padding: 3rem 1.5rem;
  }

  .conceitos-grid {
    grid-template-columns: 1fr;
  }

  .controls {
    flex-direction: column;
    gap: 1rem;
  }

  .toggle-group {
    width: 100%;
    justify-content: center;
  }

  .ia-grid {
    grid-template-columns: 1fr;
  }

  .fonte-item {
    grid-template-columns: 1fr;
  }

  .frase-destaque {
    flex-direction: column;
  }

  .educacao-card,
  .fontes-card,
  .final-card {
    padding: 1.5rem;
  }

  .topics-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-label {
    font-size: 0.65rem;
  }

  .section-label {
    font-size: 0.6rem;
  }

  .concept-card,
  .ia-card {
    padding: 1.25rem;
  }

  .controls {
    align-items: stretch;
  }

  .toggle-group button {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }

  .toggle-group button svg {
    width: 16px;
    height: 16px;
  }
}
</style>
