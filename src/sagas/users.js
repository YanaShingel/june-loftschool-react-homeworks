import { call, put, takeEvery } from 'redux-saga/effects';
import { getTokenOwner, getUserInformation } from 'api';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from 'ducks/users';

function* fetchUserFlow(action) {
  try {
    const response = yield call(getTokenOwner);
    yield put(fetchUserSuccess(response));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeEvery(fetchUserRequest.toString(), fetchUserFlow);
}
