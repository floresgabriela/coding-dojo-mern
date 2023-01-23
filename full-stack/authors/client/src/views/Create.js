import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {

    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]); 

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/new', {
            name
        })
            .then(res => {
                console.log("Response: ", res)
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
            <h3>Add a new author:</h3>
            <form onSubmit={ handleSubmit }>
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

export default Create;