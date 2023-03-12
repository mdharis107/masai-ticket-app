import * as ele from "./actionTypes";
import axios from "axios";

//GET Tickets
export const getTickets = (token, user, order) => (dispatch) => {
  dispatch({ type: ele.GET_TICKET_REQUEST });
  return axios
    .get(`http://localhost:8080/tickets/${user}?sort=createdAt,${order}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: ele.GET_TICKET_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ele.GET_TICKET_FAILURE, payload: err });
    });
};

//POST TICKETS
export const postTickets = (token, payload) => (dispatch) => {
  // console.log(payload)
  dispatch({ type: ele.POST_TICKETS_REQUEST });
  return axios
    .post("http://localhost:8080/tickets/addTicket", payload, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      // console.log(res);
      return dispatch({ type: ele.POST_TICKETS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: ele.POST_TICKETS_FAILURE, payload: err });
    });
};

//POST BOOKMARK
export const postBookmark = (token, payload) => (dispatch) => {
  // console.log(payload)
  dispatch({ type: ele.POST_BOOKMARK_REQUEST });
  return axios
    .post("http://localhost:8080/bookmarks/addBookmark", payload, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      // console.log(res);
      return dispatch({ type: ele.POST_BOOKMARK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: ele.POST_BOOKMARK_FAILURE, payload: err });
    });
};

//GET BOOKMARK
export const getBookmark = (token, user) => (dispatch) => {
  dispatch({ type: ele.GET_BOOKMARK_REQUEST });
  return axios
    .get(`http://localhost:8080/bookmarks/${user}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: ele.GET_BOOKMARK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ele.GET_BOOKMARK_FAILURE, payload: err });
    });
};

// REMOVE BOOKMARK
export const deleteBookmark = (token, id) => (dispatch) => {
  dispatch({ type: ele.DELETE_BOOKMARK_REQUEST });
  return axios
    .delete(`http://localhost:8080/bookmarks/remove/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      return dispatch({ type: ele.DELETE_BOOKMARK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: ele.DELETE_BOOKMARK_FAILURE, payload: err });
    });
};
