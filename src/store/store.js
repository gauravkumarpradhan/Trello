import { createStore, combineReducers } from 'redux';
import { boardListReducer } from './reducers/board_list_reducer.js';
export const store = createStore(
    combineReducers({
        boards: boardListReducer
    }),
);
