import { call, put, takeEvery } from "redux-saga/effects";
import { dummyData } from "../dummyData";
import {
  getProductsListFailure,
  getProductsListSuccess,
} from "../reducers/productsSlice";

async function fetchProductsApi() {
  // const response = await fetch("https://fakestoreapi.com/products");
  // const data = await response.json();
  // return data;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 2000);
  });
}

function* fetchProducts({ payload }: any): any {
  try {
    const data = yield call(fetchProductsApi);
    yield put(getProductsListSuccess([...data]));
  } catch (e) {
    yield put(getProductsListFailure({ data: e }));
  }
}

export function* productsSaga() {
  yield takeEvery("products/getProducts", fetchProducts);
}
