// import * as ele from './actionTypes'

const initialState = {
  isAuth: false,
  isError: false,
  isAuthLoading: false,
  isToken: "",
};

export const reducer = (oldState = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    default:
      return oldState;
  }
};
