

/* 1- Crie um programa que peça ao usuário para inserir o seu
 o seu nome e sua cor favorita "A cor favorita de FULANO é COR."

 - Faça o exercício duas vezes, utilizando template strings e concatenção.*/

 const nome = "Cíntia"
 const cor = "amarelo"

 console.log("A cor favorita da",nome,"é",cor,".")
 console.log(`A cor favorita da ${nome} é ${cor}.`) 

 //---------------------------------------------------------------------------------


 /* 2- Cria uma variável com uma frase e imprima no console a frase alterada, com:

A- Todas as letras maiúsculas;
B- Na língua do i (substituindo a vogal "o" por "i")
C- O tamanho da frase*/

 const fraseEx2 = "EX2- Hoje É Terça-Feira!"


 //A
console.log(fraseEx2.toUpperCase()) 


//B
console.log(fraseEx2.replaceAll("o","i"))


//C
console.log(`A frase possui ${fraseEx2.length} caracteres`)

//--------------------------------------------------------------------------


