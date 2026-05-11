//Função que recebe um objeto como argumento
function exibirInfoProduto(produto) {
    return `Produto: ${produto.nome},
    Preco: R$${produto.preco.toFixed(2)},
    Estoque: ${produto.estoque} unidade.`;
}

const produto1 = {
    nome: "Monitor",
    preco: 1500.00,
    estoque: 10
}

const produto2 = {
    nome: "mouse",
    preco: 100.00,
    estoque: 12
}

console.log(exibirInfoProduto(produto1));
console.log(exibirInfoProduto(produto2));