class Animal {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  //Métodos
  sonar() {
    console.log("Hago sonido por que estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //con el metodo super() se manda a llamar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
  }

  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }

  ladrar() {
    console.log("guauu guauu");
  }
}

const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Animal("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
