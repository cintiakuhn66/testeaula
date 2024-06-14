//ARRAYS


const listaDeCompras = ["batata", "cenoura", "tomate"]

const listaDaLoteria = [2, 4, 11, 22, 35, 67]

const listaBolleans = [true, false]

const listaVariada = [5, "cinco", true]

console.log(listaDeCompras[2])

console.log(listaVariada[0] + 1) // copiou o valor de 5 e fez + 1 

//--------------------------------------------------------

//PRPRIEDADES E MÉTODOS

//PROPRIEDADE LENGTH

console.log(listaDeCompras.lenght) // retorna a quantidade de elementos 

//MÉTODO INCLUDES

const seriesBoas = ("breaking bad", "brooklyn nine-nine") 

seriesBoas.includes("breaking bad") // true
seriesBoas.includes("game of thrones") // false

//PUSH

const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros) //[1,2,3,4]

numeros.push(5, 6, 7)
console.log(numeros) //[1,2,3,4,5,6,7]

//MÉTODO POP

const meusPeixes = ["palhaço", "mandarim", "esturjão"]

meusPeixes.pop()

console.log(meusPeixes) // ["palhaço", "mandarim"]

listaDeCompras.pop()
console.log(listaDeCompras)

//MÉTODO SPLICE (i, n) 

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// índices (i)   0    1    2    3    4    5    6    7

 letras.splice(2,1)
//    letras = ["A", "B", "D", "E", "F", "G", "H"]
// índices (i)   0    1    2    3    4    5    6    

letras.splice(3,2) // letras = ["A", "B", "D", "G", "H", "G"]

listaDaLoteria.splice(1,2)

console.log(listaDaLoteria) 

