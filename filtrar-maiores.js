// filtrar numeros maiores que o LIMITE

function filtrarNums(arr, limite) {
    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > limite) {
            newArr.push(arr[i])
        }
    }

    return newArr // [ 12, 20, 15 ]
}

console.log(filtrarNums([4, 12, 7, 20, 3, 15], 10))


// Complexidade: para um array com \(n\) elementos, o algoritmo percorre todos eles, então o tempo é O(n).
// O espaço adicional depende de quantos elementos forem selecionados e pode chegar a O(n)



// 1. let newArr = []: criou um lugar para guardar os resultados.

// 2. for: percorreu cada elemento do array original.

// 3. if (arr[i] > limite): selecionou somente os números maiores que o limite.

// 4. newArr.push(arr[i]): adicionou cada número aprovado ao novo array.

// 5. return newArr: devolveu o resultado depois de terminar o loop.