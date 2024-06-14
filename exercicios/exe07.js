/*Crie três variáveis que guardem números.

Para cada pergunta crie uma variável que armazena 
a condição e imprima na tela a pergunta e condição:

1- O primeiro número é idêntico ao segundo e o primeiro número é maior que o terceiro.
2- O primeiro número é difernte do segundo ou o primeiro número é menor igual que o terceiro.
3- O terceiro número é maior que o segundo e o terceiro número é menor que o primeiro.  */

const num1 = 6
const num2 = 3 
const num3 = 8 

const condicao1 = (num1 === num2) && (num1 > num3) 
const condicao2 = (num1 !== num2) || (num1 <= num3)
const condicao3 = (num3 > num2) && (num3 < num1)

//--------------------------------------------------------------------------------------
 
//1
console.log("")
console.log("1.")
console.log(`O primeiro número (${num1}) é idêntico ao segundo (${num2}) 
e o primeiro número (${num1}) é maior que o terceiro (${num3}).    ${condicao1}`) 

//---------------------------------------------------------------------------------------

//2 
console.log("")
console.log("2.")
console.log(`O primeiro número (${num1}) é diferente do segundo (${num2}) 
ou o primeiro número (${num1}) é menor igual do que o terceiro (${num3}).    ${condicao2}`)

//----------------------------------------------------------------------------------------

//3 
console.log("")
console.log("3.")
console.log(`O terceiro número (${num3}) é maior que o segundo (${num2}) 
e o terceiro número (${num3}) é menor que o primeiro (${num1}).    ${condicao3}`)

//----------------------------------------------------------------------------------------