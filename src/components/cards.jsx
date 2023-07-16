import React from 'react';
import '../styles/card_styles.css';

const Cards = (props) => {

    const { cardTitle } = props;

    return (
        <div className='card_container'>{cardTitle}</div>
    )
};

export default Cards;