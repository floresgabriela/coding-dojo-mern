const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/', ProductController.index);
    app.post('/product', ProductController.createProduct);
}