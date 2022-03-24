import os
from flask import Flask, jsonify, request


app = Flask(__name__)

@app.route('/')
def nao_entre_em_panico():
    # Primeira rota da API - Apresentação
    return jsonify({"name": "Dona Benta API", "version": "1.0.0"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)