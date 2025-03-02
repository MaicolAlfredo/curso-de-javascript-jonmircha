# Fundamentos JonMircha

1. [Introducción](#introducción)
1. [Caracteristica y Gramática](#caracteristica-y-gramática)

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