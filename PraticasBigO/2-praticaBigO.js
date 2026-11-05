function duplicarNumeros(arr) {
    let result = []

    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2)
    }

    return result
}


console.log(duplicarNumeros([2, 4, 5, 6, 8, 10, 3]))

// Tempo: O(n)
// Espaço: O(n)

// Explicação:
// O tempo é O(n) porque o algoritmo percorre o array uma vez
// para duplicar cada número.
//
// O espaço é O(n) porque é criado um novo array chamado resultado,
// que armazena um elemento para cada elemento do array original.