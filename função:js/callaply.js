function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const prod = {
  nome: 'notebook',
  preco: 6999.0,
  desc: 0.15,
  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(prod.getPreco())

const carro = { preco: 53000, desc: 0.2 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, 'US$')) //parametros direto na funcao
console.log(getPreco.apply(carro, [0.17, 'US$'])) //mesma coisa, diferença esta no array
