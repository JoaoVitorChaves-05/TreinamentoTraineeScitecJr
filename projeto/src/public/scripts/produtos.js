const produtos = [
    { id: 1, nome: "Café Expresso", preco: 9.90 },
    { id: 2, nome: "Café Expresso com Leite", preco: 12.90 },
    { id: 3, nome: "Café Expresso com Chocolate", preco: 14.90 },
    { id: 4, nome: "Café Expresso com Chocolate e Leite", preco: 16.90 },
    { id: 5, nome: "Café Expresso com Chocolate e Leite", preco: 16.90 },
    { id: 6, nome: "Café Expresso com Chocolate e Leite", preco: 16.90 },
]

const produtosContainer = document.getElementById("produtos-container")

produtos.forEach(produto => {
    const produtoElement = document.createElement("div")
    produtoElement.classList.add("produto")
    produtoElement.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
    `
    produtosContainer.appendChild(produtoElement)
})

