

// Faça uma contagem regressiva de 10 a 0 usando o FOR.

for (let regressiva = 10; regressiva >= 0; regressiva--) {

if (regressiva === 0) {
    console.log(`BOOOM!`)
} else if (regressiva % 2 === 0) {
    console.log(`TIC`) 
} else {
    console.log(`TAC`)
}

}