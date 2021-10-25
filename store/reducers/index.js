import articleReducer from './articleReducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
    article: articleReducer
});