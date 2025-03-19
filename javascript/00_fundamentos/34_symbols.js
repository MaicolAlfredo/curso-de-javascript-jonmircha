//Nuevos tipos datos en javascript
//49 Symbol
let id = "hola";
let id2 = "hola";

console.log(id === id2); //true

let id3 = Symbol("hola");
let id4 = Symbol("hola");

console.log(id3 === id4); //false
console.log(typeof id3, typeof id4);

//buenas practica crearlo con constantes
const ID5 = Symbol("hola");
const ID6 = Symbol("hola");

console.log(ID5 === ID6); //false

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
  [NOMBRE]: "Jon",
  edad: 35,
};

console.log(persona);

persona.NOMBRE = "Luis Lucas";
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
  console.log("Hola soy", persona[NOMBRE]);
};

persona[SALUDAR]();

for (const propiedad in persona) {
  console.log(property);
  console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona));
