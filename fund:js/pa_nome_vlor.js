const saudacao = 'opa' //contesto lexico

function exec() {
  const saldacao = 'fala' //contesto lexico 2
  return saldacao
}

// objetos sao grupos aninhados por pares chave/valor
const cliente = {
  nome: {
    nome: 'renato',
    sobreNome: 'mota'
  },
  idade: 26,
  peso: 90,
  endereco: {
    logradouro: 'cabaxi',
    numero: 377
  }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)

for (cliente.idade; cliente.idade != 100; cliente.idade++) {
  console.log(cliente)
}
