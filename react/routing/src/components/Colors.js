import React from 'react';
import { useParams } from 'react-router-dom';

const Colors = (props) => {

    const { url, color, bgColor } = useParams();

    const style = {
        color: color,
        backgroundColor: bgColor,
    }

    let num = true;
    if(isNaN(+url)){
        num = false;
    }

    return (
        num ? <h1 style={ style }>The number is: { url }</h1> : <h1 style={ style }>The word is: { url }</h1>
    );

}

export default Colors;