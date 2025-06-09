from flask import Flask, render_template
import sqlite3
import logging
import os

app = Flask(__name__)

# Ativar logs para depuração
logging.basicConfig(level=logging.DEBUG)

# Função para buscar notícias no banco de dados
def buscar_noticias():
    # Verifica se o banco de dados existe antes de conectar
    if not os.path.exists("noticias.db"):
        logging.error("⚠️ ERRO: Banco de dados noticias.db não encontrado!")
        return []

    conn = sqlite3.connect("noticias.db")
    cursor = conn.cursor()
    cursor.execute("SELECT titulo, subtitulo, texto_gerado FROM noticias")
    noticias = cursor.fetchall()
    conn.close()
    return noticias

@app.route("/")
def index():
    noticias = buscar_noticias()
    print("📝 Dados das notícias:", noticias)  # Adicionando um print para depuração
    return render_template("index.html", noticias=noticias)

import logging
logging.basicConfig(level=logging.DEBUG)

if __name__ == "__main__":
    app.run(debug=True)

import os
if not os.path.exists("noticias.db"):
    logging.error("⚠️ ERRO: Banco de dados noticias.db não encontrado!")
