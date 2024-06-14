

// 1- Crie um laço de repetição que escreva os números de 1 a 100.

let i1 = 0

console.log("EXERCÍCIO 1.")

while (i1 <= 100) {
    console.log(i1)

    i1++
}

console.log("")


//------------------------------------------------------------


// 2- Crie um laço que imprima os números pares de 1 a 200.

console.log("EXERCÍCIO 2.")

for (let i = 1; i <= 200; i++) {

    if (i % 2 === 0) {
    console.log(`O número: ${i} é par!`)
    } else {
    console.log()
    }

}

console.log("")


//-------------------------------------------------------------


// 3- Crie um laço que imprima a tabuada do número 5.


console.log("EXERCÍCIO 3.")

const tabuada = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${tabuada} = ${i * tabuada}`)
}

console.log("")


//--------------------------------------------------------------


// 4- Faça um array com 6 números e a partir dele crie 
//um laço que imprima cada número do array.



const array = [1, 2, 3, 4, 5, 6]

console.log("EXERCÍCIO 4.")
for (let array = 0; i < numeros.lenght; i ++) {
    console.log(array[i])
}

//-----------------OU------------------

for (let numero of array) {
    console.log(array)
}