/*1.

Crie 2 variáveis (chamaremos de num1 e num2)

- Crie uma estrutura condicional que compare esses números entre si: 

Se os números forem idênticos, retorna uma mensagem de sucesso.  */


const num1 = 6 
const num2 = 6

 cond = num1 === num2
 if (cond){ 
console.log(`Sucesso, os números são idênticos!`)
 }



/* 2.

- Crie 2 variáveis (chamaremos de num1 e num2)

- Crie uma estrutura condicional que compare esses números entre si:

retorna mensagnes dizendo se os números são idênticos ou não.
*/

const condicao2 = num1 === num2

if (condicao2) { 
    console.log(`${num1} e ${num2} são idênticos!`)
} else {
    console.log(`${num1} e ${num2} não são idênticos!`)
}
