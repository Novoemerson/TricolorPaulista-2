import sqlite3
import cohere

COHERE_API_KEY = "7m1x1b8p4da9PKvPzSrFAjt7ryHRljK3dznRDu4g"
co = cohere.Client(COHERE_API_KEY)

# Função para gerar texto a partir da notícia original
def gerar_texto():
    resposta = co.generate(
        model="command",
        prompt = "Crie uma notícia esportiva sobre o São Paulo Futebol Clube e sua próxima contratação. A notícia deve estar totalmente em **português do Brasil**, sem palavras em inglês.",
        max_tokens=300
    )

    return resposta.generations[0].text

# Gerar o texto com o Cohere
noticia_gerada = gerar_texto()

# Salvar a notícia no banco de dados SQLite
conn = sqlite3.connect("noticias.db")
cursor = conn.cursor()
cursor.execute("SELECT id, titulo FROM noticias WHERE texto_gerado IS NULL"), 
               ("Nova contratação do São Paulo", "Detalhes sobre reforço", noticia_gerada))
conn.commit()
conn.close()

print("✅ Notícia gerada e salva no banco de dados!")
