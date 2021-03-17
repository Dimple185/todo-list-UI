import React, { useState, useEffect } from "react";
import "../components/TodosForm.css";
import { useDispatch } from "react-redux";
import { addItem, addTodo } from "../Redux/Actions/addTodoAction";
import { connect } from "react-redux";
import ListTodos from "./ListTodos";
import { fetchItems } from "../Redux/Actions/signInAction";
import Header from "./Header";

function TodosForm({ currentTodo }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [userData] = useState(JSON.parse(localStorage.getItem("userData")));

  const handleAddButton = (e) => {
    e.preventDefault();
    currentTodo["userId"] = JSON.parse(
      localStorage.getItem("userData")
    )?.user?.email;
    dispatch(addItem(currentTodo));
    setTimeout(() => {
      dispatch(fetchItems(userData?.user?.email));
      setInputValue("");
    }, 100);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    dispatch(addTodo(event.target.value));
  };

  // useEffect(() => {
  //   dispatch(fetchItems(userData?.user?.email));
  // }, []);

  return (
    <div className="App">
      <Header />
      <form id="to-do-list" onSubmit={handleAddButton}>
        {" "}
        <header>
          <input
            type="text"
            placeholder="Enter Text"
            value={inputValue}
            onChange={handleInputChange}
          ></input>
          <button type="submit">Add</button>
        </header>
        <ListTodos />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentTodo: state.currentTodo.currentTodo,
});

export default connect(mapStateToProps, {})(TodosForm);
