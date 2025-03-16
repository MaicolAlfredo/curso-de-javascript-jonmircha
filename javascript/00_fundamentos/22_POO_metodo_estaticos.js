// 25 metodos estáticos,getters y setters
class Animal {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = null;
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

  //un método estaticos se pueden ejecutar sin necesidad de instanciar la clase

  static queEres() {
    console.log(
      "Los perros somos animales mamiferos que pertenecen a la familia de los caninos. Somos considerados los mejores amigos del hombre."
    );
  }

  //Los setters y getters son métodos especiales que nos permite establecer y obtener los valores de atributos de nuestra clase.

  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Animal("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
//scooby.getRaza();
//console.log(scooby.getRaza);
scooby.getRaza;
//scooby.setRaza("Gran Danes")
scooby.setRaza = "Gran Danes";
//console.log(scooby.getRaza);
