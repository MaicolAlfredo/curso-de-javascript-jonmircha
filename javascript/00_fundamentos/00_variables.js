var hola = "hola mundo";

let hello = "Hello World";

console.log(hola);
console.log(hello);

// el objeto window
console.log(Window);
console.log(Window.hola);
console.log(Window.hello);

console.log("********var*********");
var musica = "rock";
console.log("Variable musica ante del bloque", musica);
//var musica = "Pop"
//Esto es un bloque
{
  var musica = "Pop";
  console.log("Variable musica dentro del bloque", musica);
}

console.log("Variable musica despues del bloque", musica);
console.log("**********let************");
let musica2 = "rock";
console.log("Variable musica ante del bloque", musica2);
//var musica = "Pop"
//Esto es un bloque
{
  let musica2 = "Pop";
  console.log("Variable musica dentro del bloque", musica2);
}

console.log("Variable musica despues del bloque", musica2);
