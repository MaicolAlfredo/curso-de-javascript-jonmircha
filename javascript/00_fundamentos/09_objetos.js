let a = new String("Hola mundo");
//const b = {};

console.log(a); // Muestra:[String: 'Hola mundo' ]

const b = { nombre: "Juan" };
b.edad = 31; //Esto es valido, ya que solo estamos modificado el contendido
console.log(b); // muestra:{nombre:"juan",edad:31}

//Esto provocaria un error:
// b = { nombre: "Ana" }; Error: Assignament to constant variable.

const jon = {
  nombre: "Jon",
  apellido: "Mircha",
  edad: 35,
  pasatiempo: ["correr", "hacer ejercicio"],
  soltero: false,
  contacto: {
    email: "jonmircha@gmail.com",
    twitter: "@jonmircha",
  },
  saludar: function () {
    console.log("Hola");
  },
  decirMiNombre: function () {
    console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
  },
};

// Ejemplo de uso
console.log(jon); // Imprime el objeto completo
jon.saludar(); // Ejecuta la función "saludar" del objeto
console.log(jon.contacto); // Imprime el objeto de contacto interno
console.log(jon.nombre); // Accede y muestra el nombre "Jon"

console.log(jon.nombre); // "Jon" - atributo
console.log(jon.apellido); // "Mircha" - atributo
console.log(jon.edad); // 35 - atributo
console.log(jon.pasatiempo); // ["correr", "hacer ejercicio"] -
console.log(jon.contacto); // ( email: "jonmirchaßgmail.com",
jon.saludar(); // "Hola" - método
jon.decirMiNombre(); // Imprime: Hola, ne llano Jon Mircha y tengo 35 año
// Utilizando el método Object.keys para obtener las llaves del objeto
console.log(Object.keys(jon));
// Utilizando el método Object.values para obtener los valores del objeto
console.log(Object.values(jon));
console.log(jon.hasOwnProperty("nombre"));
