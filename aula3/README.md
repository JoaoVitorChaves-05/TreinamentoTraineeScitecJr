# Aula 3 – Introdução ao CSS 🎨

## 🎯 Objetivos da Aula
- Entender o papel do CSS no desenvolvimento web.
- Aprender sobre seletores, propriedades e valores.
- Aplicar estilos básicos a uma página HTML.
- Criar uma página HTML estilizada com CSS externo.

---

## 📚 Teoria

### O que é CSS?
CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas HTML.  
Enquanto o HTML define o **conteúdo** e a **estrutura**, o CSS define a **aparência**.

### Como o CSS funciona?
O CSS aplica regras de estilo ao HTML usando **seletores** para encontrar elementos e **propriedades** para definir estilos.

**Exemplo simples:**
```css
p {
  color: blue;
  font-size: 16px;
}
```
Esse código deixa todos os parágrafos (`<p>`) azuis e com fonte de 16px.

### Formas de usar CSS
1. **Inline** – usando o atributo `style` diretamente no elemento HTML.
```html
<p style="color:red;">Texto vermelho</p>
```
2. **Interno** – usando a tag `<style>` dentro do HTML.
```html
<style>
  p { color: green; }
</style>
```
3. **Externo** – usando um arquivo `.css` separado e linkando com `<link>`.
```html
<link rel="stylesheet" href="styles.css">
```

> **Boas práticas:** Sempre que possível, utilize **CSS externo** para organização e manutenção do código.

### Seletores básicos
- **Por tag:** `p { }`
- **Por classe:** `.minha-classe { }`
- **Por id:** `#meu-id { }`

### Principais propriedades
- `color`: cor do texto
- `background-color`: cor de fundo
- `font-size`: tamanho da fonte
- `font-family`: tipo de fonte
- `text-align`: alinhamento do texto
- `margin` e `padding`: espaçamentos
- `border`: bordas

---

## 🛠 Projeto Prático

### Objetivo
Criar uma página HTML que apresente informações sobre você, aplicando estilos com CSS externo.

### Passos
1. Reaproveitar o HTML da Aula 1 (sobre você ou um tema livre).
2. Criar um arquivo `style.css`.
3. Linkar o CSS no HTML usando `<link rel="stylesheet" href="style.css">`.
4. Estilizar:
   - Fundo da página com `background-color`.
   - Cores e tamanhos de texto.
   - Fonte personalizada com `font-family`.
   - Margens e espaçamentos adequados.
5. Testar alterações no navegador.

---

## 📌 Dicas
- Use sites como [Google Fonts](https://fonts.google.com/) para importar fontes diferentes.
- Utilize o [MDN Web Docs – CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) como referência.

---

## 📚 Recursos adicionais
- [W3Schools – CSS](https://www.w3schools.com/css/)
- [MDN – Guia CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

✅ **Na próxima aula:** Vamos aprender sobre **JavaScript** e como dar interatividade à página.
