let todos = [];

exports.getHome = (req, res) => {
    res.render('index', { todos });
};

exports.addTodoPage = (req, res) => {
    res.render('pages/addtodo');
};

exports.addTodo = (req, res) => {
    todos.push(req.body.todo);
    res.redirect('/');
};

exports.editTodoPage = (req, res) => {
    const id = req.params.id;
    res.render('pages/edittodo', { id, oldValue: todos[id] });
};

exports.updateTodo = (req, res) => {
    const id = req.params.id;
    todos[id] = req.body.todo;
    res.redirect('/');
};

exports.deleteTodo = (req, res) => {
    const id = req.params.id;
    todos.splice(id, 1);
    res.redirect('/');
};
