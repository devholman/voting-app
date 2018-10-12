import React from 'react';

const Card = props => { 
    return (
        <div key={props.id}>
            <span>{props.id}</span>
            <a>
                <img alt="costumepic" src={`https://robohash.org/${props.id}?200x200`} />
                <h2>Costume:{props.costume}</h2>
                <p>name: {props.name}</p>
            </a>
        </div>
    )
}

export default Card;