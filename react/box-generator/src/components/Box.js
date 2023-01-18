import React, { useState } from 'react';

const Box= () => {

    const [color, setColor] = useState('');
    const [box, setBox] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const boxStyle = {
            backgroundColor: color,
            margin: '0 10px',
            height: '50px',
            width:'50px',
            display:'inline-block'
        }

        setBox([...box, boxStyle]);
        setColor('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={ color } onChange={ (e) => setColor(e.target.value) }/>
                <button type='submit'>Add</button>
            </form>
            <div className='boxes'>
                {
                    box.map((color, i) => (
                        <div key={i} style={color}></div>
                    ))
                }
            </div>
        </div>
    );
};

export default Box;