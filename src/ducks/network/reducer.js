import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { networkError, clearNetworkErrors } from './actions';

const error = handleActions(
  {
    [clearNetworkErrors.toString()]: () => false
  },
  false
);

const message = handleActions(
  {
    [networkError.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({ error, message });
