const fs = require("fs");
const fetch = require("node-fetch");

// === CONFIGURAÇÃO HUGGING FACE ===
const HF_API_TOKEN = process.env.HF_API_TOKEN;
const HF_API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-large";

// Função para pedir para a IA criar uma notícia
async function gerarNoticia(tituloOuTema) {
  const prompt = `Escreva uma notícia esportiva do São Paulo Futebol Clube com o tema: "${tituloOuTema}". Use no máximo 3 linhas.`;
  const response = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${HF_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: prompt }),
  });

  if (!response.ok) {
    throw new Error(`[ERRO] Hugging Face API: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();
  let texto = (json[0] && json[0].generated_text) ? json[0].generated_text : "Notícia gerada automaticamente.";
  return texto.trim();
}

// Função para adicionar notícia no JSON
function adicionarNoticiaAoArquivo(noticia, caminhoArquivo) {
  if (!fs.existsSync(caminhoArquivo)) {
    fs.writeFileSync(caminhoArquivo, JSON.stringify([noticia], null, 2));
    return;
  }
  const noticias = JSON.parse(fs.readFileSync(caminhoArquivo, "utf8"));
  noticias.unshift(noticia); // adiciona no início
  fs.writeFileSync(caminhoArquivo, JSON.stringify(noticias, null, 2));
}

// EXECUÇÃO
async function main() {
  const caminhoArquivo = "./public/noticias.json";
  const tema = "contratação de novo atacante";

  if (!HF_API_TOKEN) {
    throw new Error("HF_API_TOKEN não definido! Cadastre seu secret no GitHub Actions.");
  }

  console.log("Pedindo para a IA criar uma notícia...");
  const texto = await gerarNoticia(tema);

  const noticia = {
    title: `São Paulo: ${tema.charAt(0).toUpperCase() + tema.slice(1)}`,
    subtitle: texto,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/São_Paulo_FC_Logo.svg"
  };

  adicionarNoticiaAoArquivo(noticia, caminhoArquivo);

  console.log("Notícia adicionada ao arquivo!");
}

main().catch(err => {
  console.error("Erro:", err);
  process.exit(1);
});
