import {
  FETCHING_TODOS_SUCCESS,
  SIGNIN_EMAIL,
  SIGNIN_PASSWORD,
  SIGNIN_SUCCESS,
} from "../types/actionTypes";
import { FETCHING_TODOS } from "../types/actionTypes";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const compareUserEmail = (email) => {
  return (dispatch) => {
    dispatch({ type: SIGNIN_EMAIL, payload: email });
  };
};

export const compareUserPassword = (password) => {
  return (dispatch) => {
    dispatch({ type: SIGNIN_PASSWORD, payload: password });
  };
};

export const signUpUser = (userData) => {
  axios
    .post("http://localhost:8000/api/signup", userData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));
};

export const fetchItems = (userId) => {
  // const userId = JSON.parse(localStorage.getItem("userData"))?.user?._id;
  return (dispatch) => {
    return axios
      .get(`http://localhost:8000/api/todos/${userId}`)
      .then((res) => {
        console.log("data", res.data);
        dispatch({
          type: FETCHING_TODOS,
          payload: res.data.todos,

          userId: userId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const signInUser = (signInData) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:8000/api/signin", signInData)
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data));
        window.location = "/add/todos";
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
