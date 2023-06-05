let personas = [
    { nombre: "Persona 1", edad: 25, ciudad: "Ciudad 1" },
    { nombre: "Persona 2", edad: 30, ciudad: "Ciudad 2" },
    { nombre: "Persona 3", edad: 35, ciudad: "Ciudad 3" },
    { nombre: "Persona 4", edad: 40, ciudad: "Ciudad 4" },
    { nombre: "Persona 5", edad: 45, ciudad: "Ciudad 5" }
  ];
  
  for (let i = 0; i < personas.length; i++) {
    console.log("Persona " + (i + 1) + ":");
    console.log("Nombre: " + personas[i].nombre);
    console.log("Edad: " + personas[i].edad);
    console.log("Ciudad: " + personas[i].ciudad);
    console.log("");
  }