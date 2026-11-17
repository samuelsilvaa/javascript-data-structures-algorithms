// exercicio de contagem regressiva

function contarRegressivo(numero) {

    if(numero === 0) { // caso base
        return
    }

    console.log(numero)
    contarRegressivo(numero - 1) // chamada recursiva

}

contarRegressivo(10)