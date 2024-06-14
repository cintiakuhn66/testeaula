

// Crie um array com alguns numeros 
// Abaixo dele, crie uma variável chamada soma e atribua a ela o valor de 0 
/* Agora, crie um loop for of para ler este array e, usando a variável soma,
some todos os valores que estão dentro do array */

const array = [6,10,18,4,22]
let soma = 0 

for (let numero of array) {
    //console.log(soma = soma + numero)
    soma = soma + numero

}

console.log(soma)
