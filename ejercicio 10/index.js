let numeros = [7, 12, 5, 9, 3, 18, 6, 11, 4, 15];
let numeroMasGrande = numeros[0];
alert("tengo un aray con estos numeros: 7, 12, 5, 9, 3, 18, 6, 11, 4, 15, a continuación se mostrara el mas grande:")
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeroMasGrande) {
    numeroMasGrande = numeros[i];
  }
}

alert("El número más grande es: " + numeroMasGrande);