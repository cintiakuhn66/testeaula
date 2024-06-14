
const nome = "Cíntia"
const idade = 18
const frase = `Olá, meu nome é ${nome} e tenho ${idade} anos.`

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`)



//PROTÓTIPOS DE STRINGS


//PROPRIEDADES 

console.log(nome.length)

const propriedade = nome.length


//MÉTODOS

console.log(nome.toLocaleUpperCase())

const metodo = nome.toLocaleUpperCase()

//LENGHT

console.log(nome.length)

console.log(`A variável nome tem ${nome.lenght} caracteres`)

//TOLOWERCASE

console.log(nome.toLowerCase())

//TOUPPERCASE()

const palavra = "OIIeEEEeee"

console.log(frase.toUpperCase())

//TRIM()

let email = "    senac@senac.com     "

email = email.trim()
console.log(email.trim())
console.log(email.lenght)

//INCLUDES(CARACTERES)

const frase2 = "Hoje eu comi batata"
console.log(frase2.includes("batata")) 

const palavra2 = "mamão"
console.log(
    `Na frase a palavra ${palavra2} foi econtrada ? 
    ${frase2.includes(palavra2)}`)

    //REPLACEALL(CHARS1,CHARS2)

    const texto = "Hoje comi cenoura, adoro cenoura"
    const novoTexto = texto.replaceAll("cenoura", "batata")

    console.log(novoTexto)