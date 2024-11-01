const pessoa = {
    saudacao: 'Bom-Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // [ERRO] Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // Bind consegue acessar o objeto no contexto global sem gerear conflito 
falarDePessoa()