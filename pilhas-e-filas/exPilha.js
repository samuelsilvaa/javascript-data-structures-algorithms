// exercicio

const pilha = []

function empilhar(valor) {

    pilha[pilha.length] = valor // adiciona o valor no final do array

}

empilhar(10)
empilhar(20)
empilhar(30)

console.log(pilha)


function desempilhar() {

    if (pilha.length === 0) { // se array for vazio
        return undefined
    }

    let topo = pilha[pilha.length - 1]

    pilha.length = pilha.length - 1

    return topo

}

console.log(desempilhar())
console.log(pilha)


/*

PILHA
LIFO → Last In, First Out
Último entra → primeiro sai
push() → adiciona
pop()  → remove do final


FILA
FIFO → First In, First Out
Primeiro entra → primeiro sai
push()  → adiciona no final
shift() → remove do início

*/