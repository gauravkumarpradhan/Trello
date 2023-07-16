import React from 'react';
import '../styles/card_styles.css';
import { useDispatch } from 'react-redux';
import { layoutTypeObj } from '../constants';
import { changeBoardView } from '../store/actions/actions';

const Cards = (props) => {

    const { cardTitle, layoutType, cardIndex } = props;
    const dispatch = useDispatch();

    const handleOnDrag = (e) => {
        e.dataTransfer.setData("drag-item", cardTitle);
    }

    const handleClickOnCardsBasedOnType = (type, cardIndex) => {
        switch (type) {
            case layoutTypeObj.BOARD:
                dispatch(changeBoardView(cardIndex));
                break;

            default:
                break;
        }
    }

    return (
        <div
            className='card_container'
            draggable={layoutType != layoutTypeObj.BOARD}
            onDragStart={handleOnDrag}
            onClick={() => handleClickOnCardsBasedOnType(layoutType, cardIndex)}
            style={{ cursor: layoutType == layoutTypeObj.BOARD ? 'pointer' : 'grabbing' }}
        >
            <div>
                {cardTitle}
            </div>

        </div >
    )
};

export default Cards;