class Avo {
    constructor(sobrenome = 'Monteiro', nacionalidade = 'Brasileiro', regiao = 'Brasilia-DF'){
        this.sobrenome = sobrenome
        this.nacionalidade = nacionalidade
        this.ragiao = regiao

    }
}

class Pai extends Avo {
    constructor(sobrenome, nacionalidade, regiao, profissao = 'Professor') {
        super(sobrenome, nacionalidade, regiao) //Super significa que está chamando o contrutor da classe Avo
        this.profissao = profissao
    }
} 

class Filho extends Pai {
    constructor(profissao = 'Universitário') {
        super()
        this.profissao = profissao
    }
}

const filho  = new Filho
console.log(filho)

