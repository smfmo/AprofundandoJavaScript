const estudantes = ['Samuel', 'Clara', 'Maria', 'João']
console.log(estudantes)

estudantes.pop()//Aqui removeu João

estudantes.push('Gabriel') //novo aluno matriculado
console.log(estudantes)

estudantes.shift() // O primeiro aluno saiu
console.log(estudantes)

estudantes.unshift('Larissa') //nova aluna adicionada ao começo da fila
console.log(estudantes)

//métodos splice 

//adicionar
estudantes.splice(1, 0, 'Eduarda', 'Calebe', 'Joana')
console.log(estudantes)

//remover
estudantes.splice(3, 1)
console.log(estudantes)

const outrosAlunos = estudantes.slice(2)
console.log(outrosAlunos)

const outrosAlunos2 = estudantes.slice(0, 3)
console.log(outrosAlunos2)




