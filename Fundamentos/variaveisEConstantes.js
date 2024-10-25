var a = 3 //pode-se declarar dentro de um mesmo escopo 2 vezes.
let b = 4 // não consegue chamar a variável fora do escopo onde ela foi declarada.

var  a = 30 
b = 40

console.log (a, b)

a = 300
b = 400 
console.log(a, b)

//constantes
const c = 5 
//c = 50 //constantes não podem atribuir novos valores se ja houver um valor atribuido.
console.log(c)