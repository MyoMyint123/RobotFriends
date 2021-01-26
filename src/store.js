import { createStore, combineReducers } from 'redux';
import { todolist } from './reducers/reducers.js';

const reducers = {
    todolist,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);