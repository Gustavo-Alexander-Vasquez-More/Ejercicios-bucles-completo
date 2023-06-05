let familia = [
    { nombre: "Juan", edad: 35, relacion: "Padre", ciudad: "Ciudad 1" },
    { nombre: "María", edad: 32, relacion: "Madre", ciudad: "Ciudad 1" },
    { nombre: "Pedro", edad: 10, relacion: "Hijo", ciudad: "Ciudad 1" },
    { nombre: "Ana", edad: 7, relacion: "Hija", ciudad: "Ciudad 1" },
    { nombre: "Luis", edad: 60, relacion: "Abuelo", ciudad: "Ciudad 1" }
  ];
  
  for (let i = 0; i < familia.length; i++) {
    let persona = familia[i];
    console.log("¡Hola! Mi nombre es " + persona.nombre + ".");
    console.log("Tengo " + persona.edad + " años y soy " + persona.relacion + ".");
    console.log("Vivo en " + persona.ciudad + ".");
    console.log("");
  }