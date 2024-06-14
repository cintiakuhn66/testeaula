


//WHILE

let voltas = 0 

//O ciclista, no começo da corrida, não deu volta nenhuma.

//ENQUANTO VOLTAS FOR MENOR QUE 10 ELE EXECUTA O CÓDIGO.
//ou seja, enquanto o ciclista não atingir a décima volta, ele continua pedalando.

while (voltas < 10) {
    console.log(`pedale, pois você deu apenas ${voltas} voltas!`)
    voltas ++
}

console.log(``)


//---------------------------------------------------------------------------------


//FOR

for (let voltass = 0; voltass <= 10; voltass++) {
    console.log(`pedale, pois você deu apenas ${voltass} voltas!`)
}


// i++ incrementa em 1
// i-- decrementa em 1

// i = i + numero  incrementa i somando algum numero
// exemplo: i = i + 1, ou i = i + 2, ou i = i + 3 

// i+= numero    incrementa i somando algum numero, de maneira abreviada 
// exemplo: i += 1, ou i +=2, ou i += 3

//-------------------------------------------------------------------------

// o FOR pode ser usado para percorrer arrays e fazer algo.
const numeros = [1,,8,12,20,35,99]

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}


//-------------------------------------------------------------------------


//FOR OF (para cada)
// usado com arrays

const numeros2 = [14,67,89,15,23]


// Para cada número do meu array de números, imprima o valor do número
for (let numero of numeros2) {
    console.log(numeros2)
}
