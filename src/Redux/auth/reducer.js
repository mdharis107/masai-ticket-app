import * as ele from "./actionTypes";

const initialState = {
  isAuth: false,
  isError: false,
  isAuthLoading: false,
  token: "",
};

const reducer = (oldState = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ele.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };
    case ele.USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuth: true,
        token: payload,
      };
    case ele.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isError: true,
        isAuth: false,
        isAuthLoading:false,
        token: "",
      };
    default:
      return oldState;
  }
};

export { reducer };
