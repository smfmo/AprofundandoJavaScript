let dobro = function (a){
    return 2 * a
}

dobro = (a) => { 
    return 2 * a
}

dobro = a => 2 * a //return implícito (simplificando uma função)

console.log(dobro(Math.PI))

let ola = function () {
     return 'olá'
}

ola = () => 'olá' // resultado implícito (simplificando uma função) Se não houver parâmetros, tem que colocar os parenteses vazios.

ola = _ => 'olá' // O _ pode ser usado caso a função não tenha parâmetros definidos (simplificando ainda mais)

ola = () => {
    return 'olá'
}

console.log(ola())