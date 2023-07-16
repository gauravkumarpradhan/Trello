import { boardList } from "./dummy_db.js";

export const getBoardList = () => {
    return boardList;
};

export const getDefaultObjectForBoardList = (boardTitle) => {
    return {
        boardTitle: boardTitle,
        boardStages: {
            todo: [],
            doing: [],
            done: [],
        }
    }
}

