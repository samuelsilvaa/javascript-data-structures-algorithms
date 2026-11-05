function encontrarDuplicados(arr) {
  let duplicados = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicados.push(arr[i]);
      }
    }
  }

  return duplicados;
}



// Tempo: O(n²)
// Espaço: O(n)

// Explicação:
// O tempo é O(n²) porque existe um loop dentro de outro loop.
// Para cada elemento do array, o segundo loop faz várias comparações.

// O espaço é O(n) porque o array duplicados pode crescer conforme
// o tamanho da entrada. No pior caso, ele pode armazenar vários
// elementos duplicados.
