//const saludar = function () {
//console.log(`hola`);
//};

//const saludar = () => {
//console.log(`hola`);
//}

//const saludar = (nombre) => console.log(`hola ${nombre} `);
const saludar = (nombre) => console.log(`hola ${nombre} `);

saludar("Irma");

//const sumar = function (a, b) {
//return a + b;
//};

//console.log(sumar(1, 2));

const sumar = (a, b) => a + b;
console.log(sumar(1, 2));

const funcionDeVariasLineas = () => {
  console.log("linea 1");
  console.log("linea 2");
  console.log("linea 3");
};

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

// numeros.forEach(function (el, index) {
//console.log(`El elementos ${el} esta en la posicio ${index}`);
//});

numeros.forEach((el, index) =>
  console.log(`El elementos ${el} esta en la posicio ${index}`)
);

//function perro() {
// console.log(this);
//}

//perro();

//const perro = {
//nombre: "kenai",
//ladrar: () => {
//console.log(this);
//console.log(this.nombre);
// },
//};

const perro = {
  nombre: "kenai",
  ladrar() {
    console.log(this);
    console.log(this.nombre);
  },
};

perro.ladrar();
