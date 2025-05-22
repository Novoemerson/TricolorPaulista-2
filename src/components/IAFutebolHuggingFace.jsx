import React, { useState } from "react";

function IAFutebolHuggingFace() {
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function gerarNoticia() {
    setCarregando(true);
    setResposta("Gerando notícia...");
    const prompt = "Escreva uma notícia criativa e atual sobre o futebol do São Paulo FC.";

    const response = await fetch("https://api-inference.huggingface.co/models/bigscience/bloomz-560m", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({inputs: prompt})
    });

    const data = await response.json();
    setResposta(data[0]?.generated_text || "Não foi possível gerar notícia.");
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

export default IAFutebolHuggingFace;
