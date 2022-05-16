let valor // sem nada
console.log(valor)

valor = null

console.log(valor)
//console.log(valor.toString)// vai dar erro, nao da para ler valor nulo!!
const produto = {}

console.log(produto)

produto.preco = 200

produto.cor = 'red'

produto.tam = null

console.log(!!produto.preco)

delete produto.preco

console.log(!!produto.preco)
