function pessoa() {
  this.idade = 0.01

  setInterval(() => {
    this.idade *= 2
    console.log(this.idade)
  }, 1000)
}

new pessoa()
