import { applyMiddleware } from "redux";
import { Tuple, configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../reducers/cartSlice";
import { ProductsSlice } from "../reducers/productsSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../rootSaga";
import { loggerMiddleware } from "../customMiddleware/loggerMiddlware";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, loggerMiddleware];

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    products: ProductsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
