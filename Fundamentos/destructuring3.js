//extraindo valores de funções 

function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min //Math.random() gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo). Multiplicando por (max - min), o intervalo do número aleatório agora é ajustado para o intervalo desejado entre 0 e 1000. Somando min ao resultado, o número final estará entre 0 e 1000.
    return Math.floor(valor) //Math.floor(valor) arredonda valor para baixo, transformando-o em um número inteiro. O valor final estará entre 0 e 1000 (incluindo 0, mas excluindo 1000).
}

const obj = {max: 50, min: 40} //deu novos valores para 0 e 1000 
console.log (rand(obj)) //vai gerar um número inteiro aleátorio entre 40 e 49
console.log(rand({min: 955})) //vai gerar numeros entre 955 e 999
console.log(rand({}))// vai gerar números entre 0 e 999
