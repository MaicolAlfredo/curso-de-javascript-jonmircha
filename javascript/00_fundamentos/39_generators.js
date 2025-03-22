// 54 generators

/*
  Generadores en JavaScript:

  Los generadores son funciones especiales que pueden pausar su ejecución y reanudarla más tarde, manteniendo su estado.
  A diferencia de las funciones tradicionales, que ejecutan todo su código de una vez y retornan un único valor,
  los generadores pueden producir múltiples valores a lo largo del tiempo.

  Caracteristicas clave:

  1.  Pausar y Reanudar: Utilizan la palabra clave `yield` para pausar la ejecución y devolver un valor.
      La ejecución se puede reanudar desde el punto donde se pausó.
  2.  Múltiples Valores: Pueden generar una secuencia de valores, no solo uno.
  3.  Iterables: Los generadores son iterables, lo que significa que pueden ser recorridos con un bucle `for...of`.
  4.  Control de Flujo: Permiten un control de flujo más sofisticado, ya que puedes pausar una función en un punto intermedio y continuar luego.
  5. lazy evaluation: Los generadores se usan cuando se necesite hacer una evaluacion diferida, es decir, que solo se procesa el elemento cuando es necesario, y no todo al mismo tiempo.

  Cuando usarlo:
    - Procesamiento de Datos Grandes: Cuando necesitas procesar una gran cantidad de datos sin cargar todos en la memoria.
    - Iteraciones Personalizadas: Cuando necesitas un proceso de iteración que no se ajuste a las estructuras de iteracion que vienen por defecto.
    - flujos de datos.
*/

// Definimos una función generadora llamada 'iterable'
function* iterable() {
  // yield pausa la función y devuelve un valor
  yield "hola";
  // cuando se vuelve a llamar al generador, se ejecuta esta linea
  console.log("hola consola");
  // pausa la función y devuelve un valor
  yield "Hola 2";
  // cuando se vuelve a llamar al generador, se ejecuta esta linea
  console.log("Seguimos con más instrucciones de nuestro código");
  // pausa la función y devuelve un valor
  yield "hola 3";
  // pausa la función y devuelve un valor
  yield "hola 4";
  // la funcion acaba cuando ya no hay mas yield
}

// Creamos una variable llamada iterador que almacena una referencia a la funcion generadora
let iterador = iterable;

/* Las siguientes lineas estan comentadas para que no se ejecuten

console.log(iterador.next()); // esto llamaria a la funcion generadora e imprimiria por consola el resultado del yield.
console.log(iterador.next()); // esto llamaria a la funcion generadora e imprimiria por consola el resultado del yield.
console.log(iterador.next()); // esto llamaria a la funcion generadora e imprimiria por consola el resultado del yield.
console.log(iterador.next()); // esto llamaria a la funcion generadora e imprimiria por consola el resultado del yield.
console.log(iterador.next()); // esto llamaria a la funcion generadora e imprimiria por consola el resultado del yield.
 */

// recorremos el generador con un for of.
// cuando recorremos el generador con un for of, el se detiene en cada yield
for (const y of iterador()) {
  console.log(y);
}

// esta linea crea un nuevo array con el resultado del generador.
const arr = [...iterable()];
console.log(arr);

// esta es una funcion que se ejecuta despues de un tiempo aleatorio entre 0 y 1 segundo.
function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, cuadrado: valor * valor });
  }, Math.random() * 1000);
}

// Creamos otra funcion generadora.
function* generador() {
  console.log("Inicia Generator");
  // detenemos el codigo hasta que se llame al generador
  yield cuadrado(0);
  // detenemos el codigo hasta que se llame al generador
  yield cuadrado(1);
  // detenemos el codigo hasta que se llame al generador
  yield cuadrado(2);
  // detenemos el codigo hasta que se llame al generador
  yield cuadrado(3);
  // detenemos el codigo hasta que se llame al generador
  yield cuadrado(4);
  // detenemos el codigo hasta que se llame al generador
  yield cuadrado(5);
  console.log("Termina Generador");
}

// creamos un nuevo generador
let gen = generador();

// recorremos el generador con un for of.
// cuando recorremos el generador con un for of, el se detiene en cada yield
for (const y of gen) {
  console.log(y);
}
