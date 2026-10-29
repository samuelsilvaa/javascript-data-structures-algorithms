function contarOcorrencias(numeros, alvo) {

    let count = 0 // começa com 0

    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] === alvo) {
            count++      // se for igual ao alvo, incrementa o count
        }
    }

    return count // retorna o resultado
}

console.log(contarOcorrencias([2, 5, 2, 8, 2, 9], 2))
// esperado: 3