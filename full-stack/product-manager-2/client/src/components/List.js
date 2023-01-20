import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const List = (props) => {
    

    
    return (
        <div>
            <h2>All Products</h2>
            {props.products.map( (product, i) =>
                <div key={i}>
                    <p><Link to={'/product/' + product._id}>Title: {product.title}</Link></p>
                </div>
            )}
        </div>
    )
}
    
export default List;