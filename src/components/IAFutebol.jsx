import React, { useState } from "react";

function IAFutebol() {
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function gerarNoticia() {
    setCarregando(true);
    const prompt = "Faça uma notícia criativa sobre o futebol do São Paulo FC, atual e relevante.";
    const openaiKey = "SUA_CHAVE_OPENAI_AQUI";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // ou "gpt-4", se disponível
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200,
        temperature: 0.9,
      }),
    });

    const data = await response.json();
    setResposta(data.choices?.[0]?.message?.content || "Erro ao gerar notícia.");
    setCarregando(false);
  }

  return (
    <div className="ia-box">
      <button onClick={gerarNoticia} disabled={carregando}>
        {carregando ? "Gerando..." : "Gerar notícia de IA"}
      </button>
      <div className="ia-resposta" style={{marginTop: "1em", background: "#fafafa", padding: 15, borderRadius: 8}}>
        {resposta}
      </div>
    </div>
  );
}

export default IAFutebol;
