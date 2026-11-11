// exercicio

const fila = []

function enfileirar(valor) {
    fila[fila.length] = valor
}

enfileirar(10)
enfileirar(20)
enfileirar(30)

console.log(fila)


function desenfileirar() {
    let first = fila[0]

    for(let i = 0; i < fila.length - 1; i++) {
        fila[i] = fila[i + 1]
    }

    fila.length = fila.length - 1

    return first

}

console.log(desenfileirar())
console.log(fila)

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