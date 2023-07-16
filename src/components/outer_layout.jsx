import React from 'react'
import { inputPlaceholderObj, layoutTypeObj, titleObj } from '../constants';
import Cards from './cards';
import '../styles/outer_layout_styles.css';

const OuterLayout = (props) => {

    const { title, list, layoutType } = props;

    return (
        <div className="main_container">
            <div className='layout_title'>
                {title}
            </div>
            <div className='list_section'>
                {
                    list.map((listElement, index) => {
                        const titleType = titleObj[layoutType];
                        console.log(titleType)

                        return (
                            <Cards key={index} cardTitle={listElement[titleType]} />
                        );
                    })
                }
            </div>
            {
                layoutType == layoutTypeObj.BOARD &&
                <div>
                    <input type="text" placeholder={inputPlaceholderObj[layoutType]} className='input_box' />
                </div>
            }

        </div>
    );
};

export default OuterLayout;