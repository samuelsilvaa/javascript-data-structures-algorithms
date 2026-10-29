function descobrirMenor(numeros) {

let num = numeros[0] // 1. coloca a primeira possição do array na variavel
    
    // let 1, já que usei o primeiro elemento do array
    for (let i = 1; i < numeros.length; i++) { // 2. percorre o array todo
        if(numeros[i] < num) {
            num = numeros[i] // 3. coloca o menor numero na variavel
        }
    }

    return num // 4. depois retorna o menor valor
}


console.log(descobrirMenor([12, 5, 27, 8, 19]));