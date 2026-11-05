function encontrarMaior(arr) {
    let maior = 0

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > maior) {
            maior = arr[i]
        }
    }

    return maior
}


console.log(encontrarMaior([1, 2, 3, 4, 5, 6, 10, 14, 18]))

// Tempo:  O(n)
// Espaço: O(1)

// Explicação:
// O tempo é O(n) porque o algoritmo percorre o array uma vez
// para encontrar o maior número.

// O espaço é O(1) porque utiliza apenas algumas variáveis,
// como maior e i, sem criar uma estrutura que cresça conforme
// o tamanho do array.