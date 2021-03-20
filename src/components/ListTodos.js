import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { deleteItem } from "../Redux/Actions/addTodoAction";
import { fetchItems } from "../Redux/Actions/signInAction";
import {
  updateCurrentTodo,
  updateTodo,
  checkItem,
} from "../Redux/Actions/fetchingTodos";

import "./ListTodos.css";

function ListTodos({ fetchTodo, deleteItem, fetchItems, checkItem}) {
  const [userData] = useState(JSON.parse(localStorage.getItem("userData")));
  const dispatch = useDispatch();

  return (
    <div className="todo-container">
      {fetchTodo && fetchTodo.length
        ? fetchTodo.map((item, index) => {
            return (
              <div className="" key={`${index}${item.key}`}>
                {item && item.isActive ? (
                  <div>
                    <input
                      type="text list"
                      id={item.key}
                      className="color list"
                      value={item.text}
                      onChange={(e) => {
                        dispatch(
                          updateTodo({ text: e.target.value, index: index })
                        );
                      }}
                    ></input>
                    <i
                      className=" fa fa-trash style"
                      onClick={() => {
                        deleteItem(item._id);
                        setTimeout(() => {
                          fetchItems(userData?.user?.email);
                        }, 100);
                      }}
                    ></i>
                    <i
                      className="fa fa-check style"
                      onClick={() => {
                        checkItem(item.key, item.text);
                        setTimeout(() => {
                          fetchItems(userData?.user?.email);
                        }, 100);
                      }}
                    ></i>
                    <i
                      className="fa fa-pencil style"
                      onClick={() => {
                        dispatch(updateCurrentTodo(index));
                      }}
                    ></i>
                  </div>
                ) : (
                  <div>
                    <span className="list">{item.text}</span>
                    <i
                      className=" fa fa-trash style"
                      onClick={() => {
                        deleteItem(item._id);
                        setTimeout(() => {
                          fetchItems(userData?.user?.email);
                        }, 100);
                      }}
                    ></i>
                    <i className="fa fa-check style" onClick={() => {}}></i>
                    <i
                      className="fa fa-pencil style"
                      onClick={() => {
                        dispatch(updateCurrentTodo(index));
                      }}
                    ></i>
                  </div>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  fetchTodo: state.fetchTodo.todoList,
});

const mapDispatchtoProps = (dispatch) => {
  return {
    deleteItem: (e) => dispatch(deleteItem(e)),
    fetchItems: (e) => dispatch(fetchItems(e)),
    checkItem: (e) => dispatch(checkItem(e)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(ListTodos);
