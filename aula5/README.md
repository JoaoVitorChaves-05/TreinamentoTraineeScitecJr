# Aula: Introdução ao Node.js e Express.js

**Carga Horária:** 1h  

---

## 🎯 Objetivos da Aula
- Entender o papel do **Node.js** no ecossistema web moderno.  
- Compreender os conceitos fundamentais do **Express.js**.  
- Conhecer **módulos, pacotes e middlewares**.  
- Implementar uma API simples com rotas e respostas JSON.  
- Estabelecer noções de **boas práticas** para projetos Node.js.  

---

## 📚 Conteúdo Programático

### 1. O que é Node.js? (10 min)
- Ambiente que permite rodar **JavaScript fora do navegador**.  
- Baseado no motor **V8** (Google Chrome).  
- **Características-chave:**  
  - **Assíncrono e não bloqueante** (event loop, callbacks, promises).  
  - **Orientado a eventos** (event-driven).  
  - Gerenciamento de pacotes com **NPM/Yarn**.  

➡️ Testando Node no terminal:
```bash
node -v
npm -v
```

➡️ Exemplo rápido:
```js
// hello.js
console.log("Olá, Node.js!");
```
```bash
node hello.js
```

---

### 2. Estruturando um Projeto Node.js (10 min)
Criando projeto:
```bash
mkdir aula-node-express
cd aula-node-express
npm init -y
```

Estrutura inicial:
```
aula-node-express/
 ├── node_modules/
 ├── package.json
 └── index.js
```

**Pacotes úteis** (introdução):
- `nodemon` → reinicia servidor automaticamente.  
- `dotenv` → gerencia variáveis de ambiente.  

Instalação:
```bash
npm install express
npm install --save-dev nodemon
```

---

### 3. Introdução ao Express.js (10 min)
- Framework minimalista para **construção de APIs e servidores web**.  
- Simplifica rotas, middlewares e respostas HTTP.  

➡️ Servidor básico (`index.js`):
```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá, mundo com Express!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

Rodando:
```bash
node index.js
```

---

### 4. Rotas e Respostas HTTP (15 min)
- **Rotas GET, POST, PUT, DELETE**.  
- Retornando **texto, HTML ou JSON**.  

➡️ Exemplos:
```js
// Rota com JSON
app.get('/api/usuarios', (req, res) => {
  res.json([
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" }
  ]);
});

// Rota com parâmetros
app.get('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, nome: `Usuário ${id}` });
});

// Rota com query string
app.get('/busca', (req, res) => {
  const { termo } = req.query;
  res.send(`Você pesquisou por: ${termo}`);
});
```

---

### 5. Middlewares (10 min)
- Funções que processam **requisições** antes de chegar na rota.  
- Podem: logar, validar, autenticar, manipular dados etc.  

➡️ Exemplo:
```js
// Middleware de log
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // passa para a próxima função
});
```

➡️ Middleware de JSON:
```js
app.use(express.json());

app.post('/api/produtos', (req, res) => {
  const produto = req.body;
  res.json({ mensagem: "Produto criado", produto });
});
```

---

## 📝 Exercício Final (10 min)
1. Crie uma rota **`/api/produtos`** com GET que retorne uma lista de produtos.  
2. Crie uma rota **`/api/produtos/:id`** que retorne apenas um produto específico.  
3. Adicione uma rota **POST** que receba um produto via `req.body` e exiba no console.  
4. Teste as rotas no navegador, **Postman** ou **Insomnia**.  

---

## 💡 Boas Práticas Iniciais
- Separar código em **módulos** (`routes/`, `controllers/`).  
- Usar **variáveis de ambiente** para portas e chaves (`dotenv`).  
- Padronizar respostas em JSON (status code + mensagem).  
- Utilizar ferramentas de teste de API (Postman, Insomnia).  
- Iniciar controle de versão com **Git**.  

---

## 📌 Recursos Extras
- [Node.js Docs](https://nodejs.org/en/docs/)  
- [Express.js Docs](https://expressjs.com/pt-br/)  
- [Guia HTTP Status Codes](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)  
- [NPM – Node Package Manager](https://www.npmjs.com/)  

---

## ✅ Conclusão
- **Node.js** = JavaScript no servidor, assíncrono e escalável.  
- **Express.js** = framework minimalista que simplifica rotas e middlewares.  
- Hoje criamos uma API REST **básica**, mas já com rotas, JSON e middlewares.  
- Próximos passos: organização de projetos, banco de dados e autenticação.  
