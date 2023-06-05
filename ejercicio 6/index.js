let array=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosImpares=[];
alert("Tengo un array que va desde el 1 al 10. A continuación se te mostrarán solo los numeros impares.")
for(i=0 ; i<array.length ; i++){
if(array[i]% 2!==0){
numerosImpares.push(array[i]);
console.log(numerosImpares.length)
}
}
alert("Los numeros impares son: "+numerosImpares[0]+", "+numerosImpares[1]+", "+numerosImpares[2]+", "+numerosImpares[3]+", "+numerosImpares[4]);
//Como se que son 5 elementpos los que componen el array numerosImpares?, porque el console.log me lo dijo 😄 ..
//en base a eso hice una concatenacion en el alert con cada uno de sus keys para que asi me los 
//pueda mostrar a todos juntos en un unico alert!!//