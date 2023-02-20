import * as ele from "./actionTypes";
import axios from "axios";

export const signup = (payload) => (dispatch) => {
  dispatch({ type: ele.USER_SIGNUP_REQUEST });
  return axios
    .post("http://localhost:8080/user/signup", payload)
    .then((res) => {
      return dispatch({
        type: ele.USER_SIGNUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: ele.USER_SIGNUP_FAILURE,
        payload: err,
      });
    });
};
