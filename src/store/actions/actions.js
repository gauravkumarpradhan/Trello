import { reducerObj } from "../../constants";

export const fetchBoardsList = () => {
    return {
        type: reducerObj.FETCH_BOARD_LIST
    };
};

export const addTaskToStage = (droppedItem, stageName) => {
    return {
        type: reducerObj.ADD_TASK_TO_STAGE,
        payload: { cardTitle: droppedItem, stageName },
    };
};

export const changeBoardView = (index) => {
    return {
        type: reducerObj.CHANGE_STAGE_VIEW,
        payload: index
    };
};

export const addNewBoard = (newBoardTitle) => {
    return {
        type: reducerObj.ADD_BOARDS,
        payload: newBoardTitle
    };
};