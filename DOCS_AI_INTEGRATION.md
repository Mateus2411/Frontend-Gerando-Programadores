# Documentação de Integração MiniMax M2.5 Free - OpenCode Zen

## 📋 Índice
1. [Problemas Enfrentados](#problemas-enfrentados)
2. [Soluções Aplicadas](#soluções-aplicadas)
3. [Lições Aprendidas](#lições-aprendidas)
4. [Implementação Futura](#implementação-futura)

---

## 🔥 Problemas Enfrentados

### 1. **Erro de CORS (Cross-Origin Resource Sharing)**
**Problema:** Ao tentar chamar a API do OpenCode Zen (`https://opencode.ai/zen/v1/chat/completions`) diretamente do browser, ocorria bloqueio de CORS.

**Sintoma:** 
- Erro de conexão no frontend
- API funcionava via PowerShell/backend mas não no navegador

**Causa:** 
- APIs externas geralmente não permitem chamadas diretas do browser (proteção CORS)
- Chaves de API expostas no frontend (inseguro)

---

### 2. **Erro "Unexpected end of JSON input"**
**Problema:** Ao processar a resposta da API no `ai.js`, ocorria erro de parse de JSON.

**Sintoma:**
```
Failed to execute 'json' on 'Response': Unexpected end of JSON input
```

**Causa Raiz:**
```javascript
// ERRADO - tentando ler o body duas vezes
if (!response.ok) {
  const errorData = await response.json()  // ← 1ª leitura
  throw new Error(errorData.error)
}
const data = await response.json()  // ← 2ª leitura (ERRO!)
```

O body de uma `Response` do Fetch API só pode ser lido **uma única vez**. Na tentativa de ler novamente, o stream já estava fechado.

---

### 3. **Erro de Sintaxe no vite.config.js**
**Problema:** O Vite não conseguia processar o `vite.config.js` corretamente.

**Causas:**
1. **Regex complexa no `urlPattern` do VitePWA:**
   ```javascript
   // ERRADO
   urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i
   
   // CORRETO
   urlPattern: ({ url }) => url.hostname === 'fonts.googleapis.com'
   ```

2. **Proxy mal configurado:**
   ```javascript
   // PROBLEMÁTICO
   rewrite: (path) => path.replace(/^/api/, '/api') // não faz sentido
   
   // CORRETO (ou simplesmente remover o rewrite)
   proxy: {
     '/api': {
       target: 'http://localhost:3000',
       changeOrigin: true,
       // sem rewrite desnecessário
     }
   }
   ```

---

### 4. **Conflito ESM vs CommonJS**
**Problema:** O projeto usa `"type": "module"` no `package.json` (ESM), mas o `server.js` inicial usava `require()` (CommonJS).

**Sintoma:**
```
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'cors'
```

**Causa:** Mix de sintaxe de módulos diferentes.

---

### 5. **Dependências Faltantes/Removidas**
**Problema:** Ao editar o `package.json`, o `cors` foi removido acidentalmente.

**Sintoma:**
```
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'cors'
```

---

### 6. **Versão Inexistente de Pacote**
**Problema:** Tentativa de instalar `concurrently@^9.3.1` que não existe.

**Sintoma:**
```
npm ERR! code ETARGET
npm ERR! notarget No matching version found for concurrently@^9.3.1
```

---

## ✅ Soluções Aplicadas

### 1. **Arquitetura de Proxy Duplo**

#### Para Desenvolvimento Local:
```
Browser (porta 5173) 
  → Vite Proxy (/api/*) 
    → Servidor Express Local (porta 3000) 
      → API OpenCode Zen
```

**Arquivos criados/modificados:**
- `server.js` - Servidor Express local
- `vite.config.js` - Configuração de proxy
- `package.json` - Scripts `dev:server` e `dev:full`

#### Para Produção (Vercel):
```
Browser 
  → Vercel Serverless Function 
    → API OpenCode Zen
```

**Arquivo criado:**
- `api/chat.js` - Serverless function da Vercel

---

### 2. **Correção do Parser de JSON**

**Antes (ERRADO):**
```javascript
const response = await fetch('/api/chat', {...})

if (!response.ok) {
  const errorData = await response.json() // ← 1ª leitura
  throw new Error(errorData.error)
}

const data = await response.json() // ← 2ª leitura (causa erro)
```

**Depois (CORRETO):**
```javascript
const response = await fetch('/api/chat', {...})

// Lê o texto UMA única vez
const responseText = await response.text()
console.log('Resposta recebida:', responseText.substring(0, 200))

// Faz parse manual do JSON
let data
try {
  data = JSON.parse(responseText)
} catch (e) {
  console.error('Erro ao fazer parse do JSON:', responseText)
  throw new Error('Resposta inválida do servidor (não é JSON)')
}

// Agora usa 'data' normalmente
if (!response.ok) {
  throw new Error(data.error || `Erro ${response.status}`)
}
```

---

### 3. **Padronização ESM**

**server.js (CORRETO):**
```javascript
// ESM - ES Modules (projeto usa "type": "module")
import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import 'dotenv/config'

// Em vez de:
// const express = require('express') // CommonJS
```

---

### 4. **Scripts de Desenvolvimento**

**package.json:**
```json
{
  "scripts": {
    "dev": "vite",
    "dev:server": "node server.js",
    "dev:full": "concurrently \"npm run dev\" \"npm run dev:server\"",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "express": "^5.2.1",
    "cors": "^2.8.6",
    "node-fetch": "^3.3.2",
    "dotenv": "^17.4.2"
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}
```

---

## 💡 Lições Aprendidas

### 1. **Fetch API - Body é Read-Once**
- ✅ **NUNCA** tente ler `response.json()`, `response.text()` ou `response.blob()` mais de uma vez
- ✅ Use `response.text()` primeiro, depois faça `JSON.parse()` manualmente se precisar verificar o texto bruto
- ✅ Se precisar de erro + sucesso, leia o body uma vez só e armazene

### 2. **CORS é um Problema de Arquitetura**
- ✅ APIs externas **nunca** devem ser chamadas diretamente do browser
- ✅ Sempre use um **backend proxy** (serverless ou servidor local)
- ✅ Chaves de API **NUNCA** devem ficar no frontend

### 3. **VitePWA e Regex Complexas**
- ✅ Avoid regex complexas no `urlPattern` do Workbox
- ✅ Use **função de callback** em vez de regex quando possível:
  ```javascript
  urlPattern: ({ url }) => url.hostname === 'fonts.googleapis.com'
  ```

### 4. **ESM vs CommonJS**
- ✅ Verifique se o projeto usa `"type": "module"` no `package.json`
- ✅ Se usar ESM, **todos** os arquivos devem usar `import/export`
- ✅ Nunca misture `require()` com `import`

### 5. **Ambiente de Desenvolvimento vs Produção**
- ✅ **Local:** Use servidor Express + Vite proxy
- ✅ **Produção:** Use Serverless Functions (Vercel/Netlify)
- ✅ Sempre teste em ambos os ambientes

### 6. **Tratamento de Erros em APIs**
- ✅ Sempre verifique `response.ok` **após** ler o body
- ✅ Logs detalhados ajudam no debug: `console.log('Resposta:', responseText.substring(0, 200))`
- ✅ Trate erros de parse de JSON explicitamente

---

## 🚀 Implementação Futura

### Cenário: Futuras Integrações de APIs (ex: OpenAI, Anthropic, etc.)

#### 1. **Criar uma Estrutura de API Unificada**

**Pasta sugerida:**
```
src/
 ├── services/
 │    ├── api.js          # Cliente base (fetch configurado)
 │    ├── openai.js       # Integração OpenAI
 │    ├── anthropic.js    # Integração Anthropic
 │    ├── minimax.js      # Integração MiniMax (já temos)
 │    └── index.js        # Exporta todos
 ├── server/
 │    ├── index.js        # Servidor Express principal
 │    ├── routes/
 │    │    ├── chat.js    # Rota /api/chat
 │    │    ├── vision.js  # Rota /api/vision (futuro)
 │    │    └── index.js
 │    └── middleware/
 │         ├── cors.js
 │         ├── auth.js
 │         └── rateLimit.js
 └── api/               # Vercel Serverless
      ├── chat.js
      ├── vision.js
      └── index.js
```

#### 2. **Classe Base para APIs (api.js)**

```javascript
// src/services/api.js
export class APIService {
  constructor(baseURL, defaultHeaders = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    }
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers
      }
    }

    try {
      const response = await fetch(url, config)
      const text = await response.text()
      
      let data
      try {
        data = JSON.parse(text)
      } catch (e) {
        throw new Error(`Resposta inválida: ${text.substring(0, 100)}`)
      }

      if (!response.ok) {
        throw new Error(data.error || `Erro ${response.status}`)
      }

      return data
    } catch (error) {
      console.error(`Erro na API ${this.baseURL}:`, error)
      throw error
    }
  }

  post(endpoint, body, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      ...options
    })
  }

  get(endpoint, options = {}) {
    return this.request(endpoint, {
      method: 'GET',
      ...options
    })
  }
}
```

#### 3. **Implementação Específica (MiniMax)**

```javascript
// src/services/minimax.js
import { APIService } from './api.js'

export class MiniMaxService extends APIService {
  constructor() {
    super('https://opencode.ai/zen/v1', {
      'Authorization': `Bearer ${process.env.VITE_AI_KEY_CHAT || ''}`
    })
  }

  async chat(message, options = {}) {
    const {
      language = 'JavaScript',
      context = '',
      model = 'minimax-m2.5-free',
      temperature = 0.7,
      maxTokens = 1024
    } = options

    const messages = []
    
    if (context) {
      messages.push({
        role: 'system',
        content: `${context}\n\nFoque em exemplos em ${language}.`
      })
    } else {
      messages.push({
        role: 'system',
        content: `Você é um assistente especializado em ${language}. Responda em português.`
      })
    }

    messages.push({ role: 'user', content: message })

    const data = await this.post('/chat/completions', {
      model,
      messages,
      temperature,
      max_tokens: maxTokens
    })

    return {
      reply: data.choices[0]?.message?.content,
      usage: data.usage
    }
  }
}
```

#### 4. **Servidor Express Refatorado**

```javascript
// server/index.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import chatRoutes from './routes/chat.js'
import visionRoutes from './routes/vision.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Rotas
app.use('/api/chat', chatRoutes)
app.use('/api/vision', visionRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
})
```

#### 5. **Pinia Store Refatorada**

```javascript
// src/stores/ai.js
import { defineStore } from 'pinia'
import { MiniMaxService } from '@/services/minimax.js'

const miniMax = new MiniMaxService()

export const useAiStore = defineStore('ai', {
  state: () => ({
    loading: false,
    response: '',
    error: null,
    language: 'JavaScript',
    history: []
  }),

  actions: {
    async ask(question, context = '', language = null) {
      this.loading = true
      this.error = null
      this.response = ''

      try {
        if (!question?.trim()) {
          throw new Error('❌ Por favor, digite uma pergunta válida.')
        }

        const lang = language || this.language
        console.log('📤 Enviando para API:', { lang, length: question.length })

        const { reply, usage } = await miniMax.chat(question, {
          language: lang,
          context,
          model: 'minimax-m2.5-free'
        })

        if (!reply?.trim()) {
          throw new Error('🤖 A IA retornou uma resposta vazia.')
        }

        this.response = reply.trim()
        this.history.push({ question, reply, timestamp: Date.now() })
        
        console.log('✅ Resposta recebida:', { tokens: usage?.total_tokens })
      } catch (error) {
        console.error('❌ Erro:', error)
        this.error = this.formatError(error)
      } finally {
        this.loading = false
      }
    },

    formatError(error) {
      if (error.message.includes('network') || error.message.includes('fetch')) {
        return '🌐 Erro de conexão. Verifique sua internet.'
      }
      if (error.message.includes('timeout')) {
        return '⏱️ A requisição demorou muito.'
      }
      return error.message || '❌ Erro desconhecido.'
    },

    setLanguage(lang) {
      this.language = lang
    },

    clearHistory() {
      this.history = []
    }
  }
})
```

#### 6. **Configuração de Ambiente (.env)**

```bash
# .env.example (commite este arquivo como exemplo)
VITE_AI_KEY_CHAT=           # Chave do OpenCode Zen (opcional para modelos free)
VITE_AI_KEY_OPENAI=        # Futura chave OpenAI
VITE_AI_KEY_ANTHROPIC=     # Futura chave Anthropic

# Para desenvolvimento local
PORT=3000

# Para produção (Vercel)
VERCEL=1
```

#### 7. **Adicionar Rate Limiting (Futuro)**

```javascript
// server/middleware/rateLimit.js
import rateLimit from 'express-rate-limit'

export const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // limite de 100 requests por IP
  message: {
    error: 'Muitas requisições. Tente novamente em 15 minutos.'
  }
})
```

---

## 📝 Checklist para Futuras APIs

- [ ] Criar classe base em `src/services/api.js`
- [ ] Implementar serviço específico (ex: `openai.js`)
- [ ] Adicionar rota no servidor Express (`server/routes/`)
- [ ] Criar serverless function na Vercel (`api/`)
- [ ] Atualizar Pinia store para usar novo serviço
- [ ] Adicionar variáveis no `.env` e na Vercel
- [ ] Configurar rate limiting
- [ ] Adicionar logs estruturados
- [ ] Testar em desenvolvimento e produção
- [ ] Documentar no README.md

---

## 🎯 Benefícios desta Arquitetura

1. **Escalabilidade:** Fácil adição de novas APIs
2. **Manutenção:** Código centralizado e reutilizável
3. **Segurança:** Chaves protegidas no backend
4. **Debugging:** Logs consistentes e tratamento de erros unificado
5. **Testabilidade:** Serviços isolados e fáceis de mockar

---

## 📚 Links Úteis

- [OpenCode Zen Documentation](https://opencode.ai/docs/pt-br/zen/)
- [MiniMax M2.5 Free Model](https://opencode.ai/zen/v1/models)
- [Vite Proxy Configuration](https://vitejs.dev/config/server-options.html#server-proxy)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Pinia State Management](https://pinia.vuejs.org/)

---

**Última atualização:** 01/05/2026  
**Autor:** Mateus (Gerando Programadores)  
**Versão:** 1.0
