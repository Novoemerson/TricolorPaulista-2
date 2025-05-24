const fs = require('fs');
const fetch = require('node-fetch');

async function gerarNoticia() {
    try {
        console.log("🚀 Iniciando geração de notícia...");

        // 1️⃣ Gerar notícia com IA Cohere
        const cohereResponse = await fetch("https://api.cohere.ai/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer SEU_COHERE_KEY" },
            body: JSON.stringify({ prompt: "Crie uma manchete sobre futebol e um breve resumo atualizado." })
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

        console.log("✅ Nova notícia gerada:", noticia);

        // 2️⃣ Ler o JSON atual e adicionar novas notícias ao invés de sobrescrever!
        const filePath = "public/noticias.json";
        let noticiasAtuais = [];

        if (fs.existsSync(filePath)) {
            const conteudoAtual = fs.readFileSync(filePath, "utf-8");
            if (conteudoAtual.trim()) {
                noticiasAtuais = JSON.parse(conteudoAtual);
            }
        }

        noticiasAtuais.unshift(noticia); // Adiciona nova notícia no topo
        fs.writeFileSync(filePath, JSON.stringify(noticiasAtuais, null, 2));

        console.log("✅ `noticias.json` atualizado corretamente!");
    } catch (error) {
        console.error("❌ Erro ao gerar notícia:", error);
    }
}

gerarNoticia();
