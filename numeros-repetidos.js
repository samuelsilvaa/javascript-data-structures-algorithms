// contar quantas vezes um numero repetido aparece no array

function contarRepeticoes(arr, repetido) {
    let count = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === repetido) {
            count++
        }
    }

    return count // 3
}


console.log(contarRepeticoes([2, 5, 2, 8, 2, 5], 2))