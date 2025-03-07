let eda = 17;

if (eda >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

let hora = 5;

if (hora >= 0 && hora <= 5) {
  console.log("Dejame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos días");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

//operador ternario
let edad = 17;
console.log(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad");

// switch case

let fruta = "Manzana";

switch (fruta) {
  case "Manzana":
    console.log("Es una manzana");
    break;
  case "Plátano":
    console.log("Es un plátano");
  case "naranja":
    console.log("Es una naranja");
    break;
  default:
    console.log("Fruta no reconocida");
    break;
}


