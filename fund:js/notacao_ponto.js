console.log(Math.ceil(5.09))

const obj1 = {}

obj1.nome = 'bola'
//obj1['nome'] = 'bola2'
function Obj(nome) {
  this.nome = nome
  this.exec = function () {
    console.log('compra')
  }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj1.nome)
console.log(obj2.nome)
console.log(obj3.nome)

obj2.exec()
