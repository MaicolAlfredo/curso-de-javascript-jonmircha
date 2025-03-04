let a;
const PI = 3.1416;
//const NUEVE;
console.log(PI);
//PI = 3.15; Uncaught TypeError

a = "kenai";
console.log(a);

/* let objeto = {
  nombre: "luis",
  edad: 24,
};

let colores = ["blanco", "Negro", "Azul"]; 

*/

const objeto = {
  nombre: "luis",
  edad: 24,
};

const colores = ["blanco", "Negro", "Azul"];

console.log(objeto);
console.log(colores);

objeto.correo = "luislucas@gmail.com";
colores.push("anaranjado");

console.log(objeto);
console.log(colores);
