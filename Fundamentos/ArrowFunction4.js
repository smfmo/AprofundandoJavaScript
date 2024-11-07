let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // o this aqui estrá se referindo ao contexto global result:true

const obj = {}
comparaComThis = comparaComThis.bind(obj) //o bind o fará se referir a constante (obj) result:true
comparaComThis(global) // aqui não estará mais se referindo ao contexto global result:false
comparaComThis(obj) //aqui estará se referindo ao obj result:true

//USO DA ARROW FUNCTION

// o This em uma função Arrow é um this associado ao contexto em que a função foi escrita.

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // mesmo usando o bind dentro de uma função arrow, ele naão irá mudar a referência
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)