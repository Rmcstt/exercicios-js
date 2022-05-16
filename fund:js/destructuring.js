// novo recurso es6

const pessoa = {
  nome: 'ana',
  idade: 5,
  enderoco: {
    logradouro: ' arua ali',
    numero: 1000
  }
}
const { nome: i, idade: o } = pessoa
const { nome, idade } = pessoa
console.log(i, o)
console.log(pessoa.nome, pessoa.idade)
console.log(nome, idade)
