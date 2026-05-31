# language: pt
Funcionalidade: Busca Portal

  Cenário: Busca por termo válido com sucesso
    Dado acesso o portal da transparencia
    Quando pesquiso pelo termo "Bolsa Família"
    Então devo ser redirecionado para a página de resultados da busca

  Cenário: Busca por termo inválido com caracteres especiais
    Dado acesso o portal da transparencia
    Quando pesquiso pelo termo "@@@"
    Então o sistema deve exibir a mensagem de zero resultados encontrados

  Cenário: Validar comportamento com campo de busca em branco
    Dado acesso o portal da transparencia
    Quando pesquiso pelo termo " "
    Então devo ser redirecionado para a página de resultados mesmo sem um termo definido

  Esquema do Cenário: Validar múltiplos termos de pesquisa frequentes
    Dado acesso o portal da transparencia
    Quando pesquiso pelo termo "<termo>"
    Então devo ser redirecionado para a página de resultados da busca

    Exemplos:
      | termo              |
      | Auxílio Reclusão   |
      | Despesas Públicas  |