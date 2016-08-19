import {combineReducers} from 'redux';

const loggedIn = (state = false, action)=> {
  switch (action.type) {
    case 'LOGGED_IN':
      return true;
  }
  return state;
};


const rootReducer = combineReducers({
  loggedIn
});

export default rootReducer;