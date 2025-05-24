const fs = require('fs');
const fetch = require('node-fetch');

async function gerarNoticia() {
    try {
        // Gerar notícia com IA Cohere
        const cohereResponse = await fetch("https://api.cohere.ai/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer SEU_COHERE_KEY" },
            body: JSON.stringify({ prompt: "Crie uma manchete sobre futebol e um breve resumo." })
        });
        const cohereData = await cohereResponse.json();
        
        if (!cohereData.generations || !cohereData.generations[0]) {
            throw new Error("❌ Falha ao obter notícia da IA Cohere!");
        }

        const noticia = {
            title: cohereData.generations[0].text.split(".")[0],
            subtitle: cohereData.generations[0].text,
            imageUrl: "/images/placeholder.jpg"
        };

        console.log("✅ Notícia gerada:", noticia);

        // Ler o JSON atual e adicionar nova notícia
        let noticiasAtuais = [];
        if (fs.existsSync("public/noticias.json")) {
            noticiasAtuais = JSON.parse(fs.readFileSync("public/noticias.json"));
        }

        noticiasAtuais.unshift(noticia); // Adiciona nova notícia no topo
        fs.writeFileSync("public/noticias.json", JSON.stringify(noticiasAtuais, null, 2));

        console.log("✅ Arquivo JSON atualizado!");
    } catch (error) {
        console.error("❌ Erro ao gerar notícia:", error);
    }
}

gerarNoticia();
