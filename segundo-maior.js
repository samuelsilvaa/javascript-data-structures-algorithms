// saber qual o segundo maior numero de um array

function segundoMaior(arr) {

    let maior = -Infinity  // (-Infinity) Menor que qualquer número finito
    let segMaior = -Infinity
    

    for(let i = 0; i < arr.length; i++) {
        let numAtual = arr[i]

        if(numAtual > maior) {
           segMaior = maior
           maior = numAtual
        } else if(numAtual !== maior && numAtual > segMaior) {
            segMaior = numAtual
        }
    }

    if(segMaior === -Infinity) { // se o array for repetido ou não existir um segundo maior, ex: [7, 7, 7], [], [7]
        return null
    }

    return segMaior
}

console.log(segundoMaior([10, 5, 8, 20, 15]))