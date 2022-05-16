//factory

function criarProduto(nome, preco) {
  //aqui voce cria a estrutura
  return {
    nome,
    preco: (preco *= 0.9),
    desconto: '10%'
  }
}

// aqui voce cria os objetos...
console.log(criarProduto('notebook macbook air m1', 6999.0))
console.log(criarProduto('notebook dell xps', 7999.0))
console.log(criarProduto('notebook asus rog', 9999.0))
console.log(criarProduto('notebook macbook pro m1', 11999.0))
console.log(criarProduto('notebook samsung galaxybook', 8999.0))
console.log(criarProduto('notebooklenovo thinkpad t14', 15999.0))
