// 59 JSON

const jon = {
  cadena: "Jon",
  numero: 35,
  booleano: true,
  arreglo: ["correr", "programar", "cocinar"],
  objeto: {
    twitter: "@jonmicha",
    email: "jonmircha@gmail.com",
  },
  nulo: null,
};

console.log(JSON);
console.log("{}");
console.log("[1,2,3]");
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.stringify({}));
console.log(JSON.stringify("[1,2,3]"));
