````markdown
# 🎫 Sistema de Chamados — Suporte Técnico de TI

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-yellow?style=for-the-badge" alt="Status: Em Desenvolvimento">
  <img src="https://img.shields.io/badge/SEM-IA-red?style=for-the-badge" alt="Sem IA">
</p>

<p align="center">
  <strong>Sistema web para gerenciamento de chamados de suporte técnico de TI.</strong>
</p>

<p align="center">
  Desenvolvido por <strong>Crhysz (Crhystian)</strong> e <strong>JP (João Pedro)</strong>.
</p>

---

# 🚫🤖 SEM INTELIGÊNCIA ARTIFICIAL

> ## ❌ Este projeto foi desenvolvido SEM IA.

Toda a lógica, estrutura, programação e integração do sistema estão sendo desenvolvidas manualmente pelos integrantes do projeto.

A proposta é utilizar o projeto como uma forma de **aprendizado prático**, colocando em aplicação conhecimentos de programação, desenvolvimento Web, APIs, banco de dados e arquitetura Full Stack.

**Nenhuma Inteligência Artificial é utilizada para implementar a lógica do sistema.**

---

# 📌 Sobre o Projeto

O **Sistema de Chamados** é uma aplicação Web desenvolvida para auxiliar no gerenciamento de solicitações de suporte técnico de TI.

A ideia é permitir que usuários possam registrar problemas ou solicitações e que a equipe responsável consiga organizar, acompanhar e atualizar esses chamados.

O projeto está sendo desenvolvido com foco em:

- 🖥️ Desenvolvimento Web
- 🔌 APIs REST
- 🗄️ Banco de dados
- ⚛️ Desenvolvimento Front-end
- 🟢 Desenvolvimento Back-end
- 🔐 Organização de usuários
- 🎫 Gerenciamento de chamados
- 🤝 Desenvolvimento colaborativo
- 📚 Aprendizado prático

---

# 🛠️ Tecnologias Utilizadas

## 🎨 Front-end

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
</p>

## ⚙️ Back-end

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma">
</p>

## 🗄️ Banco de Dados

<p>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
</p>

## 🔧 Ferramentas

<p>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code">
</p>

---

# 🧩 Stack do Projeto

| Tecnologia | Função |
|---|---|
| 🟧 **HTML5** | Estrutura das páginas |
| 🟨 **JavaScript** | Lógica da aplicação |
| ⚛️ **React** | Construção da interface Front-end |
| 🎨 **Bootstrap** | Estilização e responsividade |
| 🟢 **Node.js** | Ambiente de execução do Back-end |
| 🚂 **Express.js** | Criação da API e gerenciamento das rotas |
| 🔷 **Prisma** | ORM e comunicação com o banco de dados |
| 🍃 **MongoDB** | Armazenamento dos dados |
| 🔧 **Git** | Controle de versão |
| 🐙 **GitHub** | Hospedagem e colaboração do projeto |
| 💻 **VS Code** | Ambiente de desenvolvimento |

---

# 🏗️ Arquitetura do Sistema

O sistema utiliza uma arquitetura dividida em três principais partes:

```text
┌─────────────────────────────────────────────┐
│                  USUÁRIO                    │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│                  REACT                      │
│               FRONT-END                     │
│                                             │
│  • Interface                                │
│  • Componentes                              │
│  • Formulários                              │
│  • Chamados                                 │
└──────────────────────┬──────────────────────┘
                       │
                       │ HTTP / API REST
                       ▼
┌─────────────────────────────────────────────┐
│              NODE.JS + EXPRESS              │
│                  BACK-END                   │
│                                             │
│  • Rotas                                    │
│  • Regras de negócio                        │
│  • Requisições                              │
│  • Respostas                                │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│                  PRISMA                     │
│                    ORM                      │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│                  MONGODB                    │
│                BANCO DE DADOS               │
└─────────────────────────────────────────────┘
````

---

# 🎫 Funcionalidades

Atualmente o projeto está em desenvolvimento.

Entre as funcionalidades planejadas/desenvolvidas estão:

* [ ] 👤 Cadastro de usuários
* [ ] 🔐 Sistema de login
* [ ] 🎫 Criação de chamados
* [ ] 📋 Listagem de chamados
* [ ] 🔎 Consulta de chamados
* [ ] 📝 Edição de chamados
* [ ] 🔄 Alteração de status
* [ ] 👨‍💻 Identificação do responsável pelo chamado
* [ ] 📅 Registro de datas
* [ ] 🚨 Definição de prioridade
* [ ] 🗂️ Organização dos chamados
* [ ] 💬 Comunicação relacionada ao chamado
* [ ] 📊 Dashboard
* [ ] 📈 Estatísticas de chamados

> As funcionalidades podem ser alteradas ou ampliadas conforme o desenvolvimento do projeto.

---

# 📂 Estrutura do Projeto

Uma possível estrutura utilizada no projeto:

```text
sistema-chamados/
│
├── backend/
│   │
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middlewares/
│   │   └── server.js
│   │
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── index.html
│
├── .gitignore
└── README.md
```

> A estrutura pode mudar conforme novas funcionalidades forem implementadas.

---

# 🚀 Como Executar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd sistema-chamados
```

---

# ⚙️ Configurando o Back-end

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

---

# 🗄️ Configurando o MongoDB

O projeto utiliza **MongoDB** como banco de dados.

Crie um arquivo:

```text
.env
```

Dentro dele, configure a conexão:

```env
DATABASE_URL="SUA_STRING_DE_CONEXAO_MONGODB"
```

Exemplo:

```env
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/chamados"
```

> ⚠️ Nunca compartilhe suas credenciais do MongoDB.

---

# 🔷 Configurando o Prisma

Depois de configurar o banco de dados:

```bash
npx prisma generate
```

Caso seja necessário sincronizar o schema:

```bash
npx prisma db push
```

---

# ▶️ Executando o Back-end

Execute:

```bash
npm run dev
```

ou:

```bash
npm start
```

O servidor será iniciado na porta configurada no projeto.

Exemplo:

```text
http://localhost:3000
```

---

# ⚛️ Executando o Front-end

Abra outro terminal.

Entre na pasta:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O terminal exibirá o endereço local da aplicação.

Exemplo:

```text
http://localhost:5173
```

---

# 🔐 Variáveis de Ambiente

Informações sensíveis devem ficar armazenadas no arquivo:

```text
.env
```

Exemplo:

```env
DATABASE_URL="mongodb+srv://..."
PORT=3000
```

O arquivo `.env` **não deve ser enviado para o GitHub**.

Adicione ao `.gitignore`:

```text
.env
node_modules/
```

---

# 🔌 API

O Back-end utiliza o **Express.js** para criação das rotas da API.

Exemplo de estrutura:

```text
API
│
├── /users
│   ├── POST
│   ├── GET
│   ├── PUT
│   └── DELETE
│
└── /chamados
    ├── POST
    ├── GET
    ├── PUT
    └── DELETE
```

> As rotas podem sofrer alterações durante o desenvolvimento.

---

# 🎯 Objetivos do Projeto

O projeto possui como principais objetivos:

### 📚 Aprendizado

Colocar em prática conceitos de programação e desenvolvimento Full Stack.

### 🧠 Lógica de Programação

Desenvolver a capacidade de criar soluções sem depender de Inteligência Artificial.

### 🌐 Desenvolvimento Web

Aprender e aplicar conceitos de Front-end e Back-end.

### 🔌 APIs

Criar e consumir APIs utilizando JavaScript, Node.js e Express.

### 🗄️ Banco de Dados

Trabalhar com persistência de dados utilizando MongoDB e Prisma.

### ⚛️ React

Desenvolver interfaces utilizando componentes React.

### 🤝 Trabalho em Equipe

Aprender a desenvolver um projeto em dupla utilizando Git e GitHub.

### 💼 Portfólio

Criar um projeto real para demonstrar conhecimentos em desenvolvimento de software.

---

# 🚫🤖 Por que "SEM IA"?

Este projeto possui uma proposta diferente:

> **Aprender fazendo.**

Durante o desenvolvimento, buscamos compreender o funcionamento do código, pesquisar soluções, testar, cometer erros e corrigir os problemas encontrados.

A intenção é desenvolver nossa capacidade de:

* Pensar em soluções;
* Entender os erros;
* Criar algoritmos;
* Pesquisar documentação;
* Trabalhar com banco de dados;
* Construir APIs;
* Desenvolver interfaces;
* Trabalhar em equipe;
* Resolver problemas reais.

Por isso:

# ❌🤖 SEM IA

**O código é desenvolvido pelos próprios integrantes do projeto.**

---

# 📈 Status do Projeto

<div align="center">

### 🚧 EM DESENVOLVIMENTO 🚧

O sistema está sendo desenvolvido e novas funcionalidades serão adicionadas ao longo do projeto.

</div>

---

# 🗺️ Roadmap

## 🔹 Etapa 1 — Estrutura

* [x] Criar projeto
* [x] Configurar Front-end
* [x] Configurar Back-end
* [x] Configurar Node.js
* [x] Configurar Express
* [x] Configurar React
* [x] Configurar MongoDB
* [x] Configurar Prisma

## 🔹 Etapa 2 — Usuários

* [ ] Cadastro
* [ ] Login
* [ ] Autenticação
* [ ] Perfil do usuário

## 🔹 Etapa 3 — Chamados

* [ ] Criar chamado
* [ ] Listar chamados
* [ ] Visualizar chamado
* [ ] Editar chamado
* [ ] Alterar status
* [ ] Definir prioridade

## 🔹 Etapa 4 — Dashboard

* [ ] Dashboard
* [ ] Chamados abertos
* [ ] Chamados em andamento
* [ ] Chamados finalizados
* [ ] Estatísticas

## 🔹 Etapa 5 — Melhorias

* [ ] Responsividade
* [ ] Melhorias de UX/UI
* [ ] Validações
* [ ] Tratamento de erros
* [ ] Melhor organização do código

---

# 👨‍💻 Desenvolvedores

## 🧑‍💻 Crhysz

### Crhystian

Desenvolvedor do projeto.

---

## 🧑‍💻 JP

### João Pedro

Desenvolvedor do projeto.

---

# 🤝 Desenvolvimento

Este projeto está sendo desenvolvido em dupla por:

```text
       👨‍💻 CRHYSZ
       Crhystian

           +

       👨‍💻 JP
       João Pedro
```

Utilizamos **Git e GitHub** para controle de versão, organização do código e colaboração durante o desenvolvimento.

---

# 🧰 Ferramentas

<p align="center">

<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white">

</p>

---

# 📚 Tecnologias

<p align="center">

<img src="https://skillicons.dev/icons?i=html,js,react,bootstrap,nodejs,express,prisma,mongodb,git,github,vscode">

</p>

---

# 📄 Licença

Este projeto está sendo desenvolvido para fins de:

* 📚 Estudo
* 🧠 Aprendizado
* 💻 Prática
* 💼 Portfólio

---

# ⭐ Apoie o Projeto

Se você gostou do projeto ou acompanhou nosso desenvolvimento, considere deixar uma ⭐ no repositório.

---

<div align="center">

# 🎫 SISTEMA DE CHAMADOS

### Desenvolvido por

## 👨‍💻 Crhysz & JP

### Crhystian • João Pedro

<br>

# 🚫🤖 SEM IA

### Código desenvolvido manualmente.

</div>
```
