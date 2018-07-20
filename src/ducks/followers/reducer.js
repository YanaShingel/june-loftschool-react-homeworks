import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './actions';

const data = handleActions(
  {
    [fetchFollowersSuccess.toString()]: (_state, action) => action.payload
  },
  null
);

const error = handleActions(
  {
    [fetchFollowersFailure.toString()]: (_state, action) => action.payload
  },
  null
);

const isFetching = handleActions(
  {
    [fetchFollowersRequest.toString()]: () => false,
    [fetchFollowersSuccess.toString()]: () => true,
    [fetchFollowersFailure.toString()]: () => true
  },
  false
);

export default combineReducers({ data, error, isFetching });
