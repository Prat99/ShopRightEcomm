import { Dispatch } from "react";
export const loggerMiddleware =
  (store: any) => (next: Dispatch<any>) => (action: any) => {
    console.log("loggerMiddleware ==>", action);
    let result = next(action);
    // console.log("next state", store.getState());
    //  console.log("logger middleware result", result);
    return result;
  };
