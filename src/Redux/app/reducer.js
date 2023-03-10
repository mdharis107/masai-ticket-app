import * as ele from "./actionTypes";

const initialState = {
  ticket: [],
  isError: false,
  isLoading: false,
  bookmarks: [],
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
    case ele.GET_BOOKMARK_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case ele.GET_BOOKMARK_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        bookmarks: payload,
        isError: false,
      };
    case ele.GET_BOOKMARK_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        bookmarks: [],
        isError: true,
      };
    default:
      return oldState;
  }
};
