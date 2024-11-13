const nums = [1, 2, 3, 4, 5]

// map é um for com propósito 
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

/*usando a function normal 
const soma10 = function(e){ // aqui vai somar os valores do Array + 10 
    return e + 10
}
const triplo = function(e){ //aqui vai multplicar os valores do Array * 3 
    return e * 3
}
const paraDinheiro = function(e){ // Aqui vai converter o valor do Array para R$
    return `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
}*/

//utilizando Arrow Function 
const soma10 = e => e + 10 
const triplo = e => e * 3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// aqui vai resultar em um Array juntando todas as funções 
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

