//27 Objeto Date
//console.log(Date)
console.log(Date());

let fecha = new Date();
console.log(fecha);
//dia del mes
console.log(fecha.getDate());
//dia de la semana D L M Mi J V S ->0 1 2 3 4 5 6
console.log(fecha.getDay());
//mes del año 0-11
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toTimeString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());
