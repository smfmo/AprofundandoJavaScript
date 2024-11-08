class Carro {
    constructor(marca = 'Porsche', ano = '2021', placa = 'PJQA-235') {
        this.marca = marca
        this.ano = ano 
        this.placa = placa
    }
}

class proprietario extends Carro{
    constructor(marca, ano, placa, nome = 'Samuel', sobrenome = 'Monteiro', idade = '19'){
        super(marca, ano, placa)
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        
    }
}

const Proprietario = new proprietario 
console.log(Proprietario)