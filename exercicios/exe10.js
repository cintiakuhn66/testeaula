/*3.

//--------------------------------------------------------------------------------------

1- Crie um algorítmo que receba 3 números em variáveis e a partir deles crie 
uma estrutura condicional que retorne uma mensagem informando que existem dois
ou mais números idênticos ou no caso de todos os números serem diferentes 
retorne uma mensagem informando que não há números idênticos.  */

const numeroA = 2
const numeroB = 4
const numeroC = 2

const condicaoA = (numeroA === numeroB) || (numeroB === numeroC) || (numeroA === numeroC)

if (condicaoA) {
    console.log(`${numeroA}, ${numeroB} e ${numeroC} são idênticos!`)
} else {
    console.log(`${numeroA}, ${numeroB} e ${numeroC} não são idênticos!`)
}

//---------------------------------------------------------------------------------------


/*2- Crie um algorítmo que receba uma idade em variável e a partir dela crie uma
estrutura condicional que retorne uma mensagem informando se é maior ou menor de idade.*/

const idade = 18
const maiorIdade2 = 18

const condicaoB = (idade >= maiorIdade2)

if (condicaoB) {
    console.log(`A idade ${idade} representa a maior idade!`)
} else {
    console.log(`A idade ${idade} não representa a maior idade!`)
}

//----------------------------------------------------------------------------------------


/*3- Crie um algorítmo que receba um número em uma variável e a partir dele crie uma 
estrutura condicional que retorne uma mensagem informando se ele é par ou ímpar.  */

const number = 12

const condi = (number % 2) === 0

if (condi) {
    console.log(`O número ${number} é par!`)
} else {
    console.log(`O número ${number} não é par!`)
}


//---------------------------------------------------------------------------------