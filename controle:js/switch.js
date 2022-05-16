max = 12
min = 1
const valor = Math.random() * (max - min) + min
const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log('quadro de honra')
      break
    case 8:
    case 7:
      console.log('aprovado')
      break
    case 6:
    case 5:
    case 4:
      console.log('recuperação')
      break
    case 3:
    case 2:
    case 1:
    case 0:
      console.log('reprovado')
      break
    default:
      console.log('nota invalida')
  }
  console.log('fim')
}
console.log(valor.toFixed(1))
imprimirResultado(valor)
// imprimirResultado(8.99)
// imprimirResultado(-2)
// imprimirResultado('a')
// imprimirResultado(4)
// imprimirResultado(5.5)
// imprimirResultado(3.8)
// imprimirResultado(11)
