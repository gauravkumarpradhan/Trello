import React from 'react';
import './styles/app_styles.css';
import BoardsList from './partials/boards_list';
import StagesSection from './partials/stages_section.jsx';

const App = () => {

    return (
        <div className='main_section'>
            <BoardsList />
            <StagesSection />
        </div>
    );
};

export default App;
