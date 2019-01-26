import React from 'react';
import './NameCards.css';

const NameCards = (props) => {
    const names = props.names.split('\n').map((name, index) => {
        return (<div className="card" key={index}>
        
        <div className="cards-greeting"><h2>{props.greeting}</h2></div> 
        <div className="cards-name"><h3>{name}</h3></div>
        
        
        </div>)
    });
    return(
        <div className="name-cards">
            {props.showCard? names : <h3>Generate name cards using the form above</h3>}
        </div>
    );
};

export default NameCards;