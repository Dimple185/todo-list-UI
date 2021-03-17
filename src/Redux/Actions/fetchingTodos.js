import { FETCHING_TODOS } from "../types/actionTypes";

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
