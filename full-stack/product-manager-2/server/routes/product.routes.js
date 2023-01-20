const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/products', ProductController.getAllProducts);
    app.get('/product/:id', ProductController.getProduct);
    app.post('/product', ProductController.createProduct);
}