//novo recurso do ES2015

const pessoa = {
    nome: 'Samuel',
    idade: 19,
    endereco: {
        logradouro: 'rua xexeu',
        numero: 1000,
        cep: 72860515
        
    }
}

const {nome, idade} = pessoa //operador de desestruturação 'destructuring': {}
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // para muda o nome da váriavel 
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa //se caso extrair uma variável inexistente
console.log(sobrenome, bemHumorado)

const {endereco: {logradouro, numero, cep}} = pessoa //extrair de de um objeto dentro de outro objeto 
console.log(logradouro, numero, cep, complemento)