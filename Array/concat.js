
//O método CONCAT tem a função de concatenar dois Arrays dentro de um só, mas não modifica os arrays principais 

const filhas = ['Maria', 'Clara']
const filhos = ['samuel', 'jurubeba']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)

console.log([].concat([1,2], [3,4], 5, [[6,7]]))