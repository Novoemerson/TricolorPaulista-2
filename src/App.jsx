import React from "react";
import "./App.css"; // O CSS principal
const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/2/2e/S%C3%A3o_Paulo_FC_crest.svg";
// ...
<img src={logoUrl} alt="SPFC" className="tp-logo" />

function App() {
  return (
    <div className="tp-bg">
      {/* HEADER */}
      <header className="tp-header">
        <div className="tp-header-container">
          <div className="tp-logo-area">
            <img src={logo} alt="SPFC" className="tp-logo" />
            <span className="tp-site-title">Tricolor Paulista</span>
          </div>
          <form className="tp-search-form">
            <input placeholder="Buscar notícia, jogador, jogo..." />
            <button type="submit">🔍</button>
          </form>
          <nav className="tp-main-menu">
            <a href="#">Início</a>
            <a href="#">Notícias</a>
            <a href="#">Jogos</a>
            <a href="#">Elenco</a>
            <a href="#">Torcida</a>
            <a href="#">Comunidade</a>
          </nav>
        </div>
      </header>

      {/* CONTAINER PRINCIPAL */}
      <main className="tp-main-container">
        {/* COLUNA PRINCIPAL */}
        <section className="tp-main-content">
          {/* Destaque */}
          <div className="tp-featured-news">
            <img
              src="/banner_spfc.jpg"
              alt="SPFC em campo"
              className="tp-featured-img"
            />
            <div className="tp-featured-info">
              <h1>São Paulo vence clássico e embala no campeonato!</h1>
              <span className="tp-featured-meta">
                21/05/2025 &bull; Morumbi &bull; Por Redação
              </span>
              <p>
                O Tricolor Paulista venceu o Palmeiras por 2 a 1 no Morumbi, com gols de Luciano e Calleri...
              </p>
              <a href="#" className="tp-btn tp-btn-red">Leia mais</a>
            </div>
          </div>
          {/* Notícias rápidas */}
          <div className="tp-news-list">
            <NewsCard
              img="/noticia_exemplo2.jpg"
              title="Novo uniforme tricolor é lançado"
              meta="20/05/2025 &bull; Por Redação"
              desc="O novo manto já está disponível nas lojas..."
            />
            <NewsCard
              img="/noticia_exemplo3.jpg"
              title="SPFC divulga agenda de treinos da semana"
              meta="19/05/2025 &bull; Por Redação"
              desc="Confira a programação do elenco para esta semana..."
            />
            <NewsCard
              img="/noticia_exemplo4.jpg"
              title="Calleri fala sobre gol decisivo"
              meta="18/05/2025 &bull; Por Redação"
              desc="Atacante celebrou a vitória e agradeceu à torcida."
            />
          </div>
        </section>

        {/* SIDEBAR */}
        <aside className="tp-sidebar">
          <div className="tp-card tp-card-next-match">
            <h2>Próximo Jogo</h2>
            <div className="tp-next-match-info">
              <img src={logo} alt="SPFC" className="tp-team-escudo" />
              <div className="tp-next-vs">vs</div>
              <img src="/escudo_palmeiras.png" alt="Palmeiras" className="tp-team-escudo" />
            </div>
            <div className="tp-next-details">
              <strong>25/05/2025</strong>
              <span>Morumbi - 16h</span>
            </div>
            <a href="#" className="tp-btn tp-btn-black">Ver tabela</a>
          </div>
          <div className="tp-card">
            <h2>Ranking Brasileirão</h2>
            <ol className="tp-ranking">
              <li><b>1.</b> São Paulo FC</li>
              <li>2. Palmeiras</li>
              <li>3. Flamengo</li>
              <li>4. Grêmio</li>
              <li>5. Corinthians</li>
            </ol>
            <a href="#" className="tp-btn tp-btn-outline">Ver completo</a>
          </div>
          <div className="tp-card tp-card-community">
            <h2>Comunidade</h2>
            <p>Entre para o fórum Tricolor e discuta com outros torcedores!</p>
            <a href="#" className="tp-btn tp-btn-red">Acessar</a>
          </div>
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="tp-footer">
        <img src={logo} alt="SPFC" className="tp-logo-footer" />
        <span>
          Tricolor Paulista &copy; 2025 — Não oficial, dedicado à torcida do São Paulo FC.
        </span>
      </footer>
    </div>
  );
}

function NewsCard({ img, title, meta, desc }) {
  return (
    <div className="tp-news-card">
      <img src={img} alt={title} className="tp-news-thumb" />
      <div>
        <h3>{title}</h3>
        <span className="tp-news-meta">{meta}</span>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default App;
