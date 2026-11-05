function encontrarNumero(arr, alvo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === alvo) {
      return true;
    }
  }

  return false;
}


console.log(encontrarNumero([2, 3, 4, 5, 6, 9, 10], 10)) // true



// Tempo: O(n)
// Espaço: O(1)

// Explicação:
// O tempo é O(n) porque, no pior caso, o algoritmo precisa percorrer
// todo o array para encontrar o número ou confirmar que ele não existe.

// O espaço é O(1) porque o algoritmo utiliza apenas algumas variáveis,
// como i e alvo, sem criar uma estrutura que cresça conforme o tamanho
// do array.