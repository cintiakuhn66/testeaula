

/*  1- 

- Crie um listaDeNumeros com pelo menos 5 raças de cachorro.

- Imprima no console a raça correnspondente a terceira posição do array.  */

const listaDeCachorro = ["chow-chow", "dálmata", "labrador", "labrador", 
"dogue alemão", "yorkshire", "pinscher"]

console.log(listaDeCachorro[2])

/*  2- 

-Para este exercício, comece criando um array com os valores: 1, 2, 3, 4, 5, 6.
e exiba no terminal quando necessário.  */

const listaDeNumeros = [1, 2, 3, 4, 5, 6]

//--------------------------------------------------------------------------------

//1- Determine o número do array 

console.log(`1- O tamanho do array corresponde a ${listaDeNumeros.length} elementos.`)

//--------------------------------------------------------------------------------

//2- Remova o último elemento do array

listaDeNumeros.pop()
console.log("1- O array sem o último elemento fica:", listaDeNumeros)

//--------------------------------------------------------------------------------

//3- Adcione o número 7

listaDeNumeros.push(7)
console.log("3. O array com o novo elemento fica:", listaDeNumeros)

//--------------------------------------------------------------------------------

//4- Verifique se o array possui um elemento com valor 6

listaDeNumeros.includes()
console.log("4. O array possui o elemnto?", listaDeNumeros.includes(6))

//--------------------------------------------------------------------------------

//5- Remova os números 4 e 5 

listaDeNumeros.splice(3,2)
console.log("5. O array sem os elementos removidos fica:", listaDeNumeros)

//--------------------------------------------------------------------------------

//6- Determine o novo tamnho do array   

console.log("6. O novo tamanho do array é de:", listaDeNumeros.length, "elementos.")