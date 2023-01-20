import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import axios from 'axios';

const Main = (props) => {

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

    return (
        <>
            <Form />
            {loaded && (
                <List products={products}/>
            )}
        </>
        
    )
}

export default Main;