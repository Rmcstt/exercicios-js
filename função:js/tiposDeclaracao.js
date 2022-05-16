console.log(soma(3, 4)) // na função declarada ele ira executar mesmo se a função vir depois
//function declaration
function soma(x, y) {
  return x + y
}
//function expression // atribiur uma função anonima!!!
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 4))
// named functio expression (pouco usada)
const mult = function mult(x, y) {
  return x * y
}
console.log(mult(3, 4))
