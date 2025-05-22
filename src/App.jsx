import React from "react";
import "./App.css";

// Imagem do escudo do SPFC
const logoSPFC = "https://upload.wikimedia.org/wikipedia/commons/2/2e/S%C3%A3o_Paulo_FC_crest.svg";

// Notícias/destaques de exemplo
const destaques = [
  {
    id: 1,
    visitas: "4,2 mil",
    comentarios: 49,
    categoria: "Relacionados",
    titulo: "São Paulo divulga lista de relacionados com três ausências e uma novidade contra o Palmeiras",
    imagem: "https://i.imgur.com/GgLQGZE.jpg",
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
    imagem: "https://i.imgur.com/3Q8kQmA.jpg",
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
    imagem: "https://i.imgur.com/2ZJxQmG.jpg",
    url: "#",
    compartilhamentos: 0,
    likes: 5,
    dislikes: 2,
  },
];

function DestaqueCard({destaque, par}) {
  return (
    <article className={`destaque_card ${par ? "par" : "impar"}`}>
      <div className="header">
        <p className="totais">
          <span className="visitas">{destaque.visitas}</span>
          <span className="comentarios_na_noticia">{destaque.comentarios}</span>
        </p>
        <h4>
          <a href={destaque.url} title="">{destaque.categoria}</a>
        </h4>
      </div>
      <figure>
        <a href={destaque.url} title="">
          <img src={destaque.imagem} alt={destaque.titulo} />
        </a>
      </figure>
      <div className="chamada">
        <h2><a href={destaque.url}>{destaque.titulo}</a></h2>
      </div>
      <div className="interacoes interacoes_artigo">
        <a href="#" className="compartilhamentos" data-valor={destaque.compartilhamentos}>
          <em>compartilhamentos</em>
          <span>{destaque.compartilhamentos}</span>
        </a>
        <div className="likes_internos">
          <a href="#" className="bt_like_interno like_interno">
            <em>gostei</em>
            <span>{destaque.likes}</span>
          </a>
          <a href="#" className="bt_like_interno dislike_interno">
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
    <div id="wrap">
      {/* Conteúdo principal */}
      <div id="conteudo">
        <section id="mosaico" className="container clearfix">
          {destaques.map((d, idx) => (
            <DestaqueCard destaque={d} key={d.id} par={idx % 2 === 0} />
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer style={{background: "#000", color: "#fff", textAlign: "center", padding: "1.2rem 0 1.5rem 0", marginTop: "2rem", fontSize: "1.08rem", letterSpacing: "0.5px"}}>
        <img src={logoSPFC} alt="Escudo SPFC" style={{ height: "32px", verticalAlign: "middle", marginRight: 8 }} />
        Tricolor Paulista &copy; 2025 — Não oficial, dedicado à torcida do São Paulo FC.<br />
        <span style={{ color: "#da291c" }}>#VamosSãoPaulo</span>
      </footer>
    </div>
  );
}

export default App;
