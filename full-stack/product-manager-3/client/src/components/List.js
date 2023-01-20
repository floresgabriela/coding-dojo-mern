import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
    
const List = (props) => {
    
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h2>All Products</h2>
            {props.products.map( (product, i) =>
                <div key={i}>
                    <p>
                        <Link to={'/product/' + product._id}>Title: {product.title}</Link>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
                    </p>
                </div>
            )}
        </div>
    )
}
    
export default List;