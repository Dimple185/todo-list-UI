import { FETCHING_TODOS, UPDATE_TODO_MODE, UPDATE_TODOS, CHECK_TODO } from "../types/actionTypes";
import axios from 'axios';

export const fetchTodo = (userId) => {
  return (dispatch) => {
    dispatch({ type: FETCHING_TODOS, payload: userId });
  };
};

export const fetchItems = (userId) => {
  //   const userId = JSON.parse(localStorage.getItem("userData"))?.user?._id;
  return (dispatch) => {
    return axios
      .get(`http://localhost:8000/api/todos/${userId}`)
      .then((res) => {
        dispatch({
          type: FETCHING_TODOS,
          payload: res.data.todos,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateCurrentTodo = (currentTodoIndex) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_TODO_MODE, payload: currentTodoIndex });
  };
};

export const updateTodo = (currentTodo) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_TODOS, payload: currentTodo });
  };
};

export const checkTodo = (currentUpdatedItem) => {
  return(dispatch) => {
    dispatch({type: CHECK_TODO, payload: currentUpdatedItem})
  }
}

export const checkItem = (checkTodo) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:8000/api/todos/update`,checkTodo)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: CHECK_TODO,
          payload: res.data,
        });
      });
  };
};