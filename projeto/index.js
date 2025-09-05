import express from "express";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url); // D:/Trabalho/Trainee/projeto/index.js
const __dirname = dirname(__filename); // D:/Trabalho/Trainee/projeto/

console.log(__dirname); // mostra o diretório do arquivo atual


const app = express();
const port = 3000;

app.use(express.static(__dirname + "/src/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/pages/index.html");
});

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/src/pages/sobre.html");
});

app.get("/contato", (req, res) => {
    res.sendFile(__dirname + "/src/pages/contato.html");
});

app.get("/produtos", (req, res) => {
    res.sendFile(__dirname + "/src/pages/produtos.html");
});

app.listen(port, () => {
    console.log(`> App listening at http://localhost:${port}`);
});