import React from 'react';
import { useParams } from 'react-router-dom';

const Input = (props) => {

    const { url } = useParams();


    return (
        <h1>{ url }</h1>
    );

}

export default Input;