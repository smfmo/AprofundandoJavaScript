const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma )
imprimirResultado(3, 4, function(x, y){ 
    return x - y
}) //declarando uma função anônima dentro de uma chamada de ouhtra função
imprimirResultado(3, 4, (x,y) => x * y) //utilizando uma arrowFunction (como há mais de 1 parâmetro, não pode tirar os parenteses). Uma Arrow function é sempre uma função anônima.


//utilizando uma função anônima dentro de um objeto 
const pessoa = {
    falar: function(){
        console.log('ola')
    }
} 

pessoa.falar()