/*  EXERCÍCIO 

1- Crie um algorítmo que receba 3 números em variáveis e a partir deles
crie uma condicional que retorne true caso 2 desses números sejam idênticos.

2- Crie um algorítmo que receba 3 números em variáveis e a partir deles crie
uma condicional que retorne true caso o primeiro número seja o maior dos 3.

3- Crie um algorítmo que receba uma idade em uma variável e a partir deles 
crie uma condicional que retorne true caso seja maior de idade.

4- Crie um algorítmo que receba 1 número em uma variável e a partir dele 
crie uma condicional que retorne true caso o número seja par.   */


//---------------------------------------------------------------

//1

const n1 = 5
const n2 = 2
const n3 = 5

const cond1 = (n1 === n2) || (n2 === n3) || (n1 === n3)

console.log(`1- 2 desses números são idênticos?          ${cond1}`)

//---------------------------------------------------------------

//2

const nu1 = 68
const nu2 = 42
const nu3 = 55 

const cond2 = (nu1 > nu2) && (nu1 > nu3)

console.log(`2- O primeiro número é o maior dos três?    ${cond2}`)

//---------------------------------------------------------------

//3

const idade = 22
const maiorIdade = 18

const cond3 = (idade >= maiorIdade) 

console.log(`3- O número representa a maior idade?       ${cond3}`)

//---------------------------------------------------------------

//4

const numero1 = 10

const cond4 = (numero1 % 2) === 0 


console.log(`4- O número ${numero1} é par?                       ${cond4}`)

//---------------------------------------------------------------
