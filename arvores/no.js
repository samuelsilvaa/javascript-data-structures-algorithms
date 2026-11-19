// exercicio de nó 

// raiz/nó
const no = {
    valor: 10,
    esquerda: null,
    direita: null
}

// filho do 10 e irmão do 20
const no5 = {
    valor: 5,
    esquerda: null,
    direita: null
}

// filho do 10 e irmão do 5
const no20 = {
    valor: 20,
    esquerda: null,
    direita: null
}

// filho do 20 -> folha(leaves)
const no30 = {
    valor: 30,
    esquerda: null,
    direita: null
}

// 10 ligando para o 5 à esquerda
no.esquerda = no5

// 10 ligando para o 20 à direita
no.direita = no20

// 20 ligando para o 30 à direita
no20.direita = no30



/*
EXEMPLO:

       10
      /  \
     5    20
           \
            30

*/