const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/product', ProductController.createProduct);
    app.get('/products', ProductController.getAllProducts);
    app.get('/product/:id', ProductController.getProduct);
    app.put('/product/:id', ProductController.updateProduct);
    app.delete('/product/:id', ProductController.deleteProduct);
}