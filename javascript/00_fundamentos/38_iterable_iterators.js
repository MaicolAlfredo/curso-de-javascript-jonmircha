// 53 iterable & iterators

// Definimos un array que es iterable y lo almacenamos en la constante 'iterable'. En este caso es una lista de números
// Un iterable es un objeto que puede ser recorrido, elemento por elemento.
const iterable = [1, 2, 3, 4, 5];
//comentario: Las siguientes líneas están comentadas y no se ejecutan, pero nos muestran que también se puede crear como set o un string, y al final también como un Map.
// Set: Es una colección de valores únicos.
// String: Es una secuencia de caracteres.
// Map: Es una colección de pares clave-valor.
// const iterable = new set [1, 2,2, 3,3,3, 4, 5,6,6];
//const iterable = "Hola Mundo";

/* const iterable = new Map([
  ["llave1", 1],
  ["llave2", 2],
  ["llave3", 3],
]);
 */
//const iterable = "Hola Mundo";

// accedemos al iterador del iterable. todos los objetos iterables en javascript tienen una propiedad llamada Symbol.iterator que nos retorna el iterador del objeto.
// El iterador es un objeto que nos permite recorrer el iterable paso a paso.
const iterador = iterable[Symbol.iterator]();

// Mostramos por consola el iterable
// Imprime el array [1, 2, 3, 4, 5] en la consola.
console.log(iterable);
// Mostramos por consola el iterador
// Imprime un objeto iterador en la consola. Este objeto tiene un método llamado next().
console.log(iterador);
//comentario: las siguientes lineas estan comentadas pero es para saber como se llama el metodo, en este caso el metodo next() se utiliza para obtener el siguiente valor del iterador.
// El método next() devuelve un objeto con dos propiedades: value y done.
// value: El valor actual del elemento en la iteración.
// done: Un booleano que indica si hay más elementos (false) o si ya se ha llegado al final (true).
//console.log(iterador.next()); // { value: 1, done: false }
//console.log(iterador.next()); // { value: 2, done: false }
//console.log(iterador.next()); // { value: 3, done: false }
//console.log(iterador.next()); // { value: 4, done: false }
//console.log(iterador.next()); // { value: 5, done: false }
//console.log(iterador.next()); // { value: undefined, done: true }

// llamamos al metodo next y este tiene 2 atributos, el value que es el valor actual y el done que es un boolean que si es true es porque ya no hay mas valores
// Se llama al método next() del iterador y se almacena el resultado en la variable 'next'.
let next = iterador.next();

//Mientras que el atributo next.done sea false entra en el while
// El bucle 'while' se ejecuta mientras la propiedad 'done' de 'next' sea false, es decir, mientras haya más elementos en el iterable.
while (!next.done) {
  //imprimimos por pantalla el valor actual del iterador
  // Se imprime el valor actual (next.value) en la consola.
  console.log(next.value);
  //volvemos a llamar a next para obtener el siguiente valor del iterador
  // Se vuelve a llamar a iterador.next() para obtener el siguiente elemento.
  next = iterador.next();
}
