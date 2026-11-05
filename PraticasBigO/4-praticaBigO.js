function encontrarPares(arr) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      resultado.push(arr[i]);
    }
  }

  return resultado;
}

console.log(encontrarPares([2, 4, 6, 7, 10, 12, 16, 1]))


// Tempo: O(n)
// Espaço: O(n)


// Explicação:
// O tempo é O(n) porque o algoritmo percorre o array uma vez.
// Para cada elemento, ele verifica se o número é par.

// O espaço é O(n) porque o array resultado pode crescer conforme
// o tamanho da entrada. No pior caso, todos os elementos podem ser pares.