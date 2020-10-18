import {combineReducers } from 'redux';
import programmes from './programmes';

const rootReducer = combineReducers({
    programmes: programmes
});

export default rootReducer;