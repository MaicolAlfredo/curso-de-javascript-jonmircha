//26 objeto console
console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es una información");
console.log("Un registro de lo que ha pasado en nuestra aplicacion");

let nombre = "luis",
  apellido = "lucas",
  edad = 25;

console.log(nombre, apellido, edad);
console.log(`Hola me llamo ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);

console.clear();
console.log(window);
console.log(document);
console.dir(window);
console.dir(document);

console.group("Mis datos");
console.log(nombre, apellido, edad);
console.groupEnd();

console.groupCollapsed("Mis datos");
console.log(nombre, apellido, edad);
console.groupEnd();

console.table({ nombre, apellido, edad });

console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1, 2, 3, 4, 5],
  vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
  nombre: "firulais",
  edad: 2,
  raza: "labrador",
};

console.table(perro);

console.time("Cuanto tiempo tarde mi código");
const arreglo = Array(10000);

for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}

console.timeEnd("Cuanto tiempo tarde mi código");
console.log(arreglo);

for (let i = 0; i < 100; i++) {
  console.count("código for");
  console.log(i);
}

let x = 1,
  y = 2,
  prueXY = "Se espera que X siempre sea menor que Y";

console.assert(x < y, [x, y, prueXY]);
