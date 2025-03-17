//44 temporizadores
console.log("Inicio");
setTimeout(() => {
  console.log("Ejecutando un setTimeOut, esto se ejecuta una sóla vez");
}, 1000);

/* setInterval(() => {
  console.log(
    "Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo"
  );
}, 1000); */


/* setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000); */


/* let temporizador = setTimeout(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador);
console.log("Fin"); */

let temporizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporizador);
console.log("Fin");
