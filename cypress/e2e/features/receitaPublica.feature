# language: pt

Funcionalidade: Acessar Receita Publica

  Contexto:
    Dado acesso o portal da transparencia
    E clico em receitas publicas

  Cenario: acessar a pagina de receita publica
    Entao a pagina de receita publica deve ser exibida

  Cenario: baixar CSV da receita publica
    Quando clico em consulta detalhada
    E clico em baixar CSV
    Entao o CSV deve ser baixado

  Cenario: detalhar orcamento de despesa da receita publica
    Quando clico em consulta detalhada
    E clico em painel gráfico
    E clico em detalhar orcamento de despesa
    Entao o detalhamento de orcamento de despesa deve ser exibido