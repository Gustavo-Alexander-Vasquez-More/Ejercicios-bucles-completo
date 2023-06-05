let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosImpares = "";
alert("Tengo un array de 10 numeros a continuacion se mostraran los impares:");
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    numerosImpares += numeros[i] + " ";
  }
}

alert("Los números impares son: " + numerosImpares);