import React, { useEffect, useState } from "react";

// Estilos no próprio arquivo para manter o visual igual ao HTML original
const style = `
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: #333;
}
header {
    background-color: #cc0000;
    color: white;
    padding: 15px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}
.nav {
    display: flex;
    justify-content: center;
    padding: 15px;
    background: #f4f4f4;
    position: fixed;
    top: 60px;
    width: 100%;
}
.nav a {
    text-decoration: none;
    color: white;
    background: #cc0000;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 5px;
}
.container {
    display: flex;
    margin-top: 110px;
}
.sidebar {
    width: 250px;
    background: #f4f4f4;
    padding: 15px;
    height: auto;
}
.posts-container {
    flex: 1;
    padding: 20px;
}
.post {
    background: white;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}
.post img {
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
}
footer {
    background: #cc0000;
    color: white;
    text-align: center;
    padding: 15px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
footer a {
    color: #ffeaea;
    text-decoration: underline;
}
`;

function App() {
    // Buscando notícias do JSON
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        fetch("/noticias.json")
            .then(res => res.json())
            .then(data => setNoticias(data))
            .catch(() => setNoticias([]));
    }, []);

    return (
        <>
            {/* Aplica o CSS do HTML original */}
            <style>{style}</style>
            <header>Blog Tricolor-SP</header>

            <div className="nav">
                <a href="#">🏆 Títulos</a>
                <a href="#">⚽ Jogos</a>
                <a href="#">🔥 Elenco</a>
                <a href="#">📢 Notícias</a>
            </div>

            <div className="container">
                {/* Barra lateral */}
                <aside className="sidebar">
                    <h2>Categorias</h2>
                    <ul>
                        <li>🔴 São Paulo</li>
                        <li>⚽ Jogos</li>
                        <li>🔥 Transferências</li>
                        <li>🏆 História</li>
                    </ul>
                </aside>

                {/* Área principal */}
                <main className="posts-container">
                    <div className="post">
                        <h2>🏆 Últimos Títulos do São Paulo FC</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Sao_Paulo_FC_logo.svg" alt="Escudo do São Paulo FC" />
                        <p>O São Paulo conquistou a Copa do Brasil em 2023 e segue forte na Libertadores 2025!</p>
                    </div>

                    <div className="post">
                        <h2>⚽ Próximos Jogos</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Sao_Paulo_FC_players.jpg" alt="Jogadores do São Paulo FC" />
                        <p>🔴 São Paulo enfrenta o Náutico pela Copa do Brasil no dia 20/05.</p>
                        <p>⚽ Depois encara o Mirassol pelo Brasileirão no dia 24/05.</p>
                    </div>

                    <div className="post">
                        <h2>🔥 Destaques do Elenco</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Sao_Paulo_FC_stadium.jpg" alt="Estádio do São Paulo FC" />
                        <p>Alan Franco recusou a primeira oferta de renovação, mas negociações seguem em andamento.</p>
                    </div>

                    {/* Renderiza notícias dinâmicas */}
                    <div className="post">
                        <h2>📢 Últimas Notícias do São Paulo FC</h2>
                        <ul>
                            {noticias.length === 0 && (
                                <>
                                    <li>🔴 São Paulo se reapresenta no CT da Barra Funda para duelo contra o Náutico.</li>
                                    <li>⚽ Alan Franco negocia renovação de contrato com o clube.</li>
                                    <li>🔥 Tricolor busca reforços para o segundo semestre da temporada.</li>
                                </>
                            )}
                            {noticias.map((noticia, idx) => (
                                <li key={idx}>
                                    <strong>{noticia.title}</strong>
                                    <br />
                                    <span style={{ color: "#cc0000" }}>{noticia.subtitle}</span>
                                    {noticia.imageUrl && (
                                        <div>
                                            <img src={noticia.imageUrl} alt={noticia.title} style={{ maxWidth: "200px", margin: "10px 0" }} />
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
            {/* Rodapé */}
            <footer>
                <p>&copy; 2025 Tricolor-SP | Todos os direitos reservados</p>
                <p>
                    Siga-nos nas redes sociais: <a href="#">Instagram</a> | <a href="#">Twitter</a>
                </p>
            </footer>
        </>
    );
}

export default App;
