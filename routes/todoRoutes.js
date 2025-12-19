const express = require('express');
const router = express.Router();

module.exports = (todos) => {

    // Home route
    router.get('/', (req, res) => {
        res.render('index', { todos });
    });

    // Add Todo page
    router.get('/add', (req, res) => {
        res.render('pages/addtodo');
    });

    // Add Todo POST
    router.post('/add', (req, res) => {
        const { title, description, category, status } = req.body;
        todos.push({ title, description, category, status });
        res.redirect('/');
    });

    // Edit Todo page
    router.get('/edit/:id', (req, res) => {
        const id = req.params.id;
        const todo = todos[id];
        if (!todo) return res.redirect('/');
        res.render('pages/edittodo', { todo, id });
    });

    // Update Todo POST
    router.post('/edit/:id', (req, res) => {
        const id = req.params.id;
        const { title, description, category, status } = req.body;
        todos[id] = { title, description, category, status };
        res.redirect('/');
    });

    // Delete Todo
    router.get('/delete/:id', (req, res) => {
        const id = req.params.id;
        todos.splice(id, 1);
        res.redirect('/');
    });

    return router;
};
