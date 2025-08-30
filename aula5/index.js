import express from "express";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url); // D:/Trabalho/Trainee/aula5/index.js
const __dirname = dirname(__filename); // D:/Trabalho/Trainee/aula5/

console.log(__dirname); // mostra o diretório do arquivo atual


const app = express();
const port = 3000;

/* 
    GET / - Responde com "Hello World!"
    POST /api/produtos - Recebe um produto via req.body e exibe no console
    PUT/PATCH /api/produtos/:id - Atualiza um produto
    DELETE /api/produtos/:id - Deleta um produto
*/

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/produtos", (req, res) => {
    const { nome } = req.query;
    // req.query.nome

    const produtos = [
        { id: 1, nome: "Notebook" },
        { id: 2, nome: "Mouse" },
        { id: 3, nome: "Teclado" },
    ];

    if (!nome) {
        return res.json(produtos);
    }

    const buscaProduto = produtos.find(produto => produto.nome === nome);
    if (!buscaProduto) {
        return res.status(404).json({ mensagem: "Produto nao encontrado" });
    }

    return res.json(buscaProduto);

})

app.post("/api/produtos", (req, res) => {
    const produto = req.body;
    console.log(produto);
    res.json({ mensagem: "Produto criado", produto });
});

app.put("/api/produtos/:id", (req, res) => {
    const id = req.params.id;
    const produto = req.body;
    console.log(`Produto ${id} atualizado:`, produto);
    res.json({ mensagem: "Produto atualizado", produto });
});

app.delete("/api/produtos/:id", (req, res) => {
    const id = req.params.id;
    console.log(`Produto ${id} deletado`);
    res.json({ mensagem: "Produto deletado" });
});

app.post("/api/usuarios", (req, res, next) => {
    const { isAdmin } = req.body;
    if (!isAdmin) {
        return res.status(401).json({ mensagem: "Acesso negado" });
    }
    next();
}, (req, res) => {
    const usuario = req.body;
    console.log("Usuário cadastrado:", usuario);
    res.json({ mensagem: "Usuário cadastrado", usuario });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});