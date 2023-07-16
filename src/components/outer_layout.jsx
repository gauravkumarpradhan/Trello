import React from 'react'
import { inputPlaceholderObj, layoutTypeObj, titleObj } from '../constants';
import Cards from './cards';
import '../styles/outer_layout_styles.css';
import { useDispatch } from 'react-redux';
import { addNewBoard, addTaskToStage } from '../store/actions/actions';

const OuterLayout = (props) => {
    console.log("Porps", props);

    const { title, list, layoutType } = props;
    const dispatch = useDispatch();

    const addNewCards = (info) => {
        dispatch(addTaskToStage(info, title));
    }

    const handleOnDrop = (e) => {
        const droppedItem = e.dataTransfer.getData("drag-item");
        addNewCards(droppedItem);
    }

    const handleOnDropOver = (e) => {
        e.preventDefault();
    };

    const createCardsManually = (e) => {
        if (e.key == 'Enter') {

            if (layoutType == layoutTypeObj.STAGE) {
                addNewCards(e.target.value, title);
            }

            else {
                dispatch(addNewBoard(e.target.value));
            }

            e.target.value = "";
        }
    }

    return (
        <div
            className="main_container"
            onDrop={handleOnDrop}
            onDragOver={handleOnDropOver}
            onKeyDown={createCardsManually}
        >
            <div className='layout_title'>
                {title}
            </div>

            <div className='list_section'>
                {
                    list.map((listElement, index) => {
                        const titleType = titleObj[layoutType];

                        return (
                            <Cards key={index} cardTitle={listElement[titleType]} cardIndex={index} layoutType={layoutType} />
                        );
                    })
                }
            </div>

            <div>
                <input type="text" placeholder={inputPlaceholderObj[layoutType]} className='input_box' />
            </div>

        </div>
    );
};

export default OuterLayout;