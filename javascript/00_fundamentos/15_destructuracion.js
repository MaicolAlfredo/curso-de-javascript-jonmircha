const numeros = [1, 2, 3];
const [uno, dos, tres] = numeros;
console.log(uno, dos, tres); // salida: 1 2 3

let persona = {
  nombre: "Jon",
  apellido: "Mircha",
  edad: 35,
};

let { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad); // salida: Jon Mircha 35
