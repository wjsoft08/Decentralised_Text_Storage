
import { takeLatest, put } from "redux-saga/effects";
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* toggleSaveAsync(action) {

  let hash = ""
  console.log(action.text.text)
  yield ipfs.add(action.text.text, (error, result) => {
    if(error) {
      console.error(error)
      return
    }
    console.log(result)
    console.log("https://ipfs.infura.io/ipfs/"+result)
    console.log(result)
    hash = result;
  })
  yield put({ type: "TOGGLE_SAVE_ASYNC", id: action.id, hash: hash });
}

export function* watchAgeUp() {
  yield takeLatest("TOGGLE_SAVE_UP", toggleSaveAsync);
}
