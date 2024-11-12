Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
const aprovados = ['Samuel', 'Clara', 'Maria','Gabriel']

aprovados.forEach2(function(nome, indice, ){ //ForEach é uma função callback, onde o primeiro parâmetro é o conteúdo do índice, o segundo é o índice e o terceiro uma array
    console.log(`${indice + 1 } ${nome}`)
    
})