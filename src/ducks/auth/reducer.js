import { handleActions } from 'redux-actions';
import { autorize, logout } from './actions';
import { combineReducers } from 'redux';

const isAutorized = handleActions(
  {
    [autorize.toString()]: () => true,
    [logout.toString()]: () => false
  },
  false
);

export default combineReducers({ isAutorized });
