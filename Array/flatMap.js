const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome:'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3 
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome:'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotasDoAluno = aluno => aluno.nota // uma arrow function que recebe como parâmetro um objeto aluno. A função retorna o valor da propriedade nota desse objeto 
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno) // Recebe como parâmetro um objeto turma, que se espera ter uma propriedade alunos. A propriedade alunos deve ser um array de objetos, onde cada objeto representa um aluno.  A função usa o método .map() para transformar o array de alunos no array de notas, utilizando a função getNotasDoAluno para extrair as notas de cada aluno

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// método concat
console.log([].concat([[ 8.1, 9.3 ], [ 8.9, 7.3 ]]))  // o método em questão é chamado em um Array vazio []. É passado um array contendo dois arrays internos [[8.1, 9.3], [8.9, 7.3]] como argumento.

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)