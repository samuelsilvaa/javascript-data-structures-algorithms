

function recursiveFunction(numero) {

    if(numero === 0) { // caso base: determina quando parar a recursão
        return
    }

    console.log(numero)
    recursiveFunction(numero - 1) // chamada recursiva: a funcão chama a si mesma com um argumento diferente

}


recursiveFunction(5) // 5, 4, 3, 2, 1


// exercicio de soma
function soma(n) {
  
    if(n === 0) {
        return 0
    }

    return n + soma(n - 1)
    
    
}
console.log(soma(5))