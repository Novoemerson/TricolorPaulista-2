import React, { useEffect, useState } from "react";

// Imagens confiáveis
const logoSPFC = "https://upload.wikimedia.org/wikipedia/commons/2/2e/S%C3%A3o_Paulo_FC_crest.svg";
const palmeiras = "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg";
const santos = "https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg";
const noticia1 = "https://upload.wikimedia.org/wikipedia/commons/a/a2/Est%C3%A1dio_do_Morumbi_-_panor%C3%A2mica_2014.jpg";
const noticia2 = "https://upload.wikimedia.org/wikipedia/commons/8/88/Torcida_Sao_Paulo_FC_Morumbi_2015.jpg";
const noticia3 = "https://upload.wikimedia.org/wikipedia/commons/4/44/S%C3%A3o_Paulo_FC_jogo_2018.jpg";
const jogador1 = "https://s.glbimg.com/es/sde/f/2019/05/21/8e3e0c7bfaeb4b2b8a44b6f2d8e815b6_Luciano_SPFC.png";
const jogador2 = "https://s.glbimg.com/es/sde/f/2023/01/11/2f634d15f6f34c7b9983e1c4a1b62aee_Rafael_Goleiro.png";

// Função para chamar HuggingFace API
async function pedirIA(prompt) {
  const response = await fetch("https://api-inference.huggingface.co/models/bigscience/bloomz-560m", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({inputs: prompt})
  });
  const data = await response.json();
  if (data.error) {
    return "Erro da IA: " + data.error;
  }
  return data[0]?.generated_text || "Não foi possível gerar conteúdo.";
}

// Hook customizado para atualizar textos via IA a cada X milissegundos
function useIAFeed(prompt, intervalo_ms = 180000) {
  const [texto, setTexto] = useState("Carregando...");
  useEffect(() => {
    let ativo = true;
    async function atualizar() {
      setTexto("Carregando...");
      try {
        const textoIA = await pedirIA(prompt);
        if (ativo) setTexto(textoIA.replace(prompt, "").trim());
      } catch (e) {
        if (ativo) setTexto("Erro ao obter informação da IA: " + e.message);
      }
    }
    atualizar();
    const timer = setInterval(atualizar, intervalo_ms);
    return () => {
      ativo = false;
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, [prompt, intervalo_ms]);
  return texto;
}

function App() {
  // Prompts para cada seção
  const promptNoticias = "Escreva um resumo de 3 notícias recentes sobre o futebol do São Paulo FC, formato: 1. Título e resumo curto. 2. Título e resumo curto. 3. Título e resumo curto.";
  const promptDestaques = "Liste 3 destaques do dia sobre o São Paulo FC, cada um com título, categoria e breve explicação.";
  const promptJogos = "Quais são os próximos 2 jogos do São Paulo FC? Escreva a data, adversário, local e horário para cada um.";
  const promptElenco = "Destaque 2 jogadores do São Paulo FC hoje, escreva nome, posição e uma curiosidade sobre cada um.";

  // Alimentação automática via IA
  const noticiasIA = useIAFeed(promptNoticias);
  const destaquesIA = useIAFeed(promptDestaques);
  const jogosIA = useIAFeed(promptJogos);
  const elencoIA = useIAFeed(promptElenco);

  return (
    <div className="site-bg">
      {/* Header */}
      <header className="site-header">
        <div className="site-header-area">
          <img src={logoSPFC} alt="SPFC" className="site-logo" />
          <span className="site-title">Tricolor Paulista</span>
          <nav className="site-menu">
            <a href="#">Início</a>
            <a href="#">Notícias</a>
            <a href="#">Jogos</a>
            <a href="#">Elenco</a>
            <a href="#">Torcida</a>
            <a href="#">Comunidade</a>
            <a href="#">Sobre</a>
          </nav>
        </div>
      </header>

      {/* Main Layout */}
      <main className="site-main">
        {/* COLUNA PRINCIPAL */}
        <section className="main-content">
          <div className="portal-banner">
            O maior portal do São Paulo FC na web!
          </div>

          <div className="noticias-bloco">
            <h2>Últimas Notícias</h2>
            <div className="news-list">
              {noticiasIA.split(/\d+\.\s/).filter(Boolean).map((noti, idx) => (
                <div className="news-card" key={idx}>
                  <img src={[noticia1, noticia2, noticia3][idx % 3]} alt="Notícia" />
                  <div>
                    <div className="news-title">{noti.split(":")[0]}</div>
                    <div className="news-meta">{noti.split(":").slice(1).join(":")}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="destaques-title">Destaques</h2>
          <div className="destaques-mosaico">
            {destaquesIA.split(/\d+\.\s/).filter(Boolean).map((desc, idx) => (
              <article className="destaque-card" key={idx}>
                <figure className="destaque-img">
                  <img src={[noticia1, noticia2, noticia3][idx % 3]} alt="Destaque" />
                </figure>
                <div className="destaque-meta">
                  <span className="destaque-categoria">{desc.split(":")[0]}</span>
                </div>
                <h2 className="destaque-titulo">{desc.split(":")[1] || desc}</h2>
                <div className="destaque-interacoes">
                  <span className="destaque-comp">IA Atualizado</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="card">
            <h2>Próximos Jogos</h2>
            <div className="match-list">
              {jogosIA.split(/\d+\.\s/).filter(Boolean).map((jogo, idx) => (
                <div className="match-item" key={idx}>
                  <img src={logoSPFC} alt="SPFC" className="escudo" />
                  <span className="vs">vs</span>
                  <img src={idx === 0 ? palmeiras : santos} alt={idx === 0 ? "Palmeiras" : "Santos"} className="escudo" />
                  <div className="match-details">{jogo}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h2>Elenco em Destaque</h2>
            {elencoIA.split(/\d+\.\s/).filter(Boolean).map((jog, idx) => (
              <div className="player-card" key={idx}>
                <img src={[jogador1, jogador2][idx % 2]} alt="Jogador" className="player-thumb" />
                <div>
                  <div className="player-nome">{jog.split(":")[0]}</div>
                  <div className="player-pos">{jog.split(":").slice(1).join(":")}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <img src={logoSPFC} alt="Escudo SPFC" className="footer-logo" />
        Tricolor Paulista © 2025 — Não oficial, dedicado à torcida do São Paulo FC.
        <br />
        <span style={{ color: "#da291c" }}>#VamosSãoPaulo</span>
      </footer>
    </div>
  );
}

export default App;
