const fetch = require('node-fetch');
const fs = require('fs');

const API_KEY = process.env.COHERE_API_KEY;

async function gerarNoticia() {
  const prompt = "Escreva uma notícia curta, otimista e fictícia sobre o São Paulo Futebol Clube para torcedores.";

  const response = await fetch('https://api.cohere.ai/v1/chat', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "command-r-plus", // Você pode trocar para "command" para consumir menos créditos
      message: prompt,
      temperature: 0.9,
      max_tokens: 400,
      stream: false
    })
  });

  if (!response.ok) {
    throw new Error(`Erro na IA: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  const noticia = data.text?.trim() || "Não foi possível gerar notícia.";

  fs.writeFileSync('public/noticias.json', JSON.stringify({ noticia }, null, 2), 'utf-8');
  console.log("Notícia gerada e salva em public/noticias.json!");
}

gerarNoticia().catch(err => {
  console.error("Erro ao gerar notícia:", err);
  process.exit(1);
});
