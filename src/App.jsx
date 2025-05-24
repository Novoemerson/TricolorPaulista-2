import React, { useState, useEffect } from "react";
import "./App.css";

// 🔹 Estado para armazenar notícias dinamicamente
const [noticias, setNoticias] = useState([]);
const [dadosSaoPaulo, setDadosSaoPaulo] = useState(null); // Estado para armazenar dados do São Paulo FC

// 🔹 Carregar notícias automaticamente
useEffect(() => {
  fetch("/noticias.json") 
    .then(response => response.json())
    .then(data => setNoticias(data))
    .catch(error => console.error("Erro ao carregar notícias:", error));
}, []);

// 🔹 Buscar dados do São Paulo FC via API de Futebol
useEffect(() => {
  fetch("https://api.example.com/futebol/sao-paulo")  // 🔹 Substitua com URL real da API
    .then(response => response.json())
    .then(data => setDadosSaoPaulo(data))
    .catch(error => console.error("Erro ao buscar dados do São Paulo FC:", error));
}, []);

const escudos = {
  "São Paulo": "https://upload.wikimedia.org/wikipedia/commons/5/5e/São_Paulo_FC_Logo.svg",
  "Palmeiras": "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg",
  "Grêmio": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Gremio_logo.svg",
  "Atlético-MG": "https://upload.wikimedia.org/wikipedia/commons/8/81/Clube_Atlético_Mineiro_logo.svg"
};

function App() {
  return (
    <div className="main-container">
      <header className="header">
        <div className="cover-highlight">
          {noticias.length > 0 && (
            <>
              <img src={noticias[0].imageUrl} alt="Capa principal" className="cover-image" />
              <div className="cover-info">
                <span className="cover-label">Notícia em destaque</span>
                <h1 className="cover-title">{noticias[0].title}</h1>
                <p className="cover-subtitle">{noticias[0].subtitle}</p>
              </div>
            </>
          )}
        </div>
      </header>

      <div className="content-layout">
        <main className="center-content">
          <div className="big-news-list">
            {noticias.slice(1).map((noticia, idx) => (
              <div className="big-news-card" key={idx}>
                <img src={noticia.imageUrl} alt={noticia.title} className="big-news-img" />
                <div className="big-news-text">
                  <h2 className="big-news-title">{noticia.title}</h2>
                  <p className="big-news-subtitle">{noticia.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 🔹 Dados do São Paulo FC puxados da API */}
          {dadosSaoPaulo && (
            <section className="stats-spfc">
              <h2>São Paulo FC - Estatísticas Recentes</h2>
              <p>💥 Último jogo: {dadosSaoPaulo.ultimoJogo}</p>
              <p>⚽ Gols na temporada: {dadosSaoPaulo.gols}</p>
              <p>🔥 Posição no campeonato: {dadosSaoPaulo.posicao}</p>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
