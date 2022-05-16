const fabricantes = ['Mercedes', 'Audi', 'BMW']

print = (nome, indice) => {
  console.log(`${indice + 1}.${nome}`)
}

/*fabricantes.forEach(print)
fabricantes.forEach(function (a) {
  console.log(a)
}) 
*/ // arrow function is the best

/*fabricantes.forEach(print)
fabricantes.forEach(
  (a = a => {
    console.log(a)
  })
)
*/

fabricantes.forEach(print)
fabricantes.forEach(fabricantes => console.log(fabricantes))
