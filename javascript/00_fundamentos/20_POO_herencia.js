// 23 POO Herencia Prototípica

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

//herencia prototipica
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro esta herendo de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};

Perro.prototype.ladrar = function () {
  console.log("Guauu Guauu");
};

const snoopy = new Perro("Snoopy", "macho", "mediano"),
  lolaBunny = new Animal("Lola Bunny", "hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();
