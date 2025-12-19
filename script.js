const express = require('express');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Static files
app.use(express.static(path.join(__dirname, 'assets')));

// Body parser
app.use(express.urlencoded({ extended: true }));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Todos array
let todos = [];

// Routes
app.use('/', todoRoutes(todos));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
