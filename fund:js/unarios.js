let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
/*nao colocar incremento dentro de comparação pois o JS le com antecipação */
