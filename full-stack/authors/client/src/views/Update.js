import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Update = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/author/' +id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.error(err));
    }, [id]);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/edit/' + id, {
            name
        })
            .then(res => {
                console.log(res)
                setAuthors(...authors);
                setName('');
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <h3>Edit this author:</h3>
            <form onSubmit={ updateAuthor }>
                {errors.map((err, i) => <p key={i}>{err}</p>)}

                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Update;