const fs = require('fs');
const fetch = require('node-fetch');

async function gerarNoticia() {
  // 1. Gera texto com Cohere
  // 2. Busca imagem relacionada usando Unsplash ou outra API
  // 3. Baixa imagem para /public/images
  // 4. Atualiza noticias.json com texto e caminho da imagem
  
  // Exemplo fictício:
  const noticia = {
    title: "Novo reforço chega ao São Paulo",
    subtitle: "Atacante argentino assina até 2026.",
    imageUrl: "/images/novo-reforco.jpg"
  };
  fs.writeFileSync('public/noticias.json', JSON.stringify([noticia], null, 2));
  // Faça download da imagem para /public/images/novo-reforco.jpg
}
gerarNoticia();
