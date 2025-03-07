// ciclos

let contador = 0;

while (contador < 10) {
  console.log(contador); //Imprime los números de 0 al 9
  contador++; //Incrementa la variable
}

do {
  console.log("do while:" + contador);
  contador++;
} while (contador < 10);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

const jon = {
  nombre: "Jon",
  apellido: "Mircha",
  edad: 35,
};

for (const propiedad in jon) {
  console.log(propiedad);
  console.log(`${propiedad}:${jon[propiedad]}`);
}

for (const elemento of numeros) {
  console.log(elemento);
}

let cadena = "hola mundo";

for (const caracter of cadena) {
  console.log(caracter);
}
