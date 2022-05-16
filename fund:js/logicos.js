function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2
  const compraTv50 = trabalho1 && trabalho2
  const compraTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete

  return { comprarSorvete, compraTv50, compraTv32, manterSaudavel }
}
let print1 = () => console.log('rico:', compras(true, true))
let print2 = () => console.log('trabalhador:', compras(true, false))
let print3 = () => console.log('trabalhador:', compras(false, true))
let print4 = () => console.log('duro:', compras(false, false))

print1()
print2()
print3()
print4()
