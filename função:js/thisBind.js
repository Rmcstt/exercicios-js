const pessoa = {
  saudacao: 'bom dia',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()

const falar = pessoa.falar

falar() // conflito etre mundo da programação funcional e oruentada a objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
