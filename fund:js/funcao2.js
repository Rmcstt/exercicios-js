const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

//função arrow

const soma = (a, b) => {
  return a + b
}

console.log(soma(2, 8))
// ainda mais simplificado

let subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
// ainda mais

let escreveEsseCaralho = a => console.log(a)
escreveEsseCaralho(1 + 1)
