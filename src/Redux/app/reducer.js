import * as ele from "./actionTypes";

const initialState = {
  ticket: [],
  isError: false,
  isLoading: false,
};

export const reducer = (oldState = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ele.GET_TICKET_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case ele.GET_TICKET_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        ticket: payload,
      };
    case ele.GET_TICKET_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        ticket: [],
        isError: true,
      };
    default:
      return oldState;
  }
};
