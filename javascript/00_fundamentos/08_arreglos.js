const a = [];

const b = [1, true, "hola", ["A", "B", "C"]];

console.log(b);
console.log(b.length);
console.log(b[2]); // salida: hola
console.log(b[0]);
console.log(b[3]); // salida:["A", "B", "C"]
console.log(b[3][1]); // salida: B

const c = Array.of("x", "y", "z", 9, 8, 7);
console.log(c);

const d = Array(100).fill(false);
console.log(d);

const colores = ["rojo", "verde", "azul"];

colores.push("negro");
console.log(colores);

colores.pop();
console.log(colores);


// Recorremos el arreglo y generamos una lista con un id unico
colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
});