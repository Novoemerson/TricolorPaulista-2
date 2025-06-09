from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

# Função para buscar notícias no banco de dados
def buscar_noticias():
    conn = sqlite3.connect("noticias.db")
    cursor = conn.cursor()
    cursor.execute("SELECT titulo, subtitulo, texto_gerado FROM noticias")
    noticias = cursor.fetchall()
    conn.close()
    return noticias

@app.route("/")
def index():
    noticias = buscar_noticias()
    return render_template("index.html", noticias=noticias)

if __name__ == "__main__":
    app.run(debug=True)
