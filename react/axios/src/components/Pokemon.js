import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);

    // const getPokemon = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //       .then(response => {
    //         // not the actual JSON response body but the entire HTTP response
    //         return response.json();
    //     }).then(response => {
    //         // we now run another promise to parse the HTTP response into usable JSON
    //         setPokemon(response.results);
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // }

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{setPokemon(response.data.results)})
    };


    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <ul>
                {
                    pokemon.map((item, i) => {
                        return <li key={i}>{item.name}</li>
                    })
                }
            </ul>
        </div>


    );
}

export default Pokemon;