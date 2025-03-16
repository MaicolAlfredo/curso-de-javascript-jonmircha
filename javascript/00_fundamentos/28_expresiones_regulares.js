//31 expresiones regulares
/* 
Expresiones Regulares 
Son una secuencia de caracteres que forman un patrón de búsqueda, principalmente utilizada para la busqueda de patrones de cadena de caracteres
 */

let cadena =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam non odit provident deleniti qui, repudiandae est molestiae magni cupiditate, voluptates enim. Illum unde, ratione inventore facilis beatae tempore! Ducimus, obcaecati?";

//let expReg = new RegExp("lorem","")
let expReg = new RegExp("lorem", "ig");
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

//let expReg2 = /lorem/ig;
//let expReg2 = /\d/ig;
//let expReg2 = /[0-9]/ig;
let expReg2 = /lorem{1}/gi;
console.log(expReg2.exec(cadena));
console.log(expReg2.test(cadena));
