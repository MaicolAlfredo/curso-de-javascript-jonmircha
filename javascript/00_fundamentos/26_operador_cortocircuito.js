//29 Operadores de Cortocircuito
/* 
Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar true, es el valor que se cargará por defecto.

Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar false, es el valor que se cargará por defecto.
*/
/* function saludar(nombre="Desconocido") {
    console.log(`Hola ${nombre}`)
} */

function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}

saludar("luis");
saludar();
console.log("Cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
//Valores que tiende a falso
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(-2 || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(-2 && "Valor de la derecha");
console.log(0 && "Valor de la derecha");

console.log("Cadena" && "Valor de la derecha");
console.log(19 && "Valor de la derecha");
console.log(true && "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log({} && "Valor de la derecha");
