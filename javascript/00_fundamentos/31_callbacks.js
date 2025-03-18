//46 callback
//recursividad

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 100));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`El cuadrado de ${value} es ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`El cuadrado de ${value} es ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`El cuadrado de ${value} es ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`El cuadrado de ${value} es ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`El cuadrado de ${value} es ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`El cuadrado de ${value} es ${result}`);
            console.log("Finaliza Callback");
            console.log("Callback hell !!!!");
          });
        });
      });
    });
  });
});
