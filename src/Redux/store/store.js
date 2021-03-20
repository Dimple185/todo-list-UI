import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import users from "../Reducer/reducers";

import SignInReducer from "../Reducer/SignInReducer";

import todoReducer from "../Reducer/todoReducer";

import logger from "redux-logger";
import fetchReducer from "../Reducer/fetchReducer";

const rootReducer = combineReducers({
  user: users,
  signIn: SignInReducer,
  currentTodo: todoReducer,
  fetchTodo: fetchReducer,
});

const middleware = [thunk, logger];
const initialState = {};

const configureStore = () => {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
 };

export default configureStore;
