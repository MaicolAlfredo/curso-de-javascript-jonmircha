//22 POO prototipos
/* const animal = {
  nombre: "Snoopy",
  sonar() {
    console.log("Hago sonido por que estoy vivo")
  }
}

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonido por que estoy vivo")
  }
}

console.log(animal)
console.log(animal2) */

//funcion constructura
/* function Animal(nombre, genero) {
  //atributos
  this.nombre = nombre;
  this.genero = genero;
  //metodos
  this.sonar = function () {
    console.log("Hago sonido por que estoy vivo");
  };
  this.saludar = function () {
    console.log(`Hola soy ${this.nombre}`);
  };
} */

// funcion constructura donde asignamos los métodos al Prototipo, no a la funcion como tal

function Animal(nombre, genero) {
  //atributos
  this.nombre = nombre;
  this.genero = genero;
}
//metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function () {
  console.log("Hago sonido por que estoy vivo");
};

Animal.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre}`);
};

const snoopy = new Animal("Snoopy", "macho"),
  lolaBunny = new Animal("Lola Bunny", "hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();
