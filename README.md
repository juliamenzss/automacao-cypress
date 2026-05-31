# Portal da Transparência - Automated E2E Testing

Este repositório contém a suíte de testes automatizados de ponta a ponta (E2E) para o Portal da Transparência. O objetivo do projeto é garantir a integridade, disponibilidade e confiabilidade das principais funcionalidades públicas do portal.

O projeto adota a prática de **Behavior-Driven Development (BDD)** com especificações escritas em Gherkin, executadas pelo framework Cypress estruturado no padrão **Page Objects Pattern (PoP)**.

## 👥 Equipe de Desenvolvimento
* Erika Lucena
* Júlia Matos
* Richelle Monteiro
* **Orientador:** Prof. Angelo Dias

## 📋 Planejamento de Testes
Para manter este documento conciso, todo o mapeamento estratégico e a listagem de cenários de teste (CT001 a CT012) foram movidos para um arquivo dedicado:
👉 **[Acesse o Planejamento de Testes Completo aqui](./PLANEJAMENTO.md)**

## 🛠️ Tecnologias e Ferramentas
* **Node.js** — Gerenciamento de dependências
* **Cypress 13** — Framework de testes E2E
* **Cucumber / Gherkin** — Escrita de cenários em BDD (`@badeball/cypress-cucumber-preprocessor`)

## 📦 Pré-requisitos
Antes de iniciar, certifique-se de possuir os seguintes softwares instalados:
* Node.js (versão LTS recomendada)
* Git

---

## 🔧 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
````

### 2. Acesse o diretório do projeto

```bash
cd seu-repositorio
```

### 3. Instale as dependências

```bash
npm install
```

---

## 🏃 Executando os Testes

### Interface gráfica do Cypress

Para abrir a interface visual do Cypress e acompanhar a execução dos cenários em tempo real:

```bash
npm run cypress:open
```

Ou:

```bash
npx cypress open
```

---

### Execução Headless

Para executar todos os testes em segundo plano, ideal para pipelines de CI/CD:

```bash
npm run cypress:run
```

Ou:

```bash
npx cypress run
```


## 📄 Licença

Este projeto possui fins acadêmicos e educacionais.
