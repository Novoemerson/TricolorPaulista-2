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
    print("São Paulo encaminha contratação do atacante Juan Dinenno, do Cruzeiro
Argentino 30 anos deve chegar ao Tricolor por empréstimo até o fim do ano

08/06/2025 21h20

O São Paulo está perto de fechar com o centroavante experiente que buscava nesta janela de transferências. O alvo da vez é Juan Dinenno, do Cruzeiro. O jogador de 30 anos deve chegar ao Tricolor por empréstimo até o fim de 2025.

O argentino se recuperou recentemente de uma grave lesão, sofrida em agosto de 2024. Há quase um ano, Dinenno rompeu o ligamento cruzado do joelho direito e precisou passar por cirurgia. Já recuperado, jogou cinco partidas na atual temporada, mas estava sem espaço.

Dinenno se encaixa no perfil procurado pelo São Paulo para brigar por posição com André Silva e Ryan Francisco, enquanto Calleri se recupera de uma cirurgia no joelho esquerdo e só voltará a jogar em 2026.

O contrato de Dinenno com o Cruzeiro se encerra justamente em dezembro, até quando irá o empréstimo com o São Paulo. Se cumprir metas previstas neste acordo, o centroavante permanecerá por mais tempo no Tricolor.

Um outro alvo para a posição era Carlos Vinícius. O centroavante de 30 anos está livre no mercado depois de deixar o Fulham, da Inglaterra, mas as negociações com o São Paulo não avançaram.", noticias)  # Adicionando um print para depuração
    return render_template("index.html", noticias=noticias)

import logging
logging.basicConfig(level=logging.DEBUG)

if __name__ == "__main__":
    app.run(debug=True)

import os
if not os.path.exists("noticias.db"):
    logging.error("⚠️ ERRO: Banco de dados noticias.db não encontrado!")
