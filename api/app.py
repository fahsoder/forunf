from flask import Flask
app = Flask(__name__)

@app.route("/")
@app.route("/hello")
def index():
    return 'Olá Mundo!'

if __name__ == "__main__":
    app.debug=True
    app.run(port=5000)