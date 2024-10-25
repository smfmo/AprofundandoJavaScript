//par Nome/Valor
const saudacao = 'opa' //contexto léxico 1
 
function exec (){
    const saudacao = 'falaaa' //contexto léxico 2
    return saudacao
} 

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Samuel',
    idade: 19,
    peso: 60,
    endereco:{
        logradouro:'rua daora da silva',
        numero:123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)