import React, { useEffect, useState } from "react";
import "./App.css";

// Proximos jogos
const proximosJogos = [
  {
    adversario: "Palmeiras",
    data: "25/05/2025",
    horario: "16:00",
    local: "Morumbi",
    campeonato: "Brasileirão"
  },
  {
    adversario: "Santos",
    data: "29/05/2025",
    horario: "19:30",
    local: "Vila Belmiro",
    campeonato: "Copa do Brasil"
  },
  {
    adversario: "Flamengo",
    data: "02/06/2025",
    horario: "21:00",
    local: "Maracanã",
    campeonato: "Brasileirão"
  }
];

// Tópicos do fórum (exemplo)
const forumTopicos = [
  {
    titulo: "Qual deve ser o time titular para o clássico?",
    respostas: 42,
    autor: "tricolor2025"
  },
  {
    titulo: "Contratações para o segundo semestre",
    respostas: 18,
    autor: "spfcnews"
  },
  {
    titulo: "Análise do último jogo",
    respostas: 27,
    autor: "lucas_ribeiro"
  }
];

// Escudos para a sidebar
const escudos = [
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/São_Paulo_FC_Logo.svg",
  "https://seeklogo.com/images/P/palmeiras-logo-9C3C1B3F12-seeklogo.com.png",
  "https://logodownload.org/wp-content/uploads/2015/05/santos-logo-escudo.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flamengo_braz_logo.svg"
];

function App() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("/noticias.json")
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch(() => setNoticias([]));
  }, []);

  return (
    <div className="main-container">
      {/* CAPA IGUAL MEUTIMAO */}
      <header className="header">
        {noticias[0] && (
          <div className="cover-highlight">
            <img
              src={noticias[0].imageUrl}
              alt="Capa principal"
              className="cover-image"
            />
            <div className="cover-info">
              <span className="cover-label">Notícia em destaque</span>
              <h1 className="cover-title">{noticias[0].title}</h1>
              <p className="cover-subtitle">{noticias[0].subtitle}</p>
            </div>
          </div>
        )}
      </header>

      <div className="content-layout">
        {/* SIDEBAR ESQUERDA */}
        <aside className="sidebar left">
          <div className="sidebar-section">
            <h3>Próximos Jogos</h3>
            <ul className="games-list">
              {proximosJogos.map((jogo, idx) => (
                <li key={idx} className="game-card">
                  <span className="game-vs">
                    <img src={escudos[0]} alt="SPFC" className="escudo" />
                    <b>SPFC</b> x <b>{jogo.adversario}</b>
                  </span>
                  <span>{jogo.data} - {jogo.horario}</span>
                  <span>{jogo.local}</span>
                  <span className="game-champ">{jogo.campeonato}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* COLUNA PRINCIPAL */}
        <main className="center-content">
          {/* NOTÍCIAS GRANDES */}
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

          {/* FÓRUM */}
          <section className="forum-section">
            <h2>Fórum do Torcedor</h2>
            <ul className="forum-list">
              {forumTopicos.map((topico, idx) => (
                <li key={idx} className="forum-topic-card">
                  <h3>{topico.titulo}</h3>
                  <span>{topico.respostas} respostas • por {topico.autor}</span>
                </li>
              ))}
            </ul>
            <button className="forum-btn">Ver mais tópicos</button>
          </section>

          {/* VÍDEOS */}
          <section className="videos-section">
            <h2>Vídeos Recentes</h2>
            <div className="videos-list">
              <iframe
                width="300"
                height="180"
                src="https://www.youtube.com/embed/7rYw8YkZ6kU"
                title="YouTube video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="300"
                height="180"
                src="https://www.youtube.com/embed/cwQgjq0mCdE"
                title="YouTube video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </main>

        {/* SIDEBAR DIREITA */}
        <aside className="sidebar right">
          <div className="sidebar-section">
            <h3>Escudos dos Rivais</h3>
            <div className="escudos-list">
              {escudos.slice(1).map((escudo, idx) => (
                <img src={escudo} key={idx} alt="Escudo rival" className="escudo-rival" />
              ))}
            </div>
          </div>
          <div className="sidebar-section">
            <h3>Publicidade</h3>
            <div className="ads-placeholder">
              <span>Anuncie aqui</span>
            </div>
          </div>
        </aside>
      </div>
      <footer>
        <div>SPFC News - 100% automatizado por IA • 2025</div>
      </footer>
    </div>
  );
}

export default App;
