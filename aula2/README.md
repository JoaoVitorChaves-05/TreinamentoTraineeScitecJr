# 📚 Aula 2 — Introdução ao HTML

## 🎯 Objetivos da Aula
- Entender o que é HTML e sua função no desenvolvimento web.
- Conhecer a estrutura básica de um documento HTML.
- Aprender as principais tags e atributos.
- Criar sua primeira página HTML simples.

---

## 🖥 1. O que é HTML?
- **HTML** significa **HyperText Markup Language** (Linguagem de Marcação de Hipertexto).
- É **a estrutura** de uma página web — pensa como o "esqueleto" do site.
- Usa **tags** para marcar e organizar o conteúdo.
- É interpretado pelo **navegador** (Chrome, Firefox, Edge, etc.).

📌 **Importante:**  
HTML **não é** linguagem de programação. É uma **linguagem de marcação** que descreve o conteúdo.

---

## 🌐 2. Como o HTML funciona na Web
- O navegador lê o código HTML e **renderiza** os elementos visuais.
- HTML se conecta a:
  - **CSS** — para estilizar (cores, fontes, layout).
  - **JavaScript** — para interatividade (botões, animações, formulários dinâmicos).
- Hoje, vamos focar **apenas** no HTML.

---

## 📂 3. Estrutura básica de um documento HTML
Todo documento HTML segue este formato:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Primeira Página</title>
</head>
<body>
  <h1>Olá, mundo!</h1>
</body>
</html>
```

**Explicando cada parte:**
- `<!DOCTYPE html>` → Diz ao navegador que estamos usando HTML5.
- `<html>` → Elemento raiz da página.
- `<head>` → Contém **metadados** (informações sobre a página).
- `<meta charset="UTF-8">` → Permite usar acentos e caracteres especiais.
- `<meta name="viewport">` → Torna o site responsivo.
- `<title>` → Nome que aparece na aba do navegador.
- `<body>` → Onde colocamos o conteúdo visível.

---

## 🏷 4. Principais tags HTML
### 4.1 Títulos e parágrafos
```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<p>Este é um parágrafo de texto.</p>
```
- **`<h1>` a `<h6>`** — Hierarquia de títulos (H1 mais importante).
- **`<p>`** — Parágrafo.

### 4.2 Listas
```html
<ul>
  <li>Item de lista não ordenada</li>
</ul>
<ol>
  <li>Item de lista ordenada</li>
</ol>
```

### 4.3 Links e imagens
```html
<a href="https://google.com">Ir para o Google</a>
<img src="imagem.jpg" alt="Descrição da imagem">
```
- `href` → Endereço do link.
- `src` → Caminho da imagem.
- `alt` → Texto alternativo (acessibilidade).

### 4.4 Quebras de linha e divisões
```html
<br> <!-- Quebra de linha -->
<hr> <!-- Linha horizontal -->
<div>Conteúdo em bloco</div>
<span>Conteúdo em linha</span>
```

---

## 🗂 5. Boas práticas
- Usar **indentação** para organizar o código.
- Nomear arquivos sem espaços e acentos.
- Sempre fechar as tags (`<p> ... </p>`).
- Usar atributos com aspas duplas (`" "`).

---

## 🛠 6. Projeto prático — Minha Página Pessoal
📌 **Objetivo:** Criar uma página simples apresentando você.

### Passos:
1. Criar um arquivo chamado `index.html`.
2. Estrutura básica do HTML.
3. Adicionar:
   - Seu nome em `<h1>`.
   - Uma breve descrição em `<p>`.
   - Uma lista (`<ul>` ou `<ol>`) com 3 hobbies.
   - Um link para seu perfil do LinkedIn ou GitHub.
   - Uma imagem (pode ser sua foto ou algo que represente você).
4. Salvar e abrir no navegador.

---

## 📌 Desafio extra
- Adicione uma **linha horizontal** (`<hr>`) para separar seções.
- Coloque uma **quebra de linha** (`<br>`) entre alguns elementos.
- Teste alterar o título da aba com `<title>`.

---

## 📅 Próxima aula
- Introdução ao CSS: como estilizar nossa página HTML.

---
