

function descobrirMaior(numeros) {

let num = 0 // 1. variavel para guardar o numero

 for(let i = 0; i < numeros.length; i++) { // 2. percorrer o array para encontrar
   if(numeros[i] > num) {
    num = numeros[i] // 3. se o numero dentro do array for maior que o da variavel, num recebe esse numero
   }
 }

 return num // 4. retorna o numero maior

}

console.log(descobrirMaior([12, 5, 27, 8, 19]))
