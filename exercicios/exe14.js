


//1- Faça uma contagem regressiva de 10 a 0.

//2- Para cada segundo que for PAR mostra a palavra "TIC" 
// Para cada segundo que for ÍMPAR, mostra a palavra "TAC"
// Quando o segundo for 0, mostra a palavra "BOOOOM!"


let contagem = 10


while(contagem >= 0) {

if (contagem === 0 ) {
    console.log(`BOOOM!`)
} else if (contagem % 2 === 0) {
    console.log(`TIC`)
} else {
    console.log(`TAC`)
}
    contagem-- 
} 

