// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    // primera forma
    // var suma = 0;
    // for ( i =0; i<11; i++){
    // suma = suma + i
    // }
    //return suma
    //}
    //segunda forma
    //var numeros = [1,2,3,4,5,6,7,8,9,10];
   //var suma = 0;
   //for (var i = 0; i < numeros.length; i++) {
    //suma = suma + numeros[i];
   //}
   //return suma;
   //}
   // tercera forma
   //var suma = 0;
   //var 1= 0;
   //while (i <11){
   //suma = suma + i; i++}
   //return suma 
   //cuarta forma
   // var numeros = [1,2,3,4,5,6,7,8,9,10];
   //var suma = 0;
   //numeros.forEach((elemento) => {
    //suma = suma + elemento;
   //});
   // return suma;
   var numeros = [1,2,3,4,5,6,7,8,9,10];
   var suma = numeros.reduce(function(acc,elemento){
    return acc + elemento;
});
return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  return array.filter((elemento) => elemento % 2 === 0);
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  ele = array.map(num => num **2);
  // tambien se puede ele = array.map(num => math.pow(num * 2));
  return ele;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  //primera forma 
  //return array.reduce((acumulador,siguiente) => acumulador + siguiente)
  var suma = 0;
  for (var i=0; i<array.length; i++){
    suma = suma + array[i]
  }
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
