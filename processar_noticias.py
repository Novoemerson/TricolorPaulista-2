import sqlite3
import cohere

COHERE_API_KEY = "7m1x1b8p4da9PKvPzSrFAjt7ryHRljK3dznRDu4g"
co = cohere.Client(COHERE_API_KEY)

# Função para gerar texto a partir da notícia original
def gerar_texto():
    resposta = co.generate(
        model="command",
        prompt="""São Paulo encaminha contratação do atacante Juan Dinenno, do Cruzeiro.
Argentino 30 anos deve chegar ao Tricolor por empréstimo até o fim do ano.

08/06/2025 21h20

O São Paulo está perto de fechar com o centroavante experiente que buscava nesta janela de transferências. O alvo da vez é Juan Dinenno, do Cruzeiro. O jogador de 30 anos deve chegar ao Tricolor por empréstimo até o fim de 2025.

O argentino se recuperou recentemente de uma grave lesão, sofrida em agosto de 2024. Há quase um ano, Dinenno rompeu o ligamento cruzado do joelho direito e precisou passar por cirurgia. Já recuperado, jogou cinco partidas na atual temporada, mas estava sem espaço.

Dinenno se encaixa no perfil procurado pelo São Paulo para brigar por posição com André Silva e Ryan Francisco, enquanto Calleri se recupera de uma cirurgia no joelho esquerdo e só voltará a jogar em 2026.

O contrato de Dinenno com o Cruzeiro se encerra justamente em dezembro, até quando irá o empréstimo com o São Paulo. Se cumprir metas previstas neste acordo, o centroavante permanecerá por mais tempo no Tricolor.

Um outro alvo para a posição era Carlos Vinícius. O centroavante de 30 anos está livre no mercado depois de deixar o Fulham, da Inglaterra, mas as negociações com o São Paulo não avançaram.
""",
        max_tokens=300
    )

    return resposta.generations[0].text

# Gerar o texto com o Cohere
noticia_gerada = gerar_texto()

# Salvar a notícia no banco de dados SQLite
conn = sqlite3.connect("noticias.db")
cursor = conn.cursor()
cursor.execute("INSERT INTO noticias (titulo, subtitulo, texto_gerado) VALUES (?, ?, ?)", 
               ("Nova contratação do São Paulo", "Detalhes sobre reforço", noticia_gerada))
conn.commit()
conn.close()

print("✅ Notícia gerada e salva no banco de dados!")
