const [a] = [10] //extrair valores de dentro de um Array : []
console.log(a)

/*const [n1, , n3, , n5, n6 = 0] = [1, 4, 6, 8] //extraindo os valores ignorando os elementos 2 e 4.
console.log(n1, n3, n5, n6)*/

const [, [, nota]] = [[, 8, 8],[9, 6, 8]] //extraindo vcalores de um array dentro de outro array ignorando o primeiro array kkkkkkkkkkkkkkkk
console.log(nota)

const [n1, n6, n3, n8, n9 = 12] = [1, 8, 9, 2, 4, 5, 10, 15]
console.log(n1, n6, n3, n8, n9)