import {
  FETCHING_TODOS,
  FETCHING_TODOS_SUCCESS,
  UPDATE_TODO_MODE,
  UPDATE_TODOS,
  CHECK_TODO
} from "../types/actionTypes";

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
    case UPDATE_TODO_MODE:
      const todoList = [...state.todoList];
      const currentTodo = todoList[action.payload];
      currentTodo.isActive = true;
      todoList[action.payload] = currentTodo;
      return {
        ...state,
        todoList: todoList,
      };
      case UPDATE_TODOS:
        const updateTodo = action.payload.text 
        const updateTodoList = [...state.todoList]; 
        updateTodoList[action.payload.index].text = updateTodo
        return {
          ...state,
          todoList: updateTodoList,
        };
        case CHECK_TODO:
          const checkTodo = action.payload.text;
          const checkTodoList = [...state.todoList];
          checkTodoList[action.payload.key].text = checkTodo;
          return{
            ...state,
            checkTodoList: checkTodoList
          }
    default:
      return state;
  }
};

export default fetchReducer;
