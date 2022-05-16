function rand([min = 0, max = 10]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const print = () => console.log(rand([]))

print()
