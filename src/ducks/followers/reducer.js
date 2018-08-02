import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './actions';

const data = handleActions(
  {
    [fetchFollowersRequest.toString()]: () => [],
    [fetchFollowersSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [fetchFollowersFailure.toString()]: (_state, action) => action.payload
  },
  null
);

const isFetching = handleActions(
  {
    [fetchFollowersRequest.toString()]: () => true,
    [fetchFollowersSuccess.toString()]: () => false,
    [fetchFollowersFailure.toString()]: () => false
  },
  false
);

export default combineReducers({ data, error, isFetching });
