let numeroSecreto = 5;
let intentos = 0;
let adivinado = false;

while (!adivinado) {
  let numeroIngresado = parseInt(prompt("Ingrese un número entre 1 y 100:"));
  intentos++;

  if (numeroIngresado === numeroSecreto) {
    adivinado = true;
    console.log("¡Felicitaciones! Has adivinado el número secreto.");
    console.log("Número de intentos: " + intentos);
  } else if (numeroIngresado > numeroSecreto) {
    console.log("El número ingresado es mayor que el número secreto. Intenta nuevamente.");
  } else {
    console.log("El número ingresado es menor que el número secreto. Intenta nuevamente.");
  }
}