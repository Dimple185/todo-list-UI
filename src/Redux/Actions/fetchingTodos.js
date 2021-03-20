<<<<<<< HEAD
import { FETCHING_TODOS, UPDATE_TODO_MODE, UPDATE_TODOS, CHECK_TODO } from "../types/actionTypes";
import axios from 'axios';
=======
import { FETCHING_TODOS } from "../types/actionTypes";
>>>>>>> 69a9addcf8df5a605da8890a9201de3c67009920

export const fetchTodo = (userId) => {
  return (dispatch) => {
    dispatch({ type: FETCHING_TODOS, payload: userId });
  };
};

export const fetchItems = (userId) => {
<<<<<<< HEAD
  //   const userId = JSON.parse(localStorage.getItem("userData"))?.user?._id;
=======
//   const userId = JSON.parse(localStorage.getItem("userData"))?.user?._id;
>>>>>>> 69a9addcf8df5a605da8890a9201de3c67009920
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
<<<<<<< HEAD

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
=======
>>>>>>> 69a9addcf8df5a605da8890a9201de3c67009920
