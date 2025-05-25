import React from "react";
import "./App.css";

// ... (mantenha os mesmos dados e imports anteriores)

function App() {
  return (
    <div className="main-container">
      {/* HEADER IDÊNTICO */}
      <header className="header-meutimao">
        <div className="header-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/São_Paulo_FC_Logo.svg" 
            className="logo-spfc" 
            alt="São Paulo FC"
          />
          <nav className="main-nav">
            <a href="#noticias" className="nav-link">Notícias</a>
            <a href="#forum" className="nav-link">Fórum</a>
            <a href="#classificacao" className="nav-link">Classificação</a>
            <a href="#jogos" className="nav-link">Jogos</a>
          </nav>
        </div>
      </header>

      {/* DESTAQUE PRINCIPAL */}
      <section className="destaque-principal">
        <div className="destaque-container">
          <img
            src={noticiasAutomatizadas[0].imageUrl}
            alt="Destaque"
            className="destaque-imagem"
          />
          <div className="destaque-info">
            <span className="destaque-categoria">Notícia em Destaque</span>
            <h1 className="destaque-titulo">{noticiasAutomatizadas[0].title}</h1>
            <p className="destaque-subtitulo">{noticiasAutomatizadas[0].subtitle}</p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="conteudo-principal">
        {/* COLUNA ESQUERDA */}
        <main className="coluna-esquerda">
          {/* LISTA DE NOTÍCIAS */}
          <div className="lista-noticias">
            {noticiasAutomatizadas.slice(1).map((noticia, idx) => (
              <article className="card-noticia" key={idx}>
                <img 
                  src={noticia.imageUrl} 
                  alt={noticia.title} 
                  className="noticia-imagem"
                />
                <div className="noticia-conteudo">
                  <h2 className="noticia-titulo">{noticia.title}</h2>
                  <p className="noticia-resumo">{noticia.subtitle}</p>
                  <div className="noticia-metadados">
                    <span className="noticia-data">Há 2 horas</span>
                    <span className="noticia-comentarios">15 comentários</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* SEÇÃO DO FÓRUM */}
          <section className="secao-forum">
            <h2 className="titulo-secao">
              <img src={LOGO_X} alt="X" className="logo-forum" />
              Fórum do Tricolor
            </h2>
            {forumTopicos.map(topico => (
              <div className="topico-forum" key={topico.id}>
                <div className="topico-cabecalho">
                  <span className="topico-autor">{topico.autor}</span>
                  <span className="topico-data">{topico.data}</span>
                </div>
                <h3 className="topico-titulo">{topico.titulo}</h3>
                <p className="topico-trecho">{topico.trecho}</p>
                <div className="topico-stats">
                  <span className="topico-respostas">
                    {topico.respostas} respostas
                  </span>
                  <button className="botao-participar">
                    Participar
                  </button>
                </div>
              </div>
            ))}
          </section>
        </main>

        {/* SIDEBAR DIREITA */}
        <aside className="sidebar-direita">
          {/* PRÓXIMOS JOGOS */}
          <section className="widget-jogos">
            <h3 className="widget-titulo">
              <i className="icone-calendario"></i>
              Próximos Jogos
            </h3>
            <div className="lista-jogos">
              {proximosJogos.map((jogo, idx) => (
                <div className="jogo-item" key={idx}>
                  <div className="jogo-equipes">
                    <div className="time-casa">
                      <img src={escudos[jogo.casa]} alt={jogo.casa} />
                      <span>{jogo.casa}</span>
                    </div>
                    <span className="jogo-vs">vs</span>
                    <div className="time-visitante">
                      <img src={escudos[jogo.fora]} alt={jogo.fora} />
                      <span>{jogo.fora}</span>
                    </div>
                  </div>
                  <div className="jogo-info">
                    <span>{jogo.data}</span>
                    <span>{jogo.hora}</span>
                    <span className="jogo-campeonato">{jogo.campeonato}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CLASSIFICAÇÃO */}
          <section className="widget-classificacao">
            <h3 className="widget-titulo">
              <i className="icone-tabela"></i>
              Classificação - Brasileirão
            </h3>
            <table className="tabela-classificacao">
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Time</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr className="destaque-spfc">
                  <td>3º</td>
                  <td>
                    <img src={escudos["São Paulo"]} alt="SPFC" />
                    São Paulo
                  </td>
                  <td>25</td>
                </tr>
                {/* Demais times */}
              </tbody>
            </table>
          </section>

          {/* WIDGET VÍDEOS */}
          <section className="widget-videos">
            <h3 className="widget-titulo">
              <i className="icone-video"></i>
              Vídeos
            </h3>
            <div className="video-container">
              <iframe
                title="melhores momentos"
                src="https://www.youtube.com/embed/VIDEO_ID"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </aside>
      </div>

      {/* RODAPÉ ESTILO MEUTIMÃO */}
      <footer className="rodape-meutimao">
        <div className="rodape-container">
          <div className="coluna-rodape">
            <h4>São Paulo FC</h4>
            <nav className="nav-rodape">
              <a href="#historia">História</a>
              <a href="#titulos">Títulos</a>
              <a href="#estadio">Estádio</a>
            </nav>
          </div>
          <div className="coluna-rodape">
            <h4>Redes Sociais</h4>
            <div className="redes-sociais">
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#facebook"><i className="fab fa-facebook"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="rodape-creditos">
          © 2024 Tricolor Paulista - Site não oficial
        </div>
      </footer>
    </div>
  );
}

export default App;
