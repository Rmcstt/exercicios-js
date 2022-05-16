function pessoa(nome) {
  this.nome = nome

  this.falar = function () {
    console.log(`meu nome é ${this.nome}`)
  }
}
const p1 = new pessoa('joao')
p1.falar()
//factory ´uma funcao que retorna um objeto
