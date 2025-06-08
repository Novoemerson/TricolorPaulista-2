import sqlite3

# Criar banco de dados e tabela
def criar_banco():
    conn = sqlite3.connect("noticias.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS noticias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            subtitulo TEXT,
            texto_original TEXT,
            texto_gerado TEXT
        )
    """)
    conn.commit()
    conn.close()

# Inserir notícia
def inserir_noticia(titulo, subtitulo, texto_original):
    conn = sqlite3.connect("noticias.db")
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO noticias (titulo, subtitulo, texto_original) VALUES (?, ?, ?)
    """, (titulo, subtitulo, texto_original))
    conn.commit()
    conn.close()
