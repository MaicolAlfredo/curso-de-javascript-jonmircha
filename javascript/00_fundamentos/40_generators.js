// 55 proxies

/*
  Proxies en JavaScript

  Un Proxy en JavaScript es un objeto que permite interceptar y personalizar operaciones sobre otro objeto (llamado el target o objetivo).
  Actúa como un intermediario entre el objeto objetivo y el código que intenta interactuar con él.
  Los Proxies proporcionan una forma de controlar y modificar el comportamiento de un objeto fundamental.

  Características clave:

    - Intercepción de Operaciones: Un Proxy puede interceptar una variedad de operaciones que se realizan sobre un objeto, como la lectura, escritura, eliminación de propiedades, etc.
    - Personalización del Comportamiento: Permite definir un comportamiento personalizado cuando se realizan ciertas operaciones en el objeto objetivo.
    - Validación de Datos: Se puede utilizar para validar los datos antes de que se asignen a una propiedad.
    - Control de Acceso: Puede restringir el acceso a ciertas propiedades o métodos de un objeto.
    - Registro de Acciones: Permite registrar las operaciones que se realizan sobre el objeto.

    Cuando usarlo:
      - Control de Acceso: Para gestionar quién puede acceder o modificar ciertas partes de un objeto.
      - Validación de Datos: Asegurar que los datos asignados a un objeto cumplan con ciertas reglas.
      - Depuración: Para registrar y analizar las operaciones que se realizan sobre un objeto.
      - Comportamiento Personalizado: Para modificar el comportamiento de un objeto en función de ciertas condiciones.
*/

// definimos el objeto persona con 3 propiedades, nombre, apellido y edad.
const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

// definimos el manejador, este es el objeto que intercepta las operaciones del objeto persona.
const manejador = {
  //el set es el metodo que se ejecuta cuando intentamos modificar un valor de un objeto
  set(obj, prop, valor) {
    /*  las lineas comentadas es como se comportaria normalmente el set, recibiria el objeto, la propiedad y el valor, y asignaria el valor a la propiedad.
        console.log(obj, prop, valor);
        obj[prop] = valor;
        return true; */

    // con esto comprobamos que la propiedad exista, si retorna -1 es porque no la encontro.
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad ${prop} no existe en el objeto persona.`
      );
    }

    // con esto validamos que la propiedad nombre o apellido solo acepte letras y espacios.
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad ${prop} sólo acepta letras y espacios en blanco.`
      );
    }

    // si todo esta bien, se asigna el valor a la propiedad.
    obj[prop] = valor;
  },
};

// creamos un nuevo proxy que va a recibir el objeto persona y el objeto manejador.
// el proxy recibe 2 parametros, el objeto objetivo y el manejador
const jon = new Proxy(persona, manejador);

// asignamos valores a las propiedades.
jon.nombre = "jon";
jon.apellido = "Mircha";
jon.edad = 35;
//intentamos asignar una propiedad que no existe, nos aparecera el error por consola
jon.twitter = "@jonmircha";
// mostramos por consola el proxy
console.log(jon);
// mostramos por consola el objeto
console.log(persona);
