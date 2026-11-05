function exemplo(arr) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    resultado.push(arr[i]);

    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }

  return resultado;
}

console.log(exemplo([2, 4, 5]))

// Tempo: O(n²)
// Espaço: O(n)

/* 
    COMO PENSAR:

    - Tempo: "Quantas vezes as operações acontecem?"
        → loop dentro de loop → O(n²)

    - Espaço: "Quanto dado novo estou guardando?"
        → resultado cresce com arr → O(n)
*/

// Explicação:
// O tempo é O(n²) porque existe um loop dentro de outro loop.
// O espaço é O(n) porque o array resultado cresce conforme
// aumenta a quantidade de elementos da entrada.