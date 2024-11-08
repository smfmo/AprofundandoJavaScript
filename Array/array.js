let aprovados = new Array ('Samuel', 'Maria Clara')
console.log(aprovados)

aprovados = ['Samuel', 'Maria Clara', 'joao lucas']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados.push('num sei') // para adicionar mais 1 elemento dentro do Array

console.log(aprovados.length) // vai retornar quantos elementos existem dentro de um Array 

aprovados[9] = 'fodase' // só que do indice 3 até o indice até o indice 8 sera undefined 
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

aprovados.sort() // vai realocar os items em ordem crescente/alfabética
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Samuel', 'Maria clara', 'joao lucas']
aprovados.splice() // Splice serve para adicionar elementos num determinado índice, como também para remover remover elementos de um array e tambem remover e adicionar elementos.
aprovados.splice(1, 0, 'jurubeba', 'caguei') // o primeiro parametro significa o item q vai ser trabalhado e o segundo o item q vai ser excluído, e o terceiro parametro será o que vai adicionar.
console.log(aprovados)
