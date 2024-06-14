
/* 1- 

Crie 2 variáveis (chamaremos de num1 e num2)

- Crie uma estrutura condicional que compare esses números entre si:

Retorna mensagens dizendo se esse número é {maior/menor/igual} ao segundo número,  */


const num1 = 300
const num2 = 662

const condicao1 = (num1 < num2)
const condicao2 = (num1 > num2) 

if (condicao1) {
    console.log(`O primeiro número é menor que o segundo!`)
} else if (condicao2) {
    console.log(`O primeiro número é maior que o segundo!`)
} else {
    console.log(`Os números são igauis!`)
}


//---------------------------------------------------------------


/*2- 

Crie uma variável que receba um número

- Crie uma estrutura condicional que compare esse número

Retorna mensagens dizendo se o número é positivo, negativo ou neutro.  */


const numero = -15

const cond1 = (numero > 0) 
const cond2 = (numero < 0)

if (cond1) {
    console.log(`O número ${numero} é positivo!`)
} else if (cond2) {
    console.log(`O número ${numero} é negativo!`)
} else {
    console.log(`O número ${numero} é neutro!`)
}