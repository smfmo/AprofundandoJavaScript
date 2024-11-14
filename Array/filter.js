const alunos = [ 
    {'samuel': 10.00, aprovado: true},
    {'Gustavo': 7.00, aprovado: true},
    {'Daniel': 5.00,reprovado: false},
    {'Gabriel': 6.00, aprovado: true}
]

const media = nota => nota.reprovado < 5

console.log(alunos.filter(media))


