// 51 maps
// Creación de un nuevo Map
// Un Map es una colección de pares clave-valor donde tanto las claves como los valores pueden ser de cualquier tipo.
const miMapa = new Map();

// Añadiendo elementos al Map con 'set'
// El método 'set' se utiliza para añadir nuevos pares clave-valor al Map.
miMapa.set("nombre", "Juan"); // Clave: 'nombre', Valor: 'Juan'
miMapa.set("edad", 30); // Clave: 'edad', Valor: 30
miMapa.set(true, "Booleano verdadero"); // Clave: true, Valor: 'Booleano verdadero'

// Obteniendo el tamaño del Map con 'size'
// La propiedad 'size' devuelve el número de pares clave-valor en el Map.
console.log("Tamaño del Map:", miMapa.size); // Salida: 3

// Verificando la existencia de una clave con 'has'
// El método 'has' devuelve 'true' si la clave existe en el Map, de lo contrario, devuelve 'false'.
console.log("¿Existe la clave 'nombre'?:", miMapa.has("nombre")); // Salida: true
console.log("¿Existe la clave 'ciudad'?:", miMapa.has("ciudad")); // Salida: false

// Obteniendo el valor de una clave con 'get'
// El método 'get' devuelve el valor asociado a la clave especificada. Si la clave no existe, devuelve 'undefined'.
console.log("Valor de la clave 'nombre':", miMapa.get("nombre")); // Salida: Juan
console.log("Valor de la clave 'edad':", miMapa.get("edad")); // Salida: 30
console.log("Valor de la clave 'ciudad':", miMapa.get("ciudad")); // Salida: undefined

// Modificando el valor de una clave existente con 'set'
// Si se usa 'set' con una clave que ya existe, el valor asociado a esa clave se actualiza.
miMapa.set("edad", 31); // Actualizando el valor de la clave 'edad' a 31
console.log("Nuevo valor de la clave 'edad':", miMapa.get("edad")); // Salida: 31

// Eliminando un elemento con 'delete'
// El método 'delete' elimina el par clave-valor asociado a la clave especificada. Devuelve 'true' si la eliminación fue exitosa, 'false' si la clave no existe.
console.log("Eliminando la clave 'edad':", miMapa.delete("edad")); // Salida: true
console.log("¿Existe la clave 'edad' ahora?:", miMapa.has("edad")); // Salida: false
console.log("Eliminando la clave 'ciudad':", miMapa.delete("ciudad")); // Salida: false

// Iterando sobre el Map con 'for...of'
// El bucle 'for...of' permite iterar sobre los pares clave-valor del Map.
// Cada iteración devuelve un array con dos elementos: [clave, valor].
console.log("Iterando sobre el Map:");
for (const [clave, valor] of miMapa) {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
}
// Salida:
// Clave: nombre, Valor: Juan
// Clave: true, Valor: Booleano verdadero

// Limpiando el Map con 'clear'
// El método 'clear' elimina todos los pares clave-valor del Map, dejándolo vacío.
miMapa.clear();
console.log("Tamaño del Map después de 'clear':", miMapa.size); // Salida:

/* Los Maps permiten usar cualquier tipo de dato como clave (objetos, números, booleanos, etc.), a diferencia de los objetos tradicionales que sólo permiten strings o symbols.

Práctica:

19 como clave numérica asociada al string "diecinueve"

false como clave booleana asociada a "falso"

Un objeto vacío {} como clave asociado a otro objeto vacío (demostrando que los objetos son claves únicas por referencia) */
miMapa.set(19, "diecinueve");
miMapa.set(false, "falso");
miMapa.set({}, {});

//Los Maps pueden inicializarse con un array de pares [clave, valor]. El orden de inserción se preserva.

const mapa2 = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
  ["ciudad", "Madrid"],
  [null, "nulo"],
]);

console.log(mapa2);

//El método keys() devuelve un iterador con las claves. El spread operator ... convierte el iterador en un array.
const llavesMapa2 = [...mapa2.keys()];
console.log(llavesMapa2);

//values() devuelve un iterador con los valores. Nuevamente usamos spread operator para convertirlo en array.
const valoresMapa2 = [...mapa2.values()];
console.log(valoresMapa2);

//entries() devuelve un iterador de pares [clave, valor], que es el formato nativo de almacenamiento del Map.
const entradasMapa2 = [...mapa2.entries()];
console.log(entradasMapa2);

/* Este código muestra cómo los Maps ofrecen una estructura de datos más flexible que los objetos tradicionales, especialmente útil cuando necesitamos: claves complejas, preservar orden de inserción, o realizar operciones frecuentes de adición/eliminación. */


