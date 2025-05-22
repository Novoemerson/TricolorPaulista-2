import React from "react";
import "./App.css";

// Imagens online (escudos e fotos)
const logoSPFC = "https://upload.wikimedia.org/wikipedia/commons/2/2e/S%C3%A3o_Paulo_FC_crest.svg";
const palmeiras = "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg";
const santos = "https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg";
const jogador1 = "https://i.imgur.com/BDQvYd2.jpg";
const jogador2 = "https://i.imgur.com/B9YmVXo.jpg";
const noticia1 = "https://i.imgur.com/4YQbAqV.jpg";
const noticia2 = "https://i.imgur.com/7XcKQ5H.jpg";
const noticia3 = "https://i.imgur.com/5y4XUya.jpg";

// Noticias em destaque estilo meutimao
const destaques = [
  {
    id: 1,
    visitas: "4,2 mil",
    comentarios: 49,
    categoria: "Relacionados",
    titulo: "São Paulo divulga lista de relacionados com três ausências e uma novidade contra o Palmeiras",
    imagem: noticia1,
    url: "#",
    compartilhamentos: 7,
    likes: 55,
    dislikes: 7,
  },
  {
    id: 2,
    visitas: "1,1 mil",
    comentarios: 12,
    categoria: "De fora",
    titulo: "Volante vira desfalque do São Paulo para clássico do Brasileirão; veja detalhes",
    imagem: noticia2,
    url: "#",
    compartilhamentos: 2,
    likes: 16,
    dislikes: 4,
  },
  {
    id: 3,
    visitas: "690",
    comentarios: 9,
    categoria: "Decisão!",
    titulo: "São Paulo finaliza preparação para encarar o Palmeiras; veja provável escalação",
    imagem: noticia3,
    url: "#",
    compartilhamentos: 0,
    likes: 5,
    dislikes: 2,
  },
];

function DestaqueCard({destaque}) {
  return (
    <article className="destaque-card">
      <div className="destaque-header">
        <p className="destaque-num">
          <span className="visitas">{destaque.visitas}</span>
          <span className="comentarios">{destaque.comentarios}</span>
        </p>
        <h4>
          <a href={destaque.url}>{destaque.categoria}</a>
        </h4>
      </div>
      <figure className="destaque-img">
        <a href={destaque.url}><img src={destaque.imagem} alt={destaque.titulo} /></a>
      </figure>
      <div className="destaque-chamada">
        <h2><a href={destaque.url}>{destaque.titulo}</a></h2>
      </div>
      <div className="destaque-interacoes">
        <a href="#" className="compartilhamentos">
          <em>compartilhamentos</em>
          <span>{destaque.compartilhamentos}</span>
        </a>
        <div className="likes">
          <a href="#" className="like">
            <em>gostei</em>
            <span>{destaque.likes}</span>
          </a>
          <a href="#" className="dislike">
            <em>não gostei</em>
            <span>{destaque.dislikes}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="tp-bg">
      {/* Header */}
      <header className="tp-header">
        <div className="tp-header-container">
          <div className="tp-logo-area">
            <img src={logoSPFC} alt="SPFC" className="tp-logo" />
            <span className="tp-site-title">Tricolor Paulista</span>
          </div>
          <nav className="tp-main-menu">
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

      {/* Main grid */}
      <main className="tp-main-container">
        {/* Coluna esquerda (notícias/destaques) */}
        <section className="tp-main-content">
          <div className="tp-banner">
            O maior portal do São Paulo FC na web!
          </div>
          <h2 className="tp-section-title">Últimas Notícias</h2>
          <div className="tp-news-group">
            <div className="tp-news-card">
              <img src={noticia1} alt="Notícia" className="tp-news-thumb" />
              <div>
                <div className="tp-news-titulo">São Paulo vence clássico no Morumbi</div>
                <div className="tp-news-meta">21/05/2025 • Por Redação</div>
              </div>
            </div>
            <div className="tp-news-card">
              <img src={noticia2} alt="Notícia" className="tp-news-thumb" />
              <div>
                <div className="tp-news-titulo">Novo uniforme tricolor é lançado</div>
                <div className="tp-news-meta">20/05/2025 • Por Redação</div>
              </div>
            </div>
            <div className="tp-news-card">
              <img src={noticia3} alt="Notícia" className="tp-news-thumb" />
              <div>
                <div className="tp-news-titulo">SPFC divulga agenda de treinos da semana</div>
                <div className="tp-news-meta">19/05/2025 • Por Redação</div>
              </div>
            </div>
          </div>
          <h2 className="tp-section-title">Destaques</h2>
          <div className="tp-destaques-mosaico">
            {destaques.map((d, idx) => (
              <DestaqueCard destaque={d} key={d.id} />
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="tp-sidebar">
          <div className="tp-card tp-card-next-match">
            <h2>Próximos Jogos</h2>
            <div className="tp-next-match">
              <div className="tp-next-match-item">
                <img src={logoSPFC} alt="SPFC" className="tp-escudo" />
                <span className="tp-vs">vs</span>
                <img src={palmeiras} alt="Palmeiras" className="tp-escudo" />
                <div className="tp-next-details">
                  <strong>25/05/2025</strong>
                  <span>Morumbi - 16h</span>
                </div>
              </div>
              <div className="tp-next-match-item">
                <img src={logoSPFC} alt="SPFC" className="tp-escudo" />
                <span className="tp-vs">vs</span>
                <img src={santos} alt="Santos" className="tp-escudo" />
                <div className="tp-next-details">
                  <strong>01/06/2025</strong>
                  <span>Morumbi - 18h</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-card">
            <h2>Elenco em Destaque</h2>
            <div className="tp-player-card">
              <img src={jogador1} alt="Luciano" className="tp-player-thumb" />
              <div>
                <div className="tp-player-nome">Luciano</div>
                <div className="tp-player-pos">Atacante</div>
              </div>
            </div>
            <div className="tp-player-card">
              <img src={jogador2} alt="Rafael" className="tp-player-thumb" />
              <div>
                <div className="tp-player-nome">Rafael</div>
                <div className="tp-player-pos">Goleiro</div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="tp-footer">
        <img src={logoSPFC} alt="Escudo SPFC" className="tp-logo-footer" />
        Tricolor Paulista © 2025 — Não oficial, dedicado à torcida do São Paulo FC.
        <br />
        <span style={{ color: "#da291c" }}>#VamosSãoPaulo</span>
      </footer>
    </div>
  );
}

export default App;
