import {combineReducers} from 'redux';

const loggedIn = (state = true, action)=> {
  return state;
};

const rootReducer = combineReducers({
  loggedIn
});

export default rootReducer;