import React from "react";
import "./App.css";

// Imagens (use outras URLs se quiser)
const logoSPFC = "https://upload.wikimedia.org/wikipedia/commons/2/2e/S%C3%A3o_Paulo_FC_crest.svg";
const palmeiras = "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg";
const santos = "https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg";
const jogador1 = "https://i.imgur.com/BDQvYd2.jpg";
const jogador2 = "https://i.imgur.com/B9YmVXo.jpg";
const noticia1 = "https://i.imgur.com/4YQbAqV.jpg";
const noticia2 = "https://i.imgur.com/7XcKQ5H.jpg";
const noticia3 = "https://i.imgur.com/5y4XUya.jpg";

// DESTAQUES
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
      <figure className="destaque-img">
        <a href={destaque.url}><img src={destaque.imagem} alt={destaque.titulo} /></a>
      </figure>
      <div className="destaque-meta">
        <span className="destaque-visitas">{destaque.visitas} visitas</span>
        <span className="destaque-comentarios">{destaque.comentarios} comentários</span>
      </div>
      <div className="destaque-categoria">{destaque.categoria}</div>
      <h2 className="destaque-titulo"><a href={destaque.url}>{destaque.titulo}</a></h2>
      <div className="destaque-interacoes">
        <span className="destaque-comp"><b>Compartilhar:</b> {destaque.compartilhamentos}</span>
        <span className="destaque-like">👍 {destaque.likes}</span>
        <span className="destaque-dislike">👎 {destaque.dislikes}</span>
      </div>
    </article>
  );
}

function App() {
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
              <div className="news-card">
                <img src={noticia1} alt="Notícia" />
                <div>
                  <div className="news-title">São Paulo vence clássico no Morumbi</div>
                  <div className="news-meta">21/05/2025 • Por Redação</div>
                </div>
              </div>
              <div className="news-card">
                <img src={noticia2} alt="Notícia" />
                <div>
                  <div className="news-title">Novo uniforme tricolor é lançado</div>
                  <div className="news-meta">20/05/2025 • Por Redação</div>
                </div>
              </div>
              <div className="news-card">
                <img src={noticia3} alt="Notícia" />
                <div>
                  <div className="news-title">SPFC divulga agenda de treinos da semana</div>
                  <div className="news-meta">19/05/2025 • Por Redação</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="destaques-title">Destaques</h2>
          <div className="destaques-mosaico">
            {destaques.map((d) => (
              <DestaqueCard destaque={d} key={d.id} />
            ))}
          </div>
        </section>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="card">
            <h2>Próximos Jogos</h2>
            <div className="match-list">
              <div className="match-item">
                <img src={logoSPFC} alt="SPFC" className="escudo" />
                <span className="vs">vs</span>
                <img src={palmeiras} alt="Palmeiras" className="escudo" />
                <div className="match-details">
                  <strong>25/05/2025</strong>
                  <span>Morumbi - 16h</span>
                </div>
              </div>
              <div className="match-item">
                <img src={logoSPFC} alt="SPFC" className="escudo" />
                <span className="vs">vs</span>
                <img src={santos} alt="Santos" className="escudo" />
                <div className="match-details">
                  <strong>01/06/2025</strong>
                  <span>Morumbi - 18h</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Elenco em Destaque</h2>
            <div className="player-card">
              <img src={jogador1} alt="Luciano" className="player-thumb" />
              <div>
                <div className="player-nome">Luciano</div>
                <div className="player-pos">Atacante</div>
              </div>
            </div>
            <div className="player-card">
              <img src={jogador2} alt="Rafael" className="player-thumb" />
              <div>
                <div className="player-nome">Rafael</div>
                <div className="player-pos">Goleiro</div>
              </div>
            </div>
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
