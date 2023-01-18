import React, { Component } from 'react';

const PersonCard  = ({ firstName, lastName, age, hairColor }) => {

        // const { firstName, lastName, hairColor } = this.props;

    return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.birthday}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => {this.setState( {birthday: this.state.birthday + 1} )}}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }

export default PersonCard;