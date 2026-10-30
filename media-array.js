// saber a media de um array de numeros

function calcularMedia(numeros) {

    let resultado = 0

    for(let i = 0; i < numeros.length; i++) {
        resultado += numeros[i]
    }

    return resultado / numeros.length

}

console.log(calcularMedia([4, 7, 2, 9]))


// Complexidade: para um array com \(n\) elementos, o algoritmo realiza O(n)
//  operações de processamento. A quantidade de memória adicional usada é O(1), 
//  pois você mantém apenas algumas variáveis, sem criar outra estrutura proporcional 
//  ao tamanho do array.