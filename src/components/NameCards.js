import React from 'react';
import './NameCards.css';

const NameCards = (props) => {
    const names = props.names.split('\n').map((name, index) => {
        return (<div className="card" key={index}>
        
        <div>{props.greeting}</div> 
        <div>{name}</div>
        
        
        </div>)
    });
    return(
        <div className="name-cards">
            {props.showCard? names : <p>Generate name cards using the form above</p>}
        </div>
    );
};

export default NameCards;