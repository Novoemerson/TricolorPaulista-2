const fetch = require('node-fetch');
const fs = require('fs');

const HF_API_URL = "https://api-inference.huggingface.co/models/bigscience/bloomz-560m";
const HF_API_TOKEN = process.env.HF_API_TOKEN; // O token está salvo nos segredos do GitHub

async function gerarNoticia() {
  // Prompt em português para a IA
  const prompt = "Crie uma notícia fictícia, curta e positiva sobre o São Paulo Futebol Clube para publicar em um site de torcedores:";

  const response = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${HF_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: prompt })
  });

  if (!response.ok) {
    throw new Error(`Erro na IA: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  // O texto gerado está em `data[0].generated_text`
  const noticia = data[0]?.generated_text || "Não foi possível gerar notícia.";

  // Salva no noticias.json
  fs.writeFileSync('public/noticias.json', JSON.stringify({ noticia }, null, 2), 'utf-8');
  console.log("Notícia gerada e salva em public/noticias.json!");
}

gerarNoticia().catch(err => {
  console.error("Erro ao gerar notícia:", err);
  process.exit(1);
});
