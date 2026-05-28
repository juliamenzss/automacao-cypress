# language: pt

Funcionalidade: Acessar Glossário

Contexto:
  Dado acesso a pagina principal
  Quando clico no roll
  Então o menu deve estar visivel
  E clico no botão de aprenda mais
  E clico em glossário

  Cenario: acessar dúvidas de Glossário
    Então a pagina de glossário deve ser exibida

  
  Esquema do Cenario: enviar diferentes dúvidas
    Quando clico em dúvidas
    Então o popup de dúvidas deve aparecer
    Quando preencho a dúvida com "<pergunta>"
    E clico no botão prosseguir
    Então devo ver a resposta "<esperado>"

    Exemplos:
      | pergunta | esperado               |
      | quais beneficios tenho direito?   | Nada Encontrado!   |
      | banco    | Banco Central          |