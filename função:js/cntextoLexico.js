const valor = 'global'

function minhaFuncao() {
  console.log(valor)
}
// dentro do contexto lexico, a funçao carrega consigo a origem de onde a função foi DEFINIDA e nao no local de execução!!!
function exec() {
  const valor = 'local'
  minhaFuncao()
}

exec()

// output
// global
