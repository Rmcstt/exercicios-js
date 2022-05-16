const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.9
prod1['desconto legal'] = 0.4 // evitar atributos com espaco

const prod2 = {
  nome: 'camisa polo',
  preco: 79.9,
  'desconto legal': 0.4
}

const prod3 = {
  nome: 'carrinho',
  preco: 50.0,
  'desconto legal': 0.6
}

const preod4 = {
  nome: 'boneca',
  preco: 60.0,
  'desconto legal': 0.4
}

console.log(prod1, prod2, prod3, preod4)
