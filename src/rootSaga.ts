import { all } from "redux-saga/effects";
import { productsSaga } from "./sagas/ProductsSaga";

export function* rootSaga() {
  yield all([productsSaga()]);
}
