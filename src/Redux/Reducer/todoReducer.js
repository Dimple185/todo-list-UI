import {
  ADD_TODOS,
  DELETE_TODOS,
  ADD_TODOS_SUCCESS,
  DELETE_TODOS_SUCCESS,
  UPDATE_TODOS,
} from "../types/actionTypes";

const initialState = {
  currentTodo: {
    text: "",
    key: "",
    userId: "",
    isActive: false,
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      const currentTodo = {
        text: action.payload,
        key: Date.now(),
        userId: "",
      };
      return {
        ...state,
        currentTodo: currentTodo,
      };
    case DELETE_TODOS:
      const deleteTodo = action.payload;
      return {
        ...state,
        deleteTodo: deleteTodo,
      };
    case ADD_TODOS_SUCCESS:
      const currentTodoAdd = {
        text: action.payload,
        key: Date.now(),
        userId: "",
      };
      return {
        ...state,
        currentTodo: currentTodoAdd,
      };
    case DELETE_TODOS_SUCCESS:
      return {
        ...state,
        deleteTodo: deleteTodo,
      };
    // case UPDATE_TODOS:
    //   const updateTodo = action.payload.text 
    //   const todoList = [...state.todoList]; 
    //   todoList[action.payload.index].text = updateTodo
    //   return {
    //     ...state,
    //     todoList: todoList,
    //   };
    default:
      return state;
  }
};

export default todoReducer;
