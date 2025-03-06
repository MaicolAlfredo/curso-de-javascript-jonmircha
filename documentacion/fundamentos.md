# Fundamentos JonMircha

1. [Introducción](#introducción)
1. [Caracteristica y Gramática](#caracteristica-y-gramática)
1. [9.undefined, null & NaN](#9-undefined-null--nan)
1. [10. Funciones](#10-funciones)
1. [11. Arreglos](#11-arreglos)
1. [12. Objetos](#12-objetos)
1. [13. Tipos de operadores](#13-tipos-de-operadores-2944)

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

## 12. Objetos

En la clase anterior nos habíamos quedado viendo los arreglos, que son un tipo de datos compuesto. Ya hemos estudiado funciones y arreglos, y ahora vamos a ver los objetos. Los objetos son una parte muy importante de JavaScript. Existe una frase entre los desarrolladores que dice que "en JavaScript, todo es un objeto". Esto es en gran medida cierto, y se puede ver en algunos ejemplos.

Por ejemplo, cuando vimos los valores primitivos, enseñé una forma (aunque ya no se utiliza con frecuencia) de crear una cadena de texto usando el constructor String. Si quisiera declarar una variable que sea una cadena de esta manera, podría hacerlo así:

```js
let a = new string("Hola mundo");
```

Aquí estamos creando una instancia de un objeto String en lugar de solo definir una cadena literal. Si imprimimos esto en la consola, veríamos que, aunque para nosotros parece una simple cadena de texto, en realidad es un objeto que deriva del prototipo de la clase String.

```js
console.log(a); // Muestra:[String: 'Hola mundo' ]
```

Este objeto a tiene una serie de propiedades y métodos propios de String, como length, toUpperCase(), entre otros, los cuales pueden ser utilizados de inmediato.

Explicación:

- Al usar new String("Hola mundo"), estamos inicializando una nueva instancia del objeto String.

- Aunque el valor subyacente de a es una cadena de texto, en realidad es un objeto String, lo cual se evidencia cuando inspeccionamos a en la consola.

Este ejemplo muestra por qué se dice que en JavaScript "todo es un objeto". Aunque String es un tipo de dato primitivo, JavaScript lo convierte en un objeto temporalmente para permitir el acceso a métodos y propiedades, como length y toUpperCase().

Recuerden lo que comentamos en la clase anterior cuando hablábamos sobre los arreglos. Al inicio de esa clase, les hice un paréntesis sobre que podemos utilizar let o const al declarar variables de valores de tipo compuesto, como objetos y arreglos. En la clase 4, vimos el concepto de lo que es una constante y su uso en JavaScript.

Es importante señalar que sí podemos utilizar const para definir objetos. Por ejemplo, si declaro mi variable b como un objeto de la siguiente manera:

```js
const b = {};
```

Una vez que b ha sido declarada como un objeto, puedo modificar las propiedades internas de b a lo largo de mi programa, pero seguirá siendo el mismo objeto en memoria. Al utilizar const con un objeto, estamos asegurándonos de que la variable b siempre haga referencia a ese mismo objeto inicial, evitando que le asignemos un nuevo valor u objeto completamente diferente.

Ejemplo:

```js
const b = { nombre: "Juan" };
b.edad = 31; //Esto es valido, ya que solo estamos modificado el contendido
console.log(b); // muestra:{nombre:"juan",edad:31}

//Esto provocaria un error:
b = { nombre: "Ana" }; // Error: Assignament to constant variable.
```

Al declarar objetos (o arreglos) con const, estamos evitando que se cambie la referencia a ese objeto en memoria, pero podemos modificar su contenido interno sin problema.

Algunos de ustedes, especialmente aquellos que vienen de otros lenguajes tipados, pueden sentir conflicto al declarar arreglos u objetos con const y podrían preferir let. Esto puede ser subjetivo y depender de lo que les resulte más cómodo. Sin embargo, usar const es una buena práctica cuando trabajamos con objetos que no deseamos reasignar, pues clarifica la intención de que esa referencia no cambiará.

En resumen, al declarar un objeto con const, evitamos que otra referencia reemplace el objeto original en memoria, pero permitimos la modificación de sus propiedades internas.

Así como en la clase anterior vimos que, si coloco corchetes cuadrados ([]) en la consola, JavaScript me indica que es un arreglo vacío, ocurre algo similar si utilizo un par de llaves ({}). Vean que, al hacer esto en la consola, JavaScript lo interpreta como un objeto vacío.

```js
console.log([]); // Salida: []
// JavaScript interpreta esto como un arreglo vacío
console.log({}); // Salida: {}
// JavaScript interpreta esto como un objeto vacío
```

Esto demuestra que los corchetes ([]) se asocian con arreglos y las llaves ({}) con objetos en JavaScript.

Un objeto es una colección de pares de llave-valor. Si has trabajado con CSS, hago esta comparación porque muchos estudiantes, cuando comienzan a programar, piensan que HTML y CSS fue para ellos su primer contacto con la programación. Al empezar a ver las características de los objetos en JavaScript, a menudo dicen: “Profe, esto se parece a una regla de CSS”, y, en cierto sentido, tienen razón. Al escribir un objeto, defines una llave (similar a una propiedad en CSS) y le asignas un valor. En JavaScript, estos pares llave-valor están separados por comas.

Voy a crear un objeto con mis datos, por lo que he nombrado el objeto como jon. Un objeto puede tener diferentes propiedades o valores; recuerden que se trata de pares de llave-valor. En este caso, la estructura es "llave: valor". Un objeto en JavaScript puede tener cualquier tipo de dato como valor de una llave, ¡incluso una función!

Además, un objeto puede contener dentro de sí mismo otro objeto como una propiedad. Veamos el ejemplo completo:

```js
const jon = {
  nombre: "Jon",
  apellido: "Mircha",
  edad: 35,
  pasatiempo: ["correr", "hacer ejercicio"],
  soltero: false,
  contacto: {
    email: "jonmircha@gmail.com",
    twitter: "@jonmircha",
  },
  saludar: function () {
    console.log("Hola");
  },
};

// Ejemplo de uso
console.log(jon); // Imprime el objeto completo
jon.saludar(); // Ejecuta la función "saludar" del objeto
console.log(jon.contacto); // Imprime el objeto de contacto interno
console.log(jon.nombre); // Accede y muestra el nombre "Jon"
```

En este ejemplo:

- nombre, apellido, edad, y soltero son propiedades del objeto jon con distintos tipos de datos.

- pasatiempo es un arreglo dentro del objeto.

- contacto es otro objeto dentro de jon.

- saludar es una función como propiedad, la cual se puede invocar usando jon.saludar().

Los atributos no son más que variables dentro de un objeto. Así, nombre, apellido, edad, pasatiempo, soltero y contacto son atributos de mi objeto. Ojo: saludar no es un atributo, ya que, al ser una función, se considera un método y no una propiedad o atributo del objeto.

Veamos el ejemplo en código para ilustrar esto:

```js
// Ejemplo de uso
console.log(jon.nombre); // "Jon" - atributo
console.log(jon.apellido); // "Mircha" - atributo
console.log(jon.edad); // 35 - atributo
console.log(jon - pasatiempo); // ["correr", "hacer ejercicio"] -
console.log(jon.contacto); // ( email: "jonmirchaßgmail.com",
jon.saludar(); // "Hola" - método
```

En este código:

- nombre, apellido, edad, pasatiempo, soltero, y contacto son atributos del objeto jon.

- saludar es un método del objeto, ya que es una función y se invoca con jon.saludar().

Por ejemplo, en la clase anterior vimos el método forEach. Por eso se llama método, porque forEach es una función interna del objeto Array, que es el objeto que define un arreglo en JavaScript. Mientras que length, recuerden, es una propiedad de los arreglos. ¿Por qué? Porque es una variable que nos da el número de elementos que tiene el arreglo.

Quiero que noten la diferencia: mientras que un atributo o propiedad es como una variable dentro del objeto al que pertenece (como length, que devuelve el número de elementos en un arreglo), los métodos son funciones internas del objeto. Por ejemplo, el método fill() y el método of() de los arreglos son funciones que pertenecen al objeto Array. Todos los métodos llevan paréntesis porque, al ser funciones, requieren paréntesis para ser invocados, y, dependiendo de la función, pueden o no necesitar parámetros.

Es importante recordar que dentro de un objeto:

Las variables se llaman atributos o propiedades.

Las funciones se llaman métodos.

Imaginemos que vamos a crear otra función llamada decirMiNombre. Si se dan cuenta, nombre y apellido son llaves de nuestro objeto, y decirMiNombre es una función que también forma parte de este objeto. Cuando necesitemos hacer uso de una propiedad dentro del objeto, podemos utilizar la palabra this.

Quiero que entiendan que this, en inglés, significa "este" y se usa para referirse a una cosa específica en un contexto dado. En este caso, this hace referencia al contexto en el que nos encontramos, que es el objeto en sí. La palabra this se utiliza para hacer referencia al mismo objeto en el que estamos trabajando.

Por lo tanto, si quiero imprimir el nombre del objeto, usaré this.nombre, lo cual significa "desde este objeto, obtén la propiedad nombre".

```js
const jon = {
  nombre: "Jon",
  apellido: "Mircha",
  edad: 35,
  pasatiempo: ["correr", "hacer ejercicio"],
  soltero: false,
  contacto: {
    email: "jonmircha@gmail.com",
    twitter: "@jonmircha",
  },
  saludar: function () {
    console.log("Hola");
  },
  decirMiNombre: function () {
    console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
  },
};

// Llamada a los métodos del objeto
jon.saludar(); // Imprime: Hola
jon.decirMiNombre(); // Imprime: Hola, ne llano Jon Mircha y tengo 35 año
```

En este ejemplo:

- this.nombre, this.apellido, y this.edad hacen referencia a las propiedades del mismo objeto jon.

- La función decirMiNombre utiliza this para acceder a las propiedades internas del objeto y mostrarlas en la consola.

Voy a mostrarles algunos métodos. Por ejemplo, recuerden que Object es el prototipo, o el objeto base en JavaScript, y tiene algunos métodos importantes y útiles.

Uno de estos métodos es keys(), que espera recibir un objeto. El método Object.keys() devuelve todas las llaves (o propiedades) del objeto en forma de un arreglo. En cada posición de este arreglo, se alista una de las llaves del objeto, como nombre, apellido, edad, pasatiempo, etc.

Aquí tienes el ejemplo en código:

```js
const jon = {
  nombre: "Jon",
  apellido: "Mircha",
  edad: 35,
  pasatiempo: ["correr", "hacer ejercicio"],
  soltero: false,
  contacto: {
    email: "jonmircha@gmail.com",
    twitter: "@jonmircha",
  },
};
// Utilizando el método Object.keys para obtener las llaves del objeto
console.log(Object.keys(jon));
```

Este código imprimirá en la consola el siguiente arreglo:

```
["nombre", "apellido", "edad", "pasatiempo", "soltero", "contacto"]

```

En este caso, Object.keys(jon) devuelve un arreglo con todas las llaves del objeto jon, lo que puede ser muy útil para conocer las propiedades que contiene un objeto.

De igual manera, existe un método muy similar llamado values(), que, como pueden inferir, devuelve un arreglo, pero en lugar de contener las llaves, contiene los valores correspondientes de cada propiedad del objeto.

Aquí está el ejemplo en código:

```js
const jon = {
  nombre: "Jon",
  apellido: "Mircha",
  edad: 35,
  pasatiempo: ["correr", "hacer ejercicio"],
  soltero: false,
  contacto: {
    email: "jonmircha@gmail.com",
    twitter: "@jonmircha",
  },
};
// Utilizando el método Object.values para obtener los valores del objeto
console.log(Object.values(jon));
```

Este código imprimirá en la consola el siguiente arreglo:

```
["Jon", "Mircha", 35, ["correr","hacer ejercicio"], false,
{ email: "jonmircha@gmail.com", twitter: "@jonmircha" }]
```

En este caso, Object.values(jon) devuelve un arreglo con todos los valores de las propiedades del objeto jon.

Otra propiedad interesante es, por ejemplo, hasOwnProperty(). Esta propiedad me permite saber si un objeto tiene una propiedad específica. Por ejemplo:

```js
console.log(jon.hasOwnProperty("nombre"));
```

Este código nos arroja un valor booleano. Lo que hace la propiedad hasOwnProperty es evaluar si el nombre de la propiedad que le he pasado se encuentra dentro de alguna de las llaves de este objeto.

hasOwnProperty("nombre"): Este método verifica si el objeto tiene la propiedad "nombre". En el ejemplo anterior, si el objeto jon tiene la propiedad nombre, devolverá true, de lo contrario, false.

De igual manera, como lo mencioné con los arreglos, los objetos tienen un montón de propiedades. Pero, creo que para una clase introductoria sobre los objetos, lo importante es que entiendan cómo se forma un objeto, qué tipos de datos podemos almacenar en él, la diferencia entre las variables dentro de un objeto (que se llaman atributos o propiedades) y las funciones (que se llaman métodos).

Algunos métodos comunes de los objetos incluyen keys(), values(), y hasOwnProperty(). Pero, recuerden que el objeto Object tiene muchas más propiedades y métodos. Pueden ir a la Mozilla Developer Network (MDN) y revisar todos los métodos y atributos que ofrece este objeto con mayor detalle.

Creo que para una introducción a lo que son los objetos, esta clase ha sido suficiente.

[indice](#fundamentos-jonmircha)

## 13. Tipos de Operadores 29:44

- [Concepto detrás del módulo](#concepto-detrás-del-módulo)
- [Un igual, dos iguales y tres iguales](#un-igual-dos-iguales-y-tres-iguales)
- [Operadores de Incremento y Decremento](#operadores-de-incremento-y-decremento)
- [Uso en Bucles](#uso-en-bucles)
- [Operadores Lógicos en JavaScript](#operadores-lógicos-en-javascript)

Ya en la sesión anterior terminamos de revisar todos los tipos de datos básicos en JavaScript. Recuerden que hemos pasado por los valores primitivos, como:

- Cadenas (strings)
- Números (numbers)
- Booleanos (booleans)
- Undefined
- NaN
- Null

También vimos valores compuestos, como los objetos, los arreglos y las funciones.

Les mencioné anteriormente que las clases (class) me las voy a reservar para cuando entremos en la parte de paradigmas de programación de este curso, donde exploraremos la programación orientada a objetos. Por ahora, creo que con lo que hemos aprendido podemos comenzar a trabajar.

Un concepto que es importante en todos los lenguajes de programación son los operadores. Existen diferentes tipos de operadores, y vamos a comenzar revisando los operadores aritméticos.

Los operadores aritméticos incluyen:

- Suma (+)
- Resta (-)
- Multiplicación (\*)
- División (/)
- Módulo (%)
- Agrupación mediante paréntesis (()), que se utilizan para definir el orden de ejecución.

Recuerden cuando estudiaban matemáticas básicas, que las operaciones dentro de los paréntesis se ejecutan primero. Luego siguen raíces y potencias, después multiplicaciones y divisiones, y finalmente sumas y restas, todo de izquierda a derecha.

Este orden de operaciones es respetado por los lenguajes de programación, y JavaScript no es ninguna excepción.

Generalmente, en nuestros estudios primarios, siempre nos enseñan que hay cuatro operaciones básicas: la suma, la resta, la multiplicación y la división. Sin embargo, rara vez se nos habla del módulo.

Por ejemplo, si creamos una variable para calcular 5 entre 2, ustedes podrían decir:

"Bueno, 5 entre 2 es igual a 2.5".

Veamos cómo funciona en JavaScript:

```js
let division = 5 / 2;
console.log(division); //2.5
```

Como esperábamos, la división devuelve 2.5.

Ahora, ¿qué sucede si utilizamos el símbolo de porcentaje (%)? Este operador aritmético se llama módulo, y lo que hace es devolvernos el residuo de una división.

```js
let modulo = 5 % 2;
console.log(modulo); // 1
```

En este caso, 5 % 2 devuelve 1, porque 1 es el residuo que queda al dividir 5 entre 2.

### Concepto detrás del módulo

Cuando realizamos la operación 5 / 2, obtenemos un cociente de 2 y un residuo de 1. El operador módulo (%) se encarga únicamente de devolver ese residuo, ignorando cualquier parte fraccionaria del cociente.

Esto es diferente de la división tradicional, que sí incluye la parte decimal o fraccionaria del resultado.

Por ejemplo:

```js
let division = 10 / 3;
let modulo = 10 % 3;

console.log(division); // 3.333
console.log(modulo); // 1
```

En este caso:

- 10 / 3 devuelve 3.333... como cociente.
- 10 % 3 devuelve 1, que es el residuo de la división.

El operador módulo es útil en muchas aplicaciones, como determinar si un número es par o impar:

```js
let numero = 7;

if (numero % 2 === 0) {
  console.log(`${numero} es par`);
} else {
  console.log(`${numero} es impar`);
}

// Resultado: "7 es impar"
```

Ahora vamos a explorar los operadores relacionales.

Estos operadores nos permiten comparar ciertos valores y determinar si cumplen con una relación específica. A continuación, detallamos los operadores principales y sus usos:

1. Mayor que (>): Compara si un valor es mayor que otro.
2. Menor que (<): Compara si un valor es menor que otro.
3. Mayor o igual que (>=): Verifica si un valor es mayor o igual a otro.
4. Menor o igual que (<=): Verifica si un valor es menor o igual a otro.
5. Igualdad (==): Compara si dos valores son iguales, sin importar el tipo de dato.
6. Estrictamente igual (===): Compara si dos valores son iguales y también del mismo tipo.
7. Diferente de (!=): Compara si dos valores son diferentes, sin importar el tipo de dato.
8. Estrictamente diferente (!==): Compara si dos valores son diferentes y también de distinto tipo.

Ejemplos de los operadores relacionales:

Mayor y menor que (> y <):

```js
console.log(10 > 5); // true
console.log(3 < 7); // true
console.log(5 > 8); // false
```

Mayor o igual que y menor o igual que (>= y <=)

```js
console.log(10 >= 10); // true
console.log(5 <= 10); // true
console.log(8 >= 12); // false
```

igualdad (==) vs. Estrictimante igual (===)

```js
console.log(5 == "5"); // true (compara solo valores, no tipos)
console.log(5 === "5"); // false (compara valores y tipos)

console.log("true" == true); // false
console.log(true === true); //true
```

Diferente de (!=) vs. Estrictamente diferente (!==):

```js
console.log(5 != "5"); // false (compara solo valores, ignora tipos)
console.log(5 !== "5"); // true (compara valores y tipos)
console.log(10 != 20); // true
console.log(10 !== 20); // true
```

Notas importantes:

- Los operadores relacionales siempre devuelven un valor booleano (true o false), dependiendo de si la comparación es verdadera o falsa.

- El uso de === y !== es preferido sobre == y != en JavaScript porque evita problemas con la conversión automática de tipos (coerción).

Con esto hemos cubierto los operadores relacionales y cómo se usan en comparación de valores. 😊

### Un igual, dos iguales y tres iguales

Es muy importante entender la diferencia entre un signo igual (=), dos iguales (==) y tres iguales (===) en JavaScript. Desde que comenzamos a trabajar con variables, aprendimos que:

1. Un igual (=): Se utiliza para la asignación de valores. Es decir, lo que está del lado derecho de la expresión se evalúa y el resultado se asigna a la variable que está del lado izquierdo.

Ejemplo de asignación (=):

```js
let a = 5; // Se asigna el valor 5 a la variable "a'
console.log(a): // Salida: 5
```

2. Dos iguales (==): Se usan para la comparación de valores. Este operador realiza una comparación menos estricta, porque permite la conversión de tipos (coerción). Por ejemplo, compara un número con una cadena y considera que son iguales si el valor es el mismo, incluso si los tipos no coinciden.
   Ejemplo de comparación con ==:

```js
let b = "5"; //string
console.log(b == 5); // true, porque realiza una conversión implícita.
```

3. Tres iguales (===): Se utilizan para la comparación estricta, ya que verifican tanto el valor como el tipo de los datos. Si los tipos no coinciden, el resultado será false.
   Ejemplo de comparación estricta con ===:

```js
let c = "5"; //string
console.log(c === 5); // false, porque los tipos no coinciden.
```

| Operador | Propósito              | Comportamiento                                |
| -------- | ---------------------- | --------------------------------------------- |
| =        | Asignación             | Asigna el valor de la derecha a la izquierda. |
| ==       | Comparación de valores | Realiza coerción de tipos si es necesario.    |
| ===      | Comparación estricta   | No realiza coerción; compara valores y tipos. |

En JavaScript, la buena práctica nos dice que siempre utilicemos la comparación estricta (===). El operador de comparación débil (==) es considerado una mala práctica, ya que realiza una conversión implícita de tipos (coerción), lo que puede generar resultados inesperados y errores difíciles de rastrear.

### Operadores de Incremento y Decremento

Los operadores de incremento (++) y decremento (--) son herramientas esenciales en JavaScript que permiten modificar el valor de una variable, generalmente utilizada para controlar flujos, bucles o contadores en la programación. Estos operadores incrementan o disminuyen el valor de una variable en una unidad.

Ejemplo con Incremento:

```js
let incremento = 5; // Declaramos una variable con valor inicial 5

incremento++;
console.log(incremento); // 6
```

Pre-Incremento vs Post-Incremento

- Post-Incremento (x++): Utiliza el valor actual de la variable y luego incrementa.
- Pre-Incremento (++x): Incrementa primero y luego utiliza el nuevo valor.

```js
let a = 10;
console.log(a++); //imprime 10, luego incrementa a 11
console.log(a); // imprime 11

let b = 10;
console.log(++b); // Incrementa a 11 y luego imprime 11
console.log(b); // Imprime 11
```

Ejemplo con Decremento

```js
let decremento = 10; // Declaramos una variable con valor inicial 10

decremento--;
console.log(decremento); //9

--decremento; // Disminuye el valor en 1 antes de usarlo
console.log(decremento); // 8
```

### Uso en Bucles

Estos operadores son muy comunes en bucles, como en un for:

```js
for (let i = 0; i < 5; i++) {
  console.log(`Iteración: ${i}`);
}
```

Resumen

- x++ y x--: Operadores de post-incremento y post-decremento.
- ++x y --x: Operadores de pre-incremento y pre-decremento.

Estos operadores son ideales para manejar contadores de forma concisa y clara, especialmente en estructuras de control como bucles.

### Operadores Lógicos en JavaScript

En JavaScript, principalmente contamos con tres tipos de operadores lógicos que nos permiten realizar evaluaciones combinadas de condiciones y devolver un valor booleano. Estos son:

1. AND (&&): Retorna true si ambas condiciones son verdaderas.
2. OR (||): Retorna true si al menos una de las condiciones es verdadera.
3. NOT (!): Niega (invierte) el valor de la condición.

Ejemplo del operador AND (&&):

```js
let edad = 25;
let tieneLicencia = true;

// Ambas condiciones deben ser verdaderas
if (edad >= 18 && tieneLicencia) {
  console.log("Puedes conducir.");
} else {
  console.log("No puedes conducir.");
}
```

Ejemplo del operador OR (||):

```js
let esEstudiante = true;
let tieneDescuento = false;

// Al menos una condición debe ser verdadera
if (esEstudiante || tieneDescuento) {
  console.log("Tienes acceso al descuento.");
} else {
  console.log("No tienes acceso al descuento.");
}

// Salida: "Tienes acceso al descuento."
```

Ejemplo del operador NOT (!):

```js
let estalloviendo;
// Niega el valor
if (!estalloviend) {
  console.log("Puedes salir sin paraguas.");
} else {
  console.log("Es mejor llevar un paraguas.");
}
// Salida: "Es mejor llevar un paraguas."
```

Combinación de Operadores Lógicos

También puedes combinar estos operadores para realizar evaluaciones más complejas.

```js
let edad = 20;
let esSocio = true;
let tieneInvitacion = false;
// Combinación de operadores
if ((edad >= 18 && esSocio) || tieneInvitacion) {
console. log("Puedes ingresar al evento.");
} else {
console.log("No puedes ingresar al evento.");
}
// Salida: "Puedes ingresar al evento."
```

Resumen

- && (AND): Todas las condiciones deben ser verdaderas.

- || (OR): Al menos una condición debe ser verdadera.

- ! (NOT): Invierte el valor de la condición.

Estos operadores son esenciales para construir lógica condicional en cualquier programa.

En este video hemos visto operadores aritméticos, operadores relacionales, operadores de incremento y decremento, entre ellos los operadores unarios, y cuándo es mejor utilizarlos y cuándo no. Finalmente, hemos visto los operadores lógicos.

[indice](#fundamentos-jonmircha)