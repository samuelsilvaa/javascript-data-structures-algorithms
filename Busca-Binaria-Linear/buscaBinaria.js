// exercicio busca binária

function buscaBinaria(arr, alvo) {

    let inicio = 0
    let fim = arr.length - 1

    while(inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2)   

        if(arr[meio] === alvo) {
            return meio
        }
        if(arr[meio] < alvo) {
            inicio = meio + 1
        } else {
            fim = meio - 1
        }
    }

    return -1

}


console.log(buscaBinaria([20, 30, 40, 50, 60], 50)) // 3
