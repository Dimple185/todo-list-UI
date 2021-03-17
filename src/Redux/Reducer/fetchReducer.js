import { FETCHING_TODOS, FETCHING_TODOS_SUCCESS } from "../types/actionTypes";

const initialState = {
  todoList: [],
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TODOS:
      const fetchTodo = action.payload;
      return {
        ...state,
        todoList: fetchTodo,
      };

    case FETCHING_TODOS_SUCCESS:
      return {
        ...state,
        fetchTodo: fetchTodo,
      };
    default:
      return state;
  }
};

export default fetchReducer;
