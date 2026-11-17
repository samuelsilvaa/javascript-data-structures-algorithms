// exercicio fatorial de recursão

function fatorial(n) {

    if(n === 0) {
        return 1 // caso base: 1 pois 0! = 1
    }

    return n * fatorial(n - 1)

}

console.log(fatorial(5))