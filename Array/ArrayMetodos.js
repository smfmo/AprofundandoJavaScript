const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //Remove o último elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um novo elemento ao final do Array
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do Array/lista
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um novo elemento no índice 0 do Array
console.log(pilotos)

//Splice pode tanto adicionar quanto remover elementos

 // o primeiro parametro significa o item q vai ser trabalhado e o segundo o item q vai ser excluído, e o terceiro parametro será o que vai adicionar.

//adicionar
pilotos.splice(2, 0, 'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Gera um novo array a partir do índice definido
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)