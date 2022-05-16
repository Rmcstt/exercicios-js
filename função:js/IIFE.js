// IIFE -> immediately invoked function expression = função auto-invocada
;(function () {
  console.log('sera executado na hora')
  console.log('foge do escopo mais abrangente')
})()

/*output
sera executado na hora
foge do escopo mais abrangente*/
