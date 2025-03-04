# Fundamentos JonMircha

1. [Introducción](#introducción)
1. [Caracteristica y Gramática](#caracteristica-y-gramática)
1. [9.undefined, null & NaN](#9-undefined-null--nan)
1. [10. Funciones](#10-funciones)

## Introducción

Hola, soy tu amigo y docente digital Jonathan Marcha. ¡Bienvenidos al curso de JavaScript! Me da mucho gusto tenerlos aquí porque hoy comienzo un curso totalmente desde las bases sobre JavaScript.

Al hablar de las bases, es importante recordar que, gracias a los avances que hemos tenido en los últimos cinco años, a JavaScript se le han ido agregando características nuevas. Lo que he visto en algunos cursos es que suelen empezar enseñando primero las partes del JavaScript antiguo y, hasta el final, introducen las nuevas características.

Para los desarrolladores que están comenzando en este maravilloso mundo de la web, es fundamental adquirir desde el inicio las características más recientes que tenemos desde ECMAScript 6. Por eso, este curso estará orientado desde las bases, pero incluyendo todas las actualizaciones que hemos recibido hasta el momento.

Y bueno, en este primer video introductorio simplemente voy a hablar de algunos puntos importantes para tener contexto sobre lo que ha sido JavaScript a lo largo de los años.

Para comenzar, lo primero que hay que mencionar es que JavaScript fue creado en 1995 por Brendan Eich, quien trabajaba en aquella época en una empresa que hoy ya no existe: Netscape. En ese entonces, Netscape tenía un navegador llamado Netscape Navigator, que competía directamente con Internet Explorer.

La gente de Netscape le pidió a Brendan Eich que desarrollara una tecnología que pudiera implementarse en su navegador web para hacer páginas más dinámicas, permitiendo, por ejemplo, reaccionar a botones y enviar formularios con HTML. Según cuenta la leyenda, Eich tuvo solo 13 días para desarrollar el lenguaje.

Él es, prácticamente, el padre de nuestro lenguaje favorito, JavaScript, que hoy en día tiene casi 30 años de existencia.

Ahora, algo muy importante: por favor, no confundir Java con JavaScript. Me ha tocado ver que muchos estudiantes que están comenzando en el mundo de la web y no tienen un perfil técnico dicen: "Yo sé un poco de Java", cuando en realidad lo que saben es JavaScript.

De hecho, JavaScript tuvo varios nombres clave al inicio, entre ellos Mocha y LiveScript. Sin embargo, en la década de los 90, Java era una tecnología en auge que competía con C, y en esa época era el "boom" del desarrollo. Así como hoy en día tenemos el auge de JavaScript y los frameworks reactivos, en aquel entonces el protagonista era Java.

Las grandes empresas, como Google, Facebook y Microsoft, organizan eventos anuales donde presentan nuevas tecnologías. En los años 90 también se hacían eventos similares, aunque sin redes sociales ni internet masivo, por lo que el círculo de asistentes era más reducido.

Cuenta la historia que, en uno de estos eventos organizados por Sun Microsystems (la empresa que creó Java y que más tarde fue adquirida por Oracle), la gente de Netscape tuvo la oportunidad de presentar su nueva tecnología para navegadores. Para aprovechar el boom de Java y con fines de marketing, decidieron rebautizar su lenguaje como JavaScript.

Desde entonces, ha existido la confusión de que Java y JavaScript están relacionados, pero realmente no tienen nada que ver, más allá del nombre.

Ahora les quiero mostrar una tabla, porque es importante que entendamos cuál ha sido la evolución de JavaScript.

JavaScript nace en el año 1995 y está basado en un estándar llamado ECMAScript. De hecho, para aquellos desarrolladores de la vieja guardia, como su servidor, que hayan programado en Flash con ActionScript 2 o ActionScript 3, encontrarán muchas similitudes entre JavaScript y ActionScript, ya que ambos provienen del mismo estándar: ECMAScript.

Volviendo a la evolución de JavaScript, esta tabla nos muestra cómo ha ido avanzando:

- En 1997, se estandarizó la primera versión estable de JavaScript.
- En 1998, salió ECMAScript 2.
- En 1999, apareció ECMAScript 3.
- ECMAScript 4 fue abandonado por varias razones, principalmente porque sus nuevas características no fueron ampliamente aceptadas o no era el momento adecuado para implementarlas.
- Como resultado, se omitió el número 4 y se pasó directamente a ECMAScript 5 en 2009.

Este tipo de omisiones en versiones sucede en varias tecnologías. Por ejemplo, en PHP, nunca se lanzó la versión 6, y se pasó directamente de PHP 5 a PHP 7.

Algo curioso es que entre ECMAScript 3 (1999) y ECMAScript 5 (2009) pasó una década entera sin una nueva versión importante. Durante ese período, Flash dominó el desarrollo web interactivo.

Otro evento importante en esa década fue el nacimiento de jQuery en 2005. jQuery fue una librería revolucionaria porque resolvía un problema clave de la época: la compatibilidad entre navegadores (cross-browser).

En ese entonces, Internet Explorer era el navegador más usado, pero Microsoft implementaba las tecnologías web a su manera, sin seguir completamente los estándares. Un claro ejemplo fue AJAX:

- En Internet Explorer, se usaba un objeto llamado ActiveXObject para hacer peticiones asíncronas.
- En los demás navegadores, se utilizaba el estándar XMLHttpRequest.

Esto complicaba mucho el desarrollo web, ya que los programadores tenían que escribir código diferente según el navegador.

Aquí es donde jQuery tuvo su auge, porque simplificaba este problema al detectar automáticamente en qué navegador se estaba ejecutando el código y usar la función adecuada. Gracias a esto, jQuery se convirtió en la librería más popular de la primera década del 2000.

Ahora, un punto muy importante: en el año 2009, además de los avances en JavaScript, comienzan a surgir HTML5 y CSS3 como los nuevos estándares web.

También, en ese mismo año, se desarrolla JavaScript del lado del servidor con la creación del entorno de ejecución Node.js. Hoy en día, Node.js está muy bien posicionado y fue clave para darle a JavaScript un salto de autoridad y estructura como lenguaje de programación.

Antes de esto, muchos programadores consideraban JavaScript solo una herramienta para agregar interactividad en el front-end, y no lo respetaban como un lenguaje de programación serio porque carecía de muchas características avanzadas.

En cuanto a ECMAScript, en 2011 se lanza ECMAScript 5.1, pero después de eso pasamos por otro período de sequía de cinco años sin nuevas versiones significativas.

Sin embargo, entre 2011 y 2015, surgen nuevas tendencias en el desarrollo web. Durante este período, varias librerías y frameworks intentan replicar el patrón Modelo-Vista-Controlador (MVC), que tradicionalmente se usaba en el backend, pero ahora adaptándolo al front-end.

De esta forma, empiezan a surgir diferentes patrones de arquitectura como:

- Modelo-Vista-Presentador (MVP)
- Modelo-Vista-Vista-Modelo (MVVM)
- Modelo-Vista-Modelo (MVM)

En ese contexto, aparecen varias librerías y frameworks que intentan organizar mejor el código del front-end:

- Backbone.js
- Ember.js
- En 2013, surge AngularJS.
- Luego aparece React.
- Finalmente, entre 2015 y 2016, se lanza Vue.js.

Estas tres últimas tecnologías (Angular, React y Vue) lideran la nueva ola del desarrollo web basado en componentes y programación reactiva, con un enfoque más declarativo y cercano a la programación funcional.

Para el año 2020, este enfoque ya está completamente estandarizado, y Node.js ha sido fundamental en la evolución de JavaScript en la última década.

[indice](#fundamentos-jonmircha)

## Caracteristica y Gramática

Hola, soy tu amigo y docente digital Jonathan Marcha. ¡Bienvenidos a la segunda sesión del curso de JavaScript!

En la clase anterior te di un poco de contexto sobre cómo voy a desarrollar este curso y también una breve introducción a la historia y evolución del estándar ECMAScript, en el que está basado nuestro querido lenguaje JavaScript.

Hoy quiero hablarte de algunas características particulares del lenguaje para cerrar toda esta introducción que vimos en la sesión anterior. Además, comenzaremos a ver la gramática del lenguaje, es decir, las reglas que debemos seguir. Algunas de ellas son definidas, otras opcionales, pero podríamos decir que funcionan como la ortografía de nuestra programación.

JavaScript ha evolucionado enormemente. En la clase anterior te explicaba a grandes rasgos cómo pasó de ser una herramienta para añadir interactividad a HTML a convertirse en uno de los lenguajes más importantes de la actualidad, prácticamente "comiéndose el mundo".

Una característica clave en este crecimiento es el isomorfismo. El término proviene de "iso", que significa igual, y "morfos", que significa forma. En programación, el isomorfismo se refiere a la posibilidad de desarrollar una aplicación completa, de principio a fin, usando una sola tecnología. Y hoy en día, esa tecnología es indiscutiblemente JavaScript.

Por ejemplo, si estás desarrollando una aplicación con PHP, en el frontend usarás JavaScript, en el backend PHP, y para las bases de datos podrías optar por SQL (PostgreSQL, MySQL, etc.). Sin embargo, en un enfoque basado en JavaScript, puedes manejar las tres capas del desarrollo web: modelo, vista y controlador (MVC), sin necesidad de cambiar de lenguaje.

¿Por qué sucede esto?

- JavaScript nació en los navegadores y sigue siendo la única tecnología aceptada por estos para programar. Aunque existen metalenguajes y compiladores como CoffeeScript, TypeScript o Dart, al final todo se compila a JavaScript para que los navegadores puedan interpretarlo.

- Desde 2009, con la llegada de Node.js, creado por Ryan Dahl al tomar el motor V8 de Google Chrome y llevarlo al entorno de desarrollo del servidor, JavaScript dejó de ser solo un lenguaje del frontend y se convirtió también en una opción para el backend.

- Con el auge de las bases de datos NoSQL, especialmente aquellas basadas en documentos como MongoDB, Firebase o CouchDB, JavaScript también se ha consolidado en el manejo de bases de datos, ya que la estructura de estas bases es prácticamente una notación de objetos JavaScript (JSON en formato binario).

En resumen, con JavaScript puedes:

- ✅ Controlar la interfaz de usuario (UI) y la interactividad en el frontend.
- ✅ Manejar la lógica de negocio en el backend con Node.js.
- ✅ Almacenar información en bases de datos NoSQL que utilizan tecnología basada en JavaScript.

Por estas razones, JavaScript es hoy en día un lenguaje dominante en el desarrollo web moderno. ¡Vamos a seguir explorándolo juntos! 🚀

### Con JavaScript puedes:

Además del desarrollo web, JavaScript ha crecido enormemente en la última década, especialmente desde el nacimiento de Node.js. Su expansión ha sido tan amplia que ya no se limita solo a crear sitios web. Con JavaScript también puedes:

- ✅ Desarrollar videojuegos utilizando librerías especializadas.
- ✅ Crear experiencias en 3D, realidad virtual y realidad aumentada con librerías como Three.js y A-Frame.
- ✅ Controlar hardware con librerías como Johnny-Five, lo que permite interactuar con Arduino, electrodomésticos, drones y robots.
- ✅ Construir aplicaciones híbridas y móviles con frameworks como Ionic y React Native.
- ✅ Explorar el aprendizaje automático con librerías como TensorFlow.js.

En resumen, JavaScript tiene aplicaciones en muchas áreas más allá del desarrollo web.

Por eso, si estás considerando aprender a programar, JavaScript es una excelente opción como tu primer lenguaje de programación. No solo te abrirá puertas en el desarrollo web, sino que también te permitirá explorar todas estas áreas.

**JavaScript NO es Java** 🚨
Este punto es muy importante y quiero enfatizarlo. JavaScript no tiene nada que ver con Java. En la sesión anterior te expliqué el origen de esta confusión y, para reforzarlo, lo repito aquí:

🔹 Java ≠ JavaScript 🔹

Como en el meme de Leónidas: "¿Java?" – "¡Esto es JavaScript!" 💥

O como la imagen que mencioné en la sesión anterior: Java y JavaScript son tan diferentes como un jamón y un hámster. Así que recuerda, son dos tecnologías completamente distintas.

### Características de JavaScript

1. Lenguaje de alto nivel
   JavaScript es un lenguaje de alto nivel, lo que significa que nos proporciona ciertas abstracciones para que no tengamos que preocuparnos por detalles como la gestión manual de la memoria o la recolección de basura (garbage collection). Esto lo diferencia de los lenguajes de bajo nivel, donde sí es necesario manejar estos aspectos directamente para optimizar el rendimiento.

2. Interpretado y dinámico
   JavaScript es un lenguaje interpretado, lo que significa que no necesita una fase de compilación previa antes de ejecutarse. En lugar de eso, se compila en tiempo de ejecución, es decir, mientras el código se ejecuta en el navegador o en un entorno como Node.js. Cada navegador tiene su propio motor de JavaScript, que compila el código conforme lo vamos escribiendo y ejecutando. Esto hace que JavaScript sea un lenguaje dinámico, ya que su ejecución y compilación ocurren simultáneamente.

3. Débilmente tipado
   JavaScript es un lenguaje débilmente tipado, lo que significa que las variables no están estrictamente ligadas a un solo tipo de dato. Por ejemplo, una variable puede comenzar almacenando un valor de tipo cadena de texto (string) y luego cambiar a un número (number), un objeto (object) o incluso una función (function). En contraste, en lenguajes fuertemente tipados, como Java o TypeScript, las variables deben declarar su tipo de dato desde el inicio y no pueden cambiarlo.

4. Multiparadigma
   JavaScript es un lenguaje multiparadigma, lo que significa que permite escribir código siguiendo diferentes estilos de programación, como:

   - ✅ Programación estructurada (uso de secuencias, condiciones y bucles).
   - ✅ Programación orientada a objetos (uso de clases, objetos y herencia).
   - ✅ Programación funcional (uso de funciones como ciudadanos de primera clase, inmutabilidad y funciones de orden superior). Esto le da mucha flexibilidad, permitiendo a los desarrolladores elegir el enfoque más adecuado para cada proyecto.

5. Case-Sensitive (sensible a mayúsculas y minúsculas)
   JavaScript distingue entre mayúsculas y minúsculas. Esto significa que una variable llamada Perro no es lo mismo que perro o PERRO. Si no tienes cuidado con esto, podrías cometer errores difíciles de detectar.

6. Uso opcional del punto y coma (;)
   A diferencia de otros lenguajes, en JavaScript no es obligatorio terminar cada línea con un punto y coma (;), ya que el motor del lenguaje realiza la corrección automática (Automatic Semicolon Insertion). Sin embargo, algunos desarrolladores prefieren usar punto y coma por claridad y para evitar errores en casos específicos, como cuando se escriben varias declaraciones en una misma línea o cuando una línea empieza con paréntesis ( o corchetes { . Al final, usar o no punto y coma es una cuestión de estilo, y muchas herramientas como Prettier o ESLint pueden formatear automáticamente el código según la configuración que prefieras.

### Escritura de Código en JavaScript

En JavaScript, la escritura y la gramática del código siguen ciertas reglas y convenciones que ayudan a mantener el código claro, legible y sin errores.

#### **Identificadores en JavaScript**

Un **identificador** es el nombre que se le da a variables, funciones, clases, entre otros elementos. Existen reglas específicas para su creación:

✅ Un identificador **puede comenzar** con:

- Una letra (`a-z`, `A-Z`)
- Un guion bajo (`_`)
- Un símbolo de dólar (`$`)

❌ Un identificador **no puede comenzar** con:

- Números (`1variable` ❌)
- Caracteres especiales (`-variable` ❌)

Además, un identificador **no puede repetirse** dentro del mismo ámbito. Por ejemplo, no se puede declarar una variable y luego una función con el mismo nombre dentro del mismo contexto.

##### **Ejemplos en la consola del navegador**

```javascript
let a = 7;      // Correcto
let $a = 0;     // Correcto
let _a = 2;     // Correcto
let -a = 8;     // Incorrecto, error de sintaxis
let 1a = 5;     // Incorrecto, error de sintaxis
```

Si intentamos usar un guion medio o un número al inicio del identificador, obtendremos un error de sintaxis.

---

### **Convenciones de nomenclatura en JavaScript**

Para mejorar la legibilidad y mantener un código organizado, existen convenciones para nombrar variables, funciones, clases y archivos.

#### **Estilos de nomenclatura**

1. **`snake_case`** → Separa palabras con guiones bajos. Se usa en nombres de archivos.

   - Ejemplo: `mi_archivo_javascript.js`

2. **`UPPER_CASE`** → Se usa para **constantes**, valores que no cambian.

   - Ejemplo: `const MAX_VELOCITY = 120;`

3. **`UpperCamelCase`** → Se usa para **nombres de clases**.

   - Ejemplo: `class UsuarioAutenticado {}`

4. **`lowerCamelCase`** → Se usa para **variables, funciones y objetos**.
   - Ejemplo: `let nombreCompleto = "Juan Pérez";`

---

### **Buenas prácticas en la escritura de código**

- **Evitar caracteres fuera del inglés** (acentos, eñes, etc.), ya que pueden generar problemas de compatibilidad.
- **No usar espacios en los identificadores**, ya que esto provocaría errores de sintaxis.
- **Utilizar el estilo de nomenclatura adecuado según el contexto** (constantes en mayúsculas, clases con `UpperCamelCase`, etc.).
- **Seguir las convenciones de nombres según el framework o librería que se use** (por ejemplo, Angular, React y Vue pueden tener sus propias convenciones).

Si aún no estás familiarizado con términos como "valores primitivos", "instancias" o "funciones", no te preocupes. Lo importante es que desde el principio comprendas las reglas básicas para escribir código en JavaScript de manera correcta.

### Palabras Reservadas en JavaScript

Las palabras reservadas son términos que el lenguaje de programación ya tiene definidos para funciones específicas, por lo que no pueden usarse como nombres de variables, funciones, clases u otros identificadores. Si intentas utilizarlas, el código generará un error de sintaxis.

A continuación, algunas de las palabras reservadas en JavaScript, organizadas alfabéticamente:

```js
abstract, arguments, await, boolean, break, byte, case, catch, char, class,
const, continue, debugger, default, delete, do, double, else, enum, eval,
export, extends, false, final, finally, float, for, function, goto, if,
implements, import, in, instanceof, int, interface, let, long, native, new,
null, package, private, protected, public, return, short, static, super,
switch, synchronized, this, throw, throws, transient, true, try, typeof,
var, void, volatile, while, with, yield
```

Ordenamiento del Código en JavaScript
Organizar el código de manera estructurada facilita la comprensión y el mantenimiento del proyecto. Aunque la organización puede variar según el paradigma de programación (orientado a objetos, funcional, basado en componentes, etc.), se recomienda seguir este orden general:

1️⃣ Importación de Módulos (si aplica)
Si utilizas módulos ES6, lo primero en el archivo debe ser la importación de las dependencias necesarias.

2️⃣ Declaración de Variables y Constantes
Después de las importaciones, se deben definir las variables y constantes que serán utilizadas en el código. Separar las constantes de las variables mutables mejora la organización.

3️⃣ Declaración de Funciones
Todas las funciones deben definirse antes de su uso en el código. Esto ayuda a evitar problemas de hoisting y hace que el código sea más fácil de seguir.

4️⃣ Definición de Clases y Objetos (si aplica)
Si utilizas programación orientada a objetos, define las clases y sus métodos en esta sección.

5️⃣ Ejecución del Código
Aquí es donde realmente se ejecuta el código, incluyendo llamadas a funciones, creación de instancias, asignación de eventos, etc.

📌 Resumen del Orden de Código

- 1️⃣ Importaciones (módulos, librerías, etc.)
- 2️⃣ Variables y constantes
- 3️⃣ Funciones
- 4️⃣ Clases y Objetos (si se usan)
- 5️⃣ Ejecución del código (llamadas a funciones, eventos, instancias, etc.)

📌 Seguir este orden mejora la legibilidad y el mantenimiento del código, especialmente en proyectos grandes.

### Tipos de Datos en JavaScript

En JavaScript, los datos se dividen en dos grandes categorías:

1️⃣ Datos Primitivos
Son aquellos cuyo valor se almacena directamente en la variable y no pueden modificarse.

- 🔹 String → Cadenas de texto ("Hola", 'JavaScript').
- 🔹 Number → Números (42, 3.14). En JavaScript no hay diferencia entre enteros y decimales.
- 🔹 Boolean → Valores lógicos (true, false).
- 🔹 Undefined → Valor que se asigna automáticamente a una variable no inicializada.
- 🔹 Null → Representa la ausencia intencional de un valor.
- 🔹 NaN → Significa "Not a Number", ocurre cuando una operación matemática no es válida ("hola" \* 3).
- 🔹 BigInt → Se usa para representar números enteros extremadamente grandes (BigInt(9007199254740991)).

2️⃣ Datos Compuestos (o Complejos)
Estos no almacenan el valor directamente, sino una referencia a la memoria donde se encuentra el dato.

- 🔹 Object → Colección de datos clave-valor ({ nombre: "Ana", edad: 30 }).
- 🔹 Array → Listas ordenadas de elementos ([1, 2, 3]).
- 🔹 Function → Bloques de código reutilizable (function saludar() {})
- 🔹 Class → Plantilla para crear objetos con propiedades y métodos.

- 🔹 Importante:
  Los datos compuestos funcionan con referencias en memoria, lo que significa que si dos variables apuntan al mismo objeto, cualquier cambio afectará a ambas.

📌 Resumen

- 🔹 Primitivos → Se accede directamente al valor.
- 🔹 Compuestos → Se accede por referencia y pueden modificarse en memoria.

➡ Próximo tema: Variables en JavaScript y diferencias entre var, let y const.

[indice](#fundamentos-jonmircha)

## 9. undefined, null & NaN

Bueno, vamos a continuar. En la clase anterior vimos los tipos de dato boolean y en esta clase vamos a hablar de los valores primitivos que les he puesto en esta lista. undefined y NaN son casos muy particulares de JavaScript, y a veces hay cierta confusión, sobre todo entre null y undefined. Pero bueno, en esta clase voy a tratar de desmitificar todos esos conceptos que a veces se pueden malentender.

Primero, ¿qué es undefined? undefined va a indicar un valor ausente. Fíjense que tanto null como undefined representan un valor ausente, es decir, una variable que no tiene valor. La gran diferencia es que, mientras undefined es una variable que no ha sido inicializada, null es un valor que el programador asigna intencionalmente.

Por ejemplo, recuerden que en clases anteriores, cuando les explicaba las cadenas de texto y empezaba a concatenar cierto contenido a una variable, en algún momento hice una variable sin asignarle valor. Entonces, cuando nosotros como programadores hacemos ese tipo de prácticas, JavaScript detecta el valor de dicha variable como undefined.

Para ilustrarlo:

```js
let indefinida;
console.log(indefinida);
```

Si quiero que JavaScript le detecte el valor undefined, simplemente no le asigno valor.

Por otro lado, si asignamos el valor null, estamos diciendo intencionalmente que esa variable está vacía. Aquí un ejemplo:

```js
let vacia = null;
console.log(vacia);
```

Diferencia clave:

- undefined es cuando JavaScript detecta que la variable no tiene valor.
- null es cuando el programador le asigna explícitamente ese valor especial.

Recuerda que ambos significan que la variable está vacía, pero la diferencia es que undefined no ha sido inicializada, mientras que con null el programador le asigna ese valor.

Finalmente, hay otro tipo de valor que a veces nos ocurre cuando, por ejemplo, hacemos operaciones aritméticas entre diferentes tipos de datos que no son numéricos. Esto puede generar un valor especial llamado NaN (Not a Number).

Ejemplo de código para generar NaN:

```js
let noEsUnNumero = "texto" * 3.5;
console.log(noEsUnNumero);
```

En este caso, JavaScript nos está diciendo que no puede realizar una operación matemática entre una cadena de texto y un número, por lo que devuelve NaN.

En resumen:
NaN significa "No es un número".

Se genera cuando intentamos hacer operaciones con valores que no son numéricos.

Básicamente, con esto cerramos la parte de los tipos primitivos. En el siguiente vídeo comenzaremos con los tipos compuestos o complejos, empezando con las funciones, y más adelante veremos objetos, arreglos, clases, etc. Habrá un apartado especial en este curso sobre programación orientada a objetos donde explicaremos conceptos como prototipos, clases, etc.

[indice](#fundamentos-jonmircha)

## 10. Funciones

En la clase anterior terminamos de ver los tipos de datos primitivos: string, number, boolean, y los tres últimos, particulares de JavaScript: undefined, Null y NaN (Not a Number). Ahora vamos a empezar a trabajar con los tipos de datos compuestos o complejos. Comenzaremos con las funciones, porque los objetos y los arreglos suelen necesitar el uso de funciones. Por eso considero que lo mejor es empezar con este tipo de datos.

En los lenguajes de programación, generalmente, la mayoría de las acciones suceden dentro de funciones. ¿Qué es una función? Simplemente, es un bloque de código autocontenido, es decir, que tiene su propio contenido independiente del ámbito global. Hablamos de esto cuando vimos las variables y su alcance. Una función se define una sola vez y puede ejecutarse en cualquier momento. En otras palabras, es un fragmento de código que puedes declarar una vez y reutilizar tantas veces como sea necesario.

Además, una función puede o no recibir parámetros, que son datos separados por comas, y también puede devolver valores o no, según el caso.

Particularmente en JavaScript, las funciones son un tipo de dato especial, ya que también se consideran objetos. En el ámbito técnico de JavaScript, se dice que las funciones son "ciudadanos de primer orden" o "de primera clase". ¿Qué significa esto? Que las funciones en JavaScript son muy poderosas, ya que pueden asignarse como valores, pasarse como argumentos e incluso devolverse como resultado de otras funciones. Imagina que dentro de una función, en lugar de retornar una cadena de texto, un número o un valor booleano, puedes retornar la ejecución de otra función.

Desde ECMAScript 2015 (ES6), tenemos muchas características interesantes en el manejo de funciones. Un ejemplo de ello son las funciones flecha o arrow functions, que no veremos en este vídeo porque primero necesitamos entender otros conceptos, como la palabra reservada this.

Vamos a ver los conceptos básicos de una función y las diferentes formas de declararla o expresarla. Existen dos maneras principales de crear funciones en JavaScript: funciones declaradas y funciones expresadas. También veremos la diferencia entre usar una u otra.

Primero, observemos una función declarada. Para trabajar con una función declarada, usamos la palabra reservada function. Una función siempre llevará paréntesis y llaves {}, y dentro de las llaves estará el cuerpo de la función. Además, hay que darle un nombre. Por ejemplo, "estoEsUnaFunción". Como mencioné, una función es un bloque de líneas de código que se ejecutan al unísono.

Imaginemos que quiero que esta función ejecute varios mensajes en la consola, por ejemplo:
```js
function estoEsUnaFuncion() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}
```

La función ya está declarada, pero todavía no se ha ejecutado. Podemos pensar en ella como un jugador de fútbol que está en la banca: está listo, pero no ha entrado al campo. Para que la función se ejecute (o "entre al campo"), debemos invocarla.

Para invocar una función, basta con llamar su nombre seguido de paréntesis los paréntesis indican en los lenguajes de programación que una función se va a ejecutar, de esta forma:

```js
estoEsUnaFuncion(); //Invocacion de la funcion
```

Si solo llamamos al nombre sin paréntesis, como en estoEsUnaFuncion;, no se ejecutará. Los paréntesis indican que una función debe ejecutarse. En este caso, la salida en la consola será:

```
uno
dos
tres
```

Una función es un bloque de código autocontenido que se define una vez y se puede ejecutar en cualquier momento. Esto significa que, una vez declarada la función, puedes invocarla tantas veces como desees para que realice las mismas acciones.

Por ejemplo, si copio estoEsUnaFuncion() y la ejecuto varias veces, la función se ejecutará tantas veces como la invoque, repitiendo el código en su interior.

Aquí tienes un ejemplo de cómo se vería:

```js
function estoEsUnaFuncion() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}

//Invocamos la funcion cuatro veces
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
```

En este caso, como invocamos estoEsUnaFuncion() cuatro veces, los mensajes "uno", "dos" y "tres" se imprimen en la consola cuatro veces. Esto muestra cómo podemos reutilizar el mismo bloque de código en cualquier momento con solo invocar la función.

Opcionalmente, una función puede aceptar parámetros y devolver valores. Por ejemplo, vamos a declarar una función llamada unaFuncionQueDevuelveValor. Aunque el nombre es algo largo, es explícito para que quede claro su propósito.

Cuando una función devuelve un valor, usamos la palabra reservada return. Por ejemplo:

```js
function unaFuncionQueDevuelveValor() {
  return "La funcion ha retornado una cadena de texto";
}
```

En este caso, la función unaFuncionQueDevuelveValor devuelve la cadena "La función ha retornado una cadena de texto" cuando se ejecuta. Una función puede devolver cualquier tipo de datos, ya sean primitivos o compuestos.

Para comprobar que realmente devuelve este valor, podemos asignar el resultado de la función a una variable y luego imprimirlo en la consola:

```js
let valorDeLaFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeLaFuncion);
```

La salida en la consola será:

```
La funcion ha retornado una cadena de texto
```

Esto muestra que el valor retornado por la función se asigna correctamente a la variable valorDeFuncion.

Ejemplo de uso de return en una función con varios console.log

Supongamos que nuestra función tiene varios console.log y queremos ver cómo return afecta su ejecución.

```js
function otraFuncion() {
  console.log("uno");
  return 19; //Devuelve 19 y termina la funcion
  console.log("dos");
  console.log("tres");
}
```

Si ejecutamos otraFuncion() y observamos la consola:

```js
let resultado = otraFuncion();
console.log("valore retornado:", resultado);
```

La salida en la consola será:

```
uno
valor retornado: 19
```

Explicación: Al encontrar el primer return dentro de la función (en este caso, return 19;), el intérprete deja de ejecutar el resto del código que está debajo. Es decir, las líneas console.log("Dos") y console.log("Tres") no se ejecutan porque return termina la función y devuelve el valor inmediatamente.

Resumen:

Cuando la función encuentra un return, ignora cualquier línea de código que esté después de él y termina su ejecución, devolviendo el valor especificado. Esto hace que return sea una herramienta útil para controlar el flujo de una función y determinar el momento en que debe finalizar su ejecución.

Ahora, vamos a ver cómo una función también puede aceptar parámetros. Pero, ¿qué significa que una función acepte parámetros? Básicamente, es la manera en que una función puede recibir valores externos para trabajar con ellos internamente.

Por ejemplo, vamos a crear una función llamada saludar:

```js
function saludar() {}
```

En este caso, la función saludar aún no recibe ningún parámetro. Ahora vamos a modificarla para que reciba dos valores, que serán el nombre y la edad:

```js
function saludar(nombre, edad) {}
```

Aquí, nombre y edad son los parámetros de la función. Estos funcionan como variables dentro de la función, y los valores que se les asignen serán utilizados para ejecutar alguna acción específica. En este caso, vamos a usarlos para formar un mensaje de saludo.

Imaginemos que esta función, como su nombre indica, es para saludar. Vamos a usar template strings (cadenas con plantillas) para construir un mensaje. Los template strings permiten incrustar variables directamente en el texto utilizando el símbolo `${}`. Así, en nuestra función saludar, agregaremos un console.log que muestre el siguiente mensaje:

```js
function saludar(nombre, edad) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}
```

Con esta estructura, la función saludar puede recibir un nombre y una edad para usarlos en el mensaje de saludo.

Ejemplo de uso de la función con parámetros

Vamos a llamar a la función saludar pasándole dos argumentos: "Kenai" y 7. Imaginemos que queremos saludar a Kenai, que tiene 7 años:

```js
saludar("kenai", 7);
```

La salida en la consola será:

```
Hola mi nombre es kenai y tengo 7 años
```

Explicación: La función saludar ha recibido los valores "Kenai" como nombre y 7 como edad, y los ha insertado en el mensaje de saludo.

De esta forma, al aceptar parámetros, las funciones se vuelven más flexibles y reutilizables, ya que pueden adaptarse a diferentes valores y situaciones cada vez que se invocan.

Ahora, ¿qué pasa si ejecuto la función saludar() sin pasarle parámetros?

```js
saludar();
```

Nos dará como resultado:

```
Hola mi nombre es undefined y tengo undefined años.
```

Esto sucede porque, al no pasarle valores a nombre y edad, JavaScript asigna automáticamente el valor undefined a cada parámetro. En otros lenguajes, ya existía la posibilidad de asignar valores por defecto a los parámetros de una función, pero en JavaScript esta funcionalidad fue agregada a partir de ES6 (2015).

Para asignar un valor por defecto a los parámetros de una función en JavaScript, simplemente igualamos el parámetro a un valor deseado dentro de su declaración. Por ejemplo:

```js
function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}
```

En esta versión, si llamamos a saludar sin pasarle argumentos, los parámetros nombre y edad tendrán automáticamente los valores "Desconocido" y 0, respectivamente.

Invocación sin pasar argumentos:

```js
saludar();
```

La salida será:

```
Hola, mi nombre es Desconocido y tengo 0 años.
```

la función utiliza los valores por defecto para nombre y edad, ya que no se le pasaron argumentos.

Esta característica es útil para manejar casos en los que algunos argumentos pueden ser opcionales.

Vamos a crear una función declarada:

```js
function funcionDeclara() {
  console.log(
    "Esto es una funcion declarada que puede invocarse en cualquier momento"
  );
}
```

Este tema se conoce como funciones declaradas versus funciones expresadas. Recuerden que JavaScript es un lenguaje interpretado, lo cual significa que no necesita una fase de compilación separada; en cambio, interpreta el código durante la ejecución.

Vean que aquí tenemos una función declarada llamada funcionDeclarada. Si ejecuto esta función después de su declaración, se ejecutará de manera lógica, ya que hemos declarado e invocado la función en el orden esperado. Por ejemplo:

```js
functionDeclarada(); // llamada despues de la declaracion
// salida: Esto es una funcion declarada que puede invocarse en cualquier momento
```

Invocación antes de la declaración

Sin embargo, ¿qué pasa si invocamos la función antes de declararla? Veamos el siguiente ejemplo:

```js
functionDeclarada();
function funcionDeclara() {
  console.log(
    "Esto es una funcion declarada que puede invocarse en cualquier momento"
  );
}
```

salida:

```
Esto es una funcion declarada que puede invocarse en cualquier momento
```

Explicación del comportamiento

¿Por qué esto es posible? Esto ocurre debido a un mecanismo en JavaScript llamado hoisting o elevación. Este mecanismo permite que las funciones declaradas se "eleven" o se muevan al comienzo de su ámbito, lo que permite que sean invocadas antes de su declaración física en el código.

JavaScript procesa primero las declaraciones de funciones y variables antes de ejecutar el código. Así, en este caso, JavaScript "eleva" la declaración de funcionDeclarada al comienzo del archivo o bloque de código, lo que permite que la función sea accesible en cualquier lugar del código, incluso antes de la línea donde se define.

Por lo tanto, si alguna vez escuchas a un colega decir "No importa dónde declares una función en el archivo, siempre puedes invocarla en cualquier parte", esto se debe a que JavaScript realiza un hoisting de las funciones declaradas.

Hay otra manera de declarar funciones en JavaScript, y es utilizando funciones expresadas, es decir, asignando una función a una variable de manera dinámica. Por ejemplo, en este caso, utilizaremos const para declarar la variable, ya que el valor asignado (el cuerpo de la función) no va a cambiar. Es una práctica común en JavaScript declarar funciones expresadas con const en lugar de let.

Veamos un ejemplo:

```js
const funcionExpreseda = function () {
  console.log("Esto es una funcion expresada");
};
```

Aquí, funcionExpresada es una función asignada a una variable constante. Como es una función expresada, no es necesario darle un nombre en la declaración (function). En este caso, el nombre de

la función ya está dado por la variable funcionExpresada. Este tipo de función sin nombre explícito en la declaración se conoce como función anónima.

Arrow Functions

Para programadores más experimentados, cabe mencionar que también podemos definir esta función utilizando arrow functions. Por ejemplo:

```js
const funcionExpreseda = () => {
  console.log("Esto es una funcion expresada con arrow function");
};
```

Aquí, estamos usando la sintaxis de arrow function, introducida en ES6, que es una forma más concisa de escribir funciones en JavaScript. Sin embargo, en este curso estamos comenzando desde lo básico, y el objetivo es avanzar paso a paso hasta llegar a un nivel avanzado, de modo que si estás aprendiendo por primera vez, puedas adquirir las habilidades necesarias para trabajar como programador web.

Simplemente, estamos creando una función sin nombre, por eso se llama función anónima; es una función que no tiene nombre y que estamos asignando como valor a una variable. Observa el siguiente ejemplo:

```js
const funcionExpreseda = function () {
  console.log("Esto es una funcion expresada");
};
```

Para invocar esta función, usamos:

```js
funcionExpreseda(); // salida: Esto es una funcion expresada
```

Si intentamos invocar funcionExpresada antes de definirla, el resultado será un error:

```js
funcionExpresada(); //Error: Uncaught ReferenceError: funcionExpresada is not defined
```

Esto se debe a que, al utilizar funciones expresadas, no podemos acceder a la función antes de su inicialización. A diferencia de las funciones declaradas, JavaScript no eleva (o realiza el "hoisting" de) las funciones expresadas.

Diferencias entre Funciones Declaradas y Expresadas

La diferencia entre declarar una función (como función declarada) y crear una función como función expresada (asignada a una variable) radica en cómo el hoisting funciona en JavaScript. Al declarar una función con function nombreFuncion() {}, JavaScript permite que sea invocada en cualquier parte del código, incluso antes de que esté declarada en el archivo. En cambio, al crear una función expresada, esta no puede invocarse antes de su inicialización, lo que evita errores de referencia si el código no está ordenado.

Buenas Prácticas

Ambas opciones son válidas en JavaScript. Sin embargo, es recomendable ordenar el código, de modo que las funciones sean declaradas antes de su invocación, especialmente en aplicaciones grandes o complejas. Esto hace que el código sea más legible y predecible. Además, con la creciente popularidad de librerías y frameworks reactivos como Angular, Vue, y ReactJS, se ha vuelto más común utilizar funciones expresadas, pues esto ayuda a evitar errores de referencia y hace que el código esté más estructurado.

Si declaramos las funciones como expresadas, estamos obligándonos a inicializarlas antes de su uso, lo cual es una buena práctica en JavaScript, dado que es un lenguaje interpretado. Las funciones expresadas no se pueden utilizar hasta que hayan sido inicializadas, lo que puede evitar errores en la ejecución.

Conceptos Vistos

En este repaso hemos cubierto varios conceptos clave sobre funciones en JavaScript:

Cómo crear una función.

Qué es una función y cómo funciona.

Uso de parámetros y valores por defecto en funciones.

Cómo retornar valores de una función y el uso de la palabra clave return.

Diferencias entre funciones declaradas y expresadas.

Aún hay muchos temas avanzados sobre funciones en JavaScript, como funciones anidadas, closures, patrones de escritura, y arrow functions, una característica útil introducida en el estándar ECMAScript 2015. Sin embargo, los fundamentos que hemos cubierto te permitirán avanzar y entender mejor los tipos de datos compuestos, como los arreglos y objetos, los cuales también pueden contener funciones como valores. Por eso, era importante establecer primero una base sólida sobre las funciones.

En los próximos temas, abordaremos conceptos como arreglos y objetos para ver cómo estos tipos de datos pueden trabajar en conjunto con funciones.

[indice](#fundamentos-jonmircha)

## 11. Arreglos

En la clase anterior, vimos los conceptos básicos de las funciones. Hoy, veremos el segundo tipo de datos complejos, que son los arreglos.

Si abro el navegador y escribo un par de corchetes [], el navegador reconocerá esto como un arreglo vacío. Existen diferentes maneras de declarar arreglos. Por ejemplo, es importante recordar lo que vimos en la sesión 4 sobre las constantes: podemos declarar arreglos usando const. Aunque internamente cambien los elementos de un arreglo, mientras siga siendo un arreglo, puede ser tratado como una constante.

Algunos programadores prefieren declarar arreglos con la palabra clave let, mientras que otros optan por const. Esto depende de la preferencia del programador. Aquí usaré const para definir mis arreglos.

Ejemplos de Declaración de Arreglos

Para declarar un arreglo vacío, podemos escribir:

```js
const a = [];
```

Pero, si queremos crear un arreglo b con algunos elementos desde el inicio, podemos hacer lo siguiente:

```js
const b = [1, true, "hola", ["A", "B", "C"]];
```

Este arreglo b contiene cuatro elementos:

1. El número 1

2. Un valor booleano true

3. La cadena "hola"

4. Un arreglo de letras ["A", "B", "C"]

Si ejecutamos el siguiente código en la consola:

```js
console.log(b);
```

La consola nos mostrará el contenido de b, indicando que es un arreglo con cuatro elementos. Además, dentro del cuarto elemento (el subarreglo), podremos ver tres elementos: "A", "B", y "C".

Longitud de un Arreglo

Los arreglos en JavaScript siempre empiezan con el índice 0. Esto significa que el primer elemento está en la posición 0, el segundo en 1, y así sucesivamente. Para obtener la longitud de un arreglo (el número total de elementos que contiene), usamos la propiedad length:

```js
console.log(b.length);
```

Así como en las cadenas de texto length nos devuelve el número de caracteres, en arreglos nos devuelve el número de elementos.

Accediendo a Elementos en un Arreglo

Imaginemos que queremos acceder solo al elemento "hola" en el arreglo b. Como es el tercer elemento, se encuentra en la posición 2 (recordando que el índice empieza en 0). Usamos la notación de corchetes [] para acceder a este elemento:

```js
console.log(b[2]); // salida: hola
```

Si en cambio accedemos al primer elemento:

```js
console.log(b[0]);
```

Esto nos imprimirá el número 1, ya que es el primer elemento del arreglo b.

Ejemplo Adicional: Acceder a un Subarreglo

Supongamos que queremos acceder al subarreglo ["A", "B", "C"] dentro de b. Como este es el cuarto elemento, está en la posición 3:

```js
console.log(b[3]); // salida:["A", "B", "C"]
```

Y, si deseamos obtener solo la letra "B" del subarreglo, especificamos dos índices:

```js
console.log(b[3][1]); // salida: B
```

Ejemplo de Ajedrez: Coordenadas en el Tablero

Para comprender mejor la estructura de posiciones en arreglos, imagina un tablero de ajedrez. Supongamos que necesitamos referirnos a una pieza, como un caballo en la casilla h2. Para localizarlo, deberíamos ubicar la columna h y luego el número 2. De manera similar, en un arreglo podemos acceder a posiciones específicas mediante índices.

Por ejemplo, si queremos ver todas las piezas, usamos el nombre del arreglo. Si queremos ver solo una pieza en particular, usamos la coordenada o posición del índice de esa pieza.

Ahora, hay nuevas formas de crear arreglos, como usando Array.of(). Este método permite crear un arreglo con los elementos que le especifiquemos. Por ejemplo:

```js
const c = Array.of("x", "y", "z", 9, 8, 7);
console.log(c);
```

Al ejecutar console.log(c), el resultado será:

```
["x", "y", "z", 9, 8, 7]
```

La consola nos dirá que c es un arreglo de seis posiciones, y mostrará los valores que contiene.

Este es un nuevo método que se introdujo en el estándar ECMAScript en 2015 (conocido como ECMAScript 6 o ES6), y Array.of() nos permite crear arreglos llenando directamente los elementos en su declaración.

Otra manera muy útil de crear arreglos es inicializarlos con valores predeterminados en todas sus posiciones. Imagina que tienes una aplicación de ecommerce con mil productos, y mientras se cargan sus valores reales, necesitas asignarles temporalmente un descuento de 0% en un arreglo. Para este tipo de situaciones, existe un método que permite inicializar un arreglo y asignarle el mismo valor a todas sus posiciones.

Por ejemplo, voy a crear un arreglo llamado d usando el método Array().fill(). Este método pertenece al objeto Array en JavaScript y permite asignar un valor a todas las posiciones de un arreglo.

Imaginemos que necesitamos un arreglo de 100 posiciones y queremos llenarlas todas con el valor false. Para hacer esto, podemos escribir:

```js
const d = Array(100).fill(false);
console.log(d);
```

Si ejecutamos console.log(d), veremos que la consola muestra un arreglo de 100 posiciones, todas inicializadas con el valor false.

Los arreglos, como vimos, tienen propiedades útiles, como la propiedad .length, que devuelve el número de elementos. Por ejemplo, imagina que tenemos un arreglo con los colores RGB (rojo, verde y azul):

```js
const colores = ["rojo", "verde", "azul"];
```

Si necesitamos agregar un nuevo elemento al final del arreglo, podemos usar el método .push(). Este método añade el nuevo elemento en la última posición. Por ejemplo, si queremos agregar el color "Negro":

```js
colores.push("negro");
console.log(colores);
```

Al imprimir colores, veremos que ahora tiene cuatro elementos, siendo "Negro" el último agregado. El método .push() siempre inserta el elemento al final del arreglo.

De igual manera, podemos utilizar el método .pop(). Este método elimina el último elemento del arreglo. Por ejemplo:

```js
colores.pop();
console.log(colores);
```

Después de ejecutar .pop(), veremos que el último elemento del arreglo ha sido eliminado. Así, el método .push() agrega un elemento al final del arreglo, mientras que .pop() quita el último elemento.

Los arreglos en JavaScript tienen una gran cantidad de métodos, especialmente útiles en el contexto del paradigma funcional y la programación orientada a componentes. Este estilo de programación ha introducido métodos como .map(), .reduce(), y .filter(), entre otros, que permiten escribir código de una manera más funcional.

Si quisiera mostrar todos los métodos que existen para los arreglos, esta clase sería demasiado extensa. Como vimos en la clase sobre cadenas, puedes consultar la documentación en MDN (Mozilla Developer Network) para ver todas las propiedades y métodos disponibles, junto con ejemplos.

A lo largo del curso, veremos estos métodos en profundidad. Más adelante, cuando abordemos los paradigmas de programación, retomaremos estos métodos orientados a la programación funcional.

Sin embargo, hay un método con el que cerraré esta clase, que nos permite ejecutar una función en cada elemento de un arreglo. Este es también un método funcional de los arreglos.

Por ejemplo, imaginen que quiero formar una lista en HTML usando una etiqueta `<ul>`, donde cada color esté dentro de un elemento <li>. Para esto, puedo usar el método forEach. Este método ejecuta una función en cada elemento del arreglo.

Aquí tienes un ejemplo para que lo veas en acción:

```js
const colores = ["rojo", "verde", "azul"];

//Usamos un forEach para recorer cada color y crear un elemento <li>
colores.forEach(function (el) {
  console.log(`<li>${el}</li>`);
});
```

Explicación del código:

- forEach recibe una función como callback (una función que se ejecuta en cada elemento del arreglo).

- En este caso, declaramos una función anónima que toma el elemento actual (el) como parámetro.

- Dentro de la función, utilizamos console.log para mostrar cada color dentro de un elemento `<li>`.

Cuando lleguemos a temas más avanzados, veremos cómo utilizar arrow functions en lugar de funciones anónimas. Por ahora, usamos una función anónima para que el ejemplo sea fácil de entender.

Este método forEach es muy útil para trabajar con cada elemento de un arreglo y ejecutar acciones específicas en ellos.

Ahora, imaginen que cada elemento `<li>` necesita tener una referencia única en el atributo id. Podemos lograr esto pasando un segundo parámetro al método forEach, el cual indica el índice que ocupa cada elemento dentro del arreglo. A este parámetro podemos llamarlo index, y luego interpolarlo para incluirlo en el atributo id de cada `<li>`.

Aquí tienes un ejemplo:

```js
const colores = ["rojo", "verde", "azul"];

// Recorremos el arreglo y generamos una lista con un id unico
colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
});
```

Explicación del código:

- forEach recibe una función que tiene dos parámetros: el primer parámetro (el) representa el valor del elemento actual en el arreglo, mientras que el segundo parámetro (index) representa el índice de ese elemento.

- Dentro del console.log, usamos la interpolación de strings para crear un elemento `<li>` que tiene un id igual al índice del elemento. Esto generará como resultado elementos con id='0', id='1', id='2', etc.

Con el método forEach, podemos recorrer cada elemento del arreglo, acceder a su valor con el primer parámetro (el) y su índice con el segundo parámetro (index o i), lo cual resulta útil en muchos casos.

[indice](#fundamentos-jonmircha)