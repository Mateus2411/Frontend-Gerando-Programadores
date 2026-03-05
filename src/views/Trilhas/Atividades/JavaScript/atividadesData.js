/**
 * Dados das Atividades de JavaScript
 *
 * Este arquivo contém todas as atividades, questões e respostas.
 * Futuramente será integrado com IA para:
 * - Correção automática
 * - Feedback personalizado
 * - Geração dinâmica de questões
 * - Análise de desempenho
 */

export const atividadesJavaScript = [
  {
    id: 1,
    modulo: 'Noções Básicas',
    moduloId: 'nocoes-basicas',
    titulo: 'Introdução à Programação',
    descricao: 'Teste seus conhecimentos sobre conceitos básicos de programação',
    dificuldade: 'fácil',
    concluida: false,
    questoes: [
      {
        id: 1,
        pergunta: 'O que é um algoritmo?',
        alternativas: [
          'Um tipo de linguagem de programação',
          'Uma sequência de passos para resolver um problema',
          'Um erro no código',
          'Um tipo de variável',
        ],
        respostaCorreta: 1,
        explicacao:
          'Um algoritmo é uma sequência lógica de passos para resolver um problema específico. É como uma receita que indica o que fazer em cada etapa.',
      },
      {
        id: 2,
        pergunta: 'Quais são as 3 etapas fundamentais de um programa?',
        alternativas: [
          'Início, Meio e Fim',
          'Entrada, Processamento e Saída',
          'Criar, Editar e Deletar',
          'Abrir, Salvar e Fechar',
        ],
        respostaCorreta: 1,
        explicacao:
          'Todo programa segue o fluxo: Entrada (coleta de dados), Processamento (aplicação de regras) e Saída (apresentação do resultado).',
      },
      {
        id: 3,
        pergunta: 'O que significa "processar" dados em um programa?',
        alternativas: [
          'Deletar os dados',
          'Aplicar regras e transformar os dados',
          'Salvar os dados em um arquivo',
          'Imprimir os dados na tela',
        ],
        respostaCorreta: 1,
        explicacao:
          'Processar dados significa aplicar regras, fazer cálculos ou transformações para gerar informações úteis a partir dos dados de entrada.',
      },
    ],
  },

  {
    id: 2,
    modulo: 'Variáveis e Tipos de Dados',
    moduloId: 'variaveis',
    titulo: 'Variáveis em JavaScript',
    descricao: 'Pratique declaração e uso de variáveis',
    dificuldade: 'fácil',
    concluida: false,
    questoes: [
      {
        id: 1,
        pergunta:
          'Qual palavra-chave é usada para declarar uma variável que pode ter seu valor alterado?',
        alternativas: ['const', 'let', 'var', 'Tanto let quanto var'],
        respostaCorreta: 3,
        explicacao:
          'Tanto "let" quanto "var" permitem alterar o valor da variável. A diferença está no escopo: "let" tem escopo de bloco e "var" tem escopo de função.',
      },
      {
        id: 2,
        pergunta: 'Qual é o tipo de dado do valor: "123"?',
        codigo: 'let valor = "123";',
        alternativas: ['Number', 'String', 'Boolean', 'Integer'],
        respostaCorreta: 1,
        explicacao:
          'Valores entre aspas são sempre do tipo String, mesmo que contenham apenas números.',
      },
    ],
  },

  {
    id: 3,
    modulo: 'Operadores e Expressões',
    moduloId: 'operadores',
    titulo: 'Operadores Aritméticos',
    descricao: 'Teste seus conhecimentos sobre operadores matemáticos',
    dificuldade: 'fácil',
    concluida: false,
    questoes: [
      {
        id: 1,
        pergunta: 'Qual será o resultado da expressão: 10 + 5 * 2?',
        codigo: 'let resultado = 10 + 5 * 2;',
        alternativas: ['30', '20', '15', '25'],
        respostaCorreta: 1,
        explicacao:
          'A multiplicação tem precedência sobre a adição. Então: 5 * 2 = 10, depois 10 + 10 = 20.',
      },
    ],
  },

  {
    id: 4,
    modulo: 'Fluxo de Controle',
    moduloId: 'fluxo-controle',
    titulo: 'Estruturas Condicionais',
    descricao: 'Pratique if, else e switch',
    dificuldade: 'médio',
    concluida: false,
    questoes: [
      {
        id: 1,
        pergunta: 'Qual será a saída do código abaixo?',
        codigo: `let idade = 17;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}`,
        alternativas: ['Maior de idade', 'Menor de idade', 'Erro', 'Nenhuma saída'],
        respostaCorreta: 1,
        explicacao:
          'Como idade (17) é menor que 18, a condição é falsa e o bloco else é executado, imprimindo "Menor de idade".',
      },
    ],
  },

  {
    id: 5,
    modulo: 'Loops',
    moduloId: 'loops',
    titulo: 'Estruturas de Repetição',
    descricao: 'Teste seus conhecimentos sobre for, while e do-while',
    dificuldade: 'médio',
    concluida: false,
    questoes: [
      {
        id: 1,
        pergunta: 'Quantas vezes o loop abaixo será executado?',
        codigo: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
        alternativas: ['4 vezes', '5 vezes', '6 vezes', 'Infinitas vezes'],
        respostaCorreta: 1,
        explicacao:
          'O loop executa enquanto i < 5. Começa em 0 e vai até 4 (0, 1, 2, 3, 4), totalizando 5 execuções.',
      },
    ],
  },

  {
    id: 6,
    modulo: 'Funções',
    moduloId: 'funcoes',
    titulo: 'Funções em JavaScript',
    descricao: 'Pratique criação e uso de funções',
    dificuldade: 'médio',
    concluida: false,
    questoes: [
      {
        id: 1,
        pergunta: 'Qual será o retorno da função abaixo quando chamada com soma(3, 7)?',
        codigo: `function soma(a, b) {
  return a + b;
}`,
        alternativas: ['10', '37', 'undefined', 'Erro'],
        respostaCorreta: 0,
        explicacao: 'A função soma retorna a + b. Com os valores 3 e 7, o resultado é 10.',
      },
    ],
  },

  {
    id: 7,
    modulo: 'Arrays',
    moduloId: 'arrays',
    titulo: 'Trabalhando com Arrays',
    descricao: 'Teste seus conhecimentos sobre arrays e seus métodos',
    dificuldade: 'médio',
    concluida: false,
    questoes: [
      {
        id: 1,
        pergunta: 'Qual será o valor de frutas.length após o código abaixo?',
        codigo: `let frutas = ["maçã", "banana"];
frutas.push("laranja");`,
        alternativas: ['2', '3', '4', 'undefined'],
        respostaCorreta: 1,
        explicacao:
          'O método push() adiciona um elemento ao final do array. Começando com 2 elementos e adicionando 1, o length será 3.',
      },
    ],
  },

  {
    id: 8,
    modulo: 'Objetos',
    moduloId: 'objetos',
    titulo: 'Objetos em JavaScript',
    descricao: 'Pratique criação e manipulação de objetos',
    dificuldade: 'difícil',
    concluida: false,
    questoes: [
      {
        id: 1,
        pergunta: 'Como acessar o valor "João" do objeto abaixo?',
        codigo: `let pessoa = {
  nome: "João",
  idade: 25
};`,
        alternativas: ['pessoa[nome]', 'pessoa.nome', 'pessoa->nome', 'pessoa::nome'],
        respostaCorreta: 1,
        explicacao:
          'Em JavaScript, acessamos propriedades de objetos usando a notação de ponto (objeto.propriedade) ou colchetes (objeto["propriedade"]).',
      },
    ],
  },
]

/**
 * Função para buscar atividades por módulo
 * @param {string} moduloId - ID do módulo
 * @returns {Array} - Array de atividades do módulo
 */
export function getAtividadesPorModulo(moduloId) {
  if (moduloId === 'todos') {
    return atividadesJavaScript
  }
  return atividadesJavaScript.filter((a) => a.moduloId === moduloId)
}

/**
 * Função para buscar uma atividade específica
 * @param {number} atividadeId - ID da atividade
 * @returns {Object|null} - Objeto da atividade ou null
 */
export function getAtividadePorId(atividadeId) {
  return atividadesJavaScript.find((a) => a.id === atividadeId) || null
}

/**
 * Placeholder para futura integração com IA
 * Esta função será implementada para enviar questões para correção automática
 */
export async function enviarParaCorrecaoIA(atividadeId, respostas) {
  // TODO: Implementar integração com IA
  console.log('Função de IA será implementada futuramente')
  console.log('Atividade:', atividadeId)
  console.log('Respostas:', respostas)

  return {
    sucesso: true,
    mensagem: 'Funcionalidade de IA em desenvolvimento',
  }
}

/**
 * Placeholder para feedback personalizado com IA
 */
export async function obterFeedbackIA() {
  // TODO: Implementar geração de feedback com IA
  console.log('Feedback IA será implementado futuramente')

  return {
    feedback: 'Continue praticando!',
    sugestoes: [],
  }
}
