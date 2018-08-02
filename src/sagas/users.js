import { call, put, takeEvery } from 'redux-saga/effects';
import { getTokenOwner } from 'api';
import {
  fetchUserRequest,
  fetchUserSuccess
  // fetchUserFailure
} from 'ducks/users';
import { networkError } from 'ducks/network';

function* fetchUserFlow(action) {
  try {
    const response = yield call(getTokenOwner);
    yield put(fetchUserSuccess(response));
  } catch (error) {
    yield put(networkError(error));
  }
}

export function* fetchUserWatch() {
  yield takeEvery(fetchUserRequest.toString(), fetchUserFlow);
}
