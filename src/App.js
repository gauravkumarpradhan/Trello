import React from 'react';
import './styles/app_styles.css';
import BoardsList from './partials/boards_list';
import StagesSection from './partials/stages_section.jsx';

const App = () => {

    return (
        <div className='main_section'>
            <div className='main-title'>
                Taco's Tacos
            </div>
            <div className='sub_section'>
                <BoardsList />
                <StagesSection />
            </div>

        </div>
    );
};

export default App;
