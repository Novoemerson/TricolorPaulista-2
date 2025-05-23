import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      {/* Topo e capa gigante */}
      <header className="header">
        <h1>SPFC News</h1>
        <div className="main-news-cover">
          {/* Notícia principal automatizada */}
          <img
            src="/placeholder-capa.jpg"
            alt="Capa principal"
            className="main-news-image"
          />
          <div className="main-news-content">
            <span className="news-label">Notícia em destaque</span>
            <h2 className="main-news-title">Título principal automatizado</h2>
            <p className="main-news-subtitle">Subtítulo gerado pela IA</p>
          </div>
        </div>
      </header>

      <div className="content-layout">
        {/* Coluna esquerda: Notícias em cards */}
        <main className="news-cards-section">
          <h3>Últimas Notícias</h3>
          <div className="news-cards-list">
            {/* Cards automáticos de notícias */}
            {[1,2,3,4].map((n) => (
              <div className="news-card" key={n}>
                <img src={`/placeholder-${n}.jpg`} alt="Notícia" />
                <div className="news-card-content">
                  <h4>Título automatizado {n}</h4>
                  <p>Subtítulo gerado pela IA {n}</p>
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
              <li>
                <b>São Paulo x Palmeiras</b> <br />
                25/05/2025 - 18:30 - Brasileirão
              </li>
              <li>
                <b>São Paulo x Grêmio</b> <br />
                29/05/2025 - 21:00 - Copa do Brasil
              </li>
              <li>
                <b>Atlético-MG x São Paulo</b> <br />
                02/06/2025 - 16:00 - Brasileirão
              </li>
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
                  <td>São Paulo</td>
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
