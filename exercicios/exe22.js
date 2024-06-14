
//EXERCÍCIO

/* Crie um objeto que represente um filme. Ele deve ter dados da direção, o nome, o ano de lançamento, uma lista com o elenco e uma propriedade que diga se você já viu ou não.


Acesse e imprima no console cada uma das propriedades: metade usando notação do ponto e outra metade usando colchetes. */


dadosDoFilme = {
    nome: `Esposa de mentirinha`,
    diretor: `Dennis Dugan`,
    ano: 2011,
    elenco: ["Adam Sandler", "Jennifer Aniston", "Brooklyn Decker", "Bailee Madison", "Griffin Gluck"],
    assistido: true,
}

console.log ()
console.log (`DADOS DO FILME:`)
console.log ()
console.log (`Nome do filme: ${dadosDoFilme.nome}`)
console.log (`Nome do dirtor: ${dadosDoFilme.diretor}`)
console.log (`Ano de lançamento: ${dadosDoFilme.ano}`)
console.log (`Elenco do filme: ${dadosDoFilme.elenco}`)
console.log (`Você já assistiu esse filme? ${dadosDoFilme.assistido}`)

