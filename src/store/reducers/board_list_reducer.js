import { mapStageTitlesWithfields, reducerObj } from "../../constants";
import { getBoardList, getDefaultObjectForBoardList } from "../../utils";

export const boardListReducer = (state = { boardsList: [], selectedBoardIndex: 0 }, action) => {
    switch (action.type) {
        case reducerObj.FETCH_BOARD_LIST:
            return { ...state, boardsList: getBoardList() };

        case reducerObj.ADD_TASK_TO_STAGE:
            let newBoardsList = state.boardsList.map((board, index) => {
                if (index == state.selectedBoardIndex) {
                    board.boardStages[mapStageTitlesWithfields[action.payload.stageName]].push({ taskTitle: action.payload.cardTitle });
                }
                return board;
            });
            return { ...state, boardsList: newBoardsList };

        case reducerObj.ADD_BOARDS:
            return { ...state, boardsList: [...state.boardsList, getDefaultObjectForBoardList(action.payload)] };

        case reducerObj.CHANGE_STAGE_VIEW:
            return { ...state, selectedBoardIndex: action.payload };

        default:
            return state;
    }
};