import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './actions';

const isFetching = handleActions(
  {
    [fetchUserRequest.toString()]: () => true,
    [fetchUserSuccess.toString()]: () => false,
    [fetchUserFailure.toString()]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchUserSuccess.toString()]: (_state, action) => {
      return action.payload;
    }
  },
  []
);

const error = handleActions(
  {
    [fetchUserFailure.toString()]: (_state, action) => {
      return action.payload;
    }
  },
  null
);

export default combineReducers({ isFetching, data, error });
