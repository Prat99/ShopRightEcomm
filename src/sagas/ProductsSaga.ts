import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getProductsListFailure,
  getProductsListSuccess,
} from "../reducers/productsSlice";

// Worker saga will be fired on USER_FETCH_REQUESTED actions

async function fetchProductsApi() {
  // const  fetch("https://fakestoreapi.com/products")
  //   .then((response) => ({ response: response.json() }))
  //   .catch((error) => ({ error }));
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log("data ==>", data);
  return data;
}

function* fetchProducts({ payload }: any): any {
  try {
    const data = yield call(fetchProductsApi);
    yield put(getProductsListSuccess([...data]));
  } catch (e) {
    yield put(getProductsListFailure({ data: e }));
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* productsSaga() {
  yield takeEvery("products/getProducts", fetchProducts);
}
