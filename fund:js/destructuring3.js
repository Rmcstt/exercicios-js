function rand({ min = 0, max = 2000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}
const obj = { max: 50, min: 10 }

const print = () => console.log(rand({}))

print()
