//50 sets
const set = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  true,
  false,
  false,
  {},
  {},
  "hola",
  "HOLA",
]);

console.log(set);
console.log(set.size);
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(3);
set2.add(4);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);

console.log("Recorriendo set");
for (const item of set) {
  console.log(item);
}

console.log("Recorriendo set2");
set2.forEach((item) => {
  console.log(item);
});

let arr = Array.from(set2);

console.log(arr);
console.log(arr[0]);
console.log(arr[9]);

set.delete("hola");
console.log(set);
console.log(set.has("hola")); //true
set.clear(); //borra todos los elementos
console.log(set);
