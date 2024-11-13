const funcionarios = [
    '{"nome": "Pedro", "salario": 1444}',
    '{"nome": "Samuel", "salario": 5700}',
    '{"nome":  "joão", "salario": 4789}'
]

const Objeto = json => JSON.parse(json) //convertendo para objeto
const salario = valor => valor.salario
const real = valorReal => `R$ ${parseFloat(valorReal).toFixed(1).replace('.', ',')}`

resultado = funcionarios.map(Objeto).map(salario).map(real)

console.log(resultado)