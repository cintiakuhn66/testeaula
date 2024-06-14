

const readlineSync = require(`readline-sync`);

const nome = readlineSync.question (`Qual o seu nome?`);

console.log(`Olá, ${nome}, tudo bem?`);

//npm install readline-sync

let i = 0 
let soma = 0 
while (i < 5) {
    const pergunta1 = Number(readlineSync.question (`Insira um numero:`));
    soma = soma + pergunta1
    i++
}

console.log(soma)

//somar todos os números que foram inseridos

