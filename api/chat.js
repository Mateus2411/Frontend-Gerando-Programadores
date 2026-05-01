export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  try {
    const { message, language = 'JavaScript', context } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Mensagem não fornecida' })
    }

    const apiKey = process.env.VITE_AI_KEY_CHAT || ''

    const messages = []
    
    if (context) {
      messages.push({
        role: 'system',
        content: `${context}\n\nFoque em exemplos e explicações usando ${language}.`
      })
    } else {
      messages.push({
        role: 'system',
        content: `Você é um assistente de programação especializado em ${language}. Responda sempre em português brasileiro de forma clara e didática.`
      })
    }

    messages.push({ role: 'user', content: message })

    const response = await fetch('https://opencode.ai/zen/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey && { 'Authorization': `Bearer ${apiKey}` })
      },
      body: JSON.stringify({
        model: 'minimax-m2.5-free',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1024
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Erro da API OpenCode:', error)
      return res.status(response.status).json(error)
    }

    const data = await response.json()
    const reply = data.choices[0]?.message?.content

    return res.status(200).json({ 
      reply,
      usage: data.usage 
    })

  } catch (error) {
    console.error('Erro no proxy:', error)
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: error.message 
    })
  }
}
