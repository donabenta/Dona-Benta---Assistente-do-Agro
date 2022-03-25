import os
from flask import Flask, jsonify, request

import sys
sys.path.append('./controllers/')

app = Flask(__name__)

@app.route('/')
def index():
    # Primeira rota da API - Apresentação
    return jsonify({"name": "Dona Benta API", "version": "1.0.0"})

@app.route("/voice-command-input", methods=['POST'])
def input_vc():
    raw_data_speech = request.get_json()["message"]
    return {"response": raw_data_speech}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)