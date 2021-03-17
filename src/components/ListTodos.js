import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  deleteItem,
  updateItem,
  updateCurrentTodo,
} from "../Redux/Actions/addTodoAction";
import { fetchItems } from "../Redux/Actions/signInAction";
import "./ListTodos.css";

function ListTodos({
  fetchTodo,
  deleteItem,
  fetchItems,
  updateItem,

}) {
  const [userData] = useState(JSON.parse(localStorage.getItem("userData")));
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    dispatch(updateCurrentTodo(e.target.value));
  };

  return (
    <div className="todo-container">
      {fetchTodo && fetchTodo.length
        ? fetchTodo.map((item, index) => {
            return (
              <div className="list" key={`${index}${item.key}`}>
                <span>{item.text}</span>
                <p>
                  <input
                    type="text"
                    id={item.key}
                    className="color"
                    value={item.text}
                    onChange={(e) => {}}
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
                  <i className="fa fa-check style" onClick={() => {}}></i>
                  <i
                    className="fa fa-pencil style"
                    onClick={handleChange}
                  ></i>
                </p>
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
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(ListTodos);
