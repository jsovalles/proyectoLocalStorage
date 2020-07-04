# proyectoLocalStorage

Proyecto JavaScript de un simulador de Tweets

## Descripción del proyecto

Se realizo un simulador de una plataforma de tweets (sin límite de caracteres) con un template de Bootstrap; en este template se manejó dos partes básicas, en la parte izquierda se puede escribir los tweets correspondiente y el parte derecha se puede observar los tweets escritos, el usuario solamente puede agregar un tweet cuando le da click al botón de agregar.

![enter image description here](https://i.ibb.co/Lrc07nG/proyecto-localstorage.png)

Para hacerlo un poco más dinámico todos los datos de los tweets fueron guardados en el localStorage, haciendo que los datos mostrados en la pantalla puedan persistir incluso si el usuario cierra sesión en el navegador o si llega a abrir la página unos días después, se tuvo que trabajar con un formato JSON para que guardara los tweets en el local storage y se tuvo que hacer conversiones a string y a JSON cuando el usuario agregara a eliminar un tweet.

El resultado final del proyecto se puede observar en este [link](https://jsovalles.github.io/proyectoLocalStorage/).

# Desarrollado en

* [Visual Studio Code](https://code.visualstudio.com/)
* JavaScript, CSS, HTML5
