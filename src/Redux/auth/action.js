import * as ele from "./actionTypes";
import axios from "axios";

export const signup = (payload) => (dispatch) => {
  // https://masai-ticket-app-backend-production.up.railway.app/user/signup
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

export const login = (payload) => (dispatch) => {
  dispatch({ type: ele.USER_LOGIN_REQUEST });
  return axios
    .post("http://localhost:8080/user/login", payload)
    .then((res) => {
      return dispatch({
        type: ele.USER_LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: ele.USER_LOGIN_FAILURE,
        payload: err,
      });
    });
};

// export const logout = (payload) => (dispatch) => {
//   return dispatch({ type: ele.USER_LOGOUT});
// };
