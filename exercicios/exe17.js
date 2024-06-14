

/* Crie uma contagem regressiva usando FOR. A diferença é que o número
vai ser fornecido pelo usuário ao invés do comando readline  */

const readlineSync = require(`readline-sync`);
const numeroInicial = readlineSync.question(`Insira um numero`);

for (let i = numeroInicial; i >= 0; i--) {
    console.log(i)
}

