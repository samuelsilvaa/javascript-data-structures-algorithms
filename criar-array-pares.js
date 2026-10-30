// exercicio para criar array com numeros pares


function filtrarPares(arr) {
    let newArray = [] // 1. iniciando a variavel com array vazio
    
    for(let i = 0; i < arr.length; i++) { // 2. calculando se é par e colocando no newArray
        if(arr[i] % 2 === 0) {
            newArray[newArray.length] = arr[i]
        }
    }

    return newArray // retorna o array novo só com pares [ 8, 4, 10 ]
}

console.log(filtrarPares([3, 8, 4, 7, 10, 5, 55]))