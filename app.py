from flask import Flask, render_template
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Context processor para disponibilizar variáveis em todos os templates
@app.context_processor
def inject_config():
    return {
        'empresa_nome': Config.EMPRESA_NOME,
        'empresa_cnpj': Config.EMPRESA_CNPJ,
        'telefone_whatsapp': Config.TELEFONE_WHATSAPP,
        'email_contato': Config.EMAIL_CONTATO,
        'instagram': Config.INSTAGRAM,
        'facebook': Config.FACEBOOK,
        'tiktok': Config.TIKTOK,
        'link_catalogo_precos': Config.LINK_CATALOGO_PRECOS,
        'link_catalogo_produtos': Config.LINK_CATALOGO_PRODUTOS,
        'link_entrega': Config.LINK_ENTREGA,
    }

# Rotas
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

@app.route('/produtos/vinhos')
def vinhos():
    return render_template('vinhos.html')

@app.route('/produtos/vinhos-rose')
def vinhos_rose():
    return render_template('vinhosrose.html')

@app.route('/produtos/vinhos-tinto')
def vinhos_tinto():
    return render_template('vinhostinto.html')

@app.route('/produtos/vinhos-tinto-1')
def vinhos_tinto_1():
    return render_template('vinhostinto1.html')

@app.route('/produtos/vinhos-tinto-2')
def vinhos_tinto_2():
    return render_template('vinhostinto2.html')

@app.route('/produtos/espumantes')
def espumantes():
    return render_template('espumantes.html')

@app.route('/produtos/embalagens')
def embalagens():
    return render_template('embalagens.html')

@app.route('/produtos/embalagens-2')
def embalagens_2():
    return render_template('embalagens2.html')

@app.route('/produtos/novidades')
def novidades():
    return render_template('novidades.html')

@app.route('/produtos/presentes')
def presentes():
    return render_template('presentes.html')

@app.route('/landing')
def landing():
    """Landing page única — o site completo permanece nas demais rotas."""
    return render_template('landing.html')

@app.route('/landing-v2')
def landing_v2():
    """Landing vitrine premium (modelo seções / zig-zag) — para comparação."""
    return render_template('landing_v2.html')

@app.route('/landing-v3')
def landing_v3():
    """Landing editorial (modelo Wine Story) — texturas em static/img/landing-v3/."""
    return render_template('landing_v3.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

