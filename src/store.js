import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { todos, requestRobots, searchRobots, requestRobotDetail } from './reducers/reducers.js';

const reducers = {
    todos,
    requestRobots,
    searchRobots,
    requestRobotDetail
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, applyMiddleware(thunkMiddleware));