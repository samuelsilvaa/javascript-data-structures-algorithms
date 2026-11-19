// exercicio

// cria a classe No para poder criar os objetos
class No {
    constructor(valor) {
        this.valor = valor
        this.esquerda = null
        this.direita = null
    }
}

// cria os objetos
const no10 = new No(10)
const no5 = new No(5)
const no20 = new No(20)
const no3 = new No(3)
const no7 = new No(7)
const no30 = new No(30)

// a esquerda do 10 é o 5 
no10.esquerda = no5
//a direita do 10 é o 20
no10.direita = no20

// a direita do 20 é 30
no20.direita = no30
// a esquerda do 5 é o 3
no5.esquerda = no3

// a direita do 5 é o 7
no5.direita = no7



// Busca em profundidade (DFS) -> Depth-First Search
function preOrdem(no) {

    if(no === null) { // -> caso base
        return  // Esse return faz a execução voltar para a chamada anterior
    } 

    console.log(no.valor) // valor atual

    preOrdem(no.esquerda)

    preOrdem(no.direita)

}
preOrdem(no10)


/*

       10
      /  \
     5    20
    / \     \
   3   7     30

--------------------------

no10
├── esquerda → no5
│   ├── esquerda → no3
│   └── direita  → no7
│
└── direita → no20
    └── direita → no30

*/

/*
    DFS:

    . PRÉ-ORDEM: Atual → Esquerda → Direita
    10 → 5 → 3 → 7 → 20 → 30

    . EM ORDEM: Esquerda → Atual → Direita
    3 → 5 → 7 → 10 → 20 → 30

    . PÓS-ORDEM: Esquerda → Direita → Atual
    3 → 7 → 5 → 30 → 20 → 10



    EM ORDEM:
    function emOrdem(no) {
    if(no === null) {
        return
    }

    emOrdem(no.esquerda)

    console.log(no.valor)

    emOrdem(no.direita)
}

emOrdem(no10)




PÓS-ORDEM: 
function posOrdem(no) {
    if(no === null) {
        return
    }

    posOrdem(no.esquerda)

    posOrdem(no.direita)

    console.log(no.valor)

}

posOrdem(no10)

*/
