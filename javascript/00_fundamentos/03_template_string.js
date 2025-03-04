let nombre = "luis";
let apellido = "lucas";

//concatenación
let saludo = "Hola mi nombre es" + nombre + " " + apellido + ".";

console.log(saludo);

//interpolacion de variable
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo2);

let ul = `
     <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
      </ul>
`;

console.log(ul);

let ul2 = "<ul>";
ul2 += "<li>Primavera</li>;";
ul2 += "<li>Verano</li>";
ul2 += "<li>Otoño</li>";
ul2 += "<li>Invierno</li>";
ul2 += "</ul>";

console.log(ul2);
