import {
  ADD_TODOS,
  ADD_TODOS_SUCCESS,
  DELETE_TODOS,
  DELETE_TODOS_SUCCESS,
  UPDATE_TODOS,
  UPDATE_TODOS_SUCCESS,
  UPDATE_TODO_MODE,
} from "../types/actionTypes";
import axios from "axios";
import { FETCHING_TODOS } from "../types/actionTypes";
import TodosForm from "../../components/TodosForm";
import ListTodos from "../../components/ListTodos";

export const addTodo = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_TODOS, payload: data });
  };
};

export const deleteTodo = (userId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_TODOS, payload: userId });
  };
};


export const updateCurrentTodo = (currentTodoId) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_TODO_MODE, payload: currentTodoId });
  };
};

export const updateTodo = (text) => {
  return (dispatch) => {
    dispatch({type: UPDATE_TODOS, payload: text})
  }
}

export const addItem = (currentTodo) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:8000/api/todos/add", currentTodo)
      .then((res) => {
        if (res.data?.error) {
          window.alert(res.data.error);
        } else {
          dispatch({
            type: ADD_TODOS_SUCCESS,
            payload: currentTodo,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteItem = (id) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:8000/api/todos/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: DELETE_TODOS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const checkItem = (currentTodo) => {
  return (dispatch) => {
    return axios.put(`http://localhost:8000/api/todos/update`,currentTodo).then((res) => {
      console.log(res.data);
      dispatch({
        type: UPDATE_TODOS_SUCCESS,
        payload: res.data,
      });
    });
  };
};
