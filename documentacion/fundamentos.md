# Fundamentos JonMircha

1. [Introducción](#introducción)

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
