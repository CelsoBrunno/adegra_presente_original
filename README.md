# ADEGA PRESENTE - Sistema Flask

Sistema web para a ADEGA PRESENTE convertido para Flask, otimizado e 100% funcional.

## ✅ Status do Projeto

**Sistema 100% funcional e otimizado!**

- ✅ 13 templates convertidos para Flask
- ✅ Todos os links estáticos usando `url_for()`
- ✅ Número WhatsApp padronizado: 5561996127475
- ✅ Estrutura limpa e otimizada
- ✅ Arquivos duplicados removidos
- ✅ Código otimizado

## 📁 Estrutura do Projeto (Otimizada)

```
Adega_Presente_Original/
├── app.py                 # Aplicação Flask principal
├── config.py             # Configurações centralizadas
├── requirements.txt      # Dependências Python
├── .gitignore           # Arquivos ignorados pelo Git
├── README.md            # Esta documentação
├── templates/           # Templates HTML Flask (13 templates)
│   ├── base.html        # Template base
│   ├── index.html       # Página inicial
│   ├── sobre.html       # Sobre nós
│   ├── contato.html     # Contato
│   └── [10 templates de produtos]
└── static/              # Arquivos estáticos
    ├── css/             # Estilos compilados
    ├── js/              # JavaScript (main.js otimizado)
    ├── img/             # Imagens do site
    └── fonts/           # Fontes customizadas
```

## 🚀 Como Executar

### 1. Instalar dependências

```bash
pip install -r requirements.txt
```

### 2. Executar a aplicação

```bash
python app.py
```

A aplicação estará disponível em: `http://localhost:5000`

## 📋 Rotas Disponíveis

- `/` - Página inicial
- `/sobre` - Sobre nós
- `/contato` - Contato
- `/produtos/vinhos` - Vinhos brancos
- `/produtos/vinhos-rose` - Vinhos rosé e laranja
- `/produtos/vinhos-tinto` - Vinhos tintos
- `/produtos/vinhos-tinto-1` - Vinhos tintos (página 1)
- `/produtos/vinhos-tinto-2` - Vinhos tintos (página 2)
- `/produtos/espumantes` - Espumantes
- `/produtos/embalagens` - Embalagens artesanais
- `/produtos/embalagens-2` - Embalagens artesanais (página 2)
- `/produtos/novidades` - Novidades
- `/produtos/presentes` - Presentes

## 🔧 Configurações

Todas as configurações estão em `config.py`:
- Nome da empresa
- CNPJ
- Telefone WhatsApp (padronizado)
- Email
- Redes sociais
- Links externos

## ✅ Otimizações Realizadas

### Arquivos Removidos:
- ❌ 13 HTMLs duplicados da raiz
- ❌ Pastas estáticas duplicadas (css/, js/, img/, fonts/)
- ❌ Pasta source/ (arquivos ZIP)
- ❌ Arquivos .psd (Photoshop)
- ❌ Arquivo atividade.pdf não utilizado
- ❌ Imagens duplicadas

### Melhorias de Código:
- ✅ `main.js` - Removida duplicação do Owl Carousel
- ✅ Templates - Todos convertidos para Flask
- ✅ Links - Todos usando `url_for()`
- ✅ WhatsApp - Número padronizado em config.py
- ✅ Estrutura - Organizada e limpa

## 📌 Notas Técnicas

- **Framework**: Flask 3.0.0
- **Python**: 3.12+
- **Templates**: Jinja2 (via Flask)
- **Estáticos**: Organizados em `static/`
- **Configuração**: Centralizada em `config.py`

## 📞 Suporte

Para dúvidas ou problemas, entre em contato através do WhatsApp configurado no sistema.
