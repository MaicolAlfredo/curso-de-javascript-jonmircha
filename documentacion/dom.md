# DOM

- [60. WEB APIs](#60-web-apis)
- [61. DOM: Introducción](#61-dom-introducción)
- [62. DOM: Nodos, Elementos y Selectores](#62-dom-nodos-elementos-y-selectores)

## 60. WEB APIs

El DOM, que es la sigla de Document Object Model (Modelo de Objetos del Documento), es esencial. Me gustaría aclarar que no me gusta pronunciarlo como API (Interfaz de Programación de Aplicaciones) porque en este caso el DOM se refiere a una serie de objetos y mecanismos implementados en el lenguaje para interactuar con el navegador, como es la estructura del documento HTML.

Esto incluye el árbol del DOM y el control de la ventana del navegador, como la barra de direcciones, el tamaño y algunas otras características que el navegador nos puede proporcionar, como el sistema operativo en el que está el usuario o la ubicación geográfica. Esto vendría a ser el Browser Object Model (BOM).

Recientemente, ha surgido una nueva definición para interactuar con CSS, conocido como CSS Object Model (CSSOM), que consiste en un conjunto de objetos, métodos e interfaces que permiten interactuar con CSS a través de JavaScript. A partir de estos tres principales (DOM, BOM y CSSOM), hay una infinidad de APIs que nos sirven para prácticamente cualquier cosa, especialmente para el manejo de eventos, formularios, y el consumo de datos asíncronos con AJAX y Fetch.

Además, existe un objeto que nos controla el historial, el almacenamiento en la web y la ubicación del usuario: window.location. También está la API de IndexedDB, que es una pequeña base de datos que se guarda en el navegador, y el elemento `<canvas>`, que se utiliza para dibujar, así como matchMedia, que controla las media queries de CSS, pero en JavaScript.

la importancia del DOM. Como se muestra en la documentación oficial de Mozilla, el DOM es la representación de los documentos HTML y XML para trabajar con JavaScript.

Es muy importante recordar que el DOM es una interfaz estandarizada, pero su enfoque se limita al control de los nodos. Recuerda que HTML es un lenguaje de marcado, y cada etiqueta, representa un elemento que es un nodo del árbol del DOM.

El DOM es la API que tiene JavaScript en la web para manipular el código HTML y, de manera similar, el CSSOM se deriva del DOM, pero se enfoca en manipular CSS. Por ejemplo, en el CSSOM, puedes controlar eventos de animación y gestionar cómo se comportan los elementos en pantalla.

Ahora, pasemos a trabajar en algunas herramientas para aplicar dinámicamente estilos a nuestras interfaces web. El DOM y el CSSOM están relacionados: el DOM manipula HTML mediante JavaScript y CSSOM manipula CSS de la misma manera.

El BOM, o Browser Object Model, aunque no se considera una API estándar, ha evolucionado. Cada navegador tiene su propia forma de manejar ciertas características, pero en los últimos años, especialmente desde 2012-2013, los navegadores han empezado a implementar características similares y estandarizadas.

En los primeros años de este milenio, durante la llamada "guerra de los navegadores", Internet Explorer dominaba el mercado y su funcionamiento era muy diferente al de otros navegadores, lo que generaba problemas de compatibilidad. Por eso, jQuery ganó popularidad, ya que abstraía esas diferencias y proporcionaba un método unificado para realizar peticiones asíncronas.

Hoy en día, con los avances de JavaScript y las estandarizaciones en los navegadores, ya no es necesario recurrir a jQuery. A medida que avanzamos en el curso, veremos cómo utilizar el HTML y el JavaScript de manera efectiva. Vamos a seguir trabajando en la consola, aunque también comenzaremos a utilizar el código HTML.

Recuerda que el objeto global en los navegadores es window, y dentro de él encontramos otros objetos importantes, como navigator, que controla características del entorno del usuario. Por ejemplo, navigator te permite detectar el idioma del documento HTML, la plataforma (sistema operativo) y el userAgent, que proporciona información sobre el navegador que está utilizando el usuario.

Por último, el objeto history controla el historial de navegación, y location gestiona las partes de la URL. Así que asegúrate de entender cómo todo cuelga del objeto window, que es el contexto global de JavaScript.

Vamos a ver cómo se relacionan estas partes: DOM, BOM y CSSOM. A pesar de que el BOM no es considerado un estándar, la integración entre navegadores ha mejorado significativamente. Esto significa que las APIs que interactúan con el HTML, CSS y otras funciones del navegador son cada vez más efectivas.

Además, existen APIs que permiten activar funcionalidades como la síntesis de voz, que te permite enviar comandos de voz a tu computadora mediante JavaScript. Por ejemplo, puedo crear una función llamada hablar que utiliza la API de síntesis de voz para hacer que la computadora lea un texto en voz alta.

Voy a crear una función que recibirá un texto y utilizará SpeechSynthesis para convertirlo en voz. Por ejemplo, puedo declarar una variable con el texto que quiero que se lea en voz alta: "Hola, soy tu amigo y docente digital, Jonathan Marcha". Cuando ejecute esta función, mi computadora leerá el texto en voz alta.

Existen muchas APIs para controlar diversas funcionalidades, como la batería de dispositivos móviles, la ubicación geográfica, y mucho más. Así que a medida que avanzamos, verás que el mundo de las APIs web es vasto y emocionante, con muchas nuevas características implementándose constantemente.

[Indice](#dom)

## 61. DOM: Introducción

El DOM (Document Object Model) es lo que nos permite manipular HTML con JavaScript en el navegador.

Vamos a empezar con algunos conceptos básicos del DOM. Ya hemos visto en clases anteriores que el objeto global en los navegadores es `window`, y desde `window` podemos acceder a diversas APIs, entre ellas el DOM, que representa el contenido HTML del documento. A través del objeto `document` podemos interactuar con el DOM sin necesidad de escribir `window.document`, simplificando el acceso a sus nodos.

Por ejemplo, al escribir `document.head`, accedemos a la cabecera del documento HTML; con `document.body`, obtenemos solo el contenido del `<body>`. Es posible que pienses que también hay un `document.html`, pero en realidad esta propiedad no existe. Si queremos la etiqueta `<html>`, debemos usar `document.documentElement`.

Otros elementos que podemos acceder desde el DOM incluyen:

- Tipo de documento: `document.doctype` nos muestra el tipo de documento, que en HTML5 es simplemente `<!DOCTYPE html>`.
- Codificación de caracteres: `document.charset` muestra la codificación del documento, generalmente UTF-8.
- Título: `document.title` muestra el título de la página.
- Enlaces: `document.links` devuelve una colección de todos los enlaces (`<a>`) en el documento.
- Imágenes: `document.images` nos da acceso a todas las imágenes (`<img>`).
- Formularios: `document.forms` devuelve todos los formularios (`<form>`) del documento.
- Hojas de estilo: `document.styleSheets` permite ver las hojas de estilo vinculadas.
- Scripts: `document.scripts` lista todas las etiquetas `<script>` en el documento, incluyendo los scripts inyectados dinámicamente por herramientas como Live Server.

Es importante recordar que estas colecciones, como `document.links` o `document.images`, son HTMLCollections y no Arrays. Aunque se parecen, no tienen todos los métodos de los arreglos; solo comparten métodos como `forEach`. Si necesitas usar métodos de Arrays, como map, primero debes convertir la colección a un array.

Por último, existe una función útil pero no recomendada para uso frecuente: `document.write()`, que escribe contenido directamente en el documento HTML. Es útil para demostraciones, pero no se recomienda su uso en proyectos reales.

[Indice](#dom)

## 62. DOM: Nodos, Elementos y Selectores

```html
<h3>Manejo del DOM</h3>
<p id="que-es">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat
  officiis tempore quidem qui sequi, omnis pariatur cum aperiam porro nobis
  nulla quaerat, et animi itaque laudantium quas nesciunt quibusdam!
</p>
<nav id="menu">
  <ul>
    <li><a href="#">Sección 1</a></li>
    <li><a href="#">Sección 2</a></li>
    <li><a href="#">Sección 3</a></li>
    <li><a href="#">Sección 4</a></li>
    <li><a href="#">Sección 5</a></li>
  </ul>
</nav>
<input type="text" name="nombre" placeholder="Nombre" />
<a class="link-dom" href="dom.html">DOM</a>
<section class="cards">
  <figure class="card">
    <img src="https://picsum.photos/200/300" alt="Tech" />
    <figcaption>Tech</figcaption>
  </figure>
</section>
```

En el archivo JavaScript, comenzaremos a ver cómo seleccionar nodos. Es importante recordar que un nodo representa cada elemento dentro del DOM. Existen distintos tipos de nodos, como nodos de elemento (las etiquetas HTML) y nodos de texto (el contenido dentro de las etiquetas). Para trabajar con HTML, nos interesan principalmente los nodos de tipo "elemento" y "texto".

Existen varias maneras de seleccionar elementos en el DOM usando JavaScript. Algunos métodos tradicionales incluyen:

1. `console.log(document.getElementsByTagName())`: selecciona todos los elementos de un tipo específico (como `<li>`, `<p>`, etc.).

```js
console.log(document.getElementsByTagName("li"));
```

2. `console.log(document.getElementsByClassName())`: selecciona todos los elementos con una clase específica.

```js
console.log(document.getElementsByClassName("card"));
```

3. `console.log(document.getElementsByName())`: selecciona elementos con un atributo name específico (principalmente útil en formularios).

```js
console.log(document.getElementsByName("nombre"));
```

4. `console.log(document.getElementById())`: selecciona un único elemento por su identificador único id. No es necesario anteponerle el '#' ya que el metodo 'getElementById()' explicitamente te dice que buscará un id.

```js
console.log(document.getElementById("menu"));
```

Aunque estos métodos siguen siendo útiles, hoy en día solemos utilizar `querySelector()` y `querySelectorAll()`, que son más flexibles.

- `querySelector()` selecciona el primer elemento que coincide con un selector CSS.
- `querySelectorAll()` selecciona todos los elementos que coinciden con un selector CSS, devolviendo una NodeList.

Aunque `querySelector` es un poco más lento que `getElementById()` debido a su flexibilidad, se ha convertido en una práctica común porque puede manejar selectores CSS complejos. Para obtener, por ejemplo, todos los enlaces en una página, puedes usar `document.querySelectorAll("a")`.

Las `NodeLists` y las `HTMLCollections` se parecen a los arreglos, ya que tienen propiedades como `length`, pero no comparten todos los métodos de los arreglos. Sin embargo, podemos usar métodos como `forEach()` en las `NodeLists`.

```js
document.querySelectorAll("a").forEach((el) => console.log(el));
```

Para trabajar con los elementos seleccionados, por ejemplo, podemos recorrer una lista de nodos y realizar operaciones en cada uno de ellos. Además, más adelante exploraremos los métodos de selección y las propiedades de CSS para poder manipular y estilizar estos elementos.

[Indice](#dom)
