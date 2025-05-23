const fs = require("fs");
const fetch = require("node-fetch");

// === CONFIGURAÇÃO HUGGING FACE ===
const HF_API_TOKEN = "SEU_TOKEN_HUGGING_FACE"; // coloque seu token aqui
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
  const json = await response.json();
  let texto = json[0]?.generated_text || "Notícia gerada automaticamente.";
  return texto.trim();
}

// Função para adicionar notícia no JSON
function adicionarNoticiaAoArquivo(noticia, caminhoArquivo) {
  const noticias = JSON.parse(fs.readFileSync(caminhoArquivo, "utf8"));
  noticias.unshift(noticia); // adiciona no início
  fs.writeFileSync(caminhoArquivo, JSON.stringify(noticias, null, 2));
}

// EXECUÇÃO
async function main() {
  const caminhoArquivo = "./public/noticias.json"; // Ajuste se seu arquivo estiver em outro lugar
  const tema = "contratação de novo atacante"; // Você pode trocar ou pedir ao usuário

  console.log("Pedindo para a IA criar uma notícia...");
  const texto = await gerarNoticia(tema);

  // Se quiser separar título e subtítulo, pode pedir para a IA assim:
  const noticia = {
    title: `São Paulo: ${tema.charAt(0).toUpperCase() + tema.slice(1)}`,
    subtitle: texto,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/São_Paulo_FC_Logo.svg" // Troque se quiser
  };

  adicionarNoticiaAoArquivo(noticia, caminhoArquivo);

  console.log("Notícia adicionada ao arquivo!");
}

main();
