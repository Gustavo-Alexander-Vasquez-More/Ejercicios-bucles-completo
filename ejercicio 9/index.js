let sumaPares = 0;
let sumaImpares = 0;
let numero;

do {
  numero = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"));

  if (numero !== 0) {
    if (numero % 2 === 0) {
      sumaPares += numero;
    } else {
      sumaImpares += numero;
    }
  }
} while (numero !== 0);

alert("La suma de los números pares es: " + sumaPares);
alert("La suma de los números impares es: " + sumaImpares);
