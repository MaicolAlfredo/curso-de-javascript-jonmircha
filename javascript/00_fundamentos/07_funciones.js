function estoEsUnaFuncion() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}

estoEsUnaFuncion(); //Invocacion de la funcion

function estoEsUnaFuncion() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}

//Invocamos la funcion cuatro veces
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();

function unaFuncionQueDevuelveValor() {
  return "La funcion ha retornado una cadena de texto";
}

let valorDeLaFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeLaFuncion);

function otraFuncion() {
  console.log("uno");
  return 19; //Devuelve 19 y termina la funcion
  console.log("dos");
  console.log("tres");
}

let resultado = otraFuncion();
console.log("valore retornado:", resultado);

function saludar(nombre, edad) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}

saludar("kenai", 7);

function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}

saludar();


funcionDeclarada(); // llamada antes de la declaracion
function funcionDeclarada() {
  console.log(
    "Esto es una funcion declarada que puede invocarse en cualquier momento"
  );
}

funcionDeclarada(); // llamada despues de la declaracion
// salida: Esto es una funcion declarada que puede invocarse en cualquier momento

const funcionExpreseda = function () {
  console.log("Esto es una funcion expresada");
};

funcionExpreseda(); // salida: Esto es una funcion expresada