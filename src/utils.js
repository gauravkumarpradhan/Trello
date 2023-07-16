import { boardList } from "./dummy";

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

