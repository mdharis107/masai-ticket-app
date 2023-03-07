import * as ele from "./actionTypes";
import axios from "axios";

//GET Tickets
export const getTickets = (token, user, order) => (dispatch) => {
  dispatch({ type: ele.GET_TICKET_REQUEST });
  axios
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
      console.log(res);
     return dispatch({ type: ele.POST_TICKETS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
     return dispatch({ type: ele.POST_TICKETS_FAILURE, payload: err });
    });
};
