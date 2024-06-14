
//BLOCO IF

const condicao  = true

if (condicao)  {
    console.log(`Entrei dentro do bloco IF`)
//tudo que está dentro das chaves {} 
//pertence ao bloco IF 
}

//-----------------------------------------------------------
 

//BLOCO IF ELSE


if (condicao) {
    console.log(`condição verdadeira!`)
} else {
    console.log(`condição falsa!`)
}


const idade = 15 

if (idade ) {
    console.log(`condição verdadeira!`)
} else {
    console.log(`condição falsa!`)
}


//-----------------------------------------------------------


//BLOCO ELSE IF 

//exemplo 1

const condicao1 = true
const condicao2 = true

if (condicao1) {
    console.log(`estou no bloco if`)
} else if (condicao2) {
    console.log(`estou no bloco else if`)
} else {
    console.log(`estou no bloco else`)
}

//exemplo 2

const saborDoSuco = "goiaba"

if (saborDoSuco === "pêssego") {
    console.log(`Ok! Suco de pêssego é bom!`)
} else if (saborDoSuco === "goiaba") {
    console.log(`Muito obrigada, mas não vou querer o suco hoje!`)
} else if (saborDoSuco === "morango") {
    console.log(`Nem sabia que existia esse sabor...`)
} else {
    console.log(`Ótimo, finalmente um sabor diferente!`)
}
    
//-------------------------------------------------------------------

