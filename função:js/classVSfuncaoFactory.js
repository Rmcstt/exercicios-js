class pessoa {
  //funcao class
  constructor(nome) {
    this.nome = nome
  }
  falar() {
    console.log(`meu nome é ${this.nome}`)
  }
}
const p1 = new pessoa('joao')
p1.falar()
//é a melhor opcao: factory
const criarPessoa = nome => {
  //factory
  return {
    falar: () => console.log(`meu nome é ${nome}`)
  }
}

const p2 = criarPessoa('joao')
p2.falar()
// voce pode criar objetos a partir de uma funcao factory
