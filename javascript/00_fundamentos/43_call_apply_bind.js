// 58 call, apply, bind

console.log(this);
this.lugar = "Contexto Global";

/* function saludar() {
  console.log(`${this.lugar}`);
} */

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}
saludar();

const obj = {
  lugar: "Contexto Objeto",
};

saludar.call(obj, "Hola", "Juan");
saludar.call(null, "Hola", "Juan");
saludar.call(this, "Hola", "Juan");

saludar.apply(obj, ["Hola", "Juan"]);
saludar.apply(null, ["Hola", "Juan"]);
saludar.apply(this, ["Hola", "Juan"]);

this.nombre = "Window";

const persona = {
  nombre: "juan",
  saludar: function () {
    console.log(`hola soy ${this.nombre}`);
  },
};

persona.saludar();

const otraPersona = {
  //saludar: persona.saludar.bind(this),
  saludar: persona.saludar.bind(persona),
};

otraPersona.saludar();
