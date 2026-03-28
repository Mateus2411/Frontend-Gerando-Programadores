<script setup>
import { ref } from 'vue'

const IA_programacao = {
  aprendizagem: [
    {
      nome: 'freeCodeCamp AI Tutor',
      site: 'https://www.freecodecamp.org',
      desc: 'Explica conceitos básicos de programação com ajuda de IA.',
    },
    {
      nome: 'W3Schools AI',
      site: 'https://www.w3schools.com',
      desc: 'Auxilia no aprendizado de HTML, CSS e JS com respostas guiadas.',
    },
    {
      nome: 'Khan Academy - Khanmigo',
      site: 'https://www.khanacademy.org',
      desc: 'Tutor interativo que ensina lógica e programação.',
    },
    {
      nome: 'Codecademy AI Assistant',
      site: 'https://www.codecademy.com',
      desc: 'Ajuda no entendimento de exercícios e códigos.',
    },
    {
      nome: 'LeetCode AI',
      site: 'https://leetcode.com',
      desc: 'Explica problemas e sugere abordagens de algoritmos.',
    },
    {
      nome: 'HackerRank AI',
      site: 'https://www.hackerrank.com',
      desc: 'Auxilia na resolução e revisão de desafios técnicos.',
    },
    {
      nome: 'Codewars Sensei AI',
      site: 'https://www.codewars.com',
      desc: 'Oferece dicas curtas para desafios de kata.',
    },
    {
      nome: 'Exercism Mentor AI',
      site: 'https://exercism.org',
      desc: 'Mentoria instantânea nos exercícios práticos.',
    },
    {
      nome: 'Brilliant AI',
      site: 'https://brilliant.org',
      desc: 'Ajuda na matemática e lógica aplicada à programação.',
    },
    {
      nome: 'StackOverflow OverflowAI',
      site: 'https://stackoverflow.co',
      desc: 'Responde dúvidas técnicas com base na base do Stack Overflow.',
    },
    {
      nome: 'GeekforGeeks AI Guide',
      site: 'https://geeksforgeeks.org',
      desc: 'Explica estruturas de dados e algoritmos rapidamente.',
    },
    {
      nome: 'MIT OpenCourseWare AI Tools',
      site: 'https://ocw.mit.edu',
      desc: 'Auxilia no entendimento dos cursos de ciência da computação.',
    },
    {
      nome: 'Coursera AI Helper',
      site: 'https://www.coursera.org',
      desc: 'Resume aulas e explica conteúdos de CS.',
    },
    {
      nome: 'Udemy Learn AI Assistant',
      site: 'https://www.udemy.com',
      desc: 'Ajuda a entender as aulas e conteúdos dos cursos.',
    },
    {
      nome: 'edX Assistant',
      site: 'https://www.edx.org',
      desc: 'Traz explicações rápidas de tópicos de computação.',
    },
    {
      nome: 'CodeCrafters AI',
      site: 'https://codecrafters.io',
      desc: 'Ajuda a construir projetos complexos do zero.',
    },
    {
      nome: 'Project Euler Helper',
      site: 'https://projecteuler.net',
      desc: 'Sugere ideias para problemas matemáticos avançados.',
    },
    {
      nome: 'The Odin Project AI Helper',
      site: 'https://www.theodinproject.com',
      desc: 'Explica conceitos do full-stack passo a passo.',
    },
    {
      nome: 'CS50 AI Support',
      site: 'https://cs50.harvard.edu',
      desc: 'Ajuda no entendimento do famoso curso CS50.',
    },
    {
      nome: 'Roadmap.sh AI Guide',
      site: 'https://roadmap.sh',
      desc: 'Explica rotas de aprendizado e tecnologias.',
    },
    {
      nome: 'SoloLearn AI',
      site: 'https://sololearn.com',
      desc: 'Auxilia iniciantes com respostas simples e diretas.',
    },
    {
      nome: 'Scrimba AI',
      site: 'https://scrimba.com',
      desc: 'Explica trechos das aulas interativas.',
    },
    {
      nome: 'Hyperskill JetBrains AI',
      site: 'https://hyperskill.org',
      desc: 'Suporta no aprendizado com exemplos concretos.',
    },
    {
      nome: 'MDN AI Docs',
      site: 'https://developer.mozilla.org',
      desc: 'Explica trechos da documentação web.',
    },
    {
      nome: 'Google Learn AI Tools',
      site: 'https://developers.google.com',
      desc: 'Ensina APIs, web e cloud com IA.',
    },
    {
      nome: 'Microsoft Learn AI',
      site: 'https://learn.microsoft.com',
      desc: 'Ajuda no aprendizado de .NET, Azure e mais.',
    },
    {
      nome: 'AWS Educate AI',
      site: 'https://aws.amazon.com/education',
      desc: 'Auxilia no início com serviços AWS.',
    },
    {
      nome: 'Oracle Dev AI',
      site: 'https://developer.oracle.com',
      desc: 'Explica Java e ferramentas Oracle.',
    },
    {
      nome: 'IBM Learning AI',
      site: 'https://developer.ibm.com',
      desc: 'Ajuda no aprendizado de IA e cloud.',
    },
    {
      nome: 'Meta AI Learning Toolbox',
      site: 'https://ai.meta.com',
      desc: 'Oferece orientação sobre IA e modelos Meta.',
    },
    {
      nome: 'DeepLearning.AI',
      site: 'https://www.deeplearning.ai',
      desc: 'Explica fundamentos de IA e deep learning.',
    },
    { nome: 'Fast.ai', site: 'https://fast.ai', desc: 'Ajuda em machine learning prático.' },
    {
      nome: 'OpenCV Academy AI',
      site: 'https://opencv.org',
      desc: 'Explica visão computacional de forma simples.',
    },
    { nome: 'PyTorch Learn', site: 'https://pytorch.org', desc: 'Apoia no uso de PyTorch.' },
    {
      nome: 'TensorFlow Learning',
      site: 'https://www.tensorflow.org',
      desc: 'Ajuda na compreensão de TensorFlow.',
    },
    {
      nome: 'Kaggle Learn AI',
      site: 'https://kaggle.com/learn',
      desc: 'Ensina IA e dados com exemplos práticos.',
    },
    {
      nome: 'DataCamp AI',
      site: 'https://datacamp.com',
      desc: 'Auxilia em exercícios de dados e Python.',
    },
    { nome: 'CodeSignal AI', site: 'https://codesignal.com', desc: 'Dá dicas em provas técnicas.' },
    {
      nome: 'InterviewBit AI',
      site: 'https://interviewbit.com',
      desc: 'Explica desafios de entrevistas.',
    },
    {
      nome: 'AlgoExpert AI',
      site: 'https://www.algoexpert.io',
      desc: 'Sugere soluções para algoritmos complexos.',
    },
    {
      nome: 'Frontend Mentor AI',
      site: 'https://frontendmentor.io',
      desc: 'Oferece dicas para melhorar seus projetos front-end.',
    },
    {
      nome: 'App Academy Open AI',
      site: 'https://www.appacademy.io',
      desc: 'Ajuda a entender conteúdos de full-stack.',
    },
    {
      nome: 'DigitalOcean Tutorials AI',
      site: 'https://www.digitalocean.com/community',
      desc: 'Explica guias e tutoriais cloud.',
    },
    {
      nome: 'Linux Foundation Training AI',
      site: 'https://training.linuxfoundation.org',
      desc: 'Ajuda no estudo de Linux e DevOps.',
    },
    {
      nome: 'Rustlings AI Tutor',
      site: 'https://github.com/rust-lang/rustlings',
      desc: 'Auxilia no aprendizado de Rust.',
    },
    {
      nome: 'Go by Example AI',
      site: 'https://gobyexample.com',
      desc: 'Explica exemplos de código Go.',
    },
    {
      nome: 'SQLBolt AI Helper',
      site: 'https://sqlbolt.com',
      desc: 'Ajuda nos exercícios de SQL.',
    },
    {
      nome: 'Programiz AI',
      site: 'https://programiz.com',
      desc: 'Explica programação básica com exemplos.',
    },
    {
      nome: 'TutorialsPoint AI',
      site: 'https://tutorialspoint.com',
      desc: 'Simplifica conteúdos técnicos extensos.',
    },
    {
      nome: 'Javapoint AI',
      site: 'https://www.javatpoint.com',
      desc: 'Ajuda no estudo de Java e frameworks.',
    },
  ],
  uso_dia_a_dia: [
    {
      nome: 'GitHub Copilot',
      site: 'https://github.com/features/copilot',
      desc: 'Gera código automaticamente enquanto você programa.',
    },
    {
      nome: 'Cursor IDE AI',
      site: 'https://cursor.sh',
      desc: 'IDE que entende e escreve código com IA.',
    },
    {
      nome: 'Bolt.new',
      site: 'https://bolt.new',
      desc: 'Cria apps completos a partir de prompts.',
    },
    {
      nome: 'Codeium',
      site: 'https://codeium.com',
      desc: 'Sugestões rápidas de código para várias linguagens.',
    },
    {
      nome: 'Tabnine',
      site: 'https://tabnine.com',
      desc: 'Completa código com IA treinada localmente.',
    },
    {
      nome: 'AWS CodeWhisperer',
      site: 'https://aws.amazon.com/codewhisperer',
      desc: 'Completa código otimizado para AWS.',
    },
    {
      nome: 'Replit Ghostwriter',
      site: 'https://replit.com',
      desc: 'Auxilia no desenvolvimento direto no Replit.',
    },
    {
      nome: 'CodeGeeX',
      site: 'https://codegeex.ai',
      desc: 'Modelo open-source que gera código multi-linguagem.',
    },
    { nome: 'Ponicode', site: 'https://ponicode.com', desc: 'Gera testes unitários automáticos.' },
    {
      nome: 'Mutable AI',
      site: 'https://mutable.ai',
      desc: 'Transforma arquivos inteiros com IA.',
    },
    {
      nome: 'CodiumAI',
      site: 'https://www.codium.ai',
      desc: 'Analisa e valida código em tempo real.',
    },
    {
      nome: 'Pieces for Developers',
      site: 'https://pieces.app',
      desc: 'Armazena e sugere snippets úteis automaticamente.',
    },
    {
      nome: 'Cody (Sourcegraph)',
      site: 'https://sourcegraph.com/cody',
      desc: 'Busca e entende seu código inteiro.',
    },
    {
      nome: 'WindSurf IDE',
      site: 'https://windsurf.ai',
      desc: 'IDE colaborativa com agente de IA.',
    },
    {
      nome: 'DeepCode AI',
      site: 'https://www.deepcode.ai',
      desc: 'Faz revisão automática de código.',
    },
    {
      nome: 'OpenAI Code Assistant',
      site: 'https://openai.com',
      desc: 'Gera funções completas com alta precisão.',
    },
    {
      nome: 'CodeSquire',
      site: 'https://codesquire.ai',
      desc: 'Focado em Python e dados; gera blocos prontos.',
    },
    {
      nome: 'AskCodi',
      site: 'https://www.askcodi.com',
      desc: 'Gera código e documentações rapidamente.',
    },
    {
      nome: 'Phind',
      site: 'https://www.phind.com',
      desc: 'Motor de busca especializado em programação.',
    },
    { nome: 'Zed AI', site: 'https://zed.dev', desc: 'Editor ultra rápido com IA integrada.' },
    { nome: 'V0.dev', site: 'https://v0.dev', desc: 'Gera interfaces completas automaticamente.' },
    {
      nome: 'Blackbox AI',
      site: 'https://www.blackbox.ai',
      desc: 'Copila, explica e extrai código de qualquer lugar.',
    },
    {
      nome: 'OpenDevin',
      site: 'https://github.com/OpenDevin',
      desc: 'Agente que executa tarefas complexas no PC.',
    },
    {
      nome: 'AutoRegex',
      site: 'https://autoregex.xyz',
      desc: 'Gera expressões regulares automaticamente.',
    },
    {
      nome: 'Codium',
      site: 'https://codium.ai',
      desc: 'Assistente de qualidade e testes de código.',
    },
    {
      nome: 'InstCode AI',
      site: 'https://instcode.ai',
      desc: 'Gera projetos completos a partir de prompts.',
    },
    {
      nome: 'Refact AI',
      site: 'https://refact.ai',
      desc: 'IA para refatorar códigos automaticamente.',
    },
    {
      nome: 'Continue.dev',
      site: 'https://continue.dev',
      desc: 'Extensão de IA integrada ao VS Code.',
    },
    {
      nome: 'BuildShip AI',
      site: 'https://buildship.com',
      desc: 'Automatiza criação de backends e APIs.',
    },
    {
      nome: 'Lightning AI',
      site: 'https://lightning.ai',
      desc: 'Auxilia com pipelines de IA e ML.',
    },
    { nome: 'Uizard', site: 'https://uizard.io', desc: 'Cria interfaces a partir de desenhos.' },
    { nome: 'Locofy AI', site: 'https://locofy.ai', desc: 'Transforma layouts em código real.' },
    {
      nome: 'TeleportHQ',
      site: 'https://teleporthq.io',
      desc: 'Gera sites e componentes automáticos.',
    },
    {
      nome: 'GPT Engineer',
      site: 'https://github.com/AntonOsika/gpt-engineer',
      desc: 'Cria projetos completos via conversação.',
    },
    {
      nome: 'AI Code Reviewer',
      site: 'https://aicodereviewer.com',
      desc: 'Revisa código com foco em segurança.',
    },
    {
      nome: 'Bito AI',
      site: 'https://bito.ai',
      desc: 'Extensão com geração de código instantânea.',
    },
    {
      nome: 'StackSpot AI',
      site: 'https://stackspot.com',
      desc: 'Automatiza setups e padrões de projetos.',
    },
    {
      nome: 'Render AI Tools',
      site: 'https://render.com',
      desc: 'Auxilia no deploy com sugestões.',
    },
    { nome: 'Snyk AI', site: 'https://snyk.io', desc: 'Analisa vulnerabilidades automaticamente.' },
    { nome: 'Codify AI', site: 'https://codify.ai', desc: 'Cria scripts e automações simples.' },
    { nome: 'Jina AI', site: 'https://jina.ai', desc: 'Focado em IA multimodal e APIs de busca.' },
    {
      nome: 'Replicate',
      site: 'https://replicate.com',
      desc: 'Roda modelos de IA via API facilmente.',
    },
    {
      nome: 'OctoAI',
      site: 'https://octo.ai',
      desc: 'Infraestrutura otimizada para modelos de IA.',
    },
    {
      nome: 'Runway Dev Tools',
      site: 'https://runwayml.com',
      desc: 'Ferramentas visuais ampliadas para devs.',
    },
    { nome: 'Anysphere', site: 'https://anysphere.co', desc: 'IDE com raciocínio profundo de IA.' },
    {
      nome: 'AirOps',
      site: 'https://www.airops.com',
      desc: 'Criação rápida de automações e agentes.',
    },
    {
      nome: 'CodeComplete AI',
      site: 'https://codecomplete.ai',
      desc: 'Auxilia em revisões e completions.',
    },
    {
      nome: 'Figstack',
      site: 'https://figstack.com',
      desc: 'Explica código em linguagem natural.',
    },
    {
      nome: 'Supermaven',
      site: 'https://supermaven.com',
      desc: 'Completa código com extrema velocidade.',
    },
    {
      nome: 'Kodu.ai',
      site: 'https://kodu.ai',
      desc: 'Plataforma para gerar códigos sob demanda.',
    },
  ],
}

let tipo = ref('uso_dia_a_dia')

const mostrarDesc = ref(false)
</script>

<template>
  <section class="ia-section">
    <div class="btn-container">
      <button @click="tipo = tipo === 'aprendizagem' ? 'uso_dia_a_dia' : 'aprendizagem'">
        Alternar para {{ tipo === 'aprendizagem' ? 'Uso Diário' : 'Aprendizagem' }}
      </button>
      <label class="checkbox-ui">
        <input type="checkbox" v-model="mostrarDesc" />
        <span class="check"></span>
        <span class="label-text">Deseja que apareça normalmente as descrições?</span>
      </label>
    </div>

    <div
      class="item"
      :class="{ 'show-desc': mostrarDesc }"
      v-for="(item, index) in IA_programacao[tipo]"
      :key="index"
    >
      <div class="inner">
        <a :href="item.site" target="_blank" rel="noopener noreferrer">{{ item.nome }}</a>
      </div>
      <div class="desc-wrap">
        <p class="desc">{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ======================== BASE ======================== */
.ia-section {
  max-width: 1350px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.4rem;

  background: var(--bg-primary);
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

/* ======================== BOTÃO ======================== */
.btn-container {
  align-items: center;
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
}

/* ======================== CHECKBOX BONITO ======================== */
.checkbox-ui {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: 0.9rem;

  cursor: pointer;
  user-select: none;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.checkbox-ui input {
  display: none;
}

.checkbox-ui .check {
  width: 18px;
  height: 18px;
  border-radius: 5px;

  border: 2px solid var(--accent-primary);
  background: var(--card-bg);

  display: grid;
  place-items: center;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.checkbox-ui:hover .check {
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.checkbox-ui .check::after {
  content: '';
  width: 9px;
  height: 9px;
  border-radius: 2px;

  background: #fff;
  transform: scale(0);

  transition: transform 0.15s ease;
}

.checkbox-ui input:checked + .check {
  background: var(--accent-primary);
  border-color: transparent;
}

.checkbox-ui input:checked + .check::after {
  transform: scale(1);
}

.checkbox-ui .label-text {
  line-height: 1.2;
}

.btn-container button {
  font-family: var(--font-body);
  border: none;
  padding: 0.85rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  background: var(--accent-primary);
  color: #fff;
  cursor: pointer;
  letter-spacing: 0.02em;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.btn-container button:hover {
  transform: translateY(-1px);
  background: var(--accent-hover);
  box-shadow: 0 6px 18px rgba(29, 155, 240, 0.22);
}

/* ======================== CARD ======================== */
.item {
  background: var(--card-bg);
  padding: 1.4rem;
  border-radius: 18px;

  box-sizing: border-box;
  border: 1px solid var(--card-border);

  box-shadow: 0 6px 20px var(--shadow-color);

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;
  overflow: visible;

  transform: translateZ(0);
  transition:
    transform 0.25s cubic-bezier(0.2, 0.9, 0.2, 1),
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    background-color 0.3s ease;

  z-index: 1;
}

.item:not(.show-desc):hover {
  transform: translateY(-2px);
  z-index: 10;
  border-color: var(--accent-primary);
}

/* ======================== CONTEÚDO ======================== */
.item .inner {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ======================== LINK ======================== */
.item a {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  color: var(--accent-primary);
  text-decoration: none;
}

.item a:hover {
  color: var(--accent-hover);
}

/* ======================== DESCRIÇÃO ======================== */
.desc-wrap {
  margin-top: auto;
  opacity: 0;
  transform: translateY(6px);

  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.item:not(.show-desc):hover .desc-wrap {
  opacity: 1;
  transform: translateY(0);
}

.desc {
  margin: 0;
  padding: 0.6rem 0.85rem;
  border-radius: 10px;

  background: var(--bg-secondary);
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--text-primary);

  box-shadow: 0 6px 18px var(--shadow-color);
  transition: all 0.3s ease;
}

/* ======================== LINHA ======================== */
.item::after {
  content: '';
  position: absolute;

  left: 0px;
  right: 0px;
  bottom: -0.1px;

  height: 10px;
  border-bottom: 3px solid transparent;

  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;

  pointer-events: none;
  transition: border-color 0.22s ease;
}

.item:not(.show-desc):hover::after {
  border-bottom-color: var(--accent-primary);
}

/* ======================== MODO DESCRIÇÃO FIXA ======================== */
.item.show-desc {
  box-shadow: 0 10px 28px var(--shadow-color);
  border-color: var(--accent-primary);
}

.item.show-desc .desc-wrap {
  opacity: 1;
  transform: none;
}

.item.show-desc:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px var(--shadow-color);
}

/* ======================== RESPONSIVO ======================== */
@media (max-width: 650px) {
  .ia-section {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .item {
    transform: none !important;
    cursor: default;
    box-shadow: 0 10px 28px var(--shadow-color);
  }

  .item:hover {
    transform: none !important;
  }

  .desc-wrap {
    opacity: 1 !important;
    transform: none !important;
  }

  .item::after {
    border-bottom-color: transparent !important;
  }

  .checkbox-ui {
    display: none;
  }
}
</style>
