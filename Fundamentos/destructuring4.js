function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // ele vai inverter os valores e retornar da forma correta
console.log(rand([992])) //
console.log(rand([, 10]))// retornando apenas o segundo 
console.log(rand([])) // vai gerar valores aleatórios 