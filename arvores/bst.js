// BST (Binary Search Tree) - Árvore binária de busca


// ---------- Árvore ----------

class No {
    constructor(valor) {
        this.valor = valor
        this.esquerda = null
        this.direita = null
    }
}


// ---------- Criando os nós ----------

let no50 = new No(50)
let no30 = new No(30)
let no70 = new No(70)
let no20 = new No(20)
let no40 = new No(40)
let no60 = new No(60)
let no80 = new No(80)


// ---------- Ligando os nós ----------

no50.esquerda = no30 // esquerda menor
no50.direita = no70 // direita maior

no30.esquerda = no20
no30.direita = no40

no70.esquerda = no60
no70.direita = no80


/*
Como fica a árvore:

        50
       /  \
     30    70
    / \    / \
   20 40  60 80
*/


// ---------- Busca em uma BST ----------

function buscarBST(no, alvo) {

    if (no === null) {
        return false // Não encontrou o alvo
    }

    if (no.valor === alvo) {
        return true
    }

    // Se o alvo for menor que o valor,
    // vá para a esquerda
    if (alvo < no.valor) {
        return buscarBST(no.esquerda, alvo)
    } else {
        // Se o alvo for maior,
        // vá para a direita
        return buscarBST(no.direita, alvo)
    }
}


// Teste da busca

console.log(buscarBST(no50, 100)) // false


// ---------- Inserção em uma BST ----------

function inserirBST(no, valor) {

    if (no === null) {
        // Achei o lugar onde o novo nó deve ser criado
        return new No(valor)
    }

    // Valor menor -> esquerda
    if (valor < no.valor) {
        no.esquerda = inserirBST(no.esquerda, valor)
    }

    // Valor maior -> direita
    if (valor > no.valor) {
        no.direita = inserirBST(no.direita, valor)
    }

    return no
}


// Testes da inserção

inserirBST(no50, 65) // Inserindo o 65 na árvore

console.log(buscarBST(no50, 65)) // true
console.log(buscarBST(no50, 55)) // false


/*
Depois de inserir 65:

        50
       /  \
     30    70
    / \    / \
   20 40  60 80
           \
            65
*/


// ---------- Encontrar o menor valor ----------

function menorValor(no) {

    // Enquanto existir um filho à esquerda,
    // continue andando para a esquerda
    while (no.esquerda !== null) {
        no = no.esquerda
    }

    return no
}


// ---------- Remoção de um valor ----------

function removerBST(no, valor) {

    if (no === null) {
        return null
    }

    // Valor menor -> esquerda
    if (valor < no.valor) {
        no.esquerda = removerBST(no.esquerda, valor)
    }

    // Valor maior -> direita
    if (valor > no.valor) {
        no.direita = removerBST(no.direita, valor)
    }


    // Encontrou o valor
    if (valor === no.valor) {

        // Sem filho esquerdo
        // ou somente filho direito
        if (no.esquerda === null) {
            return no.direita
        }

        // Somente filho esquerdo
        if (no.direita === null) {
            return no.esquerda
        }

        // Dois filhos:
        // procura o menor valor dentro
        // da subárvore direita
        const sucessor = menorValor(no.direita)

        // Substitui o valor atual pelo valor do sucessor
        no.valor = sucessor.valor

        // Remove o sucessor original da subárvore direita
        no.direita = removerBST(no.direita, sucessor.valor)

        return no
    }

    return no
}


// ---------- Teste da remoção ----------

// Removendo o 20
no50 = removerBST(no50, 20)

console.log(buscarBST(no50, 20)) // false


/*
Depois de remover 20:

        50
       /  \
     30    70
      \    / \
      40  60 80
           \
            65
*/

