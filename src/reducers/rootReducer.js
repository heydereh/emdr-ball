import { combineReducers } from 'redux';
import ballReducer from './ballReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
    ballEffects: ballReducer,
    currentSession: sessionReducer,
});

export default rootReducer;