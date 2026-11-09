// exercicio de busca linear


function buscaLinear(arr, alvo) {

    for(let i = 0; i < arr.length; i++) { 
        if(arr[i] === alvo) {
            return i // true
        }
    }

    return -1 // false

}

console.log(buscaLinear([1, 43, 67, 90, 2, 5, 7], 9))

/*
1. começa no indice 0
2. compara o arr[i] com o alvo
3. se arr[i] for igual ao alvo -> return indice ou true
4. se não for igual ao alvo -> return -1 ou false

*/