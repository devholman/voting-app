import React from 'react';
import Card from './card';

const CardList = ({contestants}) => { 
    const cardsArray = contestants.map( contestant => {
        return <Card id={contestant.id} name={contestant.name} costume={contestant.costume}/>
    })
    return (
        <div>{cardsArray}</div>
    )

}
export default CardList;