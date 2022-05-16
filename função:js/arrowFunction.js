let dobro = function (a) {
  return (a *= 2)
}
dobro = a => {
  return 2 * a
}

dobro = a => (a *= 2) //return esta implicito

console.log(dobro(2))

let ola = function () {
  return 'ola'
}

ola = () => 'ola'

console.log(ola())
