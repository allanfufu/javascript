let num = [5, 8, 2, 9, 3]
num.push(1) // insere o númeoro 7 na última posição
num.sort() // colocar todos os elementos em ordem crescente (sort() é um MÉTODO)
console.log(num)
//num[3] = 6 // coloca o número 6 na posição 3
// num.length -> retorna o comprimento do vetor (length é um ATRIBUTO)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4) // coloca 8 e 4 (quando aparece -1, o número não tem na lista!)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posiçao ${pos}`)
}

