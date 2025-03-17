// 32 funciones anonimas autoejecutable
alert("Hola");

(function () {
  console.log("Mi primer IIFE");
})();

(function (d, w, c) {
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  c.log("Este es un console.");
})(document, window, console);

//La crockfor (JavaScript The Good Parts)
((function () {
    console.log("version crockford")
})());

//Unaria
+function () {
    console.log("Version Unaria")
}();

//Facebook
!function () {
    console.log("Version Facebook")
}();
