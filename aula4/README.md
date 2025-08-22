# JavaScript Básico — Material Didático (Aulas 1 e 2)

Material didático detalhado para duas aulas introdutórias de JavaScript:  
- **Parte 1**: Fundamentos  
- **Parte 2**: Estruturas & manipulação do DOM  

Inclui explicações, exemplos práticos, exercícios guiados com soluções, dicas de debug e um roteiro de avaliação.

---

## Índice

1. [Objetivos das aulas](#objetivos-das-aulas)  
2. [Recapitulação rápida (pré-requisitos)](#pré-requisitos)  
3. [Parte 1 — Fundamentos](#parte-1-—-fundamentos)  
   - [Como inserir JS](#31-como-inserir-javascript)  
   - [Console e depuração](#32-console-e-depuração)  
   - [Variáveis (let, const, var)](#33-variáveis-let-const-var)  
   - [Tipos de dados e operações básicas](#34-tipos-de-dados-e-operações-básicas)  
   - [Boas práticas e armadilhas comuns](#35-boas-práticas--armadilhas-comuns)  
   - [Exercícios — Parte 1](#36-exercícios-—-parte-1)  
4. [Parte 2 — Controle de fluxo e DOM](#parte-2-—-controle-de-fluxo-e-dom)  
   - [Condicionais](#41-condicionais)  
   - [Loops](#42-loops)  
   - [Seleção do DOM](#43-seleção-do-dom)  
   - [Manipulação do DOM](#44-manipulação-do-dom)  
   - [Eventos](#45-eventos)  
   - [Exercícios — Parte 2](#46-exercícios-—-parte-2)  
5. [Soluções (gabarito comentado)](#5-soluções-gabarito-comentado)  
6. [Rubrica de avaliação e sugestões de aula](#6-rubrica-de-avaliação-e-sugestões-de-aula)  
7. [Recursos recomendados / leitura extra](#7-recursos-recomendados--leitura-extra)  

---

## Objetivos das aulas

Ao final das duas aulas, o aluno deverá ser capaz de:  

- Incluir e executar JavaScript em páginas HTML  
- Usar o console do navegador para depuração  
- Declarar e usar variáveis corretamente  
- Identificar tipos básicos e operações com eles  
- Escrever condicionais e loops para controlar o fluxo  
- Selecionar elementos do DOM e alterar seu conteúdo/estilos  
- Ligar interações (cliques) a comportamentos via `addEventListener`  

---

## Pré-requisitos

- Noções básicas de HTML e CSS (tags, atributos, id/class)  
- Ambiente: navegador moderno (Chrome/Firefox/Edge) e editor de código (VSCode, por exemplo)  

---

## Parte 1 — Fundamentos

### 3.1 Como inserir JavaScript

**Inline (não recomendado para projetos grandes):**

```html
<script>
  console.log("Olá do script inline!");
</script>
```

**Arquivo externo (recomendado):**

**index.html**
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8"/>
    <title>Parte 1 - JS Básico</title>
  </head>
  <body>
    <h1 id="titulo">Título original</h1>
    <script src="script.js"></script>
  </body>
</html>
```

**script.js**
```js
console.log("Script carregado!");
```

> Observação: colocar `<script>` antes do `</body>` garante que o HTML já esteja carregado; alternativo é usar `defer`.

---

### 3.2 Console e depuração

```js
console.log(value)      // imprimir valores
console.error("Erro")   // mensagem de erro
console.warn("Aviso")   // mensagem de alerta
```

Ferramentas do navegador: *Inspecionar elemento → Console / Sources (breakpoints)*

---

### 3.3 Variáveis: let, const, var

- `const` → valor imutável (referência), use por padrão  
- `let` → variável mutável, escopo de bloco  
- `var` → escopo de função, hoisting; evitar em código moderno  

```js
const PI = 3.14;
let contador = 0;
contador = contador + 1;
```

---

### 3.4 Tipos de dados e operações básicas

**Primitivos:** string, number, boolean, null, undefined, symbol (avançado)  
**Objetos e arrays:** coleções e estruturas compostas  

```js
let nome = "Ana";        // string
let idade = 30;          // number
let ativo = true;        // boolean
let nada = null;         // null
let indef = undefined;   // undefined
```

Operações:

- Concatenação: `"Olá, " + nome` ou template literals `` `Olá, ${nome}` ``  
- Operadores aritméticos: `+ - * / %`  
- Comparação: `===` (estrito) vs `==` (coercitivo). Preferir `===`.

---

### 3.5 Boas práticas / armadilhas comuns

- Evitar `var`  
- Preferir `===` e `!==`  
- Atenção à coerção de tipos (`"5" + 3 -> "53"`, `"5"*1 -> 5`)  
- `null` vs `undefined`  
- Nomear variáveis de forma clara  

---

### 3.6 Exercícios — Parte 1

1. Mostrar no console uma mensagem com nome e idade usando template literal  
2. Alterar o conteúdo de `<p id="mensagem">` via script  
3. Criar função `saudacao(nome, hora)` com saudações dependendo da hora  

---

## Parte 2 — Controle de fluxo e DOM

### 4.1 Condicionais

**If / Else**
```js
let idade = 17;
if (idade >= 18) {
  console.log("Maior");
} else {
  console.log("Menor");
}
```

**Switch**
```js
let dia = 3;
switch (dia) {
  case 1: console.log("Segunda"); break;
  case 2: console.log("Terça"); break;
  default: console.log("Outro dia");
}
```

---

### 4.2 Loops

**For**
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**While**
```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

**For...of**
```js
const nomes = ["Ana", "Bruno"];
for (const n of nomes) {
  console.log(n);
}
```

---

### 4.3 Seleção do DOM

```js
document.querySelector(selector)      // primeiro elemento que casa
document.querySelectorAll(selector)   // NodeList (iterável)
document.getElementById(id)           // elemento pelo id
```

---

### 4.4 Manipulação do DOM

```js
const p = document.querySelector("#mensagem");
p.textContent = "Texto alterado";
p.innerHTML = "<strong>Negrito</strong>";
p.value         // para inputs
p.classList.add("ativo") // manipular classes
```

---

### 4.5 Eventos

```js
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Você clicou!");
});
```

---

### 4.6 Exercícios — Parte 2

1. Botão que altera texto de um parágrafo  
2. Input + botão → adicionar valor do input em uma lista `<ul>`  
3. Galeria de imagens: trocar `src` e destacar thumbnail ativo  

---

## 5. Soluções (gabarito comentado)

### Parte 1 — Exercício 1
```js
const nome = "João";
let idade = 25;
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
```

### Parte 1 — Exercício 2
```js
const p = document.querySelector("#mensagem");
const nome = "João";
let idade = 25;
p.textContent = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
```

### Parte 1 — Exercício 3
```js
function saudacao(nome, hora) {
  if (hora < 12) return `Bom dia, ${nome}`;
  if (hora < 18) return `Boa tarde, ${nome}`;
  return `Boa noite, ${nome}`;
}
console.log(saudacao("Ana", 9));
console.log(saudacao("Ana", 14));
console.log(saudacao("Ana", 20));
```

*(As soluções da Parte 2 seguem o mesmo padrão, com scripts e HTML para interação.)*

---

## 6. Rubrica de avaliação e sugestões de aula

**Sugestão de cronograma:**

- **Aula 1 (Fundamentos)**: 60–90 min  
  - 15 min: apresentação  
  - 20–30 min: teoria  
  - 20–30 min: exercícios + demonstrações  
  - 10–15 min: dúvidas/correção  

- **Aula 2 (Estruturas & DOM)**: 60–90 min  
  - 10 min: revisão  
  - 30–40 min: teoria (condicionais, loops, DOM)  
  - 30 min: exercícios práticos  
  - 10–15 min: fechamento  

**Rubrica de avaliação (exemplo):**

- Funcionalidade: 60%  
- Qualidade do código: 20%  
- Boas práticas: 10%  
- Criatividade/estética: 10%  

---

## 7. Recursos recomendados / leitura extra

- [MDN Web Docs — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  
- Cursos interativos: freeCodeCamp, Codecademy  
- Ferramentas: Chrome DevTools (breakpoints e inspeção)

