const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory "database"
let posts = [
    {
        id: uuidv4(),
        title: 'Mi primer día en el Camino del Código',
        date: new Date().toISOString(),
        content: '¡Hola a todos! Bienvenidos a mi nuevo blog, "El Camino del Código". Hoy marca el inicio de mi viaje como desarrollador full-stack autodidacta, y he decidido documentar todo el proceso aquí para compartir mis experiencias, desafíos y logros.'
    },
    {
        id: uuidv4(),
        title: 'Aprendiendo sobre Node.js y Express',
        date: new Date().toISOString(),
        content: 'Hoy he estado trabajando en la construcción del backend de mi blog. Usar Node.js y Express es un desafío emocionante. He aprendido sobre rutas, middleware y cómo servir archivos estáticos. ¡Poco a poco va tomando forma!'
    }
];

// INDEX - Display all posts
router.get('/', (req, res) => {
    res.render('posts/index', { posts: posts });
});

// NEW - Show form to create a new post
router.get('/new', (req, res) => {
    res.render('posts/new');
});

// CREATE - Handle form submission for new post
router.post('/', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: uuidv4(),
        title: title,
        content: content,
        date: new Date().toISOString()
    };
    posts.unshift(newPost); // Add to the beginning of the array
    res.redirect('/posts');
});

// SHOW - Display a specific post
router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (post) {
        res.render('posts/show', { post: post });
    } else {
        res.status(404).send('Post no encontrado');
    }
});

// EDIT - Show form to edit a post
router.get('/:id/edit', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (post) {
        res.render('posts/edit', { post: post });
    } else {
        res.status(404).send('Post no encontrado');
    }
});

// UPDATE - Handle form submission for editing a post
router.put('/:id', (req, res) => {
    const { title, content } = req.body;
    const post = posts.find(p => p.id === req.params.id);
    if (post) {
        post.title = title;
        post.content = content;
        res.redirect(`/posts/${post.id}`);
    } else {
        res.status(404).send('Post no encontrado');
    }
});

// DESTROY - Delete a specific post
router.delete('/:id', (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect('/posts');
});

module.exports = router;
