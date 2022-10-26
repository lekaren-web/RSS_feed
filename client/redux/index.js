import { combineReducers } from 'redux';
import feedsReducer from './feeds';

const appReducer = combineReducers({
  feeds: feedsReducer,
});

export default appReducer;