<script setup>
const mantrasComuns = [
  'Lembre-se: o usuário é inimigo da sanidade do dev.',
  'Nunca confie no input do usuário, ele sempre encontra um jeito de quebrar tudo.',
  'Se algo pode dar errado, o usuário vai encontrar esse caminho.',
  'O usuário não lê documentação, ele clica em tudo até funcionar.',
  'Todo bug em produção foi causado por um usuário criativo demais.',
  'Validação no frontend é sugestão, validação no backend é lei.',
  'O código que você escreve hoje é o pesadelo que você debugga amanhã.',
  'Comentários mentem, código não. Mas às vezes o código também mente.',
  'Se funciona, não mexa. Se mexeu, reze para funcionar de novo.',
  'A melhor feature é aquela que você não precisa implementar.',
]

const mantraRara =
  '🎉 EASTER EGG! Parabéns, você encontrou a frase rara! <br> A verdade é: o dev também é usuário e quebra tudo igual. 🎉'

// 1 em 20 chance de pegar a frase rara
const chanceFraseRara = Math.random() < 0.005 // 0.5% = 1/200

const mantraAleatoria = chanceFraseRara
  ? mantraRara
  : mantrasComuns[Math.floor(Math.random() * mantrasComuns.length)]

const arquiteturaInfo = {
  titulo: 'Arquitetura, Boas Práticas e Mindset',

  texto: `Esta plataforma é construída sobre uma stack moderna (Vue.js, JavaScript, CSS/SASS),
  adotando padrões de código de alta manutenibilidade, escalabilidade e segurança de dados.
  O código é limpo, documentado e aderente ao SOLID. Implementamos criptografia robusta para
  os dados transacionais. Nossa missão é desenvolver <strong>engenheiros de software</strong> com
  rigor técnico.`,

  mantra: mantraAleatoria,
}
</script>

<template>
  <section>
    <h2>{{ arquiteturaInfo.titulo }}</h2>

    <p v-html="arquiteturaInfo.texto"></p>

    <blockquote class="developer-mantra" v-html="arquiteturaInfo.mantra"></blockquote>
  </section>
</template>

<style scoped>
/* ---------- SEÇÃO ARQUITETURA ---------- */
section {
  max-width: 1200px;
  margin: 6rem auto;
  padding: 3rem 2rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: 0 8px 35px var(--shadow-color);
  animation: fadeIn 0.6s ease;
  transition: all 0.3s ease;
}

section h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-align: center;
  transition: color 0.3s ease;
}

section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  text-align: center;
  max-width: 900px;
  margin: 0 auto 2rem;
  transition: color 0.3s ease;
}

section p strong {
  font-weight: 700;
  color: #4a73ff;
}

section .developer-mantra {
  background: linear-gradient(135deg, rgba(74, 115, 255, 0.08) 0%, rgba(248, 249, 250, 0.5) 100%);
  border-left: 4px solid #4a73ff;
  padding: 2rem;
  margin: 2rem auto 0;
  border-radius: 12px;
  font-size: 1.2rem;
  font-style: italic;
  color: var(--text-primary);
  max-width: 700px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(74, 115, 255, 0.1);
  transition: color 0.3s ease;
}
</style>
