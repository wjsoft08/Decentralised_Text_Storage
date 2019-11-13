
import { takeLatest, put } from "redux-saga/effects";
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

function* toggleSaveAsync(action) {

  let hash = "test"
  hash = yield ipfs.add(action.text.text)
  hash = "https://ipfs.infura.io/ipfs/"+hash
  yield put({ type: "TOGGLE_SAVE_ASYNC", id: action.id, hash: hash });
}

export function* watchAgeUp() {
  yield takeLatest("TOGGLE_SAVE_UP", toggleSaveAsync);
}
