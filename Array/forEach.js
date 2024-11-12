const aprovados = ['Samuel', 'Clara', 'Maria','Gabriel']

aprovados.forEach(function(nome, indice, ){ //ForEach é uma função callback, onde o primeiro parâmetro é o conteúdo do índice, o segundo é o índice e o terceiro uma array
    console.log(`${indice + 1 } ${nome}`)
    
})

aprovados.forEach(nome => console.log(nome)) //utilizando uma arrow fUNCTION

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)