let acumulador = 0;
let numero = parseInt(prompt("Ingrese un número (ingresar 0 para salir):"));

while (numero !== 0) {
  acumulador += numero;
  numero = parseInt(prompt("Ingrese otro número (ingresar 0 para salir):"));
}

console.log("El resultado de la acumulación es: " + acumulador);