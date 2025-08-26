const btn = document.querySelector("button");

// Prefiro essa opção, é mais limpo o código

btn.addEventListener("click", () => {
    const input = document.querySelector("input");
    const ul = document.querySelector("ul");
    const li = document.createElement("li"); // Cria o elemento <li></li>
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
});

// ou

btn.addEventListener("click", () => {
    const input = document.querySelector("input");
    const ul = document.querySelector("ul");
    ul.innerHTML += `<li>${input.value}</li>`;
});

// Apesar da primeira opção ser mais limpa, a segunda opção é mais fácil de entender
// com o que eu ensinei na aula.