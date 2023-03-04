import * as ele from "./actionTypes";
import axios from "axios";
//GET Tickets

export const getTickets = (token,user,order) => (dispatch) => {
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
