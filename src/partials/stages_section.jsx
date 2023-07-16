import React from "react";
import OuterLayout from "../components/outer_layout";
import { layoutTypeObj, stagesTitleObj } from "../constants";
import { useSelector } from 'react-redux';
import '../styles/stages_section_styles.css'
import get from 'lodash/get';

const StagesSection = () => {
    const selectedBoardIndex = useSelector(state => state.boards.selectedBoardIndex);
    const data = useSelector(state => state.boards.boardsList);
    const todoStage = get(data[selectedBoardIndex], 'boardStages.todo', []);
    const doingStage = get(data[selectedBoardIndex], 'boardStages.doing', []);
    const doneStage = get(data[selectedBoardIndex], 'boardStages.done', []);

    return (
        <div className="stages_section">
            <OuterLayout layoutType={layoutTypeObj.STAGE} list={todoStage} title={stagesTitleObj.TODO} />
            <OuterLayout layoutType={layoutTypeObj.STAGE} list={doingStage} title={stagesTitleObj.DOING} />
            <OuterLayout layoutType={layoutTypeObj.STAGE} list={doneStage} title={stagesTitleObj.DONE} />
        </div>
    )
}
export default StagesSection;