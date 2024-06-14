

//WHILE

let i = 0
while (i <= 10) {
    console.log(`Continue correndo, você deu apenas ${i} voltas!`)

    //i = i +1
    i++
}

//-----------------------------------------------------------------

//FOR 


for (let i = 1; i < 10; i++) {
    console.log(`Continue correndo, você deu apenas ${i} voltas!`)

}



//exemplo com array
const array = [4, 5, 6, 7, 1]

for (let i = 0; i <= (array.length - 1); i ++) {
    console.log(array[i])
}

/* const array = [4, 5, 6, 7, 1]

for (let i = 0; i < (array.length); i ++) {
    console.log(array[i])
} */

//-----------------------------------------------------------------

//FOR OF


//funciona apenas com arrays
const numeros = [14, 67, 89, 15, 23]

for (let numero of numeros) {
    console.log(numeros)
}





