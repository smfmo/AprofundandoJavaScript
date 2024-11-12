//CRIANDO MEU PRÓPRIO FOREACH

Array.prototype.forEachFuncionarios = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const funcionários = ['João', 'Carlos', 'Pedro', 'Guilherme']


funcionários.forEachFuncionarios(function(nome, indice,){
    console.log(` ${indice + 1} ${nome} `)
})
