//tipo de operadores
let division = 5 / 2;
console.log(division); //2.5

let modulo = 5 % 2;
console.log(modulo); // 1

/* let division = 10 / 3;
let modulo = 10 % 3;
 */

console.log(division); // 3.333
console.log(modulo); // 1

let numero = 7;

if (numero % 2 === 0) {
  console.log(`${numero} es par`);
} else {
  console.log(`${numero} es impar`);
}

// Resultado: "7 es impar"

console.log(10 > 5); // true
console.log(3 < 7); // true
console.log(5 > 8); // false

console.log(10 >= 10); // true
console.log(5 <= 10); // true
console.log(8 >= 12); // false

console.log(5 == "5"); // true (compara solo valores, no tipos)
console.log(5 === "5"); // false (compara valores y tipos)

console.log("true" == true); // false
console.log(true === true); //true

console.log(5 != "5"); // false (compara solo valores, ignora tipos)
console.log(5 !== "5"); // true (compara valores y tipos)
console.log(10 != 20); // true
console.log(10 !== 20); // true

let a = 5; // Se asigna el valor 5 a la variable "a'
console.log(a); // Salida: 5

let b = "5"; //string
console.log(b == 5); // true, porque realiza una conversión implícita.

let c = "5"; //string
console.log(c === 5); // false, porque los tipos no coinciden.

let incremento = 5; // Declaramos una variable con valor inicial 5

incremento++;
console.log(incremento); // 6

let d = 10;
console.log(d++); //imprime 10, luego incrementa a 11
console.log(d); // imprime 11

let f = 10;
console.log(++f); // Incrementa a 11 y luego imprime 11
console.log(f); // Imprime 11

for (let i = 0; i < 5; i++) {
  console.log(`Iteración: ${i}`);
}

let edad = 25;
let tieneLicencia = true;

// Ambas condiciones deben ser verdaderas
if (edad >= 18 && tieneLicencia) {
  console.log("Puedes conducir.");
} else {
  console.log("No puedes conducir.");
}

let esEstudiante = true;
let tieneDescuento = false;

// Al menos una condición debe ser verdadera
if (esEstudiante || tieneDescuento) {
  console.log("Tienes acceso al descuento.");
} else {
  console.log("No tienes acceso al descuento.");
}

// Salida: "Tienes acceso al descuento."

let estalloviendo = true;
// Niega el valor
if (!estalloviendo) {
  console.log("Puedes salir sin paraguas.");
} else {
  console.log("Es mejor llevar un paraguas.");
}
// Salida: "Es mejor llevar un paraguas."

let eda= 20;
let esSocio = true;
let tieneInvitacion = false;
// Combinación de operadores
if ((eda >= 18 && esSocio) || tieneInvitacion) {
console. log("Puedes ingresar al evento.");
} else {
console.log("No puedes ingresar al evento.");
}
// Salida: "Puedes ingresar al evento."