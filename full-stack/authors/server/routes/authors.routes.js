const AuthorController = require('../controllers/authors.controller');

module.exports = function(app){
    app.get('/', AuthorController.getAllAuthors);
    app.post('/new', AuthorController.createAuthor);
    app.get('/author/:id', AuthorController.getAuthor);
    app.put('/edit/:id', AuthorController.updateAuthor);
    app.delete('/author/:id', AuthorController.deleteAuthor);
}