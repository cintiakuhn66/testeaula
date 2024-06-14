/* Crie duas variáveis que guardem dois números. 
Imprima na tela as seguintes mensagens:

1- O primeiro número é idêntico ao segundo?
2- O primeiro número é diferente do segundo?
3- O primeiro número é maior que o segundo?
4- O primeiro número é menor que o segundo? */

const num1 = 3
const num2 = 4

const condicaoE1 = num1 === num2
const condicaoE2 = num1 !== num2
const condicaoE3 = num1 > num2
const condicaoE4 = num1 < num2

console.log("")
console.log(`O primeiro número é idêntico ao segundo? ${condicaoE1}`)
console.log("")
console.log(`O primeiro número é diferente do segundo? ${condicaoE2}`)
console.log("")
console.log(`O primeiro número é maior que o segundo? ${condicaoE3}`)
console.log("")
console.log(`O primeiro número é menor que o segundo? ${condicaoE4}`)

