//closure é o escopo de onde a função fora criada// é o escopo criado quando uma função é criada!!!
//esse escopo permite a funçåo acessar e manipular variaveis externas a função.

//contexto lexico em açåo.
const x = 'global'

function fora() {
  const x = 'local' //a função carrega consigo e em seu escopo a memoria de onde a variavel foi decelarada!!!
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
