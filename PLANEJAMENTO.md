## 📋 Planejamento de Testes Automatizados (Portal da Transparência)

**Objetivo:** Garantir a qualidade, integridade funcional e navegabilidade das principais seções do Portal da Transparência, cobrindo fluxos de busca, glossário, consultas detalhadas de receitas e redes de transparência.
**Ferramentas:** Cypress 13, @badeball/cypress-cucumber-preprocessor (Padrão Page Objects).

---

### 👤 Funcionalidade: Acessar Rede de Transparência
**Objetivo:** Validar o ecossistema de redes interconectadas e os redirecionamentos para seus respectivos painéis temáticos.

* #### 🆔 CT001 - Cenário: Navegar para rede de transparência
    * **Dado** acesso o portal da transparencia
    * **Quando** clico em rede de tecnologia
    * **Então** a pagina de rede de transparencia deve ser exibida

* #### 🆔 CT002 - Esquema do Cenário: Acessar diferentes temas na rede de transparência
    * **Dado** acesso o portal da transparencia
    * **Quando** clico em rede de transparencia
    * **E** clico no tema "`<tema>`"
    * **Então** a pagina do tema deve ser exibida

    **Exemplos:**
    | tema |
    | :--- |
    | Benefícios Sociais |
    | Ciência e Tecnologia |
    | Dados básicos |

---

### 👤 Funcionalidade: Acessar Receita Pública
**Objetivo:** Validar consultas detalhadas, painéis gráficos e exportação de relatórios públicos de receitas.

* **Contexto Comum:**
    * **Dado** acesso o portal da transparencia
    * **E** clico em receitas publicas

* #### 🆔 CT003 - Cenário: Acessar a página de receita pública
    * **Então** a pagina de receita publica deve ser exibida

* #### 🆔 CT004 - Cenário: Baixar CSV da receita pública
    * **Quando** clico em consulta detalhada
    * **E** clico em baixar CSV
    * **Então** o CSV deve ser baixado

* #### 🆔 CT005 - Cenário: Detalhar orçamento de despesa da receita pública
    * **Quando** clico em consulta detalhada
    * **E** clico em painel gráfico
    * **E** clico em detalhar orçamento de despesa
    * **Então** o detalhamento de orçamento de despesa deve ser exibido

---

### 👤 Funcionalidade: Ver a Página Inicial e Menu Principal
**Objetivo:** Validar o carregamento da plataforma e a expansão do menu global de navegação.

* #### 🆔 CT006 - Cenário: Acessa página e menu principal
    * **Dado** acesso o portal da transparencia
    * **Quando** clico no roll
    * **Então** o menu deve estar visivel

---

### 👤 Funcionalidade: Acessar Glossário
**Objetivo:** Validar a navegação e a central de dúvidas interativas no ambiente de termos informativos.

* **Contexto Comum:**
    * **Dado** acesso a pagina principal
    * **Quando** clico no roll
    * **Então** o menu deve estar visivel
    * **E** clico no botão de aprenda mais
    * **E** clico em glossário

* #### 🆔 CT007 - Cenário: Acessar dúvidas de Glossário
    * **Então** a pagina de glossário deve ser exibida

* #### 🆔 CT008 - Esquema do Cenário: Enviar diferentes dúvidas
    * **Quando** clico em dúvidas
    * **Então** o popup de dúvidas deve aparecer
    * **Quando** preencho a dúvida com "`<pergunta>`"
    * **E** clico no botão prosseguir
    * **Então** devo ver a resposta "`<esperado>`"

    **Exemplos:**
    | pergunta | esperado |
    | :--- | :--- |
    | quais beneficios tenho direito? | Nada Encontrado! |
    | banco | Banco Central |

---

### 👤 Funcionalidade: Busca Portal
**Objetivo:** Validar os mecanismos de pesquisa global frente a entradas válidas, inválidas e análise de comportamento em branco.

* #### 🆔 CT009 - Cenário: Busca por termo válido com sucesso
    * **Dado** acesso o portal da transparencia
    * **Quando** pesquiso pelo termo "Bolsa Família"
    * **Então** devo ser redirecionado para a página de resultados da busca

* #### 🆔 CT010 - Cenário: Busca por termo inválido com caracteres especiais
    * **Dado** acesso o portal da transparencia
    * **Quando** pesquiso pelo termo "@@@"
    * **Então** o sistema deve exibir a mensagem de zero resultados encontrados

* #### 🆔 CT011 - Cenário: [Análise de Inconsistência] Validar comportamento com campo de busca em branco
    * **Dado** acesso o portal da transparencia
    * **Quando** pesquiso pelo termo " "
    * **Então** devo ser redirecionado para a página de resultados mesmo sem um termo definido
    > *Nota de QA: Identificada a necessidade de refinamento da regra de negócio. O sistema permite o redirecionamento incorreto para a página de buscas vazia.*

* #### 🆔 CT012 - Esquema do Cenário: Validar múltiplos termos de pesquisa frequentes
    * **Dado** acesso o portal da transparencia
    * **Quando** pesquiso pelo termo "`<termo>`"
    * **Então** devo ser redirecionado para a página de resultados da busca

    **Exemplos:**
    | termo |
    | :--- |
    | Auxílio Reclusão |
    | Despesas Públicas |