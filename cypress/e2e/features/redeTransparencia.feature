# language: pt

Funcionalidade: Acessar Rede de Transparencia

Cenario: navegar para rede de transparencia
  Dado acesso o portal da transparencia
  Quando clico em rede de transparencia
  Entao a pagina de rede de transparencia deve ser exibida

Esquema do Cenario: acessar diferentes temas na rede de transparencia
  Dado acesso o portal da transparencia
  Quando clico em rede de transparencia
  E clico no tema "<tema>"
  Entao a pagina do tema deve ser exibida

  Exemplos:
    | tema                 |
    | Benefícios Sociais   |
    | Ciência e Tecnologia |
    | Dados básicos        |