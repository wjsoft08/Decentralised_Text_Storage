
import { takeLatest, put } from "redux-saga/effects";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* toggleSaveAsync(action) {
  yield delay(1000);
  yield put({ type: "TOGGLE_SAVE_ASYNC", id: action.id });
}

export function* watchAgeUp() {
  yield takeLatest("TOGGLE_SAVE_UP", toggleSaveAsync);
}
