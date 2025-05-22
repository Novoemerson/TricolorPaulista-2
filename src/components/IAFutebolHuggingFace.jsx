import React, { useState } from "react";

function IAFutebolHuggingFace() {
  const [resposta, setResposta] = useState("");

  async function gerarNoticia() {
    setResposta("Gerando notícia...");
    const prompt = "Escreva uma notícia criativa e atual sobre o futebol do São Paulo FC.";
    const response = await fetch("https://api-inference.huggingface.co/models/openai-community/gpt2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer SUA_API_KEY_AQUI"
      },
      body: JSON.stringify({inputs: prompt})
    });
    const dataRaw = await response.text();
    try {
      const data = JSON.parse(dataRaw);
      setResposta(data[0]?.generated_text || "Não foi possível gerar notícia.");
    } catch (e) {
      setResposta("Erro da IA: " + dataRaw);
    }
  }

  return (
    <div>
      <button onClick={gerarNoticia}>Gerar notícia de IA</button>
      <div>{resposta}</div>
    </div>
  );
}

export default IAFutebolHuggingFace;
