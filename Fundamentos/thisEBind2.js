function Pessoa(){
    this.idade = 0

    setInterval(function(){//dispara uma outra função a partir de um determinado intervalo 
        this.idade++
        console.log(this.idade)
    }, 1000) 
}