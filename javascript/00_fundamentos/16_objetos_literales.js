let nombre = "KenAi",
  edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guauu guauu");
  },
};

console.log(perro);
perro.ladrar();

const dog = {
  nombre,
  edad,
  raza: "callejero",
  ladrar() {
    console.log("guauu guauu tres veces");
  },
};

console.log(dog);
dog.ladrar();
