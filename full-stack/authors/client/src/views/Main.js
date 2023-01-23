import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = (props) => {

    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/')
            .then(res=>{
                setAuthors(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/new">Add an author</Link>

            <h3>We have quotes by:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={"edit/" + item._id}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={()=>{deleteAuthor(item._id)}}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        
    )
}

export default Main;