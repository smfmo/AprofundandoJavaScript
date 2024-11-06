function Pessoa(){
    this.idade = 50

    //const self = this 
    setInterval(function(){//dispara uma outra função a partir de um determinado intervalo 
        this.idade--
        console.log(this.idade)
    }.bind(this), 1000) //o método bind estabelece o valor this da função, independentemente de como ela seja chamada
}

new Pessoa 