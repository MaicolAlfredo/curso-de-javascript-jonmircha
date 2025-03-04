let nombre = "luis";
let apellido = "lucas";

let saludo = new String("Hola mundo");

let lorem =
  "                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor blanditiis maxime magnam dolorem voluptatibus quibusdam itaque nihil explicabo expedita architecto ipsam modi quia assumenda, molestiae facilis quos iusto veniam.             ";

console.log(nombre, apellido, saludo);
console.log(
  nombre.length,
  apellido.length,
  saludo.length,
  nombre.toUpperCase(),
  apellido.toLowerCase(),
  lorem.includes("amet"),
  lorem.includes("jon"),
  lorem,
  lorem.trim(),
  lorem.split(" "),
  lorem.split(",")
);
