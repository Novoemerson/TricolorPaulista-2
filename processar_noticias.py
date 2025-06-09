import sqlite3
import cohere

COHERE_API_KEY = "7m1x1b8p4da9PKvPzSrFAjt7ryHRljK3dznRDu4g"
co = cohere.Client(COHERE_API_KEY)

# Função para gerar texto a partir da notícia original
def gerar_texto(noticia):
    resposta = co.generate(
        model="command",
        prompt=f"Reescreva a seguinte notícia com um título e subtítulo melhores:\n\n{noticia}",
        max_tokens=300
    )
    return resposta.generations[0].text

# Função para buscar e processar notícias
def processar_noticias():
    conn = sqlite3.connect("noticias.db")
    cursor = conn.cursor()
    cursor.execute("SELECT id, texto_original FROM noticias WHERE texto_gerado IS NULL")
    noticias = cursor.fetchall()

    for id_noticia, texto_original in noticias:
        texto_gerado = gerar_texto(texto_original)
        cursor.execute("UPDATE noticias SET texto_gerado = ? WHERE id = ?", (texto_gerado, id_noticia))
    
    conn.commit()
    conn.close()

processar_noticias()
