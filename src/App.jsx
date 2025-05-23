import React from "react";
import "./App.css";

// Exemplo de notícias automatizadas vindas da IA/API
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

// URLs dos escudos (você pode trocar por outros de sua preferência)
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

function App() {
  return (
    <div className="main-container">
      {/* Topo e capa gigante */}
      <header className="header">
        <h1>SPFC News</h1>
        <div className="main-news-cover">
          {/* Notícia principal automatizada */}
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
        {/* Coluna esquerda: Notícias em cards */}
        <main className="news-cards-section">
          <h3>Últimas Notícias</h3>
          <div className="news-cards-list">
            {/* Cards automáticos de notícias, exceto a principal */}
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
        </main>

        {/* Coluna direita: Jogos, Classificação, Eventos, Fórum */}
        <aside className="sidebar">
          {/* Próximos jogos */}
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

          {/* Classificação */}
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
                {/* Outras linhas podem ser geradas */}
              </tbody>
            </table>
          </section>

          {/* Eventos */}
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

          {/* Fórum social */}
          <section className="forum">
            <h3>Discussão / Fórum</h3>
            <ul>
              <li>
                <span className="forum-author">@spfctorcedor</span> (X): 
                "O que acharam da escalação para o clássico?"
              </li>
              <li>
                <span className="forum-author">@tricolorfem</span> (Threads): 
                "Grande vitória das meninas do São Paulo!"
              </li>
              {/* Outros tópicos automáticos */}
            </ul>
          </section>
        </aside>
      </div>

      {/* Seção de vídeos */}
      <section className="videos-section">
        <h3>Vídeos em Destaque</h3>
        <div className="videos-list">
          <div className="video-card">
            <iframe
              width="320"
              height="180"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Vídeo do São Paulo"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <p>Melhores Momentos - São Paulo x Palmeiras</p>
          </div>
          {/* Outros vídeos automáticos */}
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        <div>SPFC News - 100% automatizado por IA • 2025</div>
      </footer>
    </div>
  );
}

export default App;
