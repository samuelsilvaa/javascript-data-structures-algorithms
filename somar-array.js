

function somarNumeros(arr) {

    let result = 0 // variavel inicial para o resultado da soma

    for(let i = 0; i < arr.length; i++) {
        result += arr[i] // cada passada no array é somado o elemento e inserido na variavel
    }

    return result // retorna a soma de todos
}


console.log(somarNumeros([4, 7, 2, 9]))