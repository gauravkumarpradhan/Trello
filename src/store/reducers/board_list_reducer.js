import { reducerObj } from "../../constants";
import { getBoardList } from "../../utils";

export const boardListReducer = (state = { boardsList: [], selectedBoardIndex: 0 }, action) => {
    switch (action.type) {
        case reducerObj.FETCH_BOARD_LIST:
            return { ...state, boardsList: getBoardList() };

        default:
            return state;
    }
};