import sqlite3
import cohere

COHERE_API_KEY = "7m1x1b8p4da9PKvPzSrFAjt7ryHRljK3dznRDu4g"
co = cohere.Client(COHERE_API_KEY)

# Função para gerar texto a partir da notícia original
def gerar_texto():
resposta = co.generate(
    model="command",
    prompt="Crie uma notícia esportiva sobre o São Paulo Futebol Clube e sua próxima contratação. A notícia deve estar totalmente em **português do Brasil**, sem palavras em inglês. Respeite a estrutura e estilo do jornalismo esportivo brasileiro.",
    max_tokens=300,
    temperature=0.9,  # Ajuste para gerar textos mais naturais
    stop_sequences=["."]  # Para evitar que continue gerando após um ponto final
)

    return resposta.generations[0].text

# Gerar o texto com o Cohere
noticia_gerada = gerar_texto()

# Salvar a notícia no banco de dados SQLite
conn = sqlite3.connect("noticias.db")
cursor = conn.cursor()
cursor.execute(
    "INSERT INTO noticias (titulo, subtitulo, texto_gerado) VALUES (?, ?, ?)", 
    ("Nova contratação do São Paulo", "Detalhes sobre reforço", noticia_gerada)
)
conn.commit()
conn.close()

print("✅ Notícia gerada e salva no banco de dados!")
