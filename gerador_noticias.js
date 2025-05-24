const fs = require('fs');
const fetch = require('node-fetch');

const API_COHERE = "https://api.cohere.ai/generate"; // Substituir pela chave e endpoint reais
const API_UNSPLASH = "https://api.unsplash.com/photos/random?query=football&client_id=SEU_UNSPLASH_KEY";

async function gerarNoticia() {
    try {
        // 1. Gerar notícia com Cohere
        const cohereResponse = await fetch(API_COHERE, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer SEU_COHERE_KEY" },
            body: JSON.stringify({ prompt: "Crie uma manchete sobre futebol e um breve resumo da notícia." })
        });
        const cohereData = await cohereResponse.json();

        if (!cohereData.generations || !cohereData.generations[0]) {
            throw new Error("Falha ao obter notícia da IA.");
        }

        const noticia = {
            title: cohereData.generations[0].text.split(".")[0], // Pega apenas a manchete
            subtitle: cohereData.generations[0].text, // Texto completo
            imageUrl: "/images/placeholder.jpg" // Provisório, até buscar uma imagem real
        };

        // 2. Buscar imagem relacionada usando Unsplash
        const unsplashResponse = await fetch(API_UNSPLASH);
        const unsplashData = await unsplashResponse.json();

        if (unsplashData.urls && unsplashData.urls.regular) {
            noticia.imageUrl = `/images/noticia_${Date.now()}.jpg`;
            
            // 3. Baixar imagem e salvar em /public/images
            const imageResponse = await fetch(unsplashData.urls.regular);
            const buffer = await imageResponse.buffer();
            fs.writeFileSync(`public${noticia.imageUrl}`, buffer);
        }

        // 4. Atualizar noticias.json
        const noticiasAtuais = fs.existsSync("public/noticias.json") 
            ? JSON.parse(fs.readFileSync("public/noticias.json")) 
            : [];

        noticiasAtuais.unshift(noticia);
        fs.writeFileSync("public/noticias.json", JSON.stringify(noticiasAtuais, null, 2));

        console.log("✅ Notícia gerada e salva com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao gerar notícia:", error);
    }
}

gerarNoticia();
