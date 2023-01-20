import axios from 'axios';
import React, { useState, useEffect } from 'react';
import List from './List';

const Form = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/product', {
            title,
            price,
            description
        })
            .then(res => {
                console.log("Response: ", res)
                setProducts([...products, res.data])
                setTitle('')
                setPrice('')
                setDescription('')
            })
            .catch(err => console.log("Error: ", err))
    }

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Product Manager</h1>
                <p>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </p>

                <p>
                    <label>Price</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </p>

                <p>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </p>

                <button type="submit">Create</button>
            </form>
            <hr />

                {loaded && (
                    <List products={products} removeFromDom={removeFromDom}/>
                )}
        </div>
    );
}

export default Form;