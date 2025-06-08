import sqlite3
import requests
import cohere

COHERE_API_KEY = "7m1x1b8p4da9PKvPzSrFAjt7ryHRljK3dznRDu4g"
co = cohere.Client(COHERE_API_KEY)

# Processar notícias
def gerar_texto(noticia):
    resposta = co.generate(prompt=f"Reescreva a seguinte notícia com um título e subtítulo melhores:\n{noticia}", model="command")
    return resposta.generations[0].text

# Buscar e processar notícias
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
