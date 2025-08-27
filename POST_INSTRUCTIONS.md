# Cómo agregar una nueva entrada al blog

Para agregar una nueva entrada a tu blog "El Camino del Código", sigue estos sencillos pasos.

## 1. Copia la plantilla de la entrada

Copia el siguiente bloque de código HTML. Este es el formato para cada nueva entrada del blog.

```html
<article class="post">
    <h2>[Aquí va el título de tu entrada]</h2>
    <p><em>Publicado el: [Fecha de publicación]</em></p>
    <p>[Aquí va el primer párrafo de tu entrada].</p>
    <p>[Puedes agregar más párrafos según sea necesario].</p>
</article>
```

## 2. Abre el archivo `index.html`

Este es el archivo principal de tu blog.

## 3. Pega la plantilla en la sección de entradas

Busca la etiqueta `<main>`. Dentro de esta etiqueta, verás la primera entrada del blog. Pega el código que copiaste **justo encima** de la entrada más reciente para que las nuevas publicaciones aparezcan en la parte superior.

### Ejemplo:

Así es como se verá después de agregar una nueva entrada:

```html
<main>
    <!-- Pega tu nueva entrada aquí -->
    <article class="post">
        <h2>[Título de tu nueva entrada]</h2>
        <p><em>Publicado el: [Fecha]</em></p>
        <p>[Contenido de tu nueva entrada].</p>
    </article>

    <article class="post">
        <h2>Mi primer día en el Camino del Código</h2>
        <p><em>Publicado el: 27 de Agosto, 2024</em></p>
        <p>¡Hola a todos! Bienvenidos a mi nuevo blog...</p>
    </article>
</main>
```

## 4. Edita el contenido

Finalmente, reemplaza el texto de marcador de posición (`[Aquí va el título de tu entrada]`, `[Fecha de publicación]`, etc.) con el contenido real de tu nueva entrada.

¡Y eso es todo! Has agregado una nueva entrada a tu blog.
