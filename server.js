const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing request body
app.use(express.urlencoded({ extended: true }));

const methodOverride = require('method-override');
const postRouter = require('./routes/posts');

// Middleware for method override
app.use(methodOverride('_method'));

// Routes
app.use('/posts', postRouter);

// Redirect root to posts index
app.get('/', (req, res) => {
    res.redirect('/posts');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
