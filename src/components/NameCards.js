import React from 'react';
import './NameCards.css';

const NameCards = (props) => {
    const names = props.names.split('\n').map((name, index) => {
        return <div className="name-card" key={index}>{props.greeting}, {name}!</div>
    });
    return(
        <div className="all-cards">
            {props.showCard? names : <p>Generate name cards using the form above</p>}
        </div>
    );
};

export default NameCards;