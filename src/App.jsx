import React from "react";
import "./App.css";

const noticiasAutomatizadas = [
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

// Logos de origem
const LOGO_X = "https://upload.wikimedia.org/wikipedia/commons/6/6f/X_icon.svg";
const LOGO_THREADS = "https://seeklogo.com/images/T/threads-logo-9F0C799529-seeklogo.com.png";

// Dados simulados para o Fórum
const forumTopicos = [
  {
    id: 1,
    origem: "x",
    autor: "JoãoTorcedor",
    data: "23/05/2025 00:45",
    titulo: "O que acharam da escalação para o clássico?",
    respostas: 12,
    trecho: "Gostei do esquema com três zagueiros, mas acho que faltou ofensividade no segundo tempo...",
    link: "#"
  },
  {
    id: 2,
    origem: "x",
    autor: "AnaSPFC",
    data: "22/05/2025 21:15",
    titulo: "Calleri ou Luciano: quem foi mais decisivo hoje?",
    respostas: 8,
    trecho: "Ambos jogaram muito, mas na minha opinião o Calleri foi fundamental com aquele gol de cabeça...",
    link: "#"
  },
  {
    id: 3,
    origem: "threads",
    autor: "TricolorFiel",
    data: "22/05/2025 18:00",
    titulo: "Alguém vai no churrasco da Independente?",
    respostas: 4,
    trecho: "Galera, quem vai colar no churrasco esse fim de semana? Bora marcar de ir juntos!",
    link: "#"
  }
];

function getLogoOrigem(origem) {
  if (origem === "x") return LOGO_X;
  if (origem === "threads") return LOGO_THREADS;
  return LOGO_X;
}

function App() {
  return (
    <div className="main-container">
      <header className="header">
        <h1>SPFC News</h1>
        <div className="main-news-cover">
          <img
            src={noticiasAutomatizadas[0].imageUrl}
            alt="Capa principal"
            className="main-news-image"
          />
          <div className="main-news-content">
            <span className="news-label">Notícia em destaque</span>
            <h2 className="main-news-title">{noticiasAutomatizadas[0].title}</h2>
            <p className="main-news-subtitle">{noticiasAutomatizadas[0].subtitle}</p>
          </div>
        </div>
      </header>

      <div className="content-layout">
        <main className="news-cards-section">
          <h3>Últimas Notícias</h3>
          <div className="news-cards-list">
            {noticiasAutomatizadas.slice(1).map((noticia, idx) => (
              <div className="news-card" key={idx}>
                <img src={noticia.imageUrl} alt={noticia.title} />
                <div className="news-card-content">
                  <h4>{noticia.title}</h4>
                  <p>{noticia.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fórum central estilo MeuTimão, sem tag de tipo e sem botão novo tópico */}
          <section className="forum-central">
            <h3 style={{ margin: "32px 0 16px" }}>Discussão / Fórum</h3>
            <div className="forum-list">
              {forumTopicos.map(topico => (
                <div className="forum-topic" key={topico.id} style={{
                  display: "flex", alignItems: "flex-start", padding: "16px",
                  border: "1px solid #eee", borderRadius: "8px", marginBottom: "18px", background: "#fafafa"
                }}>
                  <img
                    src={getLogoOrigem(topico.origem)}
                    alt={topico.origem}
                    style={{
                      width: 44, height: 44,
                      borderRadius: "50%", marginRight: 18, border: "2px solid #dc143c", background: "#fff", objectFit: "cover"
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: 4, flexWrap: "wrap" }}>
                      <a href={topico.link} style={{
                        fontWeight: "bold", color: "#dc143c", fontSize: "1.12rem", marginRight: 8,
                        textDecoration: "none"
                      }}>
                        {topico.titulo}
                      </a>
                      <span style={{ color: "#666", fontSize: "0.9rem", marginRight: 10 }}>
                        por <b>{topico.autor}</b> • {topico.data}
                      </span>
                      <span style={{ color: "#888", fontSize: "0.95rem", marginLeft: "auto" }}>
                        <b>{topico.respostas}</b> respostas
                      </span>
                    </div>
                    <div style={{ marginBottom: 6, color: "#444" }}>
                      {topico.trecho}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <aside className="sidebar">
          <section className="next-matches">
            <h3>Próximos Jogos</h3>
            <ul>
              {proximosJogos.map((jogo, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <img src={escudos[jogo.casa]} alt={jogo.casa} style={{ width: 32, height: 32, marginRight: 6 }} />
                  <b>{jogo.casa}</b>
                  <span style={{ margin: "0 6px" }}>x</span>
                  <img src={escudos[jogo.fora]} alt={jogo.fora} style={{ width: 32, height: 32, marginRight: 6 }} />
                  <b>{jogo.fora}</b>
                  <div style={{ marginLeft: 10, fontSize: "0.9rem" }}>
                    <div>
                      {jogo.data} - {jogo.hora} - {jogo.campeonato}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="standings">
            <h3>Classificação</h3>
            <table>
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
                    <img src={escudos["São Paulo"]} alt="São Paulo" style={{ width: 22, verticalAlign: "middle", marginRight: 5 }} />
                    São Paulo
                  </td>
                  <td>25</td>
                  <td>3º</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="events">
            <h3>Eventos</h3>
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

          <section className="videos-section">
            <h3>Vídeos em Destaque</h3>
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
                <p style={{ fontSize: "0.95rem" }}>Melhores Momentos - São Paulo x Palmeiras</p>
              </div>
              {/* Adicione mais vídeos como desejar */}
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
