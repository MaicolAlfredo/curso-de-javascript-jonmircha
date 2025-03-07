try {
  console.log("En el bloque 'try' se agrega el código a evaluar.");
} catch (error) {
  console.log("El bloque 'catch' captura cualquier error ocurrido en el 'try'");
} finally {
  console.log("El bloque 'finally' es ejecuta siempre, al final del bloque");
}

try {
  let numero = "text";

  if (isNaN(numero)) {
    //Lanza un error si el valor no es un número.
    throw new error("El carácter introducido no es un número.");
  }
  console.log(`El cuadrado del número es: ${numero * numero} `);
} catch (error) {
  //captura y maneja el error
  console.log(`Se produjo el siguiente error: ${error.message}`);
}

function procesarDatos(entrada) {
  try {
    let numero = Number(entrada);

    //Validar si la conversión fue exitosa.
    if (isNaN(numero)) {
      throw new error("El carácter introducido no es un número válido.");
    }
    console.log(`El número ingresado es válido: ${numero} `);
  } catch (error) {
    //Manejar el error y mostrar un mensaje claro.
    console.log(`Error: ${error.message}`);
  }
}

// Probar la funcion con diferentes valores.
procesarDatos("texto"); // Error: El dato ingresado no es un número válido.
procesarDatos(42); // El número ingresado es válido: 42.
