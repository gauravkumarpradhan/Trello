import { reducerObj } from "../../constants"

export const fetchBoardsList = () => {
    return {
        type: reducerObj.FETCH_BOARD_LIST
    }
}