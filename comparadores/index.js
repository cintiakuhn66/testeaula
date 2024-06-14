

/*COMPARADORES 

//---------------------------------------

- IDÊNTICO (ou estritamente igual): (===)



-MESMO VALOR E MESMO TIPO*/
// "1" === "2" // false, são diferentes
// "2" === "2" // true, são idênticos 
// 2 === "2" // false, tipos diferentes 

const condicao1 = 1 === 2
console.log(condicao1)

// o valor que sai da comparação
// pode ser guardado em uma variável
// nesse caso, condicao1 === false

//---------------------------------------

/*IGUAIS (==)



-MESMO VALOR*/ 
//"1" == "2" // false, são diferentes
//"2" == "2" // true, são igauis 
// 2 == "2" // true, valores iguais 

const condicao2 = 1 == 2 
console.log(condicao2)

// o valor que sai da comparação
// pode ser guardado em variável 
// nesse caso, condicao2 = false 

//--------------------------------------

/*DIFERENTES (!==) */ 



//"1" !== "2" // true, são diferentes 
//"2" !== "2" // false, são idênticos 
//2 !== "2" // true, tipos diferentes

const condicao3 = 1 !== 2
console.log(condicao3)

//
//
//

//----------------------------------------


/*MAIOR E MAIOR IGUAL (> e >=)   */


// 1 > 2 // false, porque 1 é menor que 2
// 2 > 2 // false, porque 2 é igual a 2
// 3 > 2 // true, porque 3 é maior que 2
 
const condicao4 = 1 > 2 
console.log(condicao4)

// 1 >= 2 // false, porque 1 é menor que 2
// 2 >= 2 // true, porque 2 é igual a 2
// 3 >= 2 // true, porque 3 é maior que 2

const condicao5 = 1 >= 1
console.log(condicao5)

//----------------------------------------


/*MENOR E MENOR IGUAL (< e <=) */



// 1 < 2 // true, porque 1 é menor que 2
// 2 < 2 // false, porque 2 é igual a 2
// 3 < 2 // false, porque 3 é maior que 2 

 const condicao6 = 1 < 2
 console.log(condicao6)

 // 1 <= 2 // true, porque 1 é menor que 2
 // 2 <= 2 // true, porque 2 é igual a 2 
 // 3 <= 2 // false, porque 3 é maior que 2 

 const condicao7 = 2 <= 2
 console.log(condicao7)

 //-----------------------------------------