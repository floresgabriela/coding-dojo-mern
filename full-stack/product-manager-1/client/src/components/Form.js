import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/product', {
            title,
            price,
            description
        })
            .then(res => console.log("Repsonse: ", res))
            .catch(err => console.log("Error: ", err))
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Product Manager</h1>
                <p>
                    <label>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}/>
                </p>

                <p>
                    <label>Price</label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)}/>
                </p>

                <p>
                    <label>Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)}/>
                </p>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default Form;