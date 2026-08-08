import os
from pathlib import Path

# Diretório base
BASE_DIR = Path(__file__).resolve().parent

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    DEBUG = os.environ.get('FLASK_DEBUG', 'False').lower() == 'true'
    
    # Informações da empresa
    EMPRESA_NOME = "ADEGA PRESENTE"
    EMPRESA_CNPJ = "17.269.787/0001-94"
    TELEFONE_WHATSAPP = "5561996127475"  # Padronizado
    EMAIL_CONTATO = "contato@adegapresente.com.br"
    INSTAGRAM = "adegapresente"
    FACEBOOK = "https://www.facebook.com/profile.php?id=61559981980043"
    TIKTOK = "adegapresente"
    
    # URLs externas
    LINK_CATALOGO_PRECOS = "https://drive.google.com/drive/folders/14PDcnfqLvOx29E7UX5KuvZYn4GIrLh24"
    LINK_CATALOGO_PRODUTOS = "https://linktr.ee/adegapresente"
    LINK_ENTREGA = "https://www.instagram.com/p/C54Gw1kO5C6/?img_index=1"

