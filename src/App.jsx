import React, { useEffect, useState } from "react";
import "./App.css";

// Fallback das notícias caso o JSON não carregue
const noticiasFallback = [
  {
    title: "São Paulo vence clássico e se aproxima do topo",
    subtitle: "Com gols de Calleri e Luciano, Tricolor conquista vitória importante.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/São_Paulo_FC_Logo.svg"
  },
  {
    title: "Feminino do SPFC conquista vaga inédita",
    subtitle: "Equipe feminina faz história e avança para a final do estadual.",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Base do São Paulo brilha na Copinha",
    subtitle: "Garotos do Tricolor fazem excelente campanha e avançam às semifinais.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "São Paulo anuncia novo patrocínio",
    subtitle: "Clube fecha contrato milionário para o restante da temporada.",
    imageUrl: "https://images.unsplash.com/photo-1505843276871-5b0606c61e39?auto=format&fit=crop&w=600&q=80"
  }
];

const escudos = {
  "São Paulo": "https://upload.wikimedia.org/wikipedia/commons/5/5e/São_Paulo_FC_Logo.svg",
  "Palmeiras": "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg",
  "Grêmio": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Gremio_logo.svg",
  "Atlético-MG": "https://upload.wikimedia.org/wikipedia/commons/8/81/Clube_Atlético_Mineiro_logo.svg"
};

const proximosJogos = [
  {
    casa: "São Paulo",
    fora: "Palmeiras",
    data: "25/05/2025",
    hora: "18:30",
    campeonato: "Brasileirão"
  },
  {
    casa: "São Paulo",
    fora: "Grêmio",
    data: "29/05/2025",
    hora: "21:00",
    campeonato: "Copa do Brasil"
  },
  {
    casa: "Atlético-MG",
    fora: "São Paulo",
    data: "02/06/2025",
    hora: "16:00",
    campeonato: "Brasileirão"
  }
];

const LOGO_X = "https://upload.wikimedia.org/wikipedia/commons/6/6f/X_icon.svg";
const LOGO_THREADS = "https://seeklogo.com/images/T/threads-logo-9F0C799529-seeklogo.com.png";

const forumTopicos = [
  {
    id: 1,
    origem: "x",
    autor: "JoãoTorcedor",
    data: "23/05/2025 00:45",
    titulo: "O que acharam da escalação para o clássico?",
    respostas: 12,
    trecho: "Gostei do esquema com três zagueiros, mas acho que faltou ofensividade no segundo tempo..."
  },
  {
    id: 2,
    origem: "x",
    autor: "AnaSPFC",
    data: "22/05/2025 21:15",
    titulo: "Calleri ou Luciano: quem foi mais decisivo hoje?",
    respostas: 8,
    trecho: "Ambos jogaram muito, mas na minha opinião o Calleri foi fundamental com aquele gol de cabeça..."
  },
  {
    id: 3,
    origem: "threads",
    autor: "TricolorFiel",
    data: "22/05/2025 18:00",
    titulo: "Alguém vai no churrasco da Independente?",
    respostas: 4,
    trecho: "Galera, quem vai colar no churrasco esse fim de semana? Bora marcar de ir juntos!"
  }
];

function getLogoOrigem(origem) {
  if (origem === "x") return LOGO_X;
  if (origem === "threads") return LOGO_THREADS;
  return LOGO_X;
}

function App() {
  const [noticias, setNoticias] = useState(noticiasFallback);

  useEffect(() => {
    fetch("/noticias.json")
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao carregar JSON");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setNoticias(data);
      })
      .catch(() => setNoticias(noticiasFallback));
  }, []);

  return (
    <div className="main-container">
      {/* CAPA IGUAL MEUTIMAO */}
      <header className="header">
        <div className="cover-highlight">
          <img
            src={noticias[0]?.imageUrl}
            alt="Capa principal"
            className="cover-image"
          />
          <div className="cover-info">
            <span className="cover-label">Notícia em destaque</span>
            <h1 className="cover-title">{noticias[0]?.title}</h1>
            <p className="cover-subtitle">{noticias[0]?.subtitle}</p>
          </div>
        </div>
      </header>

      <div className="content-layout">
        {/* COLUNA PRINCIPAL */}
        <main className="center-content">
          {/* NOTÍCIAS GRANDES IGUAL MEUTIMAO */}
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

          {/* FÓRUM CENTRAL */}
          <section className="forum-central">
            <h2>Discussão / Fórum</h2>
            <div className="forum-list">
              {forumTopicos.map(topico => (
                <div className="forum-topic" key={topico.id}>
                  <img
                    src={getLogoOrigem(topico.origem)}
                    alt={topico.origem}
                    className="forum-logo"
                  />
                  <div className="forum-topic-main">
                    <div className="forum-topic-header">
                      <span className="forum-topic-title">{topico.titulo}</span>
                      <span className="forum-topic-meta">
                        por <b>{topico.autor}</b> • {topico.data}
                      </span>
                      <span className="forum-topic-respostas">
                        <b>{topico.respostas}</b> respostas
                      </span>
                    </div>
                    <div className="forum-topic-body">
                      {topico.trecho}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* SIDEBAR */}
        <aside className="sidebar">
          {/* PROXIMOS JOGOS */}
          <section className="next-matches">
            <h2>Próximos Jogos</h2>
            <ul>
              {proximosJogos.map((jogo, idx) => (
                <li className="match-row" key={idx}>
                  <img src={escudos[jogo.casa]} alt={jogo.casa} className="escudo-time" />
                  <b>{jogo.casa}</b>
                  <span className="vs">x</span>
                  <img src={escudos[jogo.fora]} alt={jogo.fora} className="escudo-time" />
                  <b>{jogo.fora}</b>
                  <div className="match-info">
                    {jogo.data} - {jogo.hora} - {jogo.campeonato}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* CLASSIFICAÇÃO */}
          <section className="standings">
            <h2>Classificação</h2>
            <table className="standings-table">
              <thead>
                <tr>
                  <th>Clube</th>
                  <th>Pts</th>
                  <th>Pos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={escudos["São Paulo"]} alt="São Paulo" className="escudo-mini" />
                    São Paulo
                  </td>
                  <td>25</td>
                  <td>3º</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* EVENTOS */}
          <section className="events">
            <h2>Eventos</h2>
            <ul>
              <li>
                <a href="https://example.com/evento1" target="_blank" rel="noopener noreferrer">
                  Churrasco da Torcida Independente - 30/05/2025
                </a>
              </li>
              <li>
                <a href="https://example.com/evento2" target="_blank" rel="noopener noreferrer">
                  Caravana SPFC para Belo Horizonte - 02/06/2025
                </a>
              </li>
            </ul>
          </section>

          {/* VÍDEOS */}
          <section className="videos-section">
            <h2>Vídeos em Destaque</h2>
            <div className="videos-list">
              <div className="video-card">
                <iframe
                  width="250"
                  height="140"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="Vídeo do São Paulo"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
                <p className="video-title">Melhores Momentos - São Paulo x Palmeiras</p>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <footer>
        <div>SPFC News - 100% automatizado por IA • 2025</div>
      </footer>
    </div>
  );
}

export default App;
