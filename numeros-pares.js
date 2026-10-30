// econtrar quantos numeros pares existem

function numerosPares(arr) {
    let count = 0  // variavel contador

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {  // calculando se o numero e par ou impar no arr
            count++ // cada numero par encontrado é +1 no count
        }
    }

    return count // resultado = 3
}

console.log(numerosPares([3, 8, 4, 7, 10, 5]));
