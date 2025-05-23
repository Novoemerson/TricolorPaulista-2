const fetch = require('node-fetch');
const fs = require('fs');

const API_KEY = process.env.OPENROUTER_API_KEY;
// Modelo escolhido: openai/gpt-4.1 (você pode trocar para outro modelo OpenRouter se quiser)
const MODEL = "openai/gpt-4.1";

async function gerarNoticia() {
  const prompt = "Escreva uma notícia curta, otimista e fictícia sobre o São Paulo Futebol Clube para torcedores.";

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
      // 'HTTP-Referer': 'https://seusite.com', // opcional
      // 'X-Title': 'Tricolor Paulista - Geração de Notícias' // opcional
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: "Você é um redator esportivo criativo e otimista." },
        { role: "user", content: prompt }
      ],
      max_tokens: 400,
      temperature: 0.9
    })
  });

  if (!response.ok) {
    throw new Error(`Erro na IA: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  // Para OpenRouter, a resposta está em choices[0].message.content
  const noticia = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
    ? data.choices[0].message.content.trim()
    : "Não foi possível gerar notícia.";

  fs.writeFileSync('public/noticias.json', JSON.stringify({ noticia }, null, 2), 'utf-8');
  console.log("Notícia gerada e salva em public/noticias.json!");
}

gerarNoticia().catch(err => {
  console.error("Erro ao gerar notícia:", err);
  process.exit(1);
});
