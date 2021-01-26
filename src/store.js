import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { todos, requestRobots, searchRobots } from './reducers/reducers.js';

const reducers = {
    todos,
    requestRobots,
    searchRobots,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, applyMiddleware(thunkMiddleware));