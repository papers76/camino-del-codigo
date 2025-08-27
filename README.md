# 🚀 El Camino del Código

¡Bienvenido al repositorio de "El Camino del Código"! Este es un blog personal creado para documentar el viaje y el progreso en el estudio autodidacta de la programación full-stack. El objetivo es compartir experiencias, aprendizajes y desafíos para ayudar a otros que están iniciando un camino similar.

## ✨ Estado Actual del Proyecto

Actualmente, el proyecto es una **aplicación web dinámica** construida con Node.js y Express. Permite la administración completa de los posts del blog.

**Nota:** Los datos se almacenan temporalmente en la memoria del servidor. Se reiniciarán cada vez que la aplicación se detenga. La integración con una base de datos es un objetivo a futuro.

## 📋 Funcionalidades Implementadas

-   **Gestión de Posts (CRUD):**
    -   **Crear** nuevos posts a través de un formulario.
    -   **Leer** todos los posts en la página principal y ver posts individuales.
    -   **Actualizar** y editar posts existentes.
    -   **Eliminar** posts.

## 💻 Tecnologías Utilizadas

-   **Backend:** Node.js, Express.js
-   **Frontend:** EJS (Embedded JavaScript templates) para renderizar las vistas.
-   **Estilos:** CSS plano.

## 🛠️ Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/papers76/camino-del-codigo.git
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd camino-del-codigo
    ```

3.  **Instala las dependencias:**
    *(Se recomienda usar npm)*
    ```bash
    npm install
    ```

4.  **Ejecuta la aplicación:**
    -   Para modo de desarrollo (con reinicio automático gracias a `nodemon`):
        ```bash
        npm run dev
        ```
    -   Para modo de producción:
        ```bash
        npm start
        ```

5.  **Abre tu navegador:**
    Visita `http://localhost:3000` para ver el blog en acción.

## 📂 Estructura del Proyecto

```
/
├── public/
│   ├── css/
│   │   └── style.css      # Estilos principales
│   └── js/
│       └── main.js        # Scripts del lado del cliente
├── routes/
│   └── posts.js           # Lógica para las rutas de los posts
├── views/
│   ├── partials/          # Partes reutilizables (header, footer)
│   └── posts/             # Vistas EJS para los posts (index, show, new, edit)
├── .gitignore
├── package.json
├── server.js              # Archivo principal del servidor
└── README.md              # ¡Estás aquí!
```

## 🎯 Próximos Pasos

-   [ ] Integración con una base de datos (MongoDB con Mongoose).
-   [ ] Funcionalidad para subir imágenes y videos a los posts.
-   [ ] Sistema de comentarios para los lectores.
-   [ ] Autenticación de usuario para proteger las rutas de administración.
-   [ ] Mejorar el diseño y la interfaz de usuario.
